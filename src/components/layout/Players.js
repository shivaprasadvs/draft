import React, {Component} from 'react';
import axios from 'axios';
import {ListGroup, ListGroupItem, Modal, Button} from 'react-bootstrap';
import { ModalRoute } from 'react-router-modal';

class Players extends Component {
    constructor(props) {
        super(props);

        this.state = {
            players: [],
            showModal: false
        };
    }

    componentDidMount = () => {
        var self = this;
        axios
            .get('/all-players')
            .then(function (response) {
                console.log(response);
                self.setState({players: response.data});
            })
            .catch(function (error) {
                console.log(error);
            });
    }
    render() {
        return (
            <ListGroup>

                {this
                    .state
                    .players
                    .map(player => <div key={player._id}>
                        <ListGroupItem>{player.firstName} {player.lastName}</ListGroupItem>
                       
                    </div>)}
            </ListGroup>
        );
    }
}

export default Players;