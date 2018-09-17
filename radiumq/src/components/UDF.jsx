import React, { Component } from 'react';
import 
{
    Col,Form,
    FormGroup,FormControl,ControlLabel,
    Checkbox,Button,Table,Glyphicon,ButtonToolbar,Overlay,OverlayTrigger,Tooltip
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
                        <Link to ="/User">
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
            <div className = "medium-card-color-list" style={{height:"650px"}}>
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
                        <FormGroup controlId="formHorizontalText">
                         <Col componentClass={ControlLabel} sm={2} md={2} style={{paddingTop:"0px"}}>
                         Position Type
                         </Col>                           
                            <Col sm={10} md={2}>
                            <select id = "dropdown">
                                <option value="After Last">After Last</option>
                                <option value="Before Last">Before Last</option>
                                <option value="Step No">Step no</option>
                           </select>
                            </Col>
                        </FormGroup>
                        <FormGroup controlId="formHorizontalText">
                         <Col componentClass={ControlLabel} sm={2} md={2}>
                        Variable Scope
                         </Col>                           
                            <Col sm={10} md={2}>
                            <select id = "dropdown">
                                <option value="After Last">Test case</option>
                                <option value="Before Last">Scenario</option>
                               
                           </select>                           
                            </Col>
                        </FormGroup>
                        <FormGroup controlId="formHorizontalText">
                         <Col componentClass={ControlLabel} sm={2} md={2}>
                        Method Type
                         </Col>                           
                            <Col sm={10} md={2}>
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
                         <Col componentClass={ControlLabel} sm={2} md={2}>
                       URL Type
                         </Col>                           
                            <Col sm={10} md={2}>
                            <select id = "dropdown">
                                <option value="After Last">Text</option>
                                <option value="Before Last">Variable</option>
                                <option value="Before Last">TextWithVariable</option>                                
                           </select>                           
                            </Col>
                        </FormGroup>
                        <FormGroup controlId="formHorizontalText">
                         <Col componentClass={ControlLabel} sm={2} md={2}>
                            URL
                         </Col>
                         <Col sm={10} md={6}>
                            <FormControl type="text" placeholder="Name" required />
                            </Col>
                         </FormGroup>
                         <FormGroup controlId="formHorizontalText">
                         <Col componentClass={ControlLabel} sm={2} md={2}>
                            Position
                         </Col>
                         <Col sm={10} md={6}>
                            <FormControl type="text" placeholder="Name" required />
                            </Col>
                         </FormGroup>
                         <FormGroup controlId="formHorizontalText">
                            <Col componentClass={ControlLabel} sm={2} md={2}>
                                Variable
                            </Col>
                            <Col sm={10} md={6}>
                                <FormControl type="text" placeholder="Name" required />
                             </Col>
                         </FormGroup>
                         <FormGroup controlId="formHorizontalText">
                            <Col componentClass={ControlLabel} sm={2} md={2}>
                                Method
                            </Col>
                            <Col sm={10} md={2}>
                            <select id = "dropdown">
                                <option value="After Last">Open</option>
                                <option value="Before Last">Close</option>
                                <option value="Before Last">Activate</option>
                                <option value="Before Last">Maximise</option>
                                <option value="Before Last">Minimise</option>
                               
                           </select>
                             </Col>
                         </FormGroup>
                         <div className ="row">
                        <FormGroup>
                            <Col sm={6} md ={3}>
                            <Button type = "Submit" bsStyle="success">Save</Button>                       
                             </Col> 
                        
                            <Col sm={6} md ={2}>
                            <Button bsStyle="danger">cancel</Button>                       
                             </Col> 
                        </FormGroup> 
                        </div>       
                         
                    </Form>
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