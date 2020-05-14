import React, { Component } from "react";
import { Switch, Route } from 'react-router';
import Home from "./components/Home";
import Movies from './components/Movies'
import MoviesDetails from './components/MoviesDetails'


class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <Home /> */}
        <Switch>
          <Route exact path='/' render={(props) => <Home {...props} />}/>
          <Route exact path='/movies' render={props => <Movies {...props}/>}/>
          <Route exact path='/movies/:movieID' render={props => <MoviesDetails {...props}/>}/>
          {/* <Route exact path='/movies/:moviesID' render={(props) => <BeerDetails {...props} allBeers={this.state.allBeers} />}/> */}
        </Switch>
      </div>
    );
  }
}

export default App;
