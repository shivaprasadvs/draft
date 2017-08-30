import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import { reducer as formReducer } from 'redux-form';
import { applyMiddleware, createStore, combineReducers, compose } from 'redux';
import playerReducer from './reducers/playerReducer';
import loginReducer from './reducers/loginReducer';
import allPlayersReducer from './reducers/allPlayersReducer';
import filteredPlayersReducer from './reducers/filteredPlayersReducer';
import LoginPage from './components/layout/LoginPage';
import logger from 'redux-logger';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';
import thunk from 'redux-thunk';

const rootReducer = combineReducers({
    // ...your other reducers here
    // you have to pass formReducer under 'form' key,
    login: loginReducer,
    player: playerReducer,
    form: formReducer,
    players: allPlayersReducer,
    filtered: filteredPlayersReducer
  })
  
  const customHistory = createBrowserHistory()
  const middleware = compose(applyMiddleware(thunk, logger))
  export const store = createStore(rootReducer, middleware)

  const isAuthorized = () => {
      if(store.getState().login.length > 0 && store.getState().login.auth_id !== "") {console.log("Authorized by " + store.getState().login.auth_service)}
        else customHistory.push("/login")
  }

ReactDOM.render(
    <Provider store={store}>
        <Router  history={customHistory}>
            <div>
        <Route exact path="/" component={App} onEnter={isAuthorized()}/>
        <Route path="/login" component={LoginPage} />
          
          </div>
        </Router>
    </Provider>, document.getElementById('root'));
registerServiceWorker();
