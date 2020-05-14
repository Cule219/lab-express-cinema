import React, { Component } from 'react';
import axios from 'axios';

class AddMovie extends Component {
    state = {
        title: '',
        director: '',
        stars: '',
        image: '',
        description: ''
    }


    handleChange = (e) => {
        console.log(this.state)
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = async(e) => {
        // e.preventDefault();

        await axios.post('http://localhost:5000/movies', this.state).then(res =>{
            console.log(res.data, 'poop')
        }) 
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" placeholder="film title" name="title"onChange={this.handleChange} />
                    <input type="text" placeholder="director" name="director" onChange={this.handleChange}/>
                    <input type="text" placeholder="starts" name="stars" onChange={this.handleChange}/>
                    <input type="text" placeholder="image" name="image" onChange={this.handleChange}/>
                    <textarea name="description"></textarea>
                    <input type="submit" value="Submit" />
                </form>
            </div>
        );
    }
}

export default AddMovie;