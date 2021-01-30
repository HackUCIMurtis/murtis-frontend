import React, {Component} from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import {ListGroup} from 'react-bootstrap';
import "../styles/search.css";
import Guide from './Guide';
import PopularLink from './PopularLink';
// import {connect} from 'react-redux';
// import {login} from '../../store/actions/authActions';
// import {Redirect, Link} from 'react-router-dom';

class Search extends Component{
    constructor(props){
        super(props);
        this.state={popularLinks:["https://google.com", "asdfsdaf", "asdfasdf", "asdfd"]};
    }

    componentDidMount(){
        // get most popular links
        // get all guides with that query

    }
    render(){
        return(
                <Container fluid id="mainContent">
                    <Row>
                        <Col id="leftHalf">
                            <p id="popular-text">Most Popular Links</p>
                            <hr id="hr-line"></hr>
                            <ListGroup id="list">
                                {this.state.popularLinks &&
                                    this.state.popularLinks.map((link, index) => {
                                    return (
                                        <PopularLink
                                            key={index}
                                            link={link}
                                            index={index}>
                                        </PopularLink>
                                        );
                                })}
                            </ListGroup>
                        </Col>
                        <Col id="rightHalf">
                            <p id="guides-text">Guides</p>
                            <hr id="hr-line2"></hr>
                        </Col>
                    </Row>
                </Container>
        )
    }
}

export default Search;