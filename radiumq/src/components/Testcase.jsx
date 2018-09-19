import React, { Component } from 'react';
import 
{
    Col,Form,
    FormGroup,FormControl,ControlLabel,Checkbox,Button,
    Table,Glyphicon,ButtonToolbar,Overlay,OverlayTrigger,Tooltip,Modal
} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import './UDF.css';
import './User.css';
import Addtest from './Addtest';
import ADDUDF from './Addudf'
import AddData from './AddData';
const del = (
    <Tooltip id="tooltip">
      <strong>Delete!</strong> 
    </Tooltip>
  );
  
  const Edit = (
    <Tooltip id="tooltip">
      <strong>Edit!</strong> 
    </Tooltip>
  );
class TestCases extends Component {
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
                        <Link to ="/User">
                            <h4 style = {{marginTop:"20px"}}>User</h4>                            
                        </Link>
                    </center>
                </div> 
            </Col>
            <Col  md={2}>
                <div class="small-card card-body">
                    <center>
                        <Link to ="/User">
                            <h4 style = {{marginTop:"20px"}}>Scenario</h4>                            
                        </Link>
                    </center>
                </div> 
            </Col>
            <Col  md={2}>
                <div class="small-card card-body" style ={{width:"110px"}}>
                    <center>
                        <Link to ="/Exe">
                            <h4 style = {{marginTop:"20px"}}>Execution Profile</h4>                            
                        </Link>
                    </center>
                </div> 
            </Col>
            <Col  md={2}>
                <div class="small-card card-body" style ={{width:"110px"}}>
                    <center>
                        <Link to ="/UDF">
                            <h4 style = {{marginTop:"20px"}}>UDF</h4>                            
                        </Link>
                    </center>
                </div> 
            </Col>
        </div>
        <div className = "row">
        <Col md={12} xs={8} sm={8}>
            <div className= "Banner">
                <h4 style={{textAlign:"left",marginLeft:"10px"}}> TestCases</h4>
        </div>
        </Col>
        </div>
        <div className = "row" style={{marginLeft:"9px"}}>
            <Col md ={6}>
            <div className = "medium-card-color-list" style={{height:"200px",width:"1126px"}}>
                <div className = "medium-card-color-light-list">
                 <h4 style={{textAlign:"left",marginLeft:"10px",padding:"12px",marginTop:"0px"}}>Create TestCases</h4>
                    <Form horizontal>
                        <div className="row">                        
                            <FormGroup controlId="formHorizontalText">  
                                <Col componentClass={ControlLabel} md={2}>
                                Name
                                </Col>                         
                                <Col sm={10} md={3}>
                                <FormControl type="text" placeholder="Name" required />
                                </Col>
                                <Col componentClass={ControlLabel} md={2}>
                                Description
                                </Col> 
                                <Col sm={10} md={4}>
                                <FormControl type="text" placeholder="Description" required />
                                </Col> 
                                <Col md={1}>
                                <FormControl type="file" placeholder="Name" required />
                                
                                </Col> 
                            </FormGroup>
                            
                            <FormGroup controlId="formHorizontalText">
                                <Col componentClass={ControlLabel} sm={2} md={2}>
                                Engine
                                </Col>                           
                                <Col sm={10} md={2}>
                                    <select id = "dropdown">
                                        <option value="After Last">PC-webUI</option>
                                        <option value="Before Last">Mobile</option>
                                        <option value="Before Last">API</option>                               
                                    </select>                           
                                </Col> 
                                <Col componentClass={ControlLabel} sm={2} md={5}>
                                Resume failed step
                                </Col>     
                                <Col  sm={10} md={1}>
                            <Checkbox style ={{color:"White"}} required checked > </Checkbox>
                            </Col>                       
                        </FormGroup>
                        
                        <div className = "row">
                        <Col md = {3}>
                        <Button bsStyle="primary" bsSize="small" onClick={this.handleShow}>
                            Add Step
                            
                        </Button>
                        </Col>
                        <Col md={1}>
                        <ADDUDF/>
                        </Col>
                        </div>
                        <div className ="row">
                        <FormGroup>
                             <Col md ={10}>
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
                             </Col>
                        </FormGroup> 
                        </div>
                        </div>
                  
                    </Form>
                </div>                
             </div>
            </Col>          
        </div> 
        <div className = "row" style={{marginLeft:"9px"}}>
        <Col md={6}>
            <div className = "card example-1" >
                <div className = "card-body">
                <h4 style={{textAlign:"left",marginLeft:"10px",padding:"12px",marginTop:"0px"}}>Test case steps</h4>
                <hr/>
                </div>
             
               <Table responsive  bordered style={{color:"white"}}>
  <thead>
    <tr>
      <th>S.no</th>
      <th>Step Name</th>
      <th>Method</th>
      <th>Variable on</th>
      <th></th>
      <th></th>     
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td> Test1</td>
      <td>Table cell</td>
      <td>Table cell</td>
      <td> <ButtonToolbar>   
                  <OverlayTrigger placement="left" overlay={del}>               
                      <Button bsSize="xsmall">                                         
                          <Glyphicon className ="del-color" glyph="remove" />                   
                      </Button> 
                  </OverlayTrigger>                  
                </ButtonToolbar> 
                      
     </td>
     <td>
     <ButtonToolbar>   
        <OverlayTrigger placement="left" overlay={Edit}>               
            <Button bsSize="xsmall">                                         
                <Glyphicon style = {{color:"#428bca"}} glyph="pencil" />                   
            </Button> 
       </OverlayTrigger>                  
  </ButtonToolbar> 
     </td>
    </tr>
    <tr>
      <td>2</td>
      <td> Test1</td>
      <td>Table cell</td>
      <td>Table cell</td>
      <td> <ButtonToolbar>   
                  <OverlayTrigger placement="left" overlay={del}>               
                      <Button bsSize="xsmall">                                         
                          <Glyphicon className ="del-color" glyph="remove" />                   
                      </Button> 
                  </OverlayTrigger>                  
                </ButtonToolbar> 
                      
     </td>
     <td>
     <ButtonToolbar>   
        <OverlayTrigger placement="left" overlay={Edit}>               
            <Button bsSize="xsmall">                                         
                <Glyphicon style = {{color:"#428bca"}} glyph="pencil" />                   
            </Button> 
       </OverlayTrigger>                  
  </ButtonToolbar> 
     </td>
    </tr>
    <tr>
      <td>1</td>
      <td> Test1</td>
      <td>Table cell</td>
      <td>Table cell</td>
      <td> <ButtonToolbar>   
                  <OverlayTrigger placement="left" overlay={del}>               
                      <Button bsSize="xsmall">                                         
                          <Glyphicon className ="del-color" glyph="remove" />                   
                      </Button> 
                  </OverlayTrigger>                  
                </ButtonToolbar> 
                      
     </td>
     <td>
     <ButtonToolbar>   
        <OverlayTrigger placement="left" overlay={Edit}>               
            <Button bsSize="xsmall">                                         
                <Glyphicon style = {{color:"#428bca"}} glyph="pencil" />                   
            </Button> 
       </OverlayTrigger>                  
  </ButtonToolbar> 
     </td>
    </tr>
    <tr>
      <td>2</td>
      <td> Test1</td>
      <td>Table cell</td>
      <td>Table cell</td>
      <td> <ButtonToolbar>   
                  <OverlayTrigger placement="left" overlay={del}>               
                      <Button bsSize="xsmall">                                         
                          <Glyphicon className ="del-color" glyph="remove" />                   
                      </Button> 
                  </OverlayTrigger>                  
                </ButtonToolbar> 
                      
     </td>
     <td>
     <ButtonToolbar>   
        <OverlayTrigger placement="left" overlay={Edit}>               
            <Button bsSize="xsmall">                                         
                <Glyphicon style = {{color:"#428bca"}} glyph="pencil" />                   
            </Button> 
       </OverlayTrigger>                  
  </ButtonToolbar> 
     </td>
    </tr> <tr>
      <td>1</td>
      <td> Test1</td>
      <td>Table cell</td>
      <td>Table cell</td>
      <td> <ButtonToolbar>   
                  <OverlayTrigger placement="left" overlay={del}>               
                      <Button bsSize="xsmall">                                         
                          <Glyphicon className ="del-color" glyph="remove" />                   
                      </Button> 
                  </OverlayTrigger>                  
                </ButtonToolbar> 
                      
     </td>
     <td>
     <ButtonToolbar>   
        <OverlayTrigger placement="left" overlay={Edit}>               
            <Button bsSize="xsmall">                                         
                <Glyphicon style = {{color:"#428bca"}} glyph="pencil" />                   
            </Button> 
       </OverlayTrigger>                  
  </ButtonToolbar> 
     </td>
    </tr>
    <tr>
      <td>2</td>
      <td> Test1</td>
      <td>Table cell</td>
      <td>Table cell</td>
      <td> <ButtonToolbar>   
                  <OverlayTrigger placement="left" overlay={del}>               
                      <Button bsSize="xsmall">                                         
                          <Glyphicon className ="del-color" glyph="remove" />                   
                      </Button> 
                  </OverlayTrigger>                  
                </ButtonToolbar> 
                      
     </td>
     <td>
     <ButtonToolbar>   
        <OverlayTrigger placement="left" overlay={Edit}>               
            <Button bsSize="xsmall">                                         
                <Glyphicon style = {{color:"#428bca"}} glyph="pencil" />                   
            </Button> 
       </OverlayTrigger>                  
  </ButtonToolbar> 
     </td>
    </tr>
    <tr>
      <td>1</td>
      <td> Test1</td>
      <td>Table cell</td>
      <td>Table cell</td>
      <td> <ButtonToolbar>   
                  <OverlayTrigger placement="left" overlay={del}>               
                      <Button bsSize="xsmall">                                         
                          <Glyphicon className ="del-color" glyph="remove" />                   
                      </Button> 
                  </OverlayTrigger>                  
                </ButtonToolbar> 
                      
     </td>
     <td>
     <ButtonToolbar>   
        <OverlayTrigger placement="left" overlay={Edit}>               
            <Button bsSize="xsmall">                                         
                <Glyphicon style = {{color:"#428bca"}} glyph="pencil" />                   
            </Button> 
       </OverlayTrigger>                  
  </ButtonToolbar> 
     </td>
    </tr>
    <tr>
      <td>2</td>
      <td> Test1</td>
      <td>Table cell</td>
      <td>Table cell</td>
      <td> <ButtonToolbar>   
                  <OverlayTrigger placement="left" overlay={del}>               
                      <Button bsSize="xsmall">                                         
                          <Glyphicon className ="del-color" glyph="remove" />                   
                      </Button> 
                  </OverlayTrigger>                  
                </ButtonToolbar> 
                      
     </td>
     <td>
     <ButtonToolbar>   
        <OverlayTrigger placement="left" overlay={Edit}>               
            <Button bsSize="xsmall">                                         
                <Glyphicon style = {{color:"#428bca"}} glyph="pencil" />                   
            </Button> 
       </OverlayTrigger>                  
  </ButtonToolbar> 
     </td>
    </tr>
    </tbody>
    </Table>
            </div>
            </Col>
            <div className = "row" style={{marginLeft:"9px"}}>
        <Col md={6}>
            <div className = "card example-1" >
                <div className = "card-body">
                <h4 style={{textAlign:"left",marginLeft:"10px",padding:"12px",marginTop:"0px"}}>Test Case Data</h4>
                <hr/>
                <Col md={6}>
                   <p><FormControl type="file" placeholder="Name" required /></p>              
                </Col> 
                <AddData/>
                </div>
             
                <Table responsive  bordered style={{color:"white"}}>
  <thead>
    <tr>
      <th>Id</th>
      <th>Name</th>
      <th>Description</th>
      <th>Created on</th>
      <th></th>
      <th></th>     
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td> Test1</td>
      <td>Table cell</td>
      <td>Table cell</td>
      <td> <ButtonToolbar>   
                  <OverlayTrigger placement="left" overlay={del}>               
                      <Button bsSize="xsmall">                                         
                          <Glyphicon className ="del-color" glyph="remove" />                   
                      </Button> 
                  </OverlayTrigger>                  
                </ButtonToolbar> 
                      
     </td>
     <td>
     <ButtonToolbar>   
        <OverlayTrigger placement="left" overlay={Edit}>               
            <Button bsSize="xsmall">                                         
                <Glyphicon style = {{color:"#428bca"}} glyph="pencil" />                   
            </Button> 
       </OverlayTrigger>                  
  </ButtonToolbar> 
     </td>
    </tr>
    <tr>
      <td>2</td>
      <td> Test1</td>
      <td>Table cell</td>
      <td>Table cell</td>
      <td> <ButtonToolbar>   
                  <OverlayTrigger placement="left" overlay={del}>               
                      <Button bsSize="xsmall">                                         
                          <Glyphicon className ="del-color" glyph="remove" />                   
                      </Button> 
                  </OverlayTrigger>                  
                </ButtonToolbar> 
                      
     </td>
     <td>
     <ButtonToolbar>   
        <OverlayTrigger placement="left" overlay={Edit}>               
            <Button bsSize="xsmall">                                         
                <Glyphicon style = {{color:"#428bca"}} glyph="pencil" />                   
            </Button> 
       </OverlayTrigger>                  
  </ButtonToolbar> 
     </td>
    </tr>
    <tr>
      <td>1</td>
      <td> Test1</td>
      <td>Table cell</td>
      <td>Table cell</td>
      <td> <ButtonToolbar>   
                  <OverlayTrigger placement="left" overlay={del}>               
                      <Button bsSize="xsmall">                                         
                          <Glyphicon className ="del-color" glyph="remove" />                   
                      </Button> 
                  </OverlayTrigger>                  
                </ButtonToolbar> 
                      
     </td>
     <td>
     <ButtonToolbar>   
        <OverlayTrigger placement="left" overlay={Edit}>               
            <Button bsSize="xsmall">                                         
                <Glyphicon style = {{color:"#428bca"}} glyph="pencil" />                   
            </Button> 
       </OverlayTrigger>                  
  </ButtonToolbar> 
     </td>
    </tr>
    <tr>
      <td>2</td>
      <td> Test1</td>
      <td>Table cell</td>
      <td>Table cell</td>
      <td> <ButtonToolbar>   
                  <OverlayTrigger placement="left" overlay={del}>               
                      <Button bsSize="xsmall">                                         
                          <Glyphicon className ="del-color" glyph="remove" />                   
                      </Button> 
                  </OverlayTrigger>                  
                </ButtonToolbar> 
                      
     </td>
     <td>
     <ButtonToolbar>   
        <OverlayTrigger placement="left" overlay={Edit}>               
            <Button bsSize="xsmall">                                         
                <Glyphicon style = {{color:"#428bca"}} glyph="pencil" />                   
            </Button> 
       </OverlayTrigger>                  
  </ButtonToolbar> 
     </td>
    </tr> <tr>
      <td>1</td>
      <td> Test1</td>
      <td>Table cell</td>
      <td>Table cell</td>
      <td> <ButtonToolbar>   
                  <OverlayTrigger placement="left" overlay={del}>               
                      <Button bsSize="xsmall">                                         
                          <Glyphicon className ="del-color" glyph="remove" />                   
                      </Button> 
                  </OverlayTrigger>                  
                </ButtonToolbar> 
                      
     </td>
     <td>
     <ButtonToolbar>   
        <OverlayTrigger placement="left" overlay={Edit}>               
            <Button bsSize="xsmall">                                         
                <Glyphicon style = {{color:"#428bca"}} glyph="pencil" />                   
            </Button> 
       </OverlayTrigger>                  
  </ButtonToolbar> 
     </td>
    </tr>
    <tr>
      <td>2</td>
      <td> Test1</td>
      <td>Table cell</td>
      <td>Table cell</td>
      <td> <ButtonToolbar>   
                  <OverlayTrigger placement="left" overlay={del}>               
                      <Button bsSize="xsmall">                                         
                          <Glyphicon className ="del-color" glyph="remove" />                   
                      </Button> 
                  </OverlayTrigger>                  
                </ButtonToolbar> 
                      
     </td>
     <td>
     <ButtonToolbar>   
        <OverlayTrigger placement="left" overlay={Edit}>               
            <Button bsSize="xsmall">                                         
                <Glyphicon style = {{color:"#428bca"}} glyph="pencil" />                   
            </Button> 
       </OverlayTrigger>                  
  </ButtonToolbar> 
     </td>
    </tr>
    <tr>
      <td>1</td>
      <td> Test1</td>
      <td>Table cell</td>
      <td>Table cell</td>
      <td> <ButtonToolbar>   
                  <OverlayTrigger placement="left" overlay={del}>               
                      <Button bsSize="xsmall">                                         
                          <Glyphicon className ="del-color" glyph="remove" />                   
                      </Button> 
                  </OverlayTrigger>                  
                </ButtonToolbar> 
                      
     </td>
     <td>
     <ButtonToolbar>   
        <OverlayTrigger placement="left" overlay={Edit}>               
            <Button bsSize="xsmall">                                         
                <Glyphicon style = {{color:"#428bca"}} glyph="pencil" />                   
            </Button> 
       </OverlayTrigger>                  
  </ButtonToolbar> 
     </td>
    </tr>
    <tr>
      <td>2</td>
      <td> Test1</td>
      <td>Table cell</td>
      <td>Table cell</td>
      <td> <ButtonToolbar>   
                  <OverlayTrigger placement="left" overlay={del}>               
                      <Button bsSize="xsmall">                                         
                          <Glyphicon className ="del-color" glyph="remove" />                   
                      </Button> 
                  </OverlayTrigger>                  
                </ButtonToolbar> 
                      
     </td>
     <td>
     <ButtonToolbar>   
        <OverlayTrigger placement="left" overlay={Edit}>               
            <Button bsSize="xsmall">                                         
                <Glyphicon style = {{color:"#428bca"}} glyph="pencil" />                   
            </Button> 
       </OverlayTrigger>                  
  </ButtonToolbar> 
     </td>
    </tr>
    </tbody>
    </Table>
            </div>
            </Col>
            </div>

            </div>
            <div className = "row" style = {{marginTop:"10px",marginLeft:"10px"}}>
                <Col md ={6}>
                    <ButtonToolbar>
                        {/* Provides extra visual weight and identifies the primary action in a set of buttons */}
                        <Button bsStyle="primary">Save</Button>

                        {/* Indicates a successful or positive action */}
                        <Button bsStyle="success">Success</Button>

                        {/* Indicates a dangerous or potentially negative action */}
                        <Button bsStyle="danger">Cancel</Button>
                    </ButtonToolbar>;
                </Col>
            </div>
    </div>
    );
    }
}
 
export default TestCases;