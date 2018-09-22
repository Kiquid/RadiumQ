import React, {Component,MediaQuery } from 'react';
import {Navbar,NavItem,Nav,NavDropdown,MenuItem,Form,FormGroup,Col,ControlLabel,FormControl,Button,Checkbox,footer} from 'react-bootstrap';
import  './Login.css'
class Login extends Component {
  
    render() { 
        return ( 
          
          <div className="wrapper">
       <div className="form-wrapper">
      
       <Form horizontal>
  <FormGroup controlId="formHorizontalEmail" >
    <Col componentClass={ControlLabel} sm={2} md={4}    >
      Email
    </Col>
    <Col sm={10}  md={8} >
      <FormControl type="email" placeholder="Email" required className="email"/>
    </Col>
  </FormGroup>

  <FormGroup controlId="formHorizontalPassword">
    <Col componentClass={ControlLabel} sm={2} md={4}  >
      Password
    </Col>
    <Col sm={10} md={8} >
      <FormControl type="password" placeholder="Password" required />
    </Col>
  </FormGroup>

  <FormGroup>
    <Col smOffset={2} sm={10} mdOffset={4}>
      <Checkbox>Remember me</Checkbox>
    </Col>
  </FormGroup>

  <FormGroup>
    <Col smOffset={2} sm={10} mdOffset={4}>
    {/*
      <Button type="submit" className="create-button">Sign in</Button>
      */}
       <button className="create-button" type="submit">Sign In</button>
    </Col>
  </FormGroup>
</Form>
      </div>
      </div>
       
         
       );
    }
}
 
export default Login;