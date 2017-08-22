import React, { Component } from 'react';
import DraftForm from '../form/DraftForm';
import { Grid, Row, Col } from 'react-bootstrap';
import { newPlayer } from '../../actions/playerAction';
import { applyMiddleware, createStore, combineReducers } from 'redux';
import playerReducer from '../../reducers/playerReducer';
import logger from 'redux-logger';

import { reducer as formReducer } from 'redux-form';

const rootReducer = combineReducers({
  // ...your other reducers here
  // you have to pass formReducer under 'form' key,
  player: playerReducer,
  form: formReducer
})


const middleware = applyMiddleware(logger)
export const store = createStore(rootReducer, middleware)




class FormGrid extends Component {
  submit = (values) => {
    
        store.dispatch(newPlayer(
          values
        ))
      }
  render() {
    return (
     
        <Grid>

          <Row className="show-grid">
            <Col xs={1} md={3} />
            <Col xs={10} md={6} >
              <h2>Registration</h2>
              <DraftForm onSubmit={this.submit} />

            </Col>
            <Col xs={1} md={3} />

          </Row>
        </Grid>

    );
  }
}

export default FormGrid;
