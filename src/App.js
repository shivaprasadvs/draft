import React, { Component } from 'react';
import './App.css';
import FormGrid from './components/layout/FormGrid';
import MenuNavbar from './components/layout/MenuNavbar';
import Login from './components/layout/Login';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'


class App extends Component {

  render() {
    return (

      <div>
                <Router >
                <div>
        <MenuNavbar />


          <Route exact path="/" component={Login} />
          <Route path="/register" component={FormGrid} />
          </div>
        </Router>

      </div>

    );
  }
}

export default App;
