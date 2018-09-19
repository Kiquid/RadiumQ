import React, { Component } from 'react';
import {Alert,Form,FormControl,Col,ControlLabel,Button,FormGroup,Checkbox} from 'react-bootstrap';
import './Addstep.css';

class Addtest extends Component {
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
                <h4 style={{color:"white"}}>Step Details</h4>
                <hr/>
               <Form horizontal >               
                        <FormGroup controlId="formHorizontalText" style={{marginBottom:"0px"}} >  
                        <Col componentClass={ControlLabel} md={2}>
                        <p>Name</p>
                         </Col>                         
                            <Col sm={10} md={6}>
                            <FormControl type="text" placeholder="Name" required />
                            </Col>
                        </FormGroup>
                        <FormGroup controlId="formHorizontalText" style={{marginBottom:"0px"}}>  
                            <Col componentClass={ControlLabel}  md={2}>
                                <p>Description</p> 
                             </Col>                         
                            <Col md={6}>
                               <FormControl type="text" placeholder="Description" required />
                            </Col>
                         </FormGroup> 
                         <FormGroup controlId="formHorizontalText" style={{marginBottom:"0px"}}>
                            <Col componentClass={ControlLabel} style={{paddingTop:"0px"}} md={2}>
                            <p>Position Type</p>
                            </Col>                           
                              <Col md={5} >
                                <select id = "dropdown">
                                    <option value="After Last"><p>After Last</p></option>
                                    <option value="Before Last">Before Last</option>
                                    <option value="Step No">Step no</option>
                                </select>
                           </Col>
                        </FormGroup> 
                        <FormGroup controlId="formHorizontalText" style={{marginBottom:"0px"}}>
                         <Col componentClass={ControlLabel} md={2} >
                        <p>Variable Scope</p>
                         </Col>                           
                            <Col md ={5} >
                            <select id = "dropdown">
                                <option value="After Last">Test case</option>
                                <option value="Before Last">Scenario</option>
                            </select>                           
                            </Col>
                        </FormGroup>
                        <FormGroup controlId="formHorizontalText"style={{marginBottom:"0px"}}>
                         <Col componentClass={ControlLabel} md={2} >
                             <p>  Method Type</p>
                         </Col>                           
                            <Col md={5}>
                            <select id = "dropdown">
                                <option value="After Last">Browser</option>
                                <option value="Before Last">Web object</option>
                                <option value="Before Last">Generic</option>
                                <option value="Before Last">Conditional</option>
                                <option value="Before Last">Checking</option>
                                <option value="Before Last">Fetching</option>
                           </select>                           
                            </Col>
                        </FormGroup>
                        <FormGroup controlId="formHorizontalText"style={{marginBottom:"0px"}}>
                         <Col componentClass={ControlLabel} md={2} >
                            <p>URL Type</p> 
                         </Col>                           
                            <Col md={5}>
                            <select id = "dropdown">
                                <option value="After Last">Text</option>
                                <option value="Before Last">Variable</option>
                                <option value="Before Last">TextWithVariable</option>                                
                           </select>                           
                            </Col>
                        </FormGroup>  
                        <FormGroup controlId="formHorizontalText"style={{marginBottom:"0px"}}>
                         <Col componentClass={ControlLabel} md={2}>
                            <p>URL</p>
                         </Col>
                         <Col  md={6}>
                            <FormControl type="text" placeholder="URL" required />
                            </Col>
                         </FormGroup>
                         <FormGroup controlId="formHorizontalText" style={{marginBottom:"0px"}}>
                         <Col componentClass={ControlLabel} md={2} >
                           <p>Position</p> 
                         </Col>
                         <Col md={6}>
                            <FormControl type="text" placeholder="Position" required />
                            </Col>
                         </FormGroup> 
                         <FormGroup controlId="formHorizontalText" style={{marginBottom:"0px"}}>
                            <Col componentClass={ControlLabel} md={2} >
                               <p>Variable</p> 
                            </Col >
                            <Col md={6}>
                                <FormControl type="text" placeholder="Variable" required />
                             </Col>
                         </FormGroup>  
                         <FormGroup controlId="formHorizontalText" style={{marginBottom:"0px"}}>
                            <Col componentClass={ControlLabel} md={2} >
                               <p>Method</p> 
                            </Col >
                            <Col  md={6}>
                            <select id = "dropdown">
                                <option value="After Last">Open</option>
                                <option value="Before Last">Close</option>
                                <option value="Before Last">Activate</option>
                                <option value="Before Last">Maximise</option>
                                <option value="Before Last">Minimise</option>
                               
                           </select>
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

 
export default Addtest;