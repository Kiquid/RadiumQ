import React, { Component } from 'react';
import 
{
    Col,Form,
    FormGroup,FormControl,
    Checkbox,Button,Badge,Table,
    ButtonToolbar,OverlayTrigger,
    Glyphicon,Tooltip
} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import Admin from './Admin';
import './Admin.css';
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
class User extends Component {
   // state = {  }
    render() { 
        return ( 
        
          <div className = "container">
            <div className = "row">
                <Col  md={2} mdOffset={1}>
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
                            <Link to ="/UDF">
                                <p>UDF</p> 
                                <hr/>
                                <Badge>10</Badge>                               
                            </Link>
                        </center>
                    </div>                       
                </Col>
                <Col  md={2}>
                    <div class="small-card card-body" style = {{width:"100px"}}>
                        <center>
                            <Link to ="/testcase">
                                <p>Test Cases</p> 
                                <hr/>
                                <Badge>13</Badge>                                
                            </Link>
                        </center>
                    </div> 
                </Col>
                <Col  md={2}>
                    <div class="small-card card-body"style = {{width:"100px"}}>
                        <center>
                            <Link to ="/">
                                <p>Scenario</p> 
                                <hr/>
                                <Badge>13</Badge>                                 
                            </Link>
                        </center>
                    </div> 
                </Col>
                <Col  md={2}>
                    <div class="small-card card-body">
                        <center>
                            <Link to ="/Exe">
                                <p> Profile</p> 
                                <hr/>
                                <Badge>13</Badge>                                 
                            </Link>
                        </center>
                    </div> 
                </Col>
                <Col  md={2}>
                    <div class="small-card card-body" style = {{width:"100px"}}>
                        <center>
                            <Link to ="/">
                                <p> Details</p> 
                                <hr/>
                                <Badge>13</Badge>                                 
                            </Link>
                        </center>
                    </div> 
                </Col>                
            </div>
            <div className = "row">
                <Col md= {4} mdOffset={1}>
                    <div className = "medium-card-color">
                     <p  className = "medium-card-color-light" style = {{padding:"15px"}}>Create a New user</p>
                  
                     <Form horizontal>
                        <FormGroup controlId="formHorizontalText" 
                        style ={{paddingLeft:"45px"}}>                           
                            <Col sm={10} md={10}>
                            <FormControl type="text" placeholder="User ID" required />
                            </Col>
                        </FormGroup>
                        <FormGroup controlId="formHorizontalPassword" 
                        style ={{paddingLeft:"45px"}}>                           
                            <Col sm={10} md={10}>
                            <FormControl type="password" placeholder="Password" required />
                            </Col>
                        </FormGroup>
                        <FormGroup controlId="formHorizontalPassword" 
                        style ={{paddingLeft:"45px"}}>                           
                            <Col sm={10} md={10}>
                            <FormControl type="password" placeholder="Confirm Password" required />
                            </Col>
                        </FormGroup>
                        <FormGroup controlId="formHorizontalName" 
                        style ={{paddingLeft:"45px"}}>                           
                            <Col sm={10} md={10}>
                            <FormControl type="text" placeholder="User Name" required />
                            </Col>
                        </FormGroup>
                        <FormGroup controlId="formHorizontalEmail" 
                        style ={{paddingLeft:"45px"}}>                           
                            <Col sm={10} md={10}>
                            <FormControl type="Email" placeholder="Email" required />
                            </Col>
                        </FormGroup>
                        <FormGroup controlId="formHorizontalText"  style ={{paddingLeft:"45px"}}>                           
                            <Col sm={10} md={10}>
                            <FormControl type="text" placeholder="Role" required />
                            </Col>
                        </FormGroup>
                        <FormGroup>
                            <Col  sm={10} md={10}>
                            <Checkbox style ={{color:"White"}} required>Active </Checkbox>
                            </Col>
                        </FormGroup>   
                        <div className ="row">
                        <FormGroup>
                            <Col sm={6} md ={6}>
                            <Button type = "Submit" bsStyle="success">Create</Button>                       
                             </Col>  
                        
                            <Col sm={6} md ={6}>
                            <Button bsStyle="danger">cancel</Button>                       
                             </Col> 
                        </FormGroup> 
                        </div>                                         
                    </Form>                   
                    </div>
                </Col>
            <Col md={4}>
                <div className = "card example-1 scrollbar-ripe-malinka" style={{width:"551px",height:"445px",marginLeft:"40px",marginTop:"9px"}}>
                     <p className = "medium-card-color-light"  style = {{padding:"15px"}}>List of Users</p>
                     <Table responsive  bordered style={{color:"white"}}>
                     <thead>
                        <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Description</th>
                        <th>Created on</th>
                        <th>options</th>
                        <th>options</th>     
                        </tr>
                    </thead>
                        <tbody>
                            <tr>
                                <td>Id</td>
                                <td>Name</td>
                                <td>Description</td>
                                <td>Created on</td>
                                    <td>
                                        <ButtonToolbar>   
                                            <OverlayTrigger placement="left" overlay={del}>               
                                                <Button bsSize="xsmall">                                         
                                                    <Glyphicon className ="del-color" glyph="remove" />                   
                                                </Button> 
                                            </OverlayTrigger>                  
                                        </ButtonToolbar> 
                                
                                    </td>
                                    <td> <ButtonToolbar>   
                                            <OverlayTrigger placement="left" overlay={Edit}>               
                                                <Button bsSize="xsmall">                                         
                                                    <Glyphicon style = {{color:"#428bca"}} glyph="pencil" />                   
                                                </Button> 
                                            </OverlayTrigger>                  
                                        </ButtonToolbar>
                                    </td>     
                             </tr>
                             <tr>
                                <td>Id</td>
                                <td>Name</td>
                                <td>Description</td>
                                <td>Created on</td>
                                    <td>
                                        <ButtonToolbar>   
                                            <OverlayTrigger placement="left" overlay={del}>               
                                                <Button bsSize="xsmall">                                         
                                                    <Glyphicon className ="del-color" glyph="remove" />                   
                                                </Button> 
                                            </OverlayTrigger>                  
                                        </ButtonToolbar> 
                                
                                    </td>
                                    <td> <ButtonToolbar>   
                                            <OverlayTrigger placement="left" overlay={Edit}>               
                                                <Button bsSize="xsmall">                                         
                                                    <Glyphicon style = {{color:"#428bca"}} glyph="pencil" />                   
                                                </Button> 
                                            </OverlayTrigger>                  
                                        </ButtonToolbar>
                                    </td>     
                             </tr>
                             <tr>
                                <td>Id</td>
                                <td>Name</td>
                                <td>Description</td>
                                <td>Created on</td>
                                    <td>
                                        <ButtonToolbar>   
                                            <OverlayTrigger placement="left" overlay={del}>               
                                                <Button bsSize="xsmall">                                         
                                                    <Glyphicon className ="del-color" glyph="remove" />                   
                                                </Button> 
                                            </OverlayTrigger>                  
                                        </ButtonToolbar> 
                                
                                    </td>
                                    <td> <ButtonToolbar>   
                                            <OverlayTrigger placement="left" overlay={Edit}>               
                                                <Button bsSize="xsmall">                                         
                                                    <Glyphicon style = {{color:"#428bca"}} glyph="pencil" />                   
                                                </Button> 
                                            </OverlayTrigger>                  
                                        </ButtonToolbar>
                                    </td>     
                             </tr>
                             <tr>
                                <td>Id</td>
                                <td>Name</td>
                                <td>Description</td>
                                <td>Created on</td>
                                    <td>
                                        <ButtonToolbar>   
                                            <OverlayTrigger placement="left" overlay={del}>               
                                                <Button bsSize="xsmall">                                         
                                                    <Glyphicon className ="del-color" glyph="remove" />                   
                                                </Button> 
                                            </OverlayTrigger>                  
                                        </ButtonToolbar> 
                                
                                    </td>
                                    <td> <ButtonToolbar>   
                                            <OverlayTrigger placement="left" overlay={Edit}>               
                                                <Button bsSize="xsmall">                                         
                                                    <Glyphicon style = {{color:"#428bca"}} glyph="pencil" />                   
                                                </Button> 
                                            </OverlayTrigger>                  
                                        </ButtonToolbar>
                                    </td>     
                             </tr>
                             <tr>
                                <td>Id</td>
                                <td>Name</td>
                                <td>Description</td>
                                <td>Created on</td>
                                    <td>
                                        <ButtonToolbar>   
                                            <OverlayTrigger placement="left" overlay={del}>               
                                                <Button bsSize="xsmall">                                         
                                                    <Glyphicon className ="del-color" glyph="remove" />                   
                                                </Button> 
                                            </OverlayTrigger>                  
                                        </ButtonToolbar> 
                                
                                    </td>
                                    <td> <ButtonToolbar>   
                                            <OverlayTrigger placement="left" overlay={Edit}>               
                                                <Button bsSize="xsmall">                                         
                                                    <Glyphicon style = {{color:"#428bca"}} glyph="pencil" />                   
                                                </Button> 
                                            </OverlayTrigger>                  
                                        </ButtonToolbar>
                                    </td>     
                             </tr>
                             <tr>
                                <td>Id</td>
                                <td>Name</td>
                                <td>Description</td>
                                <td>Created on</td>
                                    <td>
                                        <ButtonToolbar>   
                                            <OverlayTrigger placement="left" overlay={del}>               
                                                <Button bsSize="xsmall">                                         
                                                    <Glyphicon className ="del-color" glyph="remove" />                   
                                                </Button> 
                                            </OverlayTrigger>                  
                                        </ButtonToolbar> 
                                
                                    </td>
                                    <td> <ButtonToolbar>   
                                            <OverlayTrigger placement="left" overlay={Edit}>               
                                                <Button bsSize="xsmall">                                         
                                                    <Glyphicon style = {{color:"#428bca"}} glyph="pencil" />                   
                                                </Button> 
                                            </OverlayTrigger>                  
                                        </ButtonToolbar>
                                    </td>     
                             </tr> <tr>
                                <td>Id</td>
                                <td>Name</td>
                                <td>Description</td>
                                <td>Created on</td>
                                    <td>
                                        <ButtonToolbar>   
                                            <OverlayTrigger placement="left" overlay={del}>               
                                                <Button bsSize="xsmall">                                         
                                                    <Glyphicon className ="del-color" glyph="remove" />                   
                                                </Button> 
                                            </OverlayTrigger>                  
                                        </ButtonToolbar> 
                                
                                    </td>
                                    <td> <ButtonToolbar>   
                                            <OverlayTrigger placement="left" overlay={Edit}>               
                                                <Button bsSize="xsmall">                                         
                                                    <Glyphicon style = {{color:"#428bca"}} glyph="pencil" />                   
                                                </Button> 
                                            </OverlayTrigger>                  
                                        </ButtonToolbar>
                                    </td>     
                             </tr> <tr>
                                <td>Id</td>
                                <td>Name</td>
                                <td>Description</td>
                                <td>Created on</td>
                                    <td>
                                        <ButtonToolbar>   
                                            <OverlayTrigger placement="left" overlay={del}>               
                                                <Button bsSize="xsmall">                                         
                                                    <Glyphicon className ="del-color" glyph="remove" />                   
                                                </Button> 
                                            </OverlayTrigger>                  
                                        </ButtonToolbar> 
                                
                                    </td>
                                    <td> <ButtonToolbar>   
                                            <OverlayTrigger placement="left" overlay={Edit}>               
                                                <Button bsSize="xsmall">                                         
                                                    <Glyphicon style = {{color:"#428bca"}} glyph="pencil" />                   
                                                </Button> 
                                            </OverlayTrigger>                  
                                        </ButtonToolbar>
                                    </td>     
                             </tr> <tr>
                                <td>Id</td>
                                <td>Name</td>
                                <td>Description</td>
                                <td>Created on</td>
                                    <td>
                                        <ButtonToolbar>   
                                            <OverlayTrigger placement="left" overlay={del}>               
                                                <Button bsSize="xsmall">                                         
                                                    <Glyphicon className ="del-color" glyph="remove" />                   
                                                </Button> 
                                            </OverlayTrigger>                  
                                        </ButtonToolbar> 
                                
                                    </td>
                                    <td> <ButtonToolbar>   
                                            <OverlayTrigger placement="left" overlay={Edit}>               
                                                <Button bsSize="xsmall">                                         
                                                    <Glyphicon style = {{color:"#428bca"}} glyph="pencil" />                   
                                                </Button> 
                                            </OverlayTrigger>                  
                                        </ButtonToolbar>
                                    </td>     
                             </tr> <tr>
                                <td>Id</td>
                                <td>Name</td>
                                <td>Description</td>
                                <td>Created on</td>
                                    <td>
                                        <ButtonToolbar>   
                                            <OverlayTrigger placement="left" overlay={del}>               
                                                <Button bsSize="xsmall">                                         
                                                    <Glyphicon className ="del-color" glyph="remove" />                   
                                                </Button> 
                                            </OverlayTrigger>                  
                                        </ButtonToolbar> 
                                
                                    </td>
                                    <td> <ButtonToolbar>   
                                            <OverlayTrigger placement="left" overlay={Edit}>               
                                                <Button bsSize="xsmall">                                         
                                                    <Glyphicon style = {{color:"#428bca"}} glyph="pencil" />                   
                                                </Button> 
                                            </OverlayTrigger>                  
                                        </ButtonToolbar>
                                    </td>     
                             </tr> <tr>
                                <td>Id</td>
                                <td>Name</td>
                                <td>Description</td>
                                <td>Created on</td>
                                    <td>
                                        <ButtonToolbar>   
                                            <OverlayTrigger placement="left" overlay={del}>               
                                                <Button bsSize="xsmall">                                         
                                                    <Glyphicon className ="del-color" glyph="remove" />                   
                                                </Button> 
                                            </OverlayTrigger>                  
                                        </ButtonToolbar> 
                                
                                    </td>
                                    <td> <ButtonToolbar>   
                                            <OverlayTrigger placement="left" overlay={Edit}>               
                                                <Button bsSize="xsmall">                                         
                                                    <Glyphicon style = {{color:"#428bca"}} glyph="pencil" />                   
                                                </Button> 
                                            </OverlayTrigger>                  
                                        </ButtonToolbar>
                                    </td>     
                             </tr> <tr>
                                <td>Id</td>
                                <td>Name</td>
                                <td>Description</td>
                                <td>Created on</td>
                                    <td>
                                        <ButtonToolbar>   
                                            <OverlayTrigger placement="left" overlay={del}>               
                                                <Button bsSize="xsmall">                                         
                                                    <Glyphicon className ="del-color" glyph="remove" />                   
                                                </Button> 
                                            </OverlayTrigger>                  
                                        </ButtonToolbar> 
                                
                                    </td>
                                    <td> <ButtonToolbar>   
                                            <OverlayTrigger placement="left" overlay={Edit}>               
                                                <Button bsSize="xsmall">                                         
                                                    <Glyphicon style = {{color:"#428bca"}} glyph="pencil" />                   
                                                </Button> 
                                            </OverlayTrigger>                  
                                        </ButtonToolbar>
                                    </td>     
                             </tr> <tr>
                                <td>Id</td>
                                <td>Name</td>
                                <td>Description</td>
                                <td>Created on</td>
                                    <td>
                                        <ButtonToolbar>   
                                            <OverlayTrigger placement="left" overlay={del}>               
                                                <Button bsSize="xsmall">                                         
                                                    <Glyphicon className ="del-color" glyph="remove" />                   
                                                </Button> 
                                            </OverlayTrigger>                  
                                        </ButtonToolbar> 
                                
                                    </td>
                                    <td> <ButtonToolbar>   
                                            <OverlayTrigger placement="left" overlay={Edit}>               
                                                <Button bsSize="xsmall">                                         
                                                    <Glyphicon style = {{color:"#428bca"}} glyph="pencil" />                   
                                                </Button> 
                                            </OverlayTrigger>                  
                                        </ButtonToolbar>
                                    </td>     
                             </tr> <tr>
                                <td>Id</td>
                                <td>Name</td>
                                <td>Description</td>
                                <td>Created on</td>
                                    <td>
                                        <ButtonToolbar>   
                                            <OverlayTrigger placement="left" overlay={del}>               
                                                <Button bsSize="xsmall">                                         
                                                    <Glyphicon className ="del-color" glyph="remove" />                   
                                                </Button> 
                                            </OverlayTrigger>                  
                                        </ButtonToolbar> 
                                
                                    </td>
                                    <td> <ButtonToolbar>   
                                            <OverlayTrigger placement="left" overlay={Edit}>               
                                                <Button bsSize="xsmall">                                         
                                                    <Glyphicon style = {{color:"#428bca"}} glyph="pencil" />                   
                                                </Button> 
                                            </OverlayTrigger>                  
                                        </ButtonToolbar>
                                    </td>     
                             </tr> <tr>
                                <td>Id</td>
                                <td>Name</td>
                                <td>Description</td>
                                <td>Created on</td>
                                    <td>
                                        <ButtonToolbar>   
                                            <OverlayTrigger placement="left" overlay={del}>               
                                                <Button bsSize="xsmall">                                         
                                                    <Glyphicon className ="del-color" glyph="remove" />                   
                                                </Button> 
                                            </OverlayTrigger>                  
                                        </ButtonToolbar> 
                                
                                    </td>
                                    <td> <ButtonToolbar>   
                                            <OverlayTrigger placement="left" overlay={Edit}>               
                                                <Button bsSize="xsmall">                                         
                                                    <Glyphicon style = {{color:"#428bca"}} glyph="pencil" />                   
                                                </Button> 
                                            </OverlayTrigger>                  
                                        </ButtonToolbar>
                                    </td>     
                             </tr> <tr>
                                <td>Id</td>
                                <td>Name</td>
                                <td>Description</td>
                                <td>Created on</td>
                                    <td>
                                        <ButtonToolbar>   
                                            <OverlayTrigger placement="left" overlay={del}>               
                                                <Button bsSize="xsmall">                                         
                                                    <Glyphicon className ="del-color" glyph="remove" />                   
                                                </Button> 
                                            </OverlayTrigger>                  
                                        </ButtonToolbar> 
                                
                                    </td>
                                    <td> <ButtonToolbar>   
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
          
         )
    }
}
 
export default User;