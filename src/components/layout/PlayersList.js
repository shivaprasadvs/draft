import React, {Component} from 'react';
import {Table, ListGroup, ListGroupItem, Image, Panel} from 'react-bootstrap';
import {ModalContainer, ModalRoute, ModalLink} from 'react-router-modal';
import * as _ from 'lodash';
import {store} from '../../index.js';

const Player = ({match}) => {
    const player = _.find(store.getState().players, {_id: match.params.id})

    if (player) {
        return (

            <div className="modal-player">
                <center><Image
                    src={player.picture}/>
                </center>
                <br/>
                <Table condensed hover>
                    <tbody >
                        <tr>
                            <td className="modal-label">Name</td>
                            <td className="modal-detail">{player.firstName} {player.lastName}</td>
                        </tr>
                        <tr>
                            <td className="modal-label">Age</td>
                            <td className="modal-detail">{days_between(player.dateOfBirth)} years</td>
                        </tr>
                        <tr>
                            <td className="modal-label">Email</td>
                            <td className="modal-detail">{player.email}</td>
                        </tr>
                        <tr>
                            <td className="modal-label">Role</td>
                            <td className="modal-detail">{player.specialityRole}</td>
                        </tr>
                        <tr>
                            <td className="modal-label">Batting Style</td>
                            <td className="modal-detail">{player.battingStyle} {player.battingPosition}</td>
                        </tr>
                        <tr>
                            <td className="modal-label">Bowling Style</td>
                            <td className="modal-detail">{player.bowlingStyle}</td>
                        </tr>
                        <tr>
                            <td className="modal-label">Captaincy</td>
                            <td className="modal-detail">{player.interestInCaptaincy}</td>
                        </tr>

                    </tbody>
                </Table>
            </div>

        )

    } else {
        return (
            <div>nothing found</div>
        )
    }

}

export const days_between = (date2) => {

    // The number of milliseconds in one day
    const ONE_DAY = 1000 * 60 * 60 * 24

    // Convert both dates to milliseconds
    const date1_ms = new Date().getTime()
    const date2_ms = new Date(date2).getTime()

    // Calculate the difference in milliseconds
    const difference_ms = Math.abs(date1_ms - date2_ms)

    const difference_days = Math.floor(difference_ms / ONE_DAY)

    const difference_years = Math.floor(difference_days / 365)
    // Convert back to days and return
    return difference_years

}

class PlayersList extends Component {

    render() {
        return (
            <Panel header={< h3 > {
                this.props.title
            } </h3>}>
                <ListGroup>

                    {store
                        .getState()
                        .filtered
                        .data
                        .map(player => <ListGroupItem key={player._id}>
                            <ModalLink path={`/players/${player._id}`}>
                                {player.firstName} {player.lastName}
                            </ModalLink>
                            <span className="sub-label">  &nbsp;&nbsp;{(() => {
                                    if (this.props.field === 'Batting') 
                                        return player.battingStyle
                                    else if (this.props.field === 'Role') 
                                        return days_between(player.dateOfBirth) + " years"
                                    else if (this.props.field === 'Bowling')
                                    return player.bowlingStyle.replace(/Right-arm |Left-arm /gi, "")
                                    else if (this.props.field === 'Captain')
                                    return (player.specialityRole + " (" + days_between(player.dateOfBirth) + " years)")
                                })()}</span>
                        </ListGroupItem>)}
                    <ModalContainer/>
                    <ModalRoute path='/players/:id' component={Player} parentPath='/players'/>
                </ListGroup>
            </Panel>
        );
    }
}

export default PlayersList;