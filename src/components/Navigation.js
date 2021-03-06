import React, {Component} from 'react';
import {Navbar, Nav, Form, FormControl, Button, NavDropdown, Image, NavItem} from 'react-bootstrap'
import {Link, NavLink, Redirect} from 'react-router-dom'
import Logo from '../Murtislogoonly.png'
import Logohover from '../mutrislogohover.png'
import "../styles/navigation.css";
import { browserHistory } from 'react-router-dom';


class Navigation extends Component{
    constructor(props){
        super(props);
        this.state = {searchquery: "", redirect:false}
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleSubmit(e){
        e.preventDefault();
        this.setState({
            redirect: true
          })
        console.log(this.state.searchquery)
    }

    handleChange(e){
        this.setState({
            [e.target.id]:
            e.target.value
        });
        this.props.updateFunc(e.target.value);
        //console.log(this.state.searchquery)
    }

    renderRedirect = () => {
        if (this.state.redirect) {
          console.log("renderRedirect");
          return  <Redirect
                    to={{
                    pathname: "/search",
                    state: { searchquery: this.state.searchquery }
                    }}/>
        }
      }


    render(){

        return(
            <div>
            {this.renderRedirect()}
            <Navbar className="color-nav" expand="lg">
                <Navbar.Brand>
                    <Image id="logo" src={Logo}
                    onMouseOver={e => (e.currentTarget.src = Logohover)}
                    onMouseOut={e => (e.currentTarget.src = Logo)}
                    />
                </Navbar.Brand>
                <Navbar.Brand style={{color:"white"}}>
                    Murtis
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                      <Link to="/home">
                        Home
                      </Link>
                      <Link style={{paddingLeft:"20px"}} to="/search">
                        Search
                      </Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
            </div>
        )
    }
}

export default Navigation
