import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './Movie.css';

class Movie extends Component {
    state = {
        movies: []
    }
  
    async componentDidMount() {
        let res = await axios.get('http://localhost:5000')
        let res2 = await axios.get('http://localhost:5000/movies')
        
        console.log("hellllo", res, res2);
        this.setState({
            movies: res2.data.movies
        })
      }

    showMovies = () => {
        return this.state.movies.map(eachMovie => {
            return( <li key={eachMovie.title}>
                <Link to={`/movies/${eachMovie._id}`}><h2>{eachMovie.title}</h2></Link>
                <h4>{eachMovie.director}</h4>
                <h5>{eachMovie.description}</h5>
                <img src={eachMovie.image} alt=""></img>
            </li>
            )
        })
    }

    sendNewMovieToServer = async () => {
        //may need to add e.preventDefault() 
        let res = await axios.post('http://localhost:5000/movies', this.state)
        console.log("posted new movie!", res);

        let newMovies = [...this.state.movies]
        newMovies.push({title:this.state.title, description:this.state.description, url:this.state.url})

        this.setState({ 
            newMovieId: res.data.newMovieId,
            movies: newMovies
        })
    }

    createNewMovie = (e) => {
        this.setState({
            [e.target.name] : e.target.value
          })
    }

    render() {
        return (
            <div className="main-content">
                <div>
                <h3>Add Movie</h3>
                    <input type="text" placeholder="title" name="title" onChange={this.createNewMovie}/><br></br>
                    <input type="text" placeholder="description" name="description" onChange={this.createNewMovie}/><br></br>
                    <input type="url" placeholder="image" name="image " onChange={this.createNewMovie}/><br></br>
                    <button onClick={this.sendNewMovieToServer}>Add Movie</button>
                </div>
                <Link id="back-home" to="/">Back Home</Link>
                <br></br>
                <ul className="movies-list">{this.showMovies()}</ul>
                
            </div>
        );
    }
}

export default Movie;

// title: String,
// description: String,
// stars: [String],
// image: String,
// description: String,
// showtimes: [String]