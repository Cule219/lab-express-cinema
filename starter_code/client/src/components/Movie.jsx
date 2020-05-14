import React, { Component } from 'react';
import Axios from 'axios'

class Movie extends Component {
    state = {
        movie: {}
    }

async componentDidMount(){
    let res = await Axios.get(`http://localhost:5000/movie/${this.props.match.params.id}`)
    console.log(res)
    this.setState({
        movie: res.data.movie
    })
}

    render() {
        const {title, image, director, stars, description} = this.state.movie
        return (
            <div>
                <h1>{title}</h1>
                <img src={image} alt={title} />
                <h2>Director: {director}</h2>
                <h3>Stars</h3>
                <ul>
                    {stars && stars.map(star => {
                        return <li key={star}>{star}</li>
                    })}
                </ul>
                <h4>Description</h4>
                <p>{description}</p>
            </div>
        );
    }
}

export default Movie;