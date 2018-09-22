import React, { Component } from 'react';
import 
{
    Col,Form,
    FormGroup,FormControl,ControlLabel,
    Checkbox,Button,Table,Glyphicon,ButtonToolbar,Overlay,OverlayTrigger,Tooltip,Modal,Badge
} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import './UDF.css';
import './User.css';
import Header from './Header';
import Footer from './Footer';

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
                                <h4 style={{textAlign:"left",marginLeft:"10px"}}> UDF</h4>
                            </Col>
                            <Col md={4} sm={4} xs={6} mdOffset={4} >
                                <Link to="/NewUDF">
                                <Button bsStyle="info"  style={{float:"right",marginTop:"6px",marginLeft:"50px",marginRight:"5rem"}}>UDF +</Button>
                                </Link>
                            </Col>
                        </div>
                </div>
            </Col>      
        </div>
        <div className = "row">
            <Col md={12} >
                <div className = "card example-1 scrollbar-ripe-malinka" style={{height:"445px",marginTop:"9px"}}>
                     <p className = "medium-card-color-light"  style = {{padding:"15px"}}>List of UDF</p>
                     <Table responsive  bordered style={{color:"white"}}>
                     <thead>
                        <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Description</th>
                        <th>Created on</th>
                        <th>Edit &nbsp;/&nbsp;Delete</th>
                             
                        </tr>
                    </thead>
                        <tbody>
                            <tr>
                                <td>Id</td>
                                <td>Name</td>
                                <td>Description</td>
                                <td>Created on</td>
                                <td>
                                    <div className="row" >
                                        <Col md={2} mdOffset={1}>
                                        <ButtonToolbar>   
                                            <OverlayTrigger placement="left" overlay={del}>               
                                                <Button bsSize="xsmall">                                         
                                                    <Glyphicon className ="del-color" glyph="remove" />                   
                                                </Button> 
                                            </OverlayTrigger>                  
                                        </ButtonToolbar> 
                                        </Col>
                                        <Col md ={2} >
                                        <ButtonToolbar>   
                                            <OverlayTrigger placement="left" overlay={Edit}>               
                                                <Button bsSize="xsmall">                                         
                                                    <Glyphicon style = {{color:"#428bca"}} glyph="pencil" />                   
                                                </Button> 
                                            </OverlayTrigger>                  
                                        </ButtonToolbar>
                                        </Col>
                                    </div>
                               </td>
                             </tr>
                             <tr>
                                <td>Id</td>
                                <td>Name</td>
                                <td>Description</td>
                                <td>Created on</td>                               
                                <td>
                                    <div className="row" >
                                        <Col md={2} mdOffset={1}>
                                        <ButtonToolbar>   
                                            <OverlayTrigger placement="left" overlay={del}>               
                                                <Button bsSize="xsmall">                                         
                                                    <Glyphicon className ="del-color" glyph="remove" />                   
                                                </Button> 
                                            </OverlayTrigger>                  
                                        </ButtonToolbar> 
                                        </Col>
                                        <Col md ={2} >
                                        <ButtonToolbar>   
                                            <OverlayTrigger placement="left" overlay={Edit}>               
                                                <Button bsSize="xsmall">                                         
                                                    <Glyphicon style = {{color:"#428bca"}} glyph="pencil" />                   
                                                </Button> 
                                            </OverlayTrigger>                  
                                        </ButtonToolbar>
                                        </Col>
                                    </div>
                               </td>
                             </tr>
                             <tr>
                                <td>Id</td>
                                <td>Name</td>
                                <td>Description</td>
                                <td>Created on</td>
                                <td>
                                    <div className="row" >
                                        <Col md={2} mdOffset={1}>
                                        <ButtonToolbar>   
                                            <OverlayTrigger placement="left" overlay={del}>               
                                                <Button bsSize="xsmall">                                         
                                                    <Glyphicon className ="del-color" glyph="remove" />                   
                                                </Button> 
                                            </OverlayTrigger>                  
                                        </ButtonToolbar> 
                                        </Col>
                                        <Col md ={2} >
                                        <ButtonToolbar>   
                                            <OverlayTrigger placement="left" overlay={Edit}>               
                                                <Button bsSize="xsmall">                                         
                                                    <Glyphicon style = {{color:"#428bca"}} glyph="pencil" />                   
                                                </Button> 
                                            </OverlayTrigger>                  
                                        </ButtonToolbar>
                                        </Col>
                                    </div>
                               </td>   
                             </tr>
                             <tr>
                                <td>Id</td>
                                <td>Name</td>
                                <td>Description</td>
                                <td>Created on</td>
                                <td>
                                    <div className="row" >
                                        <Col md={2} mdOffset={1}>
                                        <ButtonToolbar>   
                                            <OverlayTrigger placement="left" overlay={del}>               
                                                <Button bsSize="xsmall">                                         
                                                    <Glyphicon className ="del-color" glyph="remove" />                   
                                                </Button> 
                                            </OverlayTrigger>                  
                                        </ButtonToolbar> 
                                        </Col>
                                        <Col md ={2} >
                                        <ButtonToolbar>   
                                            <OverlayTrigger placement="left" overlay={Edit}>               
                                                <Button bsSize="xsmall">                                         
                                                    <Glyphicon style = {{color:"#428bca"}} glyph="pencil" />                   
                                                </Button> 
                                            </OverlayTrigger>                  
                                        </ButtonToolbar>
                                        </Col>
                                    </div>
                               </td>     
                             </tr>
                             <tr>
                                <td>Id</td>
                                <td>Name</td>
                                <td>Description</td>
                                <td>Created on</td>
                                <td>
                                    <div className="row" >
                                        <Col md={2} mdOffset={1}>
                                        <ButtonToolbar>   
                                            <OverlayTrigger placement="left" overlay={del}>               
                                                <Button bsSize="xsmall">                                         
                                                    <Glyphicon className ="del-color" glyph="remove" />                   
                                                </Button> 
                                            </OverlayTrigger>                  
                                        </ButtonToolbar> 
                                        </Col>
                                        <Col md ={2} >
                                        <ButtonToolbar>   
                                            <OverlayTrigger placement="left" overlay={Edit}>               
                                                <Button bsSize="xsmall">                                         
                                                    <Glyphicon style = {{color:"#428bca"}} glyph="pencil" />                   
                                                </Button> 
                                            </OverlayTrigger>                  
                                        </ButtonToolbar>
                                        </Col>
                                    </div>
                               </td>    
                             </tr>
                             <tr>
                                <td>Id</td>
                                <td>Name</td>
                                <td>Description</td>
                                <td>Created on</td>
                                <td>
                                    <div className="row" >
                                        <Col md={2} mdOffset={1}>
                                        <ButtonToolbar>   
                                            <OverlayTrigger placement="left" overlay={del}>               
                                                <Button bsSize="xsmall">                                         
                                                    <Glyphicon className ="del-color" glyph="remove" />                   
                                                </Button> 
                                            </OverlayTrigger>                  
                                        </ButtonToolbar> 
                                        </Col>
                                        <Col md ={2} >
                                        <ButtonToolbar>   
                                            <OverlayTrigger placement="left" overlay={Edit}>               
                                                <Button bsSize="xsmall">                                         
                                                    <Glyphicon style = {{color:"#428bca"}} glyph="pencil" />                   
                                                </Button> 
                                            </OverlayTrigger>                  
                                        </ButtonToolbar>
                                        </Col>
                                    </div>
                               </td>    
                             </tr> <tr>
                                <td>Id</td>
                                <td>Name</td>
                                <td>Description</td>
                                <td>Created on</td>
                                <td>
                                    <div className="row" >
                                        <Col md={2} mdOffset={1}>
                                        <ButtonToolbar>   
                                            <OverlayTrigger placement="left" overlay={del}>               
                                                <Button bsSize="xsmall">                                         
                                                    <Glyphicon className ="del-color" glyph="remove" />                   
                                                </Button> 
                                            </OverlayTrigger>                  
                                        </ButtonToolbar> 
                                        </Col>
                                        <Col md ={2} >
                                        <ButtonToolbar>   
                                            <OverlayTrigger placement="left" overlay={Edit}>               
                                                <Button bsSize="xsmall">                                         
                                                    <Glyphicon style = {{color:"#428bca"}} glyph="pencil" />                   
                                                </Button> 
                                            </OverlayTrigger>                  
                                        </ButtonToolbar>
                                        </Col>
                                    </div>
                               </td>     
                             </tr> <tr>
                                <td>Id</td>
                                <td>Name</td>
                                <td>Description</td>
                                <td>Created on</td>
                                <td>
                                    <div className="row" >
                                        <Col md={2} mdOffset={1}>
                                        <ButtonToolbar>   
                                            <OverlayTrigger placement="left" overlay={del}>               
                                                <Button bsSize="xsmall">                                         
                                                    <Glyphicon className ="del-color" glyph="remove" />                   
                                                </Button> 
                                            </OverlayTrigger>                  
                                        </ButtonToolbar> 
                                        </Col>
                                        <Col md ={2} >
                                        <ButtonToolbar>   
                                            <OverlayTrigger placement="left" overlay={Edit}>               
                                                <Button bsSize="xsmall">                                         
                                                    <Glyphicon style = {{color:"#428bca"}} glyph="pencil" />                   
                                                </Button> 
                                            </OverlayTrigger>                  
                                        </ButtonToolbar>
                                        </Col>
                                    </div>
                               </td>     
                             </tr> <tr>
                                <td>Id</td>
                                <td>Name</td>
                                <td>Description</td>
                                <td>Created on</td>
                                <td>
                                    <div className="row" >
                                        <Col md={2} mdOffset={1}>
                                        <ButtonToolbar>   
                                            <OverlayTrigger placement="left" overlay={del}>               
                                                <Button bsSize="xsmall">                                         
                                                    <Glyphicon className ="del-color" glyph="remove" />                   
                                                </Button> 
                                            </OverlayTrigger>                  
                                        </ButtonToolbar> 
                                        </Col>
                                        <Col md ={2} >
                                        <ButtonToolbar>   
                                            <OverlayTrigger placement="left" overlay={Edit}>               
                                                <Button bsSize="xsmall">                                         
                                                    <Glyphicon style = {{color:"#428bca"}} glyph="pencil" />                   
                                                </Button> 
                                            </OverlayTrigger>                  
                                        </ButtonToolbar>
                                        </Col>
                                    </div>
                               </td>    
                             </tr> <tr>
                                <td>Id</td>
                                <td>Name</td>
                                <td>Description</td>
                                <td>Created on</td>
                                <td>
                                    <div className="row" >
                                        <Col md={2} mdOffset={1}>
                                        <ButtonToolbar>   
                                            <OverlayTrigger placement="left" overlay={del}>               
                                                <Button bsSize="xsmall">                                         
                                                    <Glyphicon className ="del-color" glyph="remove" />                   
                                                </Button> 
                                            </OverlayTrigger>                  
                                        </ButtonToolbar> 
                                        </Col>
                                        <Col md ={2} >
                                        <ButtonToolbar>   
                                            <OverlayTrigger placement="left" overlay={Edit}>               
                                                <Button bsSize="xsmall">                                         
                                                    <Glyphicon style = {{color:"#428bca"}} glyph="pencil" />                   
                                                </Button> 
                                            </OverlayTrigger>                  
                                        </ButtonToolbar>
                                        </Col>
                                    </div>
                               </td>    
                             </tr> <tr>
                                <td>Id</td>
                                <td>Name</td>
                                <td>Description</td>
                                <td>Created on</td>
                                <td>
                                    <div className="row" >
                                        <Col md={2} mdOffset={1}>
                                        <ButtonToolbar>   
                                            <OverlayTrigger placement="left" overlay={del}>               
                                                <Button bsSize="xsmall">                                         
                                                    <Glyphicon className ="del-color" glyph="remove" />                   
                                                </Button> 
                                            </OverlayTrigger>                  
                                        </ButtonToolbar> 
                                        </Col>
                                        <Col md ={2} >
                                        <ButtonToolbar>   
                                            <OverlayTrigger placement="left" overlay={Edit}>               
                                                <Button bsSize="xsmall">                                         
                                                    <Glyphicon style = {{color:"#428bca"}} glyph="pencil" />                   
                                                </Button> 
                                            </OverlayTrigger>                  
                                        </ButtonToolbar>
                                        </Col>
                                    </div>
                               </td>     
                             </tr>
                                 
                            
                       </tbody>
                     </Table>
                </div>
             </Col>
          </div>
  <Footer/>
    </div>
    );
    }
}
 
export default UDF;