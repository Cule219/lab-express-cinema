import React, { Component } from "react";
import Home from "./components/Home";
import Movies from "./components/movies";
import MovieDetails from "./components/MovieDetails"

class App extends Component {
  render() {
    
    return (
      <div className="App">
      <switch>    
        <Route exact path='/' render={(props) => <Home {...props} />}></Route>
        <Route exact path='/movies' render={(props) => <Movies {...props} />}></Route>
        <Route exact path='/movies/:movieID' render={(props) => <MovieDetails {...props} />}></Route>
        
      </switch>
      </div>
    );
  }
}

export default App;
