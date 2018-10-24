import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Home from './pages/Home';
import Saved from './pages/Saved';
import NoMatch from "./pages/NoMatch";



class App extends Component {

  render() {
    return (
      <div>
          <Router>
            <Switch>
              <Route exact path="/" component={Home}/>
              <Route path="/Saved" component={Saved}/>
              <Route component={NoMatch} />
            </Switch>
          </Router>
      </div>
    );
  }
}

export default App
