import React, { Component } from 'react';
import { Row, Col, Container, Button} from 'react-bootstrap';
import {Link, NavLink} from 'react-router-dom';

const splashStyles = {
  width:"100vh",
  height:"100vh",
  backgroundColor:"#03071E"
};

export class Splash extends Component {
  render() {
    return (
      <Container fluid
        style={splashStyles}>
        <Row>
        <Col>

        </Col>

        </Row>
      </Container>
    );
  }

}

export default Splash;
