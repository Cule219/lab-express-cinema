import React from 'react';

export default class Movies extends React.Component {
    displayMovies() {
        return (
            this.props.movies.map((v,i) => {
                <img src={movie.image}/>
{                movie.title
}            
<link to = {                    <Link to={`/movie/${movie._id}`}>See more</Link>
}
        })
        )
    }



    render() {
        return (
            <div>
                <nav>
                    <img src="https://www.pinclipart.com/picdir/big/345-3453828_emoji-clipart-popcorn-emoji-pop-corn-png-download.png" />
                    Ironhack Cinema
                </nav>
                <div>
                    <h3>Click on the movie to check the showtimes!</h3>
                    {this.displayMovies()}
        )
    }

}