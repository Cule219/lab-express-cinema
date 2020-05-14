import React, { Component } from 'react';
import Axios from 'axios'



class MovieDetails extends Component {

state = {
    movie: []
}

componentDidMount = () => Axios.get(`http://localhost:5000/movies/${this.props.match.params.id}`).then((res) => this.setState({movie:res.data}))
    
    render() {
        const movie = this.state.movie
        console.log(movie)
        return (
            <div>
                Hello World
            </div>
        );
    }
}

export default MovieDetails;