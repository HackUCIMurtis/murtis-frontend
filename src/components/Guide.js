import React, {Component} from 'react';
import { Row, Col, Container, Button} from 'react-bootstrap';
import {Dropdown, ButtonGroup, DropdownButton} from 'react-bootstrap';
import {Link, NavLink} from 'react-router-dom'
import "../styles/guide.css";
import { linkSync } from 'fs';

export class Guide extends Component{
    constructor(props){
        super(props);
        this.showSaved = this.showSaved.bind(this)
        this.showNotSaved = this.showNotSaved.bind(this)
        this.getGuide = this.getGuide.bind(this)
    }

    componentDidMount(){
      // make axios call here to get the title/links
      this.setState({title:"React Guide"})
    }

    showSaved(){
      return  <Button variant="warning" size="sm" active>Saved</Button>
    }

    showNotSaved(){
      return  <Button variant="outline-warning" size="sm" disabled>Save</Button>
    }

    getGuide(){
      return (
        <DropdownButton
          title={this.props.title + " by " + this.props.author}
          id="guideStyle"
          variant="outline-danger"
          >
            {this.props.links &&
              this.props.links.map((link, index) => {
                return (
                  <Dropdown.Item
                    id = "linkStyle"
                    href = {link}
                    target = "_blank"
                    rel = "noopener noreferrer">
                    {index+1}) {this.props.descriptions[index]}
                  </Dropdown.Item>
                  );
              })}
        </DropdownButton>);
    }

    render(){
      if(this.props.showSaved) {
        let saveButton;
        if(this.props.isSaved){
          saveButton = this.showSaved()
        } else {
          saveButton = this.showNotSaved()
        }
        return (
          <Container>
            <Row xs={16} md={8}>
              <Col >
              {this.getGuide()}
              </Col>
              <Col xs={2} md={2}>
                {saveButton}
              </Col>
            </Row>

          </Container>)
      }
      return this.getGuide()
    }
}

export default Guide;
