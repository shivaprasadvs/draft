import React, { Component } from 'react';
import DraftForm from '../form/DraftForm';
import { Grid, Row, Col } from 'react-bootstrap';
import { newPlayer } from '../../actions/playerAction';
import {store} from '../../index.js';
import axios from 'axios';


class FormGrid extends Component {
 submit = (values) => {
    store.dispatch(newPlayer(values));
    axios.post('./add-player', store.getState().player)
    .then((response)=>(console.log(response)) )
    .catch((error)=>(console.log(error)) )

      };
  render() {
    return (
     
        <Grid>

          <Row className="show-grid">
            <Col xs={1} md={3} />
            <Col xs={10} md={6} >
              <h1>Registration</h1>
              <DraftForm onSubmit={this.submit} />

            </Col>
            <Col xs={1} md={3} />

          </Row>
        </Grid>

    );
  }
}

export default FormGrid;
