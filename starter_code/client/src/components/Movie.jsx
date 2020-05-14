import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

class Movie extends Component {
    state = {
        movies: []
    }
  
    async componentDidMount() {
        let res = await axios.get('http://localhost:5000')
        let res2 = await axios.get('http://localhost:5000/movies')
        
        console.log("hellllo", res, res2);
        this.setState({
            movies: res2.data.movies
        })
      }

    showMovies = () => {
        return this.state.movies.map(eachMovie => {
            return( <li key={eachMovie.title}>
                <Link to={`/movies/:id`}><h2>{eachMovie.title}</h2></Link>
                <h4>{eachMovie.director}</h4>
                <h4>{eachMovie.description}</h4>
                <img src={eachMovie.image} alt=""></img>
            </li>
            )
        })
    }

    render() {
        return (
            <div>
                Hello from Movie
                <br></br>
                {this.showMovies()}
                <Link to="/">Back Home</Link>
            </div>
        );
    }
}

export default Movie;