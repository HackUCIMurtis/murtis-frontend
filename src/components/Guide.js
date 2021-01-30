import React, {Component} from 'react';
import { Row, Col, Container} from 'react-bootstrap';
import {Dropdown, ButtonGroup, DropdownButton} from 'react-bootstrap';
import {Link, NavLink} from 'react-router-dom'
import "../styles/guide.css";
import { linkSync } from 'fs';

export class Guide extends Component{
    constructor(props){
        super(props);
    }

    componentDidMount(){
      // make axios call here to get the title/links
      this.setState({title:"React Guide"})
    }

    render(){
        return(
          <Container>
            <DropdownButton
            title={this.props.title + " by " + this.props.author}
            id="guideStyle">
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
            </DropdownButton>
          </Container>
        )
    }
}

export default Guide;
