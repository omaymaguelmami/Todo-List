
import React, { Component } from 'react'
import Active from './component/Active'
import Completed from './component/Completed'
import All from './component/All';
import axios from 'axios'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

export default class App extends Component {
  constructor(){
    super()
    this.state = {
      data: [],

    }
  }

  componentDidMount(){
    axios.get('http://localhost:3000/api/get').then((response)=> {
        this.setState({
            data: response.data

        })
    })
}

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
            <All data={this.state.data} />
          </Route>
          <Route path="/Active">
            <Active data={this.state.data} />
          </Route>
          <Route path="/Completed">
            <Completed data={this.state.data} />
          </Route>
        </Switch>
                </Router>
        );
    }
}