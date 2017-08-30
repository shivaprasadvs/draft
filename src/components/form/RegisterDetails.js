import React, { Component } from 'react';
import {Image, Table} from 'react-bootstrap';
import {days_between} from '../layout/PlayersList';

class RegisterDetails extends Component {
    render() {
        return (
            <div>
            <center><Image
            src={this.props.player.picture}/>
        </center>
        <br/>
        <Table condensed hover>
            <tbody >
                <tr>
                    <td className="modal-label">Name</td>
                    <td className="modal-detail">{this.props.player.firstName} {this.props.player.lastName}</td>
                </tr>
                <tr>
                    <td className="modal-label">Age</td>
                    <td className="modal-detail">{days_between(this.props.player.dateOfBirth)} years</td>
                </tr>
                <tr>
                    <td className="modal-label">Email</td>
                    <td className="modal-detail">{this.props.player.email}</td>
                </tr>
                <tr>
                    <td className="modal-label">Role</td>
                    <td className="modal-detail">{this.props.player.specialityRole}</td>
                </tr>
                <tr>
                    <td className="modal-label">Batting Style</td>
                    <td className="modal-detail">{this.props.player.battingStyle} {this.props.player.battingPosition}</td>
                </tr>
                <tr>
                    <td className="modal-label">Bowling Style</td>
                    <td className="modal-detail">{this.props.player.bowlingStyle}</td>
                </tr>
                <tr>
                    <td className="modal-label">Captaincy</td>
                    <td className="modal-detail">{this.props.player.interestInCaptaincy}</td>
                </tr>

            </tbody>
        </Table>
        </div>
        )
    }
}

export default RegisterDetails;