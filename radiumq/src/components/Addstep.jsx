import React, { Component } from 'react';
import {Alert,Form,FormControl,Col,ControlLabel,Button,FormGroup,Checkbox,Table} from 'react-bootstrap';
import './Addstep.css';
import Browserproperties from './Browserproperties';
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
              <Alert  onDismiss={this.handleDismiss} style={{marginTop:"60px",marginRight:"10px"}}>
                <h4 style={{color:"white"}}>Properties </h4>
                <hr/>
               <Form horizontal>
               <div className = "row">
                <FormGroup controlId="formHorizontalText">                    
                      <Col componentClass={ControlLabel} md={2} >
                          <p>Broswer Engine</p> 
                        </Col>                           
                        <Col md={4}>
                            <select id = "dropdown" style={{width:"351px"}}>
                              <option value="After Last">PC-webUI</option>
                              <option value="Before Last">Mobile</option>
                              <option value="Before Last">API</option>                               
                          </select>                           
                          </Col>
                   
                  </FormGroup>
                  </div>
                  <div className="row">
                    <FormGroup controlId="formHorizontalText">  
                      <Col componentClass={ControlLabel} md={2} >
                        <p>Name</p>
                      </Col>                         
                      <Col md={4}>
                        <FormControl type="text" placeholder="Name" required />
                      </Col>
                     </FormGroup>
                  </div>
                  <div className="row">
                   <FormGroup controlId="formHorizontalText">
                      <Col componentClass={ControlLabel} md={2} >
                        <p>Location</p> 
                      </Col>                           
                       <Col  md={4}>
                         <select id = "dropdown" style={{width:"351px"}} >
                           <option value="After Last">Local</option>
                           <option value="Before Last">Remote/Cloud</option>
                           <option value="Before Last">Headless</option>                               
                         </select>                           
                       </Col>
                    </FormGroup>
                  </div>
                            <FormGroup controlId="formHorizontalText">
                                <Col componentClass={ControlLabel}  md={2} >
                                    <p>Type</p>
                                </Col>                           
                                <Col  md={4}>
                                    <select id = "dropdown" style={{width:"351px"}}>
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
                                <Col md={4}>
                                  <FormControl type="text" placeholder="In Seconds" required />
                                </Col>
                            </FormGroup>
                            <FormGroup controlId="formHorizontalText">  
                              <Col componentClass={ControlLabel} md={2}>
                                <p>Remote URL</p>
                              </Col>                         
                                 <Col md={4}>
                                 <FormControl type="text" required />
                                </Col>
                            </FormGroup>
                            <div className = "medium-card-color-list">
                              <div className = "medium-card-color-light" >
                                <div className ="row">
                                  <Col md={4}>
                                  <p  style = {{padding:"15px"}}>Browsers</p>
                                  </Col>
                                  <Col md={4}>
                                  <Browserproperties/>
                                 </Col>
                                </div>
                                <Table responsive  bordered style={{color:"white"}}>
                                            <thead>
                                                <tr>
                                                    <th>Type</th>
                                                    <th>Name</th>
                                                    <th>Value</th>
                                                                                          
                                                </tr>
                                            </thead>
                                                <tbody>
                                                    <tr>
                                                        <td>Type</td>
                                                        <td>Name</td>
                                                        <td>Value</td>
                                                        
                                                    </tr>
                                                </tbody>
                            </Table>
                             </div>
                             
                             </div>
                            
               {/*
                       <FormGroup controlId="formHorizontalText">
                            <Col componentClass={ControlLabel} >
                               <p>Browser Type</p>  
                            </Col>                           
                            <Col >
                              <select id = "dropdown">
                                <option value="After Last"> System</option>
                                <option value="After Last">Drive</option>
                                <option value="Before Last">Chrome options</option>
                                <option value="Before Last">FireFox Profile</option>                               
                             </select>                           
                            </Col>
                        </FormGroup>
                        <FormGroup controlId="formHorizontalText">  
                          <Col componentClass={ControlLabel} >
                            <p> Browser Name</p>
                          </Col>                         
                          <Col >
                             <FormControl type="text" placeholder="Type the Browser Name" required />
                          </Col>                        
                        </FormGroup>
                        <FormGroup controlId="formHorizontalText">  
                          <Col componentClass={ControlLabel} >
                            <p>Browser Value</p>
                           </Col>                         
                          <Col >
                            <FormControl type="text" placeholder="Type the value" required />
                          </Col>                        
                        </FormGroup>
               */}
                        
                  </Form>
                <p>
                  <Button bsStyle="info">save</Button>
                 
                  <Button bsStyle = "danger"onClick={this.handleDismiss}>Cancel</Button>
                </p>
              </Alert>
            );
          }
      
          return <Button Button bsStyle="primary" bsSize="small"  onClick={this.handleShow} style={{marginLeft:"99rem",marginTop:"4px"}}>Add</Button>;
        }
    }

 
export default Addstep;