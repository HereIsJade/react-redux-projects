import React, { Component } from 'react';
import '../App.css';
import {Popular} from './Popular';
import {Nav} from "./Nav";
import {Home} from "./Home";
import {Battle} from "./Battle";
import {Results} from "./Results";
import {Switch, Route, BrowserRouter} from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="container">
          <Nav/>
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/popular" component={Popular}/>
            <Route exact path="/battle" component={Battle}/>
            <Route exact path="/battle/results" component={Results}/>
            <Route render={() => <p>Page Not Found</p>}/>
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
