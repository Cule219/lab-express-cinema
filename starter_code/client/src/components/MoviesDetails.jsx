import React, { Component } from "react";
import axios from "axios";

class MoviesDetails extends Component {
  state = {
      movies: []
  }
  async componentDidMount() {
      console.log(this, 'mounted')
      let res = await axios.get(`http://localhost:5000/movies/${this.props.match.params.id}`).then((res) => {
      console.log(res)
      this.setState({
        movies: res.data
    })
})
      
      
  }

  render() {
    const { title, director, stars, image, description, showtimes } = this.state.movies
    return (
      <div>
        
          <div>
            {/* <img src={movieObj.image} alt={movieObj.title} /> */}
            <h1>{title}</h1>
            <h2>{director}</h2>
            <h3>Stars</h3>
            <ul>{stars && stars.map((star) => 
            <li key={star}>{star}</li>)}
            </ul>
            <img src={image} alt={image} />
            <p>{description}</p>
            <p>{showtimes && showtimes.map((show) => 
            <div key={show}>{show}</div>)}</p>
          </div>
      </div>
    );
  }
}

export default MoviesDetails;
