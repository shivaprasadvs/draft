import React, {Component} from 'react';
import {Grid, Row, Col, Button, Jumbotron} from 'react-bootstrap';
import {NavLink} from 'react-router-dom';
class Welcome extends Component {
    render() {
        return (
<div>
            <Jumbotron className="jumbo-one"> 
                <Grid>
                    <Row  className="show-grid">
                        <Col xs={1}></Col>
                        <Col xs={9}>

                            <h1 className="jumbo-h1">Major Cricket League - Draft</h1> 
                            <h2>St. Louis 2017</h2>
                            <p>
                                <NavLink to="/register" activeClassName="selected">
                                    <Button bsStyle="danger" bsSize="large">Register</Button>
                                </NavLink>
                            </p>
                        </Col>
                    </Row>
                </Grid>
            </Jumbotron>

            <Jumbotron className="jumbo-two">
                <Grid>
                    <Row  className="show-grid">
                        <Col xs={1}></Col>
                        <Col xs={9}>

                            <h1>Registered Players Information</h1>
                            <p>
                                <NavLink to="/players" activeClassName="selected">
                                    <Button bsStyle="success" bsSize="large">Players</Button>
                                </NavLink>
                            </p>
                        </Col>
                    </Row>
                </Grid>
            </Jumbotron>
 
            </div>
        );
    }
}

export default Welcome;