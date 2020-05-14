import React, { Component } from "react";
import Axios from "axios";
import { Link } from "react-router-dom";

class MovieDes extends Component {
      state = {
       movie: [],
      };
    
      async componentDidMount() {
        const res = await Axios.get(
           `http://localhost:5000/movies/${this.props.match.params.id}`
        );
        this.setState({
         movie:res.data,
        });
      }
    
        render() {
            const { title, director, stars, image, description } = this.state.movie;
            return (
              <div className='curtains2'>
                <h1>{title}</h1>
                <h2>{director}</h2>
                <ul>{stars && stars.map((star) => <li key={star}>{star}</li>)}</ul>
                <img src={image} alt={title} />
                <p>{description}</p>
                <br />
                <Link to="/movies">
                 <button style={{margin:'6px',color:'black', fontSize:'25px'}}>Go Back</button>
                </Link>
              </div>
            );
          }
}

export default MovieDes;