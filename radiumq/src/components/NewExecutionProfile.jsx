import React, { Component } from 'react';
import{Col,Badge,Button,Form,FormGroup,FormControl,ControlLabel,Checkbox,Table,Modal,ButtonToolbar} from 'react-bootstrap';
import{Link} from 'react-router-dom';
import Addstep from './Addstep';
import BrowserProperties from './Browserproperties';
import Header from './Header';
import Footer from './Footer';

class NewExecutionProfile extends Component {
    //state = {  }
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
<div className="container">
<Header/>
    <div className = "row" style={{marginLeft:"0px"}}>
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
                    <div className="Banner" style={{marginLeft:"14px"}}>
                            <div className = "row">
                                <Col md={4} sm={4} xs={6} >
                                    <h4 style={{textAlign:"left",marginLeft:"10px"}}>New Execution Profile</h4>
                                </Col>                    
                            </div>
                    </div>
                </Col>      
           </div>
        <div className = "row">
            <Col md={4}>
                    <div className = "medium-card-color-list" style={{height:"350px",width:"480px"}}>
                        <div className = "medium-card-color-light-list">
                            <h4 style={{textAlign:"left",marginLeft:"10px",padding:"12px",marginTop:"0px"}}>Create Execution Profile</h4>
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
                                    <Col componentClass={ControlLabel} sm={2} md={3}>
                                        Description
                                    </Col>                           
                                        <Col sm={8} md={8}>
                                        <FormControl type="text" placeholder="Description" required />
                                        </Col>
                                    </FormGroup>
                                    <FormGroup>
                                        <Col componentClass={ControlLabel} sm={2} md={3}>
                                        Global
                                        </Col>  
                                        <Col  sm={8} md={2}>
                                          <Checkbox style ={{color:"White"}} required> </Checkbox>
                                         </Col>
                                   </FormGroup>
                                   <FormGroup controlId="formHorizontalText">
                                        <Col componentClass={ControlLabel} sm={2} md={3}>
                                        Engine
                                        </Col>                           
                                            <Col sm={8} md={2} >
                                            <select id = "dropdown" style={{width:"305px"}}>
                                                <option value="After Last">PC-webUI</option>
                                                <option value="Before Last">Mobile</option>
                                                <option value="Before Last">API</option>                               
                                        </select>                           
                                            </Col>
                                    </FormGroup>
                                    <FormGroup controlId="formHorizontalText">
                                        <Col componentClass={ControlLabel} sm={2} md={3}>
                                        Thread Mode
                                        </Col>                           
                                            <Col sm={8} md={2}>
                                            <select id = "dropdown" style={{width:"305px"}}>
                                                <option value="After Last">Parallel</option>
                                                <option value="Before Last">Sequential</option>                                
                                        </select>                           
                                            </Col>
                                   </FormGroup>
                                </Form>
                        </div>
                     </div>
                     </Col>  
        </div>
        <div className="row" style={{marginLeft:"0px"}}>
        {/*<Addstep/>*/}
            <div className = "card example-1 scrollbar-ripe-malinka" style={{height:"445px",marginTop:"9px"}}>
                        <div className = "medium-card-color-light" >
                        <div className="row">
                            <Col md={2} sm={6} >
                                <p  style = {{padding:"15px"}}>Browser</p>
                            </Col>
                            
                            
                                <p  ><Addstep/></p>
                            
                            
                         </div>
                            
                                    
                                        <Table responsive  bordered style={{color:"white"}}>
                                            <thead>
                                                <tr>
                                                    <th>S.no</th>
                                                    <th>Name</th>
                                                    <th>Location</th>
                                                    <th>Type</th>                                      
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
                    <div className = "row" style = {{marginTop:"10px",marginLeft:"10px"}}>
                <Col md ={2}>
                    <ButtonToolbar>
                        {/* Provides extra visual weight and identifies the primary action in a set of buttons */}
                        <Button bsStyle="primary">Save</Button>
                        </ButtonToolbar>;
                </Col>
                       
                       <Col md ={2}>
                            {/* Indicates a dangerous or potentially negative action */}
                            <Button bsStyle="danger">Cancel</Button>                    
                       </Col>
            </div>
                </div>
                <Footer/>
</div>
        );
    }
}
 
export default NewExecutionProfile;