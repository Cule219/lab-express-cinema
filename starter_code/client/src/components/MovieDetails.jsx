import React, { Component } from 'react';
import { connect } from 'react-redux';
import Axios from 'axios'


class MovieDetails extends Component {
    state={
        movieobj:{}
    }

componentDidMount = () => {
    Axios.get(`http://localhost:5000/movie/${this.props.match.params.movieId}`)
        .then(res => {
            console.log(res)
            this.setState({
                movieObj: resdata
            })
            .catch(err => console.log(err))
        })
}




    render() {
        return (
            <div>
             <h1>{this.state.movieObj.title}</h1>  
             <h1>{this.state.movieObj.director}</h1>  
             <h1>{this.state.movieObj.image}</h1>  
            </div>
        );
    }
}

export default connect(
    
)(MovieDetails);