import React, {Component} from 'react';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import {InputGroup, Button, Form, FormControl} from 'react-bootstrap';
import "../styles/login.css";
// import {connect} from 'react-redux';
// import {login} from '../../store/actions/authActions';
// import {Redirect, Link} from 'react-router-dom';

// class Create extends Component{
//     constructor(props){
//         super(props);
//         this.state={email: "", password: "", links: ""};
    
//         this.onSignIn = this.onSignIn.bind(this);
//     }

//     handleChange(e){
//         this.setState({
//             [e.target.id]: 
//             e.target.value
//         })
//     }

//     handleSubmit(e){
//         e.preventDefault();
//         this.props.login(this.state);
//     }

 

//     render(){

//         return(
//             <div></div>
//         )
//     }
// }

/* <div id="wrapper">
  <div class="container">
    <div class="row">
      <article class="col-md-12">
        <h1 class="text-center">Guides List</h1>
        <div id="create" class="create-container">
        </div>
      </article>
    </div>
  </div>
</div> */ 
// ^^^^ add html to make it work on the codepen

var Create = React.createClass({
    getInitialState : function() {
      return (
        {
          links : {
            'link-1' : 'link1',
            'link-2' : 'link2'
          }
        }
       )
      },
      addLink : function(link) {
       //create a unike key for each new link item
       var timestamp = (new Date()).getTime();
       // update the state object
       this.state.links['link-' + timestamp ] = link;
       // set the state
       this.setState({ links : this.state.links });
      },
      render: function() {
        return (
          <div className="component-wrapper">
            <Linklist links={this.state.links} />
            <AddLinkForm addLink={this.addLink} />
          </div>
        );
       }
      });
  
      var Linklist = React.createClass({
        render : function() {
          return (
            <div className="container">
              <ul className="list-group text-center">
                {
                  Object.keys(this.props.links).map(function(key) {
                    return <li className="list-group-item list-group-item-info">{this.props.links[key]}</li>
                  }.bind(this))
                }
              </ul>
             </div>
           );
         }
       });
  
      var AddLinkForm = React.createClass({
        createLink : function(e) {
          e.preventDefault();
          //get the link object name from the form
          var link = this.refs.linkName.value;
          //if we have a value
          //call the addLink method of the Create component
          //to change the state of the link list by adding an new item
          if(typeof link === 'string' && link.length > 0) {
            this.props.addLink(link);
            //reset the form
            this.refs.linktForm.reset();
          }
         },
         render : function() {
          return(
            <form className="form-inline" ref="linkForm" onSubmit={this.createLink}>
            <div className="form-group">
              <label for="linkItem">
                Link: 
                <input type="text" id="linkItem" placeholder="e.x.lemmon" ref="linkName" className="form-control" />
              </label>
            </div>
            <button type="submit" className="btn btn-primary">Add Link</button>
           </form>
          )
         }
        });
  
        React.render(
          <Create />,
          document.getElementById('create')
        );

export default Create;