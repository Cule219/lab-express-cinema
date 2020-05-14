import React, { Component } from 'react';
import Axios from 'axios'

class Movies extends Component {
    state = {
        movies: []
    }

async componentDidMount(){
    let res = await Axios.get('http://localhost:5000/movies')
    console.log(res)
    this.setState({
        movies: res.data.movies
    })
}

showMovies = () => {
    return this.state.movies.map((movie)=> {
        return <li key={movie._id}>
            <h2>{movie.title}</h2>
            <img src={movie.image} alt={movie.title} />
            <button>See More</button>
        </li>
    })
}

    render() {
        return (
            <div>
                <h1>Movies</h1>
                {this.showMovies()}
            </div>
        );
    }
}

export default Movies;