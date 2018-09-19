import React, { Component } from 'react';
import 
{
    Col,Form,
    FormGroup,FormControl,ControlLabel,
    Checkbox,Button,Table,Glyphicon,ButtonToolbar,Overlay,OverlayTrigger,Tooltip,Modal
} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import './UDF.css';
import './User.css';
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
class UDF extends Component {
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
                        <Link to ="/testcase">
                            <h4 style = {{marginTop:"20px"}}>Test Case</h4>                            
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
        </div>
        <div className = "row">
        <Col md={12} xs={8} sm={8}>
            <div className= "Banner">
                <h4 style={{textAlign:"left",marginLeft:"10px"}}> UDF</h4>
        </div>
        </Col>
        </div>
        <div className = "row" style={{marginLeft:"9px"}}>
            <Col md ={6}>
            <div className = "medium-card-color-list" style={{height:"250px"}}>
                <div className = "medium-card-color-light-list">
                 <h4 style={{textAlign:"left",marginLeft:"10px",padding:"12px",marginTop:"0px"}}>Create UDF</h4>
                    <Form horizontal>                  
                    <FormGroup controlId="formHorizontalText">  
                        <Col componentClass={ControlLabel} md={2}>
                         Name
                         </Col>                         
                            <Col sm={10} md={6}>
                            <FormControl type="text" placeholder="Name" required />
                            </Col>
                        </FormGroup>
                        <FormGroup controlId="formHorizontalText">
                         <Col componentClass={ControlLabel} sm={2} md={2}>
                         Description
                         </Col>                           
                            <Col sm={10} md={6}>
                            <FormControl type="text" placeholder="Description" required />
                            </Col>
                        </FormGroup>
                        <p>Test Case Steps</p>
                        <Button bsStyle="primary" bsSize="small" onClick={this.handleShow}>
                            Add Step
                        </Button>

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
                    <div>      
      </div>
                </div>                
             </div>
            </Col> 
      
        </div>
        <div className = "row" style={{marginLeft:"9px"}}>
        <Col md={6}>
            <div className = "medium-card-color-list" style={{height:"650px"}}>
                <div className = "medium-card-color-light-list">
                <h4 style={{textAlign:"left",marginLeft:"10px",padding:"12px",marginTop:"0px"}}>List of UDF</h4>
                </div>
                <Table responsive  bordered style={{color:"white"}}>
  <thead>
    <tr>
      <th>Id</th>
      <th>Name</th>
      <th>Description</th>
      <th>Created on</th>
      <th>Options</th>
      <th>Options</th>     
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
                <ButtonToolbar>   
        <OverlayTrigger placement="left" overlay={Edit}>               
            <Button bsSize="xsmall">                                         
                <Glyphicon style = {{color:"#428bca"}} glyph="pencil" />                   
            </Button> 
       </OverlayTrigger>                  
  </ButtonToolbar> 
                      
     </td>
     <td>
     
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
    );
    }
}
 
export default UDF;