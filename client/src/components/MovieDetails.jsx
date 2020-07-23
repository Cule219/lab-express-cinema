import React, { Component } from "react";
import axios from "axios";
import {Link} from 'react-router-dom';

export default class MovieDetails extends Component {

    state={
      movie:{}
    }  

    async componentDidMount() {
        let res = await axios.get(`http://localhost:5000/movies/${this.props.match.params.id}`);
        this.setState({
            movie:res.data.movie
        })
      }
  
    displayMovie = () =>{
        return(
        <div>
            <img src={this.state.movie.image}/>
            <br />
            <br />
            <span style={{fontWeight:'700'}}>{this.state.movie.title}</span>
            <br />
            <br />
            Director: {this.state.movie.director}
            <br />
            <br />
            Stars:
            <br />
            <br />
            {this.displayStars()}
            <br/>
            {this.state.movie.description}
            <br />
            <br />
            {this.displayshowTimes()}
        </div>
        )
    }  

    displayshowTimes = () =>{
        return this.state.movie.showtimes?.map((eachShowTime)=>{
        return <span>{eachShowTime} | </span>
        })
    }

    displayStars = () =>{
        return this.state.movie.stars?.map((eachStar)=>{
        return <li>{eachStar}</li>
        })
    }

  render() {
    return (
      <div>
        {this.displayMovie()}
      </div>
    );
  }
}
