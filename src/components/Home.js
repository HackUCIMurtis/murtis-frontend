import React, {Component} from 'react';
import { Row, Col, Container, Button} from "react-bootstrap"
import axios from 'axios';
import { Guide } from './Guide.js';
import Navigation from './Navigation';


const mainStyles = {
  backgroundColor:"#03071E",
  height: "100vh",
};

const tableHeader = {
  color: "#FFBA08",
  font: "Roboto",
  paddingTop: 10,
}
const hrStyle = {
  borderColor: "#FFBA08",
}

export class Home extends Component{
    constructor(props){
        super(props);
        this.state={
          email: "",
          saved: [
            {title:"SAVED_1", author:"AUTHOR_1", links: ["LINK_1"], descriptions: ["DESC_1"]},
            {title:"SAVED_2", author:"AUTHOR_2", links: ["LINK_2"], descriptions: ["DESC_1"]},
            {title:"SAVED_3", author:"AUTHOR_3", links: ["LINK_3"], descriptions: ["DESC_1"]},
            {title:"SAVED_4", author:"AUTHOR_4", links: ["LINK_4"], descriptions: ["DESC_1"]}
          ],
          guides: [
            {title:"TEST_TITLE_1", author:"AUTHOR_1", links: ["LINK_1"], descriptions: ["DESC_1"]},
            {title:"TEST_TITLE_2", author:"AUTHOR_2", links: ["LINK_2"], descriptions: ["DESC_1"]},
            {title:"TEST_TITLE_3", author:"AUTHOR_3", links: ["LINK_3"], descriptions: ["DESC_1"]},
            {title:"TEST_TITLE_4", author:"AUTHOR_4", links: ["LINK_4"], descriptions: ["DESC_1"]}
          ],
        };
        this.updateMyHome = this.updateMyHome.bind(this)
    }



    updateMyHome() {
      axios.post("http://localhost:4000/guides", {email:"keeratg@gmail.com"}).then
      (res => {
        console.log(res.data)
        this.setState({
          saved:res.data.likes,
          guides:res.data.guides,
        })
      }).catch(e => {
        console.log("Error occurred while getting your saved and created guides: ", e)
      })

    }

    componentDidMount() {
      console.log("mountin")
      this.updateMyHome()
    }


    render(){

        return(
            <Container fluid
              style={mainStyles}>
              <Navigation />
              <Row>
                <Col>
                  <Container style={tableHeader}>
                    SAVED GUIDES
                  </Container>
                  <hr style={hrStyle}/>
                  {this.state.saved.map((data, index) =>
                  <Guide
                    title={data.title}
                    links={data.links}
                    creator={data.creator}
                    descriptions={data.descriptions}
                    showSaved={true}
                    isSaved={true}>
                  </Guide>)}
                </Col>
                <Col>
                  <Container  style={tableHeader} horizontal>
                    MY GUIDES {" "}
                    <Button variant="outline-light" style={{marginLeft:"20px", borderWidth:"1"}}>+</Button>
                  </Container>
                  <hr style={hrStyle}/>
                  {this.state.guides.map((data, index) =>
                  <Guide
                    title={data.title}
                    links={data.links}
                    creator={data.creator}
                    descriptions={data.descriptions}
                    color={"DC2F02"}
                    showSaved={false}>
                  </Guide>)}
                </Col>
              </Row>
            </Container>
        )
    }
}

export default Home;
