import React, {Component,MediaQuery } from 'react';
import {Navbar,NavItem,Nav,NavDropdown,MenuItem,Form,FormGroup,Col,ControlLabel,FormControl,Button,Checkbox,footer} from 'react-bootstrap';
class Login extends Component {
  
    render() { 
        return ( 
         
          <div style ={{backgroundImage: 'url(' + require('./Login5.png') + ')' ,height: "950px"}} className ="hero-image">
              <Form horizontal>
  <FormGroup controlId="formHorizontalEmail" >
    <Col componentClass={ControlLabel} sm={2} md={4} mdOffset ={4 } style = {{marginTop:"450px"}}  >
      Email
    </Col>
    <Col sm={10}  md={3} >
      <FormControl type="email" placeholder="Email" style = {{marginTop:"450px"}}  required/>
    </Col>
  </FormGroup>

  <FormGroup controlId="formHorizontalPassword">
    <Col componentClass={ControlLabel} sm={2} mdOffset ={6} >
      Password
    </Col>
    <Col sm={10} md={3} >
      <FormControl type="password" placeholder="Password" required />
    </Col>
  </FormGroup>

  <FormGroup>
    <Col smOffset={2} sm={10} mdOffset={8}>
      <Checkbox>Remember me</Checkbox>
    </Col>
  </FormGroup>

  <FormGroup>
    <Col smOffset={2} sm={10} mdOffset={8}>
      <Button type="submit">Sign in</Button>
    </Col>
  </FormGroup>
</Form>

        </div>
       
         
       );
    }
}
 
export default Login;