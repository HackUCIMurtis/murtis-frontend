import React from 'react';
import axios from 'axios';
import PropType from 'prop-types';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import "../styles/create.css";

class Create extends React.Component {          // ["a", "ab", "abc"]    abc
  state = {
    numLinks: 4,
    title : "",
    links: {
      "link-1" : "",
      "link-2" : "",
      "link-3" : "",
      "link-4" : ""
    }
  }

  handleAddLink = (e) => {
    this.setState({
      numLinks : this.state.numLinks + 1,
      links : {...this.state.links, [e.target.id] : ""}
    })
  }

  handleLinkChange = (e) => {
    this.setState({links: {...this.state.links, [e.target.id] : e.target.value}})
  }

  handleTitleChange = (e) => {
    this.setState({title : e.target.value});
  }

  handleOnSubmit = (e) => {
    e.preventDefault();
    let links = [];
    let tags = [];
    let i;
    for (i=1; i <= this.state.numLinks; i++) {
      links.push(this.state.links["link-"+i]);
    }
    axios.post("http://localhost:4000/createLink", {creator:"keeratg@gmail.com", links: links, title: this.state.title, tags: tags})
      .then(res => {
        console.log("guide created");
      })
      .catch(e => {
        console.log("Error occurred while ");
      })
    
    
  }

  render() {
    return (
      <Container fluid id="create-page">
        <Form onSubmit={this.handleOnSubmit}>
            <Form.Group>
              <Form.Label id="form-title">CREATE A GUIDE</Form.Label>
              <Button id="add-btn" onClick={this.handleAddLink}>+</Button>
              <Form.Control onChange={this.handleTitleChange} id="title" type="text" placeholder="Title"/>
              {[...Array(this.state.numLinks)].map((e, i) => (
                <Form.Control 
                  className="link-input"
                  id={"link-" + (i + 1)}
                  type="text" 
                  placeholder={"Link " + (i + 1)}
                  onChange={this.handleLinkChange}
                />)
              )}
            </Form.Group>
            <Button id="submit-btn" type="submit">Submit</Button>
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