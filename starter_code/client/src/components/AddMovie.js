import React, { Component } from 'react';
import axios from 'axios';

class AddMovie extends Component {
    state = {
        title: '',
        description: ''
    }

    handleSubmit = (e) => {
        e.preventDefault()
        axios.post(' http://localhost:5000/movies/new', this.state).then(res=>{
            console.log(res.data)
        })
        // Redirect to movie list after you add new title maybe?
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    render() {
        return (
            <form onSubmit={e => this.handleSubmit(e)}>
                <input name="title" type="text" placeholder="title" onChange={e=> this.handleChange(e)}/>
                <input name="description" type="text" placeholder="description" onChange={e=> this.handleChange(e)}/>
                <input type="submit" />
            </form>
        );
    }
}

export default AddMovie;