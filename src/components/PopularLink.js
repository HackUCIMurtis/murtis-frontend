import React, {Component} from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import {ListGroup} from 'react-bootstrap';
import "../styles/popularLink.css";
import Guide from './Guide'


class PopularLink extends Component{
    constructor(props){
        super(props);
    }

    componentDidMount(){
        // get most popular links
        // get all guides with that query

    }
    render(){
        return(
            <ListGroup.Item
                action  
                id="list-item"
                href = {this.props.link}
                target = "_blank" 
                rel = "noopener noreferrer"
            >
                <p id="link-text">{this.props.index+1}) {this.props.link}</p>
            </ListGroup.Item>
        )
    }
}

export default PopularLink;