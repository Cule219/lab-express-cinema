import React, { Component } from 'react';
import axios from 'axios';

class AddMovie extends Component {
    handleSubmit = (e) => {
        e.preventDefault()
        axios.post(' http://localhost:5000/movies/new').then(res=>{
            console.log(res.data)
        })
    }

    handleChange = (e) => {

    }

    render() {
        return (
            <form onSubmit={e => this.handleSubmit(e)}>
                <input name="title" type="text" placeholder="title" onChange={e=> this.handleChange(e)}/>
                <input name="title" type="text" placeholder="description" onChange={e=> this.handleChange(e)}/>
                <input type="submit" />
            </form>
        );
    }
}

export default AddMovie;