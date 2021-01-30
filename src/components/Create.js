import React, {Component} from 'react';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import {InputGroup, Button, Form, FormControl} from 'react-bootstrap';
import "../styles/login.css";
// import {connect} from 'react-redux';
// import {login} from '../../store/actions/authActions';
// import {Redirect, Link} from 'react-router-dom';

class Create extends Component{
    constructor(props){
        super(props);
        this.state={email: "", password: ""};
    
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

 

    render(){

        return(
            <div></div>
        )
    }
}

export default Create;