import React, { Component } from "react";
import Axios from "axios";
import {Link} from 'react-router-dom'

export default class Home extends Component {
  
    state = {
      title: '',
      image: '',
      load: false
    }

    async componentDidMount() {
        let res = await Axios.get('http://localhost:5000/movies')
        console.log(this.props.match.params.id)
        this.setState({
            movies:res.data.movies,
            load:true
        })
      }
    
    handleChange = (e) => {
        console.log(this.state)
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        Axios.post('http://localhost:5000/new-movie', this.state)
        .then(res=> {
            console.log(res)
        })
        .catch(err => console.log(err))
    } 

    createMovie = () => {
        
    }

  render() {
    return (
      <div>
        <form onSubmit={e => this.handleSubmit(e)}>
            <input name="title" type='text' onChange={e => this.handleChange(e)}/>
            <input name="image" type='text' onChange={e => this.handleChange(e)}/>
            <input type="submit" />
        </form>
      </div>
    );
  }
}