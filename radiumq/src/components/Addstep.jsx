import React, { Component } from 'react';
import {Alert,Form,FormControl,Col,ControlLabel,Button,FormGroup,Checkbox} from 'react-bootstrap';
import './Addstep.css';

class Addstep extends Component {
   // state = {  }
   constructor(props, context) {
    super(props, context);

    this.handleDismiss = this.handleDismiss.bind(this);
    this.handleShow = this.handleShow.bind(this);

    this.state = {
      show: false
    };
  }
  handleDismiss() {
    this.setState({ show: false });
  }

  handleShow() {
    this.setState({ show: true });
  }
    render() { 
        if (this.state.show) {
            return (
              <Alert  onDismiss={this.handleDismiss}>
                <h4 style={{color:"white"}}>Browser Details</h4>
               <Form horizontal> 
               <FormGroup controlId="formHorizontalText">
                         <Col componentClass={ControlLabel} sm={2} md={2}>
                        <p>Broswer Engine</p> 
                         </Col>                           
                            <Col sm={10} md={2}>
                            <select id = "dropdown">
                                <option value="After Last">PC-webUI</option>
                                <option value="Before Last">Mobile</option>
                                <option value="Before Last">API</option>                               
                           </select>                           
                            </Col>
                        </FormGroup>
                        <FormGroup controlId="formHorizontalText">  
                        <Col componentClass={ControlLabel} md={2}>
                        <p>Name</p>
                         </Col>                         
                            <Col sm={10} md={5}>
                            <FormControl type="text" placeholder="Name" required />
                            </Col>
                        </FormGroup>
                        <FormGroup controlId="formHorizontalText">
                         <Col componentClass={ControlLabel} sm={2} md={2}>
                       <p>Location</p> 
                         </Col>                           
                            <Col sm={10} md={2}>
                            <select id = "dropdown">
                                <option value="After Last">Local</option>
                                <option value="Before Last">Remote/Cloud</option>
                                <option value="Before Last">Headless</option>                               
                           </select>                           
                            </Col>
                        </FormGroup>
                        <FormGroup controlId="formHorizontalText">
                         <Col componentClass={ControlLabel} sm={2} md={2}>
                        <p>Type</p>
                         </Col>                           
                            <Col sm={10} md={2}>
                            <select id = "dropdown">
                                <option value="After Last">Internet Explorer</option>
                                <option value="Before Last">Chrome</option>
                                <option value="Before Last">FireFox</option>                               
                           </select>                           
                            </Col>
                        </FormGroup>
                        <FormGroup controlId="formHorizontalText">  
                        <Col componentClass={ControlLabel} md={2}>
                        <p>Wait</p> 
                         </Col>                         
                            <Col sm={10} md={5}>
                            <FormControl type="text" placeholder="In Seconds" required />
                            </Col>
                        </FormGroup>
                        <FormGroup controlId="formHorizontalText">  
                        <Col componentClass={ControlLabel} md={2}>
                         <p>Remote URL</p>
                         </Col>                         
                            <Col sm={10} md={5}>
                            <FormControl type="text" required />
                            </Col>
                        </FormGroup>
    
      </Form>
                <p>
                  <Button bsStyle="info">save</Button>
                 
                  <Button bsStyle = "danger"onClick={this.handleDismiss}>Cancel</Button>
                </p>
              </Alert>
            );
          }
      
          return <Button onClick={this.handleShow}>Add Step</Button>;
        }
    }

 
export default Addstep;