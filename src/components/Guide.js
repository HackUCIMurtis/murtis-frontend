import React, {Component} from 'react';
import { Row, Col, Container} from 'react-bootstrap';
import {Dropdown, ButtonGroup, DropdownButton} from 'react-bootstrap';
import {Link, NavLink} from 'react-router-dom'
import "../styles/guide.css";
import { linkSync } from 'fs';

class Guide extends Component{
    constructor(props){
        super(props);
        this.state={links: ["https://react-bootstrap.github.io/getting-started/introduction",
        "https://react-bootstrap.github.io/getting-started/introduction", "https://react-bootstrap.github.io/getting-started/introduction",
        "https://react-bootstrap.github.io/getting-started/introduction"], title:""};
    }

    componentDidMount(){
      // make axios call here to get the title/links
      this.setState({title:"React Guide"})
    }

    render(){
        return(
          <Container>
            <DropdownButton
            title={this.state.title}
            id="guideStyle"
            >
              {this.state.links &&
                this.state.links.map((link, index) => {
                  return (
                    <Dropdown.Item
                      id = "linkStyle"
                      href = {link}
                      target = "_blank" 
                      rel = "noopener noreferrer"
                    >
                      Link {index+1} : Click here
                    </Dropdown.Item>
                    );
                })}
            </DropdownButton>
          </Container>
        )
    }
}

export default Guide;