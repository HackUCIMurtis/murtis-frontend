import React, {Component} from 'react';
import { Row, Col, Container, FormControl, InputGroup, Form, Button } from 'react-bootstrap';
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
          searchTerm:"",
          email:"keeratg@gmail.com"
        };
        this.updateSearchResults = this.updateSearchResults.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e){
        this.setState({
            [e.target.id]:
            e.target.value
        })
        this.updateSearchResults()
    }

    updateSearchResults() {
      axios.post("http://localhost:4000/search", {keyword:this.state.searchTerm, email:this.state.email}).then
          (res => {
              console.log(res)
              this.setState({
                  //popularLinks:res.data.popularLinks,
                  guides:res.data
              })
              console.log(this.state.guides)
          }).catch(e => {
              console.log("Error occured while searching: ", e)
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
                  <Navigation updateFunc={this.updateSearchTerm}/>

                    <InputGroup className="mb-3" style={{width:"50%", margin:"auto"}}>
                      <FormControl
                        placeholder="Search"
                        onChange={this.handleChange}
                        id="searchTerm"/>
                    </InputGroup>

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
                            {this.state.guides &&
                                    this.state.guides.map((data, index) => {
                                    return (
                                      <Guide
                                        title={data.data.title}
                                        links={data.data.links}
                                        creator={data.data.creator}
                                        descriptions={["LINKS"]}
                                        color={"#DC2F02"}
                                        showSaved={true}
                                        isSaved={false}>
                                      </Guide>);
                                })}

                        </Col>
                    </Row>
                </Container>
        )
    }
}

export default Search;
