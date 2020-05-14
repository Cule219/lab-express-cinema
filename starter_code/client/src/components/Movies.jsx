import React, { Component } from 'react';
import axios from "axios";
import {Link} from "react-router-dom";

class Movies extends Component {
    state = {
        movies: []
    }
    async componentDidMount() {
        console.log(this, 'mounted')
        let res = await axios.get("http://localhost:5000/movies");
        console.log(res)
        this.setState({
            movies:res.data.movies
        })
    }

    showMovies = () => {
        return this.state.movies.map(eachMovie => {
            return(
            <div key={eachMovie._id} className="container">
                <div className="row">
                    <div className="col-lg-4 artist-container">
                    <h1>{eachMovie.title}</h1>
                    
                    <img src = {eachMovie.image} alt={eachMovie.image}/>
                    <p>{eachMovie.description}</p>
                    <button><Link to={`/movies/${eachMovie._id}`}>See More</Link></button>  
                    </div>
                </div>
            </div>)
        })
    }
    render() {
        return (
            <div>
                Movies Testing
                {this.showMovies()}
            </div>
        );
    }
}

export default Movies;