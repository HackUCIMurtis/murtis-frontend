import React, {Component} from 'react';
import { Row, Col, Container, Jumbotron, ButtonGroup, Image } from 'react-bootstrap';
import {InputGroup, Button, Form, FormControl} from 'react-bootstrap';
import "../styles/login.css";
import Navigation from './Navigation';
import axios from 'axios';
import {Redirect, Link} from 'react-router-dom';
import Logo from '../Murtislogoonly.png';
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
        console.log(this.state)
        axios.post("http://localhost:4000/login", {email:this.state.email, password:this.state.password}).then
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
          <Container fluid >
            <Row>
              <Col>
                <div className = "murtislogo">
                  <Image fluid src = {Logo}></Image>
                </div>
              </Col>
              <Col style={{backgroundColor:"#11151C", height:"100vh", font:"Roboto"}}>
                    {this.renderRedirect()}
                    <Jumbotron fluid style={{backgroundColor:"#11151C", color:"white"}}>
                      <Container>
                        <h1 style={{textSize:"100dp", textAlign:'left', fontFamily:'Montserrat', fontWeight:'bold', fontSize: 125}}>Murtis</h1>
                        <p style={{textSize:"100dp", textAlign:'left', fontFamily:'Montserrat', fontSize: 45}}>
                          Guides for Everyone <br/> by Everyone
                        </p>
                      </Container>
                    </Jumbotron>

                    <Form onSubmit={this.handleSubmit} id="login-form" >
                        <Form.Group >
                          <Row>
                            <Form.Label id="email-label">Email address</Form.Label>
                          </Row>
                          <Row>
                            <Form.Control id="email" onChange={this.handleChange} type="email" placeholder="" />
                          </Row>
                            <Form.Text className="text-muted">
                            </Form.Text>
                          <Row>
                            <Form.Label id="password-label">Password</Form.Label>
                          </Row>
                          <Row>
                            <Form.Control id="password" onChange={this.handleChange} type="password" placeholder="" />
                          </Row>
                        </Form.Group>   
                        <Row>
                          <ButtonGroup horizontal>
                            <Button id="login-in-button" variant="danger" type="submit">
                                Login
                            </Button>
                            <Button id="register-button" variant="success" type="submit">
                                Register
                            </Button>
                          </ButtonGroup>
                        </Row>
                    </Form>
              </Col>
            </Row>
          </Container>

        )
    }
}

export default Login;
