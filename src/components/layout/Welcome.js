import React, {Component} from 'react';
import {Grid, Row, Col, Button} from 'react-bootstrap';
import {NavLink} from 'react-router-dom';
class Welcome extends Component {
    render() {
        return (
            <Grid>

                <Row className="show-grid">
                    <Col xs={1} md={3}/>
                    <Col xs={10} md={6}>
                        <h2>Midwest Cricket League Draft 2017</h2>

                        <NavLink to="/register" activeClassName="selected">
                            <Button bsStyle="primary" bsSize="large">Register</Button>
                        </NavLink>
                    </Col>
                    <Col xs={1} md={3}/>

                </Row>
            </Grid>
        );
    }
}

export default Welcome;