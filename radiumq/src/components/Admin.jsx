import React,{Component} from 'react';
import {
       Col,Button,ProgressBar,Badge,ButtonGroup,
       ButtonToolbar,Glyphicon,Tooltip,OverlayTrigger,Container
} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import Chart from './Chart';
import './Admin.css';
import Newproject from './NewProject';
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
const  data1 = {
  labels: [
      'Failed',
      'Sucess',
      'Inprogess'
  ],
  datasets: [{
      data: [300, 50, 100],
      backgroundColor: [
      '#FF6384',
      '#36A2EB',
      '#FFCE56'
      ],
      hoverBackgroundColor: [
      '#FF6384',
      '#36A2EB',
      '#FFCE56'
      ]
  }]
};
const  data2 = {
  labels: [
     
      'Completed',
      'Pending'
      
  ],
  datasets: [{
      label: 'Stastistic Results',
      data: [60,40],
      backgroundColor: [
      '#74C274',
      '#DE6C69'
      
      ],
      hoverBackgroundColor: [
      '#5CB85C',
      '#D9534F'
      
      ]
  }]
};
class Cards extends Component {
    //state = {  }
    render() { 
        return ( 
         
//opening of the container

<div className="container">
        <div className="row">
          <Col md={2} >
            <div className="small-card card-body">
              <center>
                  <Link to ="/User">
                    <p>Users</p>
                    <hr/>
                    <Badge>17</Badge>
                  </Link>
              </center>
            </div>          
          </Col>
          <Col md={2}>
            <div className="small-card card-body">
            <center>
             <p>Admin</p>
             <hr/>
             <Badge>6</Badge>
             </center>
            </div>          
          </Col>
          <Col md={2}>
            <div className="small-card card-body">
            <center>
             <p>Manager</p>
             <hr/>
             <Badge>7</Badge>
             </center>
            </div>          
          </Col>
          <Col md={2}>
            <div className="small-card card-body">
            <center>
             <p>Tester</p>
             <hr/>
             <Badge>14</Badge>
             </center>
            </div>          
          </Col>
          <Col md={2}>
            <div className="small-card card-body">
            <center>
             <p>Projects</p>
             <hr/>
             <Badge>46</Badge>
             </center>
            </div>                   
          </Col>
          <Col md={2}>
            <div className="small-card card-body" style ={{width:"110px"}}>
            <center>
              <Link to ="/testcase">
             <p>Test Cases</p>
             </Link>
             <hr/>
             <Badge>26</Badge>
             </center>
            </div>          
          </Col>
          <Col md={2}>
            <div className="small-card card-body">
            <center>
              <Link to ="/Exe">
             <p>Profile</p>
             </Link>
             <hr/>
             <Badge>25</Badge>
             </center>
            </div>          
          </Col>
          <Col md={2}>
            <div className="small-card card-body">
            <center>
             <p>Reports</p>
             <hr/>
             <Badge>120</Badge>
             </center>
            </div>          
          </Col>
          <Col md={2}>
            <div className="small-card card-body">
            <center>
              <Link to ="/UDF">
               <p>UDF</p>
             </Link>
             <hr/>
             <Badge>+</Badge>
             </center>
            </div>          
          </Col>
          
        </div>
          <div className="row">
            <Col md={4}  >
              <div className="card example-1 scrollbar-ripe-malinka">
              <div className="card-body">
              <div className= "row">
              <Col md={6}>
                <h4 >Projects</h4> 
                </Col>
                <Col md={6}>
                <h4 ><Newproject/></h4> 
                </Col>
                </div>               
              <hr/>
             <div className="row">
                <Col md={8}>
                  <p>Project 1</p>                                  
                </Col>
                <Col md={2}>                
                <ButtonToolbar>   
                  <OverlayTrigger placement="left" overlay={del}>               
                      <Button bsSize="xsmall">                                         
                          <Glyphicon className ="del-color" glyph="remove" />                   
                      </Button> 
                  </OverlayTrigger>                  
                </ButtonToolbar>                                              
                </Col>
                <Col md={2}>                
                  <ButtonToolbar>
                    <OverlayTrigger placement ="right" overlay ={Edit}>                 
                      <Button bsSize="xsmall">                      
                          <Glyphicon style = {{color:"#428bca"}} glyph="pencil" />                       
                       </Button>                   
                    </OverlayTrigger>  
                  </ButtonToolbar>                                               
                </Col>                 
              </div>
              <hr/>
              <div className="row">
                <Col md={8}>
                  <p>Project 2</p>                                  
                </Col>
                <Col md={2}>
                 <ButtonToolbar>   
                  <OverlayTrigger placement="left" overlay={del}>               
                      <Button bsSize="xsmall">                                         
                          <Glyphicon className ="del-color" glyph="remove" />                   
                      </Button> 
                  </OverlayTrigger>                  
                </ButtonToolbar>                                
                </Col>
                <Col md={2}>
                <ButtonToolbar>
                    <OverlayTrigger placement ="right" overlay ={Edit}>                 
                      <Button bsSize="xsmall">                      
                          <Glyphicon style = {{color:"#428bca"}} glyph="pencil" />                       
                       </Button>                   
                    </OverlayTrigger>  
                  </ButtonToolbar>                                   
                </Col>                 
              </div>
              <hr/>
              <div className="row">
                <Col md={8}>
                  <p>Project 3</p>                                  
                </Col>
                <Col md={2}>
                 <ButtonToolbar>   
                  <OverlayTrigger placement="left" overlay={del}>               
                      <Button bsSize="xsmall">                                         
                          <Glyphicon className ="del-color" glyph="remove" />                   
                      </Button> 
                  </OverlayTrigger>                  
                </ButtonToolbar>                                
                </Col>
                <Col md={2}>
               <ButtonToolbar>
                    <OverlayTrigger placement ="right" overlay ={Edit}>                 
                      <Button bsSize="xsmall">                      
                          <Glyphicon style = {{color:"#428bca"}} glyph="pencil" />                       
                       </Button>                   
                    </OverlayTrigger>  
                  </ButtonToolbar>                                   
                </Col>                 
              </div>
              <hr/>
              <div className="row">
                <Col md={8}>
                  <p>Project 4</p>                                  
                </Col>
                <Col md={2}>
                 <ButtonToolbar>   
                  <OverlayTrigger placement="left" overlay={del}>               
                      <Button bsSize="xsmall">                                         
                          <Glyphicon className ="del-color" glyph="remove" />                   
                      </Button> 
                  </OverlayTrigger>                  
                </ButtonToolbar>                                
                </Col>
                <Col md={2}>
               <ButtonToolbar>
                    <OverlayTrigger placement ="right" overlay ={Edit}>                 
                      <Button bsSize="xsmall">                      
                          <Glyphicon style = {{color:"#428bca"}} glyph="pencil" />                       
                       </Button>                   
                    </OverlayTrigger>  
                  </ButtonToolbar>                                   
                </Col>                 
              </div>
              <hr/>
              <div className="row">
                <Col md={8}>
                  <p>Project 5</p>                                  
                </Col>
                <Col md={2}>
                 <ButtonToolbar>   
                  <OverlayTrigger placement="left" overlay={del}>               
                      <Button bsSize="xsmall">                                         
                          <Glyphicon className ="del-color" glyph="remove" />                   
                      </Button> 
                  </OverlayTrigger>                  
                </ButtonToolbar>                                
                </Col>
                <Col md={2}>
               <ButtonToolbar>  
               <OverlayTrigger placement ="right" overlay ={Edit}>              
                    <Button bsSize="xsmall">                     
                        <Glyphicon style = {{color:"#428bca"}} glyph="pencil" />                     
                    </Button>   
                    </OverlayTrigger>                 
                  </ButtonToolbar>                                 
                </Col>                 
              </div>
              <hr/>
              <div className="row">
                <Col md={8}>
                  <p>Project 6</p>                                  
                </Col>
                <Col md={2}>
                 <ButtonToolbar>   
                  <OverlayTrigger placement="left" overlay={del}>               
                      <Button bsSize="xsmall">                                         
                          <Glyphicon className ="del-color" glyph="remove" />                   
                      </Button> 
                  </OverlayTrigger>                  
                </ButtonToolbar>                                
                </Col>
                <Col md={2}>
               <ButtonToolbar>
                    <OverlayTrigger placement ="right" overlay ={Edit}>                 
                      <Button bsSize="xsmall">                      
                          <Glyphicon style = {{color:"#428bca"}} glyph="pencil" />                       
                       </Button>                   
                    </OverlayTrigger>  
                  </ButtonToolbar>                                   
                </Col>                 
              </div>
              <hr/>
              <div className="row">
                <Col md={8}>
                  <p>Project 7</p>                                  
                </Col>
                <Col md={2}>
                 <ButtonToolbar>   
                  <OverlayTrigger placement="left" overlay={del}>               
                      <Button bsSize="xsmall">                                         
                          <Glyphicon className ="del-color" glyph="remove" />                   
                      </Button> 
                  </OverlayTrigger>                  
                </ButtonToolbar>                                
                </Col>
                <Col md={2}>
               <ButtonToolbar>
                    <OverlayTrigger placement ="right" overlay ={Edit}>                 
                      <Button bsSize="xsmall">                      
                          <Glyphicon style = {{color:"#428bca"}} glyph="pencil" />                       
                       </Button>                   
                    </OverlayTrigger>  
                  </ButtonToolbar>                                   
                </Col>                 
              </div>
              </div>
              </div>
              
            </Col>

            <Col md={7} >
            <div className="card example-1 scrollbar-ripe-malinka" style={{width:"750px"}}>
              <div className="card-body">
              <h4><strong>Project Details</strong></h4>
              <hr/>
              <h5>
                <div className = "row">
                  <Col md ={1}>
                  <p>#</p>
                  </Col>
                  <Col md ={3}>
                  <p>Test Cases</p>
                  </Col>
                  <Col md ={3}>
                  <p>Start Date</p>
                  </Col>
                  <Col md ={3}>
                  <p>End Date</p>
                  </Col>                  
                </div>
              </h5>              
              <hr/>
              <div className = "row">
                  <Col md ={1}>
                  <p>#</p>
                  </Col>
                  <Col md ={3}>
                  <p>Test Cases</p>
                  </Col>
                  <Col md ={3}>
                  <p>Start Date</p>
                  </Col>
                  <Col md ={3}>
                  <p>End Date</p>
                  </Col>                  
                  <Col md={1}>
                  <ButtonToolbar>   
                  <OverlayTrigger placement="left" overlay={del}>               
                      <Button bsSize="xsmall">                                         
                          <Glyphicon className ="del-color" glyph="remove" />                   
                      </Button> 
                  </OverlayTrigger>                  
                </ButtonToolbar>                                
                </Col>
                <Col md={1}>
                <ButtonToolbar>
                    <OverlayTrigger placement ="top" overlay ={Edit}>                 
                      <Button bsSize="xsmall">                      
                          <Glyphicon style = {{color:"#428bca"}} glyph="pencil" />                       
                       </Button>                   
                    </OverlayTrigger>  
                  </ButtonToolbar>                                
                </Col>
                </div>                         
              <hr/>
              <div className = "row">
              <Col md ={1}>
                  <p>#</p>
                  </Col>
                  <Col md ={3}>
                  <p>Test Cases</p>
                  </Col>
                  <Col md ={3}>
                  <p>Start Date</p>
                  </Col>
                  <Col md ={3}>
                  <p>End Date</p>
                  </Col>                  
                  <Col md={1}>
                  <ButtonToolbar>   
                  <OverlayTrigger placement="left" overlay={del}>               
                      <Button bsSize="xsmall">                                         
                          <Glyphicon className ="del-color" glyph="remove" />                   
                      </Button> 
                  </OverlayTrigger>                  
                </ButtonToolbar>                                
                </Col>
                <Col md={1}>
                <ButtonToolbar>
                    <OverlayTrigger placement ="Top" overlay ={Edit}>                 
                      <Button bsSize="xsmall">                      
                          <Glyphicon style = {{color:"#428bca"}} glyph="pencil" />                       
                       </Button>                   
                    </OverlayTrigger>  
                  </ButtonToolbar>                                
                </Col>
                </div>                         
              <hr/> <div className = "row">
                   <Col md ={1}>
                  <p>#</p>
                  </Col>
                  <Col md ={3}>
                  <p>Test Cases</p>
                  </Col>
                  <Col md ={3}>
                  <p>Start Date</p>
                  </Col>
                  <Col md ={3}>
                  <p>End Date</p>
                  </Col>                  
                  <Col md={1}>
                  <ButtonToolbar>   
                  <OverlayTrigger placement="left" overlay={del}>               
                      <Button bsSize="xsmall">                                         
                          <Glyphicon className ="del-color" glyph="remove" />                   
                      </Button> 
                  </OverlayTrigger>                  
                </ButtonToolbar>                                
                </Col>
                <Col md={1}>
                <ButtonToolbar>
                    <OverlayTrigger placement ="Top" overlay ={Edit}>                 
                      <Button bsSize="xsmall">                      
                          <Glyphicon style = {{color:"#428bca"}} glyph="pencil" />                       
                       </Button>                   
                    </OverlayTrigger>  
                  </ButtonToolbar>                                
                </Col>
                </div>                         
              <hr/> <div className = "row">
                   <Col md ={1}>
                  <p>#</p>
                  </Col>
                  <Col md ={3}>
                  <p>Test Cases</p>
                  </Col>
                  <Col md ={3}>
                  <p>Start Date</p>
                  </Col>
                  <Col md ={3}>
                  <p>End Date</p>
                  </Col>                  
                  <Col md={1}>
                  <ButtonToolbar>   
                  <OverlayTrigger placement="left" overlay={del}>               
                      <Button bsSize="xsmall">                                         
                          <Glyphicon className ="del-color" glyph="remove" />                   
                      </Button> 
                  </OverlayTrigger>                  
                </ButtonToolbar>                                
                </Col>
                <Col md={1}>
                <ButtonToolbar>
                    <OverlayTrigger placement ="top" overlay ={Edit}>                 
                      <Button bsSize="xsmall">                      
                          <Glyphicon style = {{color:"#428bca"}} glyph="pencil" />                       
                       </Button>                   
                    </OverlayTrigger>  
                  </ButtonToolbar>                                
                </Col>
                </div>                         
              <hr/> 
              <div className = "row">
                   <Col md ={1}>
                  <p>#</p>
                  </Col>
                  <Col md ={3}>
                  <p>Test Cases</p>
                  </Col>
                  <Col md ={3}>
                  <p>Start Date</p>
                  </Col>
                  <Col md ={3}>
                  <p>End Date</p>
                  </Col>                  
                  <Col md={1}>
                  <ButtonToolbar>   
                  <OverlayTrigger placement="left" overlay={del}>               
                      <Button bsSize="xsmall">                                         
                          <Glyphicon className ="del-color" glyph="remove" />                   
                      </Button> 
                  </OverlayTrigger>                  
                </ButtonToolbar>                                
                </Col>
                <Col md={1}>
                <ButtonToolbar>
                    <OverlayTrigger placement ="top" overlay ={Edit}>                 
                      <Button bsSize="xsmall">                      
                          <Glyphicon style = {{color:"#428bca"}} glyph="pencil" />                       
                       </Button>                   
                    </OverlayTrigger>  
                  </ButtonToolbar>                                
                </Col>
                </div>                         
              <hr/>
              </div>
             </div>
            </Col>    
           <Chart/>           
        </div>
       
      </div>
     
      //closing of the Container
         );
    }
}
 
export default Cards;