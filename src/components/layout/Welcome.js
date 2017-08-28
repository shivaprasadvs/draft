import React, {Component} from 'react';
import {Grid, Row, Col, Button, Jumbotron} from 'react-bootstrap';
import {NavLink} from 'react-router-dom';
class Welcome extends Component {
    render() {
        return (

            <Jumbotron>
                <Grid>
                    <Row  className="show-grid">
                        <Col xs={1}></Col>
                        <Col xs={9}>

                            <h1>Major Cricket League </h1>
                            <h2>St. Louis - Draft 2017</h2>

                            <p>
                                <NavLink to="/register" activeClassName="selected">
                                    <Button bsStyle="danger" bsSize="large">Register</Button>
                                </NavLink>
                            </p>
                        </Col>
                    </Row>
                </Grid>
            </Jumbotron>

        );
    }
}

export default Welcome;