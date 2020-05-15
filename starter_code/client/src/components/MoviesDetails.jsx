import React, { Component } from "react";
import axios from "axios";
import {Link} from "react-router-dom";


class MoviesDetails extends Component {
  //Set state equal to null or empty array
    state = {
      movies: []
  }

  //A - Retreive movie listing data from server by ID
  async componentDidMount() {
      console.log(this, 'mounted')
      await axios.get(`http://localhost:5000/movies/${this.props.match.params.id}`).then((res) => {
        console.log(res)
      this.setState({
        movies: res.data
        })
    })   
    
  }

  //A - Render movie listing details for single selection
  render() {
    const { title, director, stars, image, description, showtimes } = this.state.movies
    return (
      <div>
          <div> 
            <button><Link to={"/movies"}>Go Back </Link></button> 
            <h1>{title}</h1>
            <h2>{director}</h2>
            <h3>Stars</h3>
            <ul>{stars && stars.map((star) => 
            <li key={star}>{star}</li>)}
            </ul>
            <img src={image} alt={image} />
            <h3>Description</h3>
            <p>{description}</p>
            <h3>Showtimes</h3>
            <div>{showtimes && showtimes.map((show) => 
            <div key={show}>{show}</div>)}</div>
          </div>
      </div>
    );
  }
}

export default MoviesDetails;
