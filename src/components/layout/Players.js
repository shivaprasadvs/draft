import React, {Component} from 'react';
import {store} from '../../index.js';
import {
    Grid,
    Row,
    Col,
    Tab,
    Tabs,Well
} from 'react-bootstrap';
import PlayersList from './PlayersList'
import 'react-router-modal/css/react-router-modal.css';
import '../../../node_modules/react-vis/dist/style.css';
import {RadialChart} from 'react-vis';
import { allPlayers } from '../../actions/allPlayersAction';
import * as _ from 'lodash';
import {filterPlayers} from '../../actions/filteredPlayersAction';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';



class Players extends Component {

    componentDidMount = ()=> {
        this.props.allPlayers();
    }
 
    mapClickRole =(value) => {
        const dispatchToStore = (playersList) => {
            store.dispatch(filterPlayers({title: value.label, filterField: "Role", data: playersList}));
        }
       if(value.label === 'Batsman')  dispatchToStore(this.props.filteredBy.roleBatsman);
       else if(value.label === 'Bowler')  dispatchToStore(this.props.filteredBy.roleBowler);
       else if(value.label === 'All Rounder') dispatchToStore(this.props.filteredBy.roleAllRounder);
       else if(value.label === 'Wicket-Keeper') dispatchToStore(this.props.filteredBy.roleWicketKeeper);
          
      }

     mapClickBattingPositions =(value) => {
        const dispatchToStore = (playersList) => {
            store.dispatch(filterPlayers({title: value.label, filterField: "Batting", data: playersList}));
        }
        if(value.label === 'Opener')  dispatchToStore(this.props.filteredBy.battingOpener);
        else if(value.label === 'Top Order')  dispatchToStore(this.props.filteredBy.battingTopOrder);
        else if(value.label === 'Middle Order') dispatchToStore(this.props.filteredBy.battingMiddleOrder);
        else if(value.label === 'Tail') dispatchToStore(this.props.filteredBy.battingTail);
           
      }

      mapClickBowlingStyles = (value) => {
        const dispatchToStore = (playersList) => {
            store.dispatch(filterPlayers({title: value.label, filterField: "Bowling", data: playersList}));
        }
        if(value.label === 'Right-arm Pace')  dispatchToStore(this.props.filteredBy.bowlingRightPace);
        else if(value.label === 'Left-arm Pace')  dispatchToStore(this.props.filteredBy.bowlingLeftPace);
        else if(value.label === 'Right-arm Spin') dispatchToStore(this.props.filteredBy.bowlingRightSpin);
        else if(value.label === 'Left-arm Spin') dispatchToStore(this.props.filteredBy.bowlingLeftSpin);
           
      
      }

      mapClickCaptaincy= (value) => {
        const dispatchToStore = (playersList) => {
            store.dispatch(filterPlayers({title: value.label, filterField: "Captain", data: playersList}));
        }
        if(value.label === 'Yes')  dispatchToStore(this.props.filteredBy.captaincyYes);
        else if(value.label === 'Maybe')  dispatchToStore(this.props.filteredBy.captaincyMaybe);
        else if(value.label === 'No') dispatchToStore(this.props.filteredBy.captaincyNo);
           
      
      }

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
                            <center><h3>Speciality Role</h3><RadialChart
                            animation={true}
                            data={_.filter(this.props.chartRoleData, (value)=>{return value.angle > 0} )}
                            width={350}
                            height={350}
                            showLabels={true}
                            innerRadius={100}
                            onValueClick =  {(value) => this.mapClickRole(value)}

                            radius={140}/></center>
                        
                    </Tab>
                            <Tab eventKey={2} title="By Batting Position">
                            <center><h3>Batting Position</h3><RadialChart
                                    animation={true}
                                    data={_.filter(this.props.chartBattingData, (value)=>{return value.angle > 0} )}
                                    width={350}
                                    height={350}
                                    showLabels={true}
                                    innerRadius={100}
                                    onValueClick =  {(value) => this.mapClickBattingPositions(value)}

                                    radius={140}/></center> 
                               
                            </Tab>
                            <Tab eventKey={3} title="By Bowling Style">  <center><h3>Bowling Style</h3><RadialChart
                                    animation={true}
                                    data={_.filter(this.props.chartBowlingData, (value)=>{return value.angle > 0} )}
                                    width={350}
                                    height={350}
                                    showLabels={true}
                                    labelsAboveChildren={true}
                                    innerRadius={100}
                                    onValueClick =  {(value) => this.mapClickBowlingStyles(value)}
                                    radius={140}/> </center> 
                          
                                   </Tab>
                                   <Tab eventKey={4} title="By Captaincy">  <center><h3>Interest in Captaincy</h3><RadialChart
                                    animation={true}
                                    data={_.filter(this.props.chartCaptaincyData, (value)=>{return value.angle > 0} )}
                                    width={350}
                                    height={350}
                                    showLabels={true}
                                    innerRadius={100}
                                    onValueClick =  {(value) => this.mapClickCaptaincy(value)}
                                    radius={140}/> </center> 
                          
                                   </Tab>
                        </Tabs>
                        {this.props.filtered.data.length > 0 && <PlayersList title={this.props.filtered.title} field={this.props.filtered.filterField}/>}
                        {this.props.filtered.data.length <= 0 && <Well className="information">Click on the Donut for more details</Well>}
                    </Col>
                    <Col xs={1}/>
                </Row>

            </Grid>

        );
    }
}

const mapStateToProps =  (store) => {
    const roleBatsmanFilterList =  _.filter( store.players, {specialityRole: 'Batsman'});
    const roleBowlerFilterList =  _.filter( store.players, {specialityRole: 'Bowler'});
    const roleAllRounderFilterList =  _.filter( store.players, {specialityRole: 'All Rounder'});
    const roleWicketKeeperFilterList =  _.filter( store.players, {specialityRole: 'Wicket-Keeper'});
    const battingOpenerFilterList = _.filter(store.players, {battingPosition: 'Opener'});
    const battingTopOrderFilterList = _.filter(store.players, {battingPosition: 'Top Order'});
    const battingMiddleOrderFilterList = _.filter(store.players, {battingPosition: 'Middle Order'});
    const battingTailFilterList = _.filter(store.players, {battingPosition: 'Tail'});
    const captaincyYesFilterList = _.filter(store.players, {interestInCaptaincy: 'Yes'});
    const captaincyMaybeFilterList = _.filter(store.players, {interestInCaptaincy: 'Maybe'});
    const captaincyNoFilterList = _.filter(store.players, {interestInCaptaincy: 'No'});
    const bowlingRightPaceFilterList =  _.filter(store.players, (player) => { return player.bowlingStyle === 'Right-arm Fast' || player.bowlingStyle === 'Right-arm Fast Medium' || player.bowlingStyle === 'Right-arm Medium'});
    const bowlingLeftPaceFilterList = _.filter(store.players, (player) => { return player.bowlingStyle === 'Left-arm Fast' || player.bowlingStyle === 'Left-arm Fast Medium' || player.bowlingStyle === 'Left-arm Medium'});
    const bowlingRightSpinFilterList = _.filter(store.players,  (player) => { return player.bowlingStyle === 'Right-arm Off Break' || player.bowlingStyle === 'Right-arm Leg Break'})
    const bowlingLeftSpinFilterList = _.filter(store.players, (player) => { return player.bowlingStyle === 'Left-arm Orthodox' || player.bowlingStyle === 'Left-arm Chinaman'})

    
    return {
        players: store.players,
        filtered: store.filtered,
        filteredBy: {
roleBatsman: roleBatsmanFilterList,
roleBowler: roleBowlerFilterList,
roleAllRounder: roleAllRounderFilterList,
roleWicketKeeper: roleWicketKeeperFilterList,
battingOpener: battingOpenerFilterList,
battingTopOrder: battingTopOrderFilterList,
battingMiddleOrder: battingMiddleOrderFilterList,
battingTail: battingTailFilterList,
bowlingRightPace: bowlingRightPaceFilterList,
bowlingLeftPace: bowlingLeftPaceFilterList,
bowlingRightSpin: bowlingRightSpinFilterList,
bowlingLeftSpin: bowlingLeftSpinFilterList,
captaincyYes: captaincyYesFilterList,
captaincyMaybe: captaincyMaybeFilterList,
captaincyNo: captaincyNoFilterList
        },
        chartRoleData: 
            [
                {
                angle:  roleBatsmanFilterList.length,
                label: 'Batsman',
                subLabel: `(${roleBatsmanFilterList.length})`
            }, {
                angle:  roleBowlerFilterList.length,
                label: 'Bowler',
                subLabel: `(${roleBowlerFilterList.length})`
            }, {
                angle:  roleAllRounderFilterList.length,
                label: 'All Rounder',
                subLabel: `(${roleAllRounderFilterList.length})`
            }, {
                angle: roleWicketKeeperFilterList.length,
                label: 'Wicket-Keeper',
                subLabel: `(${roleWicketKeeperFilterList.length})`
            }],
        chartBattingData:
        
            [
                {
                    angle: battingOpenerFilterList.length,
                    label: 'Opener',
                    subLabel: `(${battingOpenerFilterList.length})`
                }, {
                    angle:  battingTopOrderFilterList.length,
                    label: 'Top Order',
                    subLabel: `(${battingTopOrderFilterList.length})`
                }, {
                    angle: battingMiddleOrderFilterList.length,
                    label: 'Middle Order',
                    subLabel: `(${battingMiddleOrderFilterList.length})`
                }, {
                    angle: battingTailFilterList.length,
                    label: 'Tail',
                    subLabel: `(${battingTailFilterList.length})`
                }
            ],
        chartBowlingData:
        [
            {
                angle: bowlingRightPaceFilterList.length,
                label: 'Right-arm Pace',
                subLabel: `(${bowlingRightPaceFilterList.length})`
            }, {
                angle:  bowlingLeftPaceFilterList.length,
                label: 'Left-arm Pace',
                subLabel: `(${bowlingLeftPaceFilterList.length})`
            }, {
                angle:  bowlingRightSpinFilterList.length,
                label: 'Right-arm Spin',
                subLabel: `(${bowlingRightSpinFilterList.length})`
            }, {
                angle:  bowlingLeftSpinFilterList.length,
                label: 'Left-arm Spin',
                subLabel: `(${bowlingLeftSpinFilterList.length})`
            }
        ],
        chartCaptaincyData:
        [
            {
                angle: captaincyYesFilterList.length,
                label: 'Yes',
                subLabel: `(${captaincyYesFilterList.length})`
            }, {
                angle:  captaincyMaybeFilterList.length,
                label: 'Maybe',
                subLabel: `(${captaincyMaybeFilterList.length})`
            }, {
                angle:  captaincyNoFilterList.length,
                label: 'No',
                subLabel: `(${captaincyNoFilterList.length})`
            }
        ]
            
        
    };
};

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        allPlayers,
        filterPlayers
    }, dispatch)
  }

export default connect(mapStateToProps, mapDispatchToProps)(Players);

