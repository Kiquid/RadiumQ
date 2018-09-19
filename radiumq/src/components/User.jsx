import React, { Component } from 'react';
import 
{
    Col,Form,
    FormGroup,FormControl,
    Checkbox,Button
} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import Admin from './Admin';
import './Admin.css';
import './User.css';
class User extends Component {
   // state = {  }
    render() { 
        return ( 
        
          <div className = "container">
            <div className = "row">
                <Col  md={2} mdOffset={1}>
                    <div class="small-card card-body">
                        <center>
                            <Link to ="/">
                                <h4 style = {{marginTop:"20px"}}>Projects</h4>                               
                               
                            </Link>
                        </center>
                    </div> 
                </Col>
                <Col  md={2}>
                    <div class="small-card card-body">
                        <center>
                            <Link to ="/UDF">
                                <h4 style = {{marginTop:"20px"}}>UDF</h4>                                
                            </Link>
                        </center>
                    </div>                       
                </Col>
                <Col  md={2}>
                    <div class="small-card card-body" style = {{width:"100px"}}>
                        <center>
                            <Link to ="/testcase">
                                <h4 style = {{marginTop:"20px"}}>Test Cases</h4>                                
                            </Link>
                        </center>
                    </div> 
                </Col>
                <Col  md={2}>
                    <div class="small-card card-body"style = {{width:"100px"}}>
                        <center>
                            <Link to ="/">
                                <h4 style = {{marginTop:"20px"}}>Scenario</h4>                                
                            </Link>
                        </center>
                    </div> 
                </Col>
                <Col  md={2}>
                    <div class="small-card card-body" style = {{width:"100px"}}>
                        <center>
                            <Link to ="/Exe">
                                <h4 style = {{marginTop:"20px"}}>Execution Profile</h4>                                
                            </Link>
                        </center>
                    </div> 
                </Col>
                <Col  md={2}>
                    <div class="small-card card-body" style = {{width:"100px"}}>
                        <center>
                            <Link to ="/">
                                <h4 style = {{marginTop:"20px"}}>Show Details</h4>                                
                            </Link>
                        </center>
                    </div> 
                </Col>                
            </div>
            <div className = "row">
                <Col md= {4} mdOffset={1}>
                    <div className = "medium-card-color">
                     <p  className = "medium-card-color-light" style = {{padding:"15px"}}>Create a New user</p>
                  
                     <Form horizontal>
                        <FormGroup controlId="formHorizontalText" 
                        style ={{paddingLeft:"45px"}}>                           
                            <Col sm={10} md={10}>
                            <FormControl type="text" placeholder="User ID" required />
                            </Col>
                        </FormGroup>
                        <FormGroup controlId="formHorizontalPassword" 
                        style ={{paddingLeft:"45px"}}>                           
                            <Col sm={10} md={10}>
                            <FormControl type="password" placeholder="Password" required />
                            </Col>
                        </FormGroup>
                        <FormGroup controlId="formHorizontalPassword" 
                        style ={{paddingLeft:"45px"}}>                           
                            <Col sm={10} md={10}>
                            <FormControl type="password" placeholder="Confirm Password" required />
                            </Col>
                        </FormGroup>
                        <FormGroup controlId="formHorizontalName" 
                        style ={{paddingLeft:"45px"}}>                           
                            <Col sm={10} md={10}>
                            <FormControl type="text" placeholder="User Name" required />
                            </Col>
                        </FormGroup>
                        <FormGroup controlId="formHorizontalEmail" 
                        style ={{paddingLeft:"45px"}}>                           
                            <Col sm={10} md={10}>
                            <FormControl type="Email" placeholder="Email" required />
                            </Col>
                        </FormGroup>
                        <FormGroup controlId="formHorizontalText"  style ={{paddingLeft:"45px"}}>                           
                            <Col sm={10} md={10}>
                            <FormControl type="text" placeholder="Role" required />
                            </Col>
                        </FormGroup>
                        <FormGroup>
                            <Col  sm={10} md={10}>
                            <Checkbox style ={{color:"White"}} required>Active </Checkbox>
                            </Col>
                        </FormGroup>   
                        <div className ="row">
                        <FormGroup>
                            <Col sm={6} md ={6}>
                            <Button type = "Submit" bsStyle="success">Create</Button>                       
                             </Col>  
                        
                            <Col sm={6} md ={6}>
                            <Button bsStyle="danger">cancel</Button>                       
                             </Col> 
                        </FormGroup> 
                        </div>                                         
                    </Form>                   
                    </div>
                </Col>                              
            </div>  
           <div className = "medium-card-color-list">
              <p  className = "medium-card-color-light-list" style = {{padding:"15px"}}>List of Users</p>
            <div className="row">
            <Col md={2} style={{color:"white"}}>
            <p>User ID</p>
            </Col>
            <Col md={2} style={{color:"white"}}>
            <p>Role</p>
            </Col>
            <Col md={2} style={{color:"white"}}>
            <p>Name</p>
            </Col>
            <Col md={2} style={{color:"white"}}>
            <p>Email</p>
            </Col>
            <Col md={2} style={{color:"white"}}>
            <p>Active</p>
            </Col>
            <Col md={3} style={{color:"white"}}>
            <p>Created By</p>
            </Col>
            <Col md={3} style={{color:"white"}}>
            <p>Created on</p>
            </Col>
            </div>
            </div>                                                
          </div>
          
         )
    }
}
 
export default User;