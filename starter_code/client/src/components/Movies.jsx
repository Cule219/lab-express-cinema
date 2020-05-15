import React, { Component } from 'react';
import axios from "axios";
import {Link} from "react-router-dom";

class Movies extends Component {
    //Set state equal to null or empty array
    state = {
        movies: [],
        title: [],
        director: [],
        stars: [],
        image: [],
        description: [],
        selectedFile: [] //Null
    }
    
    //A - Retreive movie listing data from server
    async componentDidMount() {
        console.log(this, 'mounted')
        let res = await axios.get("http://localhost:5000/movies");
        console.log(res)
        this.setState({
            movies:res.data.movies
        })
    }

    //B - Sending message to server using Push Request
    sendMessageToServer = async () => {
        let res = await axios.post('http://localhost:5000/movies', this.state) //Post flower to the server 5
        
        console.log(res) //show the message 8 
        let newMovies = [...this.state.movies]
        newMovies.push({title:this.state.title, director:this.state.director, stars:this.state.stars, 
            image:this.state.image, description:this.state.description})
    
        this.setState({ //9 
          message:res.data.message,
          newMovieID: res.data.newMovieID,
          movies: newMovies,
          newMessage: 'New Movie Loaded!'
        })
      }

    //A - Function to display movie listing content
    showMovies = () => {
        return this.state.movies.map(eachMovie => {
            return(
            <div key={eachMovie._id} className="container">
                <div className="row">
                    <div className="col-lg-4 artist-container">
                    <h1>{eachMovie.title}</h1>
                    
                    <img src = {eachMovie.image} alt={eachMovie.image}/>
                    <p>{eachMovie.description}</p>
                    <button><Link to={`/movies/${eachMovie._id}`}>See More</Link></button>  
                    </div>
                </div>
            </div>)
        })
    }

// B - Controlled Input Form
setTyping = (event) => {
    event.preventDefault() //Prevents the page from being refreshed
    this.setState({
      [event.target.name] : event.target.value,
      selectedFile: event.target.files 
    })
  }

//C-User Upload with two handler methods
// fileChangedHandler = event => {
//     event.preventDefault() //Prevents the page from being refreshed
//     this.setState({ selectedFile: event.target.files[0] })
//   }
  
  uploadHandler = () => {
    console.log(this.state.selectedFile)
  }

//C - Send file to server


//Render 
    render() {
        return (
            <div>
                <button><Link to={"/"}>Home</Link></button>  
                {/* B - Form input fields to add a new movie to database. Refering to State */}
                {this.state.name}
                <h1>Add a Movie to Listing</h1>
                <input type="text" placeholder="title" name="title" onChange={this.setTyping} />
                <input type="text" placeholder="director" name="director" onChange={this.setTyping}/>
                <input type="text" placeholder="star name" name="stars" onChange={this.setTyping}/>
                <input type="text" placeholder="description" name="description" onChange={this.setTyping}/>

                {/* <input type="url" placeholder="image" name="image" onChange={this.setTyping}/> */} 
                <br></br>
                <input type="file" name="image" onChange={this.setTyping}/>
                <button onClick={this.uploadHandler}>Upload Image!</button>

                {/* B - Calling method aboe for Controlled Input Form */}
                <br></br>
                <br></br>
                <button onClick={this.sendMessageToServer}>Add Movie</button> {/*Called method above 4*/}

                <p>{this.state.message}</p> 
                <p>{this.state.newMovieID}</p> 

                {/* A - Render the movie listing in the component */}
                <h1>Movie Listing</h1>
                {this.showMovies()}
            </div>
        );
    }
}

export default Movies;