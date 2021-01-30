import React, {Component} from 'react';
import {Navbar, Nav, Form, FormControl, Button, NavDropdown, Image, NavItem} from 'react-bootstrap'
import {Link, NavLink} from 'react-router-dom'
import Logo from '../Murtislogoonly.png'
import "../styles/navigation.css";


class Navigation extends Component{
    constructor(props){
        super(props);
        this.state = {searchquery: ""}
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleSubmit(e){
        e.preventDefault();
        console.log(this.state.searchquery)
    }

    handleChange(e){
        this.setState({
            [e.target.id]:
            e.target.value
        })
        //console.log(this.state.searchquery)
    }


    render(){

        return(
            <Navbar className="color-nav" expand="lg">
                <Navbar.Brand>
                    <Image id="logo" src={Logo} />
                </Navbar.Brand>
                <Navbar.Brand >
                    Murtis
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        Home
                    </Nav>
                </Navbar.Collapse>
                <Form inline onSubmit={this.handleSubmit} >
                    <FormControl id="searchquery" type="text" placeholder="Search Guide" onChange={this.handleChange} />
                    <Button id="submit-button" variant="outline-success" type="submit">Search</Button>
                </Form>
            </Navbar>

        )
    }
}

export default Navigation