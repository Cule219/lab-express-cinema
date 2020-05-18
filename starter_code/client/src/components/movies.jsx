import React, { Component } from 'react';
import Axios from 'axios'

class movies extends Component {
   state={movies:[]}; 
   
   async componentDidMount(){
    let res = await Axios.get(`http://localhost:5000/movies`)

    this.setState({movies:res.data.movies
        })
   }

showMovies = ()=>{
    return (this.state.movies.map(movie => { 
        return <div><li>{movie.title}</li>
        <Link to = {`movies:${movie.id}`}><img src= {movie.image} /></Link></div>
    })
    )};

    render() {
        return (

            <div>
            {this.showMovies()}    
            </div>
    );
    }
}

export default movies