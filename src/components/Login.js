import React, {Component} from 'react';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import {InputGroup, Button, Form, FormControl} from 'react-bootstrap';
import "../styles/login.css";
// import {connect} from 'react-redux';
// import {login} from '../../store/actions/authActions';
// import {Redirect, Link} from 'react-router-dom';

class Login extends Component{
    constructor(props){
        super(props);
        this.state={email: "", password: ""};
        // this.handleChange = this.handleChange.bind(this);
        // this.handleSubmit = this.handleSubmit.bind(this);
        this.onSignIn = this.onSignIn.bind(this);
    }

    handleChange(e){
        this.setState({
            [e.target.id]: 
            e.target.value
        })
    }

    handleSubmit(e){
        e.preventDefault();
        this.props.login(this.state);
    }

    onSignIn(googleUser) {
        var profile = googleUser.getBasicProfile();
        console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
        console.log('Name: ' + profile.getName());
        console.log('Image URL: ' + profile.getImageUrl());
        console.log('Email: ' + profile.getEmail()); // This is null if the 'email' scope is not present.
      }

    render(){

        return(
            // <Form onSubmit={this.handleSubmit} id="login-form">
            //     <Form.Group >
            //         <Form.Label id="email-label">Email address</Form.Label>
            //         <Form.Control id="email" onChange={this.handleChange} type="email" placeholder="Enter email" />
            //         <Form.Text className="text-muted">
            //             We'll never share your email with anyone else.
            //         </Form.Text>
            //         <Form.Label id="password-label">Password</Form.Label>
            //         <Form.Control id="password" onChange={this.handleChange} type="password" placeholder="Password" />
            //     </Form.Group>
            //     <Button id="login-in-button" variant="success" type="submit">
            //         Login
            //     </Button>
            // </Form>
            
            <div className="g-signin2" data-onsuccess="onSignIn"></div>
        )
    }
}

export default Login;