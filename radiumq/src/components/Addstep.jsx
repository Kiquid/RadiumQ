import React, { Component } from 'react';
import {Alert,Form,FormControl,Col,ControlLabel,Button,FormGroup,Checkbox,Table} from 'react-bootstrap';
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
                <h4 style={{color:"white"}}>Browser Properties</h4>
                <hr/>
               <Form horizontal> 
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
                        <Table responsive  bordered style={{color:"white"}}>
                        <thead>
                          <tr>
                            <th>Type</th>
                            <th> Name</th>
                            <th>Value</th>                                
                          </tr>
                        </thead>
                          <tbody>
                            <tr>
                              <td>1</td>
                              <td> Test1</td>
                              <td>Table cell</td>                             
                            </tr>
                            <tr>
                              <td>1</td>
                              <td> Test1</td>
                              <td>Table cell</td>                             
                            </tr>
                          </tbody>                        
                        </Table>
                  </Form>
                <p>
                  <Button bsStyle="info">save</Button>
                 
                  <Button bsStyle = "danger"onClick={this.handleDismiss}>Cancel</Button>
                </p>
              </Alert>
            );
          }
      
          return <Button onClick={this.handleShow}>Browser Properties</Button>;
        }
    }

 
export default Addstep;