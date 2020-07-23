import React, { Component } from "react";
import axios from "axios";
import {Link} from 'react-router-dom';

export default class Movies extends Component {

    state={
      movies:[]
    }

    componentDidMount() {
        axios.get("http://localhost:5000/movies").then((res)=>{
          this.setState({
            movies:res.data.movies
          });
        }) 
      }

    displayMovies = movies => {
      return movies.map((eachMovie)=>{
        return (
          <div>
        <img src = {eachMovie.image}/> 
        <span>{eachMovie.title}</span>
        <Link id={eachMovie._id} to={`/movies/${eachMovie._id}`}>See more</Link>
        </div>
        )
      })
    }  
  
  render() {
    return (
      <div>
        <div>
          {this.displayMovies(this.state.movies)}
        </div>
        <Link to='/new'><button>New</button></Link>
      </div>
    );
  }
}
