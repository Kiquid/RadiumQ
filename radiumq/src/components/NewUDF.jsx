import React, { Component } from 'react';
import{Col,Form,FormGroup,ControlLabel,FormControl,Table,Button,Modal,Badge,ButtonToolbar} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

class NewUDF extends Component {
   // state = {  }
   constructor(props, context) {
    super(props, context);

    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);

    this.state = {
      show: false
    };
  }

  handleClose() {
    this.setState({ show: false });
  }

  handleShow() {
    this.setState({ show: true });
  }
    render() { 
        return ( 
            <div className = "container">
            <Header/>
            <div className = "row">
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
                        <Link to ="/User">
                            <p>User</p>  
                            <hr/>
                            <Badge>10</Badge>                          
                        </Link>
                    </center>
                </div> 
            </Col>
            <Col  md={2}>
                <div class="small-card card-body">
                    <center>
                        <Link to ="/User">
                            <p>Scenario</p> 
                            <hr/>
                            <Badge>10</Badge>                           
                        </Link>
                    </center>
                </div> 
            </Col>
            <Col  md={2}>
                <div class="small-card card-body" >
                    <center>
                        <Link to ="/testcase">
                            <p>Test Case</p>  
                            <hr/>
                            <Badge>10</Badge>                          
                        </Link>
                    </center>
                </div> 
            </Col>
            <Col  md={2}>
                <div class="small-card card-body" >
                    <center>
                        <Link to ="/Exe">
                            <p> Profile</p>              
                            <hr/>
                            <Badge>10</Badge>              
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
                                    <h4 style={{textAlign:"left",marginLeft:"10px"}}>New UDF</h4>
                                </Col>                    
                            </div>
                    </div>
                </Col>      
           </div>
                <div className = "row">
                    <div className = "medium-card-color-list" style={{height:"250px",width:"444px"}}>
                        <div className = "medium-card-color-light-list">
                            <h4 style={{textAlign:"left",marginLeft:"10px",padding:"12px",marginTop:"0px"}}>Create UDF</h4>
                                <Form horizontal>                  
                                    <FormGroup controlId="formHorizontalText">  
                                        <Col componentClass={ControlLabel} md={3} sm={2} >
                                        Name
                                        </Col>                         
                                        <Col sm={8} md={8}>
                                        <FormControl type="text" placeholder="Name" required />
                                        </Col>
                                    </FormGroup>
                                    <FormGroup controlId="formHorizontalText">
                                    <Col componentClass={ControlLabel} sm={3} md={3}>
                                        Description
                                    </Col>                           
                                        <Col sm={8} md={8}>
                                        <FormControl type="text" placeholder="Description" required />
                                        </Col>
                                    </FormGroup>
                                </Form>
                        </div>
                    </div>
                </div>
                <div className="row">
                     <div className = "card example-1 scrollbar-ripe-malinka" style={{height:"445px",marginTop:"9px"}}>
                        <div className = "medium-card-color-light" >
                            <Col md={3} sm={6} >
                                <p  style = {{padding:"15px"}}>Test Case Steps</p>
                            </Col>
                            <Col md={3} mdOffset={6} sm={6} >                          
                            <Button bsStyle="primary" bsSize="small" onClick={this.handleShow} style={{marginTop:"0.7rem",marginLeft:"80px"}}>
                                Add Step
                            </Button>
                            <Form horizontal>
                                       <Modal show={this.state.show} onHide={this.handleClose}>
                                    <Modal.Header closeButton>
                                        <Modal.Title>Step Details</Modal.Title>
                                    </Modal.Header>
                                    <Modal.Body>
                                    
                                        <FormGroup controlId="formHorizontalText">  
                                            <Col componentClass={ControlLabel}>
                                            <p>Name</p>  
                                            </Col>                         
                                            <Col>
                                            <FormControl type="text" placeholder="Name" required />
                                            </Col>
                                        </FormGroup>
                                        <FormGroup controlId="formHorizontalText">  
                                            <Col componentClass={ControlLabel}>
                                                <p>Description</p> 
                                            </Col>                         
                                            <Col>
                                            <FormControl type="text" placeholder="Description" required />
                                            </Col>
                                        </FormGroup>  
                                        <FormGroup controlId="formHorizontalText">
                                        <Col componentClass={ControlLabel} style={{paddingTop:"0px"}}>
                                        <p>Position Type</p>
                                        </Col>                           
                                        <Col >
                                            <select id = "dropdown">
                                                <option value="After Last"><p>After Last</p></option>
                                                <option value="Before Last">Before Last</option>
                                                <option value="Step No">Step no</option>
                                            </select>
                                    </Col>
                                    </FormGroup> 
                                    <FormGroup controlId="formHorizontalText">
                                    <Col componentClass={ControlLabel} >
                                    <p>Variable Scope</p>
                                    </Col>                           
                                        <Col >
                                        <select id = "dropdown">
                                            <option value="After Last">Test case</option>
                                            <option value="Before Last">Scenario</option>
                                        </select>                           
                                        </Col>
                                    </FormGroup>
                                    <FormGroup controlId="formHorizontalText">
                                        <Col componentClass={ControlLabel} >
                                        <p>Method</p> 
                                        </Col>
                                        <Col >
                                        <select id = "dropdown">
                                            <option value="After Last">Open</option>
                                            <option value="Before Last">Close</option>
                                            <option value="Before Last">Activate</option>
                                            <option value="Before Last">Maximise</option>
                                            <option value="Before Last">Minimise</option>
                                        
                                    </select>
                                        </Col>
                                    </FormGroup> 
                                    <FormGroup controlId="formHorizontalText">
                                    <Col componentClass={ControlLabel} >
                                        <p>URL Type</p> 
                                    </Col>                           
                                        <Col>
                                        <select id = "dropdown">
                                            <option value="After Last">Text</option>
                                            <option value="Before Last">Variable</option>
                                            <option value="Before Last">TextWithVariable</option>                                
                                    </select>                           
                                        </Col>
                                    </FormGroup> 
                                    <FormGroup controlId="formHorizontalText">
                                    <Col componentClass={ControlLabel} >
                                <p>  Method Type</p>
                                    </Col>                           
                                        <Col>
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
                                    
                                    <FormGroup controlId="formHorizontalText">
                                    <Col componentClass={ControlLabel} >
                                        <p>URL</p>
                                    </Col>
                                    <Col>
                                        <FormControl type="text" placeholder="URL" required />
                                        </Col>
                                    </FormGroup>
                                    <FormGroup controlId="formHorizontalText">
                                    <Col componentClass={ControlLabel} >
                                    <p>Position</p> 
                                    </Col>
                                    <Col >
                                        <FormControl type="text" placeholder="Position" required />
                                        </Col>
                                    </FormGroup>
                                    <FormGroup controlId="formHorizontalText">
                                        <Col componentClass={ControlLabel} >
                                        <p>Variable</p> 
                                        </Col>
                                        <Col>
                                            <FormControl type="text" placeholder="Variable" required />
                                        </Col>
                                    </FormGroup>   
                                    </Modal.Body>
                                    <Modal.Footer>
                                        <Button bsStyle="danger" onClick={this.handleClose}>Cancel</Button>
                                        <Button bsStyle="primary">Save changes</Button>
                                    </Modal.Footer>
                                </Modal>
                            </Form>
                             </Col>
                                <Table responsive  bordered style={{color:"white"}}>
                                    <thead>
                                        <tr>
                                            <th>S.no</th>
                                            <th>Step Name</th>
                                            <th>Method</th>
                                            <th>Variable</th>                                      
                                        </tr>
                                    </thead>
                                        <tbody>
                                            <tr>
                                                <td>Id</td>
                                                <td>Name</td>
                                                <td>Description</td>
                                                <td>Created on</td>
                                            </tr>
                                        </tbody>
                                </Table>
                        </div>
                    </div>
                </div>
                <div className ="row" style={{marginTop:"10px"}}>
                    <Col md={2} sm={3}>
                    <ButtonToolbar>
                        {/* Provides extra visual weight and identifies the primary action in a set of buttons */}
                      <Button bsStyle="primary">Save</Button>
                    </ButtonToolbar>;                    
                    </Col>
                    <Col md={2} sm={3}>
                    <ButtonToolbar>
                        {/* Provides extra visual weight and identifies the primary action in a set of buttons */}
                      <Button bsStyle="danger">Cancel</Button>
                    </ButtonToolbar>;                    
                    </Col>
                </div>
                <Footer/>
            </div>
         );
    }
}
 
export default NewUDF;