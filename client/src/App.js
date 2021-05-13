
import React, { Component } from 'react'
import Active from './component/Active'
import Completed from './component/Completed'
import All from './component/All'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

export default class App extends Component {

    render() {
        return (
            <Router>
            <div className="App">
            <h1>#todo</h1>
                <div className="container">
                    <div className="row justify-content-md-center">
                        <div className="col col-lg-2">
                            <Link to ="/All">All</Link>
                        </div>
                        <div className="col col-lg-2">
                            <Link to="/Active">Active</Link>
                        </div>
                        <div className="col col-lg-2">
                        <Link to="/Completed">Completed</Link>

                        </div>
                    </div>
                </div>
                </div>

                <Switch>
          <Route path="/All">
            <All />
          </Route>
          <Route path="/Active">
            <Active />
          </Route>
          <Route path="/Completed">
            <Completed />
          </Route>
        </Switch>
                </Router>
        );
    }
}