import React, { Component } from 'react';
// import axios from "axios";


class MoviesDetails extends Component {
    // state = {
    //     movies: []
    // }
    // async componentDidMount() {
    //     console.log(this, 'mounted')
    //     let res = await axios.get("http://localhost:5000/movies/:id");
    //     console.log(res)
    //     this.setState({
    //         movies:res.data.movies
    //     })
    // }

    // showMovies = () => {
    //     return this.state.movies.map(eachMovie => {
    //         return(
    //         <div key={eachMovie._id} className="container">
    //             <div className="row">
    //                 <div className="col-lg-4 artist-container">
    //                 <h1>{eachMovie.title}</h1>
    //                 <h2>{eachMovie.director}</h2>
    //                 <h3>Stars</h3>
    //                 <li>{eachMovie.stars}</li>
    //                 <img src = {eachMovie.image} alt={eachMovie.image}/>
    //                 <p>{eachMovie.description}</p>
    //                 <p>{eachMovie.showtimes}</p>
    //                 </div>
    //             </div>
    //         </div>)
    //     })
    // }

    // {this.showMovies()}

    render() {
        let movieID = this.props.match.params.movieID;
        let movieObj = this.props.movies.find((eachMovie) => {
        console.log(eachMovie.title);
        return eachMovie._id === movieID;
        });
        console.log(movieObj);
        return (
            <div>
                Movies Testing
                
            </div>
        );
    }
}

export default MoviesDetails;