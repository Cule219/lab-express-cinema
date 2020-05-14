import React, { Component } from "react";
import Axios from "axios";
import {Link} from 'react-router-dom'

export default class Home extends Component {
  
    state = {
      load: false
    }

    async componentDidMount() {
        console.log(this,' mounted')
        let res = await Axios.get('http://localhost:5000/movies')
        console.log(res)
        this.setState({
            movies:res.data.movies,
            load:true
        })
      }
    

    showMovies = () => {
        return this.state.movies.map(eachMovie => {
            return (<li key={eachMovie._id} >
                <h1>{eachMovie.title}</h1>
                <h2>{eachMovie.director}</h2>
                <img src={eachMovie.image}/>
                <Link style={{textDecoration:"none"}} to={`/movies/${eachMovie._id}`}>See more</Link>
            </li>)
        })
    }

  render() {
    return (
      <div>
        {this.state.load ? this.showMovies() : ('') }
      </div>
    );
  }
}