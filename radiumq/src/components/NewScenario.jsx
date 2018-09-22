import React, { Component } from 'react';
import{Badge,Col,Button,Form,FormGroup,ControlLabel,FormControl} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

class NewScenario extends Component {
    //state = {  }
    render() { 
        return ( 
                <div className = "container">
                <Header/>
                <div className = "row" style={{marginLeft:"0px"}}>
                <Col  md={2} >
                <div class="small-card card-body">
                        <center>
                            <Link to ="/">
                                <p>Projects</p>                               
                                <hr/>
                                  <Badge>46</Badge>
                            </Link>
                        </center>
                    </div> 
                </Col>
                <Col  md={2}>
                    <div class="small-card card-body">
                        <center>
                            <Link to ="/UDF">
                                <p>UDF</p> 
                                <hr/>
                                <Badge>10</Badge>                               
                            </Link>
                        </center>
                    </div>                       
                </Col>
                <Col  md={2}>
                    <div class="small-card card-body" style = {{width:"100px"}}>
                        <center>
                            <Link to ="/testcase">
                                <p>Test Cases</p> 
                                <hr/>
                                <Badge>13</Badge>                                
                            </Link>
                        </center>
                    </div> 
                </Col>
                <Col  md={2}>
                    <div class="small-card card-body"style = {{width:"100px"}}>
                        <center>
                            <Link to ="/Scenario">
                                <p>Scenario</p> 
                                <hr/>
                                <Badge>13</Badge>                                 
                            </Link>
                        </center>
                    </div> 
                </Col>
                <Col  md={2}>
                    <div class="small-card card-body">
                        <center>
                            <Link to ="/Exe">
                                <p> Profile</p> 
                                <hr/>
                                <Badge>13</Badge>                                 
                            </Link>
                        </center>
                    </div> 
                </Col>
                <Col  md={2}>
                    <div class="small-card card-body" style = {{width:"100px"}}>
                        <center>
                            <Link to ="/">
                                <p> Details</p> 
                                <hr/>
                                <Badge>13</Badge>                                 
                            </Link>
                        </center>
                    </div> 
                </Col>                
            </div> 
            <div className = "row">
                <Col md={12} sm={12} xs={12}>
                <div className="Banner" style={{marginLeft:"0px"}}>
                        <div className = "row">
                            <Col md={4} sm={4} xs={6} >
                                <h4 style={{textAlign:"left",marginLeft:"10px"}}>New Scenario</h4>
                            </Col>
                        </div>
                </div>
            </Col>  
            <div className="row">
            <Form horizontal>                  
              <FormGroup controlId="formHorizontalText">  
                   <Col componentClass={ControlLabel} md={2} sm={2} >
                    <p>Name</p>
                    </Col>                         
                    <Col sm={8} md={6}>
                    <FormControl type="text" placeholder="Name" required />
                        </Col>
              </FormGroup>
              <FormGroup controlId="formHorizontalText">
                <Col componentClass={ControlLabel} sm={3} md={2}>
                <p>Description</p>
                </Col>                           
                <Col sm={8} md={6}>
                <FormControl type="text" placeholder="Description" required />
               </Col>
             </FormGroup>
            </Form>
            </div>    
        </div>
                    <Footer/>               
                </div>
         );
    }
}
 
export default NewScenario;