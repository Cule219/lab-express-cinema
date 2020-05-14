import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Movies extends Component {
    displayMovies() {
        return <div className="movies"> {
            this.props.movies.map((movie, i) => {
                return <div className="movie" key={i}>
                    <img src={movie.image} alt={movie.title} />
                    <strong>{movie.title}</strong>
                    <Link to={`/movie/${movie._id}`}>See more</Link>
                </div>
            })
        } </div>;
    }
    
    render() {
        return (
            <div>
                <navbar>
                    <img src="https://www.pinclipart.com/picdir/big/345-3453828_emoji-clipart-popcorn-emoji-pop-corn-png-download.png" />
                    Ironhack Cinema
                </navbar>
                <div>
                    <h3>Click on the movie to check the showtimes!</h3>
                    {this.displayMovies()}
                </div>
            </div>
        );
    }
}

export default Movies;