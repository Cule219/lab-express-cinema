import React, { Component } from 'react';
import Axios from 'axios'

class NewMovie extends Component {

    state = {
        title: '',
        description: ''
    }

handleChange = (e) => {
    this.setState({
        [e.target.name]: e.target.value,
    })
}

handleSubmit = (e) => {
    e.preventDefault();

    Axios.post('http://localhost:5000/movies', this.state)
        .then((res) => {
            console.log(res)
        })
        .catch((err) => console.log(err))
    
}

    render() {
        return (
            <div>
            <h1>Add New Movie to Database!</h1>
                <form onSubmit={(e)=> this.handleSubmit(e)}>
                    <input type='text' name="title" placeholder='Title' onChange={(e)=> this.handleChange(e)}/>
                    <input type='url' name="description" placeholder='Movie WebPage' onChange={(e)=> this.handleChange(e)}/>
                    <input type="submit" />
                </form>
            </div>
        );
    }
}

export default NewMovie;