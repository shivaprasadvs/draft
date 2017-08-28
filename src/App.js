import React, {Component} from 'react';
import './App.css';
import MenuNavbar from './components/layout/MenuNavbar';
import FormGrid from './components/layout/FormGrid';
import Players from './components/layout/Players';
import Welcome from './components/layout/Welcome';
import {Route, Router,Switch} from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';


const customHistory = createBrowserHistory()

class App extends Component {

  render() {
    return (
      
      <Router history={customHistory}>
        <div>
        <MenuNavbar/>
        <Switch>
        
        
        <Route path="/register" component={FormGrid} />
          <Route path="/players" component={Players} />
          <Route path="/" component={Welcome}/>
          </Switch>
       </div>
      </Router>
    
    );
  }
}

export default App;
