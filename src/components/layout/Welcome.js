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

                            <h1 className="jumbo-h1">Major Cricket League - Draft</h1> 
                            <p>St. Louis 2017</p>
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