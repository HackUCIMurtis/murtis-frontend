import React, {Component} from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import {InputGroup, Button, Form, FormControl} from 'react-bootstrap';
import "../styles/login.css";
import Navigation from './Navigation';
import axios from 'axios';
import {Redirect, Link} from 'react-router-dom';
// import {connect} from 'react-redux';
// import {login} from '../../store/actions/authActions';
// import {Redirect, Link} from 'react-router-dom';

class Login extends Component{
    constructor(props){
        super(props);
        this.state={email:"", password:"", user:"", redirect:false};
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e){
        this.setState({
            [e.target.id]: 
            e.target.value
        })
    }

    handleSubmit(e){
        e.preventDefault();
        //console.log("SUBMITTED")
        //console.log(this.state)
        axios.post("http://0.0.0.0:4000/login", {email:this.state.email, password:this.state.password}).then
            (res => {
                console.log(res)
                this.setState({
                    redirect: true,
                    user: res.data
                  })
            }).catch(e => {
                console.log("Error occurred while logging in")
            })
    }

    renderRedirect = () => {
        if (this.state.redirect) {
          return  <Redirect
                    to={{
                    pathname: "/",
                    state: { user: this.state.user }
                    }}
                 />
        }
      }

    render(){

        return(
            <Container fluid id="main-body">
                {this.renderRedirect()}
                <Form onSubmit={this.handleSubmit} id="login-form">
                    <Form.Group >
                        <Form.Label id="email-label">Email address</Form.Label>
                        <Form.Control id="email" onChange={this.handleChange} type="email" placeholder="Enter email" />
                        <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                        </Form.Text>
                        <Form.Label id="password-label">Password</Form.Label>
                        <Form.Control id="password" onChange={this.handleChange} type="password" placeholder="Password" />
                    </Form.Group>
                    <Button id="login-in-button" variant="success" type="submit">
                        Login
                    </Button>
                </Form>
            </Container>
        )
    }
}

export default Login;