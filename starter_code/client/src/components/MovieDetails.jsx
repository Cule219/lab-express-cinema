import React, { Component } from 'react';
import axios from 'axios';
// import { Link } from 'react-router-dom';

class MovieDetails extends Component {

state = {
    movie: {}
    
}

async componentDidMount(){
    let movie = await axios.get(`http://localhost:5000/movies/${this.props.match.params.id}`)
    this.setState({
        movie: movie.data
    })
   
}

    render() {
        console.log(this.state.movie)
        const {title, director, stars, image, description} = this.state.movie;
        return (
            <div>
                Hello from Details
                <h1>{title}</h1>
                <h3>{director}</h3>
                <ul>
                    {stars && stars.map((star, i)=>{
                        return <li key={i}>{star}</li>
                    })}
                </ul>
                <img src={image} alt=""></img>
                <p>{description}</p>
            </div>
        );
    }
}

export default MovieDetails;