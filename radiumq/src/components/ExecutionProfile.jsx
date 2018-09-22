import React, { Component } from 'react';
import 
{
    Col,Form,
    FormGroup,FormControl,ControlLabel,
    Checkbox,Button,Table,Glyphicon,ButtonToolbar,
    Overlay,OverlayTrigger,Tooltip,Modal,Badge
} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import './UDF.css';
import './User.css';
import Addstep from './Addstep';
import AddDate from './AddData';
import AddData from './AddData';
import Header from './Header'
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
class ExecutionProfile extends Component {
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
        <div className = "row" style={{marginLeft:"0px"}}>
            <Col  md={2}>
                <div class="small-card card-body">
                    <center>
                        <Link to ="/">
                            <p>Projects</p> 
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
                <div class="small-card card-body">
                    <center>
                        <Link to ="/testcase">
                            <p> cases</p>            
                            <hr/>
                            <Badge>10</Badge>                
                        </Link>
                    </center>
                </div> 
            </Col>
        </div>
        <div className = "row">
            <Col md={12} sm={12} xs={12}>
                <div className="Banner" style={{marginLeft:"1.5rem",width:"1120px"}}>
                        <div className = "row">
                            <Col md={4} sm={4} xs={6} >
                                <h4 style={{textAlign:"left",marginLeft:"14px"}}>Execution Profile</h4>
                            </Col>
                            <Col md={4} sm={4} xs={6} mdOffset={4} >
                                <Link to="/NewExecutionProfile">
                                <Button bsStyle="info"  style={{marginTop:"6px",marginLeft:"164px"}}>Execution Profile +</Button>
                                </Link>
                            </Col>
                        </div>
                </div>
            </Col>      
        </div>
        
            <div className = "row" style={{marginLeft:"0px"}}>
            <Col md={12} >
                <div className = "card example-1 scrollbar-ripe-malinka" style={{height:"445px",marginTop:"9px"}}>
                     <p className = "medium-card-color-light"  style = {{padding:"15px"}}>List of Executoin Profile</p>
                     <Table responsive  bordered style={{color:"white"}}>
                     <thead>
                        <tr>
                        <th>S.No</th>
                        <th>Name</th>
                        <th>Location</th>
                        <th>Profile</th>
                        <th>Edit &nbsp;/&nbsp;Delete</th>
                             
                        </tr>
                    </thead>
                        <tbody>
                            <tr>
                                <td>S.No</td>
                                <td>Name</td>
                                <td>Location</td>

                                <td>Profile </td>
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
                                <td>S.No</td>
                                <td>Name</td>
                                <td>Location</td>

                                <td>Profile </td>
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
                                <td>S.No</td>
                                <td>Name</td>
                                <td>Location</td>

                                <td>Profile </td>
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
                                <td>S.No</td>
                                <td>Name</td>
                                <td>Location</td>

                                <td>Profile </td>
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
                                <td>S.No</td>
                                <td>Name</td>
                                <td>Location</td>

                                <td>Profile </td>
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
                                <td>S.No</td>
                                <td>Name</td>
                                <td>Location</td>

                                <td>Profile </td>
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
                                <td>S.No</td>
                                <td>Name</td>
                                <td>Location</td>

                                <td>Profile </td>
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
                                <td>S.No</td>
                                <td>Name</td>
                                <td>Location</td>

                                <td>Profile </td>
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
                                <td>S.No</td>
                                <td>Name</td>
                                <td>Location</td>

                                <td>Profile </td>
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
                                <td>S.No</td>
                                <td>Name</td>
                                <td>Location</td>

                                <td>Profile </td>
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
                                <td>S.No</td>
                                <td>Name</td>
                                <td>Location</td>

                                <td>Profile </td>
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
 
export default ExecutionProfile;