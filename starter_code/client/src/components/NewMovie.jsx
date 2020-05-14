import React, { Component } from 'react';
import Axios from 'axios';

class NewMovie extends Component {
	state = {
		title: '',
		image: ''
	};

	handleChange = (e) => {
		console.log(e.target.value);
		this.setState({
			[e.target.name]: e.target.value
		});
	};

	handleSubmit = (e) => {
		e.preventDefault();

		Axios.post('http://localhost:5000/movies', this.state)
			.then((res) => {
				console.log(res);
			})
			.catch((err) => console.log(err));
	};

	render() {
		return (
			<div className="New">
				<form onSubmit={(e) => this.handleSubmit(e)}>
					<input name="title" type="text" placeholder='Name of Movie'onChange={(e) => this.handleChange(e)} />
					<input name="image" type="text" placeholder= 'Movie Image'onChange={(e) => this.handleChange(e)} />
					<input type="submit" />
				</form>
			</div>
		);
	}
}

export default NewMovie;