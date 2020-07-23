import React from 'react'

export default class Movie extends React.Component {
    displayMovie() {

        let movie = this.props.movies.find(movie => movie._id === this.props.match.params.movieId);

        return(
        <div>
            <nav>
                <img src="https://www.pinclipart.com/picdir/big/345-3453828_emoji-clipart-popcorn-emoji-pop-corn-png-download.png" />
                Ironhack Cinema
             </nav>
            <div className="singleMovie">
                <img src={movie.image} alt={movie.title} />
                <div className="singleMovieDetails">
                    <Link to={`/movies`}>Go back</Link>
                    <h2>{movie.title}</h2>
                    <h3>Director: {movie.director}</h3>
                    <strong>Stars</strong>
                    <ul>
                        {movie.stars.map((star, i) => <li key={i}>{star}</li>)}
                    </ul>
                    <p> {movie.description} </p>
                    <p> {movie.showtimes.map((time, i) => `${time} | `)} </p>
                </div> 
            </div>
        </div>
        )

    }

    render() {
        return (
            <div>
                {this.displayMovie()}
            </div>
        );
    }
}