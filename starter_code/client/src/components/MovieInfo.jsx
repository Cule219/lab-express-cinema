import React, { Component } from "react";
import Axios from "axios";
import {Link} from 'react-router-dom'

export default class Home extends Component {
  
    state = {
      load: false
    }

    async componentDidMount() {
        let res = await Axios.get('http://localhost:5000/movies')
        console.log(this.props.match.params.id)
        this.setState({
            movies:res.data.movies,
            load:true
        })
      }
    

    showMovies = () => {
        return this.state.movies.map(eachMovie => {
            if (eachMovie._id === this.props.match.params.id)
            return (<div key={eachMovie._id} >
                <Link style={{textDecoration:"none"}} to={`/movies`}>Go Back</Link>
                <h1>{eachMovie.title}</h1>
                <h2>
                    Director: {eachMovie.director}
                    <br/>
                    stars 
                    {eachMovie.stars.map(eachActor => {
                        return (
                            <li>{eachActor}</li>
                        )
                    })}
                </h2>
                <h3>
                    {eachMovie.description} <br/>
                    {eachMovie.showtimes.map(eachTime => {
                        return (
                            <h3>| {eachTime} |</h3> 
                        )
                    })}
                </h3>
                <img src={eachMovie.image}/>
                
            </div>)
        })
    }

  render() {
    return (
      <div>
        {this.state.load ? this.showMovies() : ('') }
      </div>
    );
  }
}