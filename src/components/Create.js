import React from 'react';
import PropType from 'prop-types';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import "../styles/login.css";

class Create extends React.Component {
  state = {
    numLinks: 4
  }

  handleAddLink = (e) => {
    this.setState({numLinks : this.state.numLinks + 1})
  }

  handleOnSubmit = (e) => {
    e.preventDefault();
  }

  render() {
    return (
      <Container>
        <Form>
          <Row>
            <Form.Group>
              <Form.Control type="text" placeholder="Title"/>
            </Form.Group>
          </Row>
          <Row>
            {[...Array(this.state.numLinks)].map((e, i) => 
            <Form.Group>
              <Form.Control type="text" placeholder={"Link " + (i + 1)}/>
            </Form.Group>)}
            <Button onClick={this.handleAddLink}>+</Button>
          </Row>
          <Row>
            <Button onSubmit={this.handleAddLink} type="submit">Submit</Button>
          </Row>
        </Form>
      </Container>
    )
  }
}

// PropTypes
Create.propType = {
  email: PropType.string.isRequired,
}


export default Create;