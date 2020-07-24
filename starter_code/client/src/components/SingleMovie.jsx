import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import axios from 'axios'

class SingleMovie extends Component {
  state = {
    id: this.props.match.params.id,
    movie: {}
  }

  componentDidMount = async () => {
    let res = await axios.get(`http://localhost:5000/movies/${this.state.id}`)
    console.log(res)
    this.setState({movie:res.data})
  }

  showMovie() {
    return (
      <div>
        <h1>{this.state.movie.title}</h1>
        <img src={`${this.state.movie.image}`}></img>
      </div>
    )
  }

  render() {
    return (
      <div>
        <Link to="/movies">Go Back</Link>
        {this.showMovie()}
      </div>
    );
  }
}

export default SingleMovie;