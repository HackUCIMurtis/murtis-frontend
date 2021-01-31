import React, {Component} from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import {ListGroup} from 'react-bootstrap';
import "../styles/search.css";
import Guide from './Guide';
import PopularLink from './PopularLink';
import axios from 'axios';
import Navigation from './Navigation';

// import {connect} from 'react-redux';
// import {login} from '../../store/actions/authActions';
// import {Redirect, Link} from 'react-router-dom';

class Search extends Component{
    constructor(props){
        super(props);
        this.state={
          popularLinks:["https://google.com", "asdfsdaf", "asdfasdf", "asdfd"],
          guides:[],
          query:""
        };
        this.updateSearchResults = this.updateSearchResults.bind(this);
    }

    updateSearchResults() {
      axios.get("http://localhost:4000/api", {keyword:this.state.query}).then
          (res => {
              console.log(res)
              this.setState({
                  popularLinks:res.data.popularLinks,
                  guides:res.data.guides
              })
          }).catch(e => {
              console.log("Error occurred while logging in")
      })
    }

    componentDidMount(){
        // get most popular links
        // get all guides with that query
        this.updateSearchResults()
    }

    render(){
        return(
                <Container fluid id="mainContent">
                  <Navigation />
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
                            {this.state.guideLinks &&
                                    this.state.guideLinks.map((link, index) => {
                                    return (
                                        <Guide
                                            key={index}
                                            links={this.state.popularLinks}
                                            index={index}>
                                        </Guide>
                                        );
                                })}

                        </Col>
                    </Row>
                </Container>
        )
    }
}

export default Search;
