import React, { Component } from "react";
import Home from "./components/Home";

export default class App extends Component {
  state = {
    movies: []
  }





  componentDidMount = async () => {
    let responseFromBackend = await axios.get("http://localhost:5000/moveis");
    this.setState({
        movies: responseFromBackend.data,
    });
  }






  render() {
    return (
      <div className="App">
        <Home />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/movies" render={props => <Movies {...props} movies={this.state.movies} />} />
          <Route exact path="/movie/:movieId" render={props => <Movie {...props} movies={this.state.movies} />} />
        </Switch>
      </div>
    );
  }
}

