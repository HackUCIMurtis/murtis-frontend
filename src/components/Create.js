import React from 'react';
import PropType from 'prop-types';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import "../styles/create.css";

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
      <Container fluid id="create-page">
        <Form>
            <Form.Group>
              <Form.Label id="form-title">CREATE A GUIDE</Form.Label>
              <Button id="add-btn" onClick={this.handleAddLink}>+</Button>
              <Form.Control id="title" type="text" placeholder="Title"/>
              {[...Array(this.state.numLinks)].map((e, i) => {
                    return(
                      <Form.Control id="input" type="text" placeholder={"Link " + (i + 1)}/>)
                  })}
            </Form.Group>
            <Button id="submit-btn" onSubmit={this.handleAddLink} type="submit">Submit</Button>
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