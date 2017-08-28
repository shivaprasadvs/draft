import React, {Component} from 'react';
import {store} from '../../index.js';
import axios from 'axios';
import {
    Grid,
    Row,
    Col,
    Tab,
    Tabs
} from 'react-bootstrap';
import PlayersList from './PlayersList'
import 'react-router-modal/css/react-router-modal.css';
import '../../../node_modules/react-vis/dist/style.css';
import {RadialChart} from 'react-vis';
import { allPlayers } from '../../actions/allPlayersAction';
import * as _ from 'lodash';
import {filteredPlayersAction} from '../../actions/filteredPlayersAction';



class Players extends Component {

    componentDidMount() {
        axios
        .get('/all-players')
        .then(function (response) {
  
          store.dispatch(allPlayers(response.data));
        })
        .catch(function (error) {
          console.log(error);
        });

    }
    mapClick =(value) => {
        
          store.dispatch(filteredPlayersAction( _.filter(store.getState().players.allPlayers, {specialityRole: value.subLabel})));
           
      }
      

myData = [
    {
        angle: store.getState().players.batsmen.length,
        subLabel: 'Batsman'
    }, {
        angle:  store.getState().players.bowlers.length,
        subLabel: 'Bowler'
    }, {
        angle:  store.getState().players.allRounders.length,
        subLabel: 'All Rounder'
    }, {
        angle:  store.getState().players.wicketKeepers.length,
        subLabel: 'Wicket-Keeper'
    }
]
    render() {
        return (

            <Grid>

                <Row className="show-grid">
                    <Col xs={1} md={3}/>
                    <Col xs={10} md={6}>
                        <h1>Players</h1>

                    </Col>
                    <Col xs={1} md={3}/>
                </Row>
                <Row className="show-grid">
                    <Col md={1}/>
                    <Col md={10}>
                        <Tabs defaultActiveKey={1} id="players-info">
                            <Tab eventKey={1} title="By Role">
                               <center><h3>By Speciality Role</h3><RadialChart
                               animation
                                    data={this.myData}
                                    width={300}
                                    height={300}
                                    showLabels={true}
                                    innerRadius={100}
                                    onValueClick =  {(value) => this.mapClick(value)}

                                    radius={140}/></center> 
                                <PlayersList/>
                                </Tab>
                            <Tab eventKey={2} title="Tab 2">Tab 2 content</Tab>
                            <Tab eventKey={3} title="Tab 3">Tab 3 content</Tab>

                        </Tabs>

                    </Col>
                    <Col xs={1}/>
                </Row>

            </Grid>

        );
    }
}


export default Players;

