import React, { Component } from 'react';
import DraftForm from '../form/DraftForm';
import RegisterDetails from '../form/RegisterDetails';
import { Grid, Row, Col } from 'react-bootstrap';
import { newPlayer } from '../../actions/playerAction';
import { allPlayers } from '../../actions/allPlayersAction';
import {store} from '../../index.js';
import axios from 'axios';
import * as _ from 'lodash';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

class FormGrid extends Component {
componentDidMount(){
  this.props.allPlayers();
}
 submit = (values) => {
   const loginData = {
    auth_service: store.getState().login.auth_service,
    auth_id: store.getState().login.auth_id,
    picture: store.getState().login.picture}
    const postData = _.extend(loginData, values)
    store.dispatch(newPlayer(postData));
    axios.post('http://draft-backend-env.ahpbzkqxts.us-east-2.elasticbeanstalk.com/add-player', store.getState().player)
    .then((response)=>{
      this
      .props
      .history
      .push('/players')
      window.alert("Your Data is now Saved")
     })
    .catch((error)=>(window.alert(error)) )
      };

      matchingData = () => {return _.find(this.props.players, {auth_id: store.getState().login.auth_id})}

      checkIfAlreadySubmitted = () => {
      
        if(this.matchingData()) return true
          else return false
      }
  render() {
    return (
     
        <Grid>

          <Row className="show-grid">
            <Col xs={1} md={3} />
            <Col xs={10} md={6} >
              <h1>Registration</h1>
              {!this.checkIfAlreadySubmitted() && <DraftForm onSubmit={this.submit} />}
{this.checkIfAlreadySubmitted() && <RegisterDetails player={this.matchingData()} history={this.props.history}/>}
            </Col>
            <Col xs={1} md={3} />

          </Row>
        </Grid>

    );
  }
}


const mapStateToProps =  (store) => {
 
  return {
      players: store.players
      
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
      allPlayers
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(FormGrid);
