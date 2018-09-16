import React,{Component} from 'react';
import {Col,Button,ProgressBar,Badge} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import Chart from './Chart';
import './Admin.css';
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
          <Col md={2} mdOffset={1}>
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
             <p>6</p>
             </center>
            </div>          
          </Col>
          <Col md={2}>
            <div className="small-card card-body">
            <center>
             <p>Manager</p>
             <hr/>
             <p>7</p>
             </center>
            </div>          
          </Col>
          <Col md={2}>
            <div className="small-card card-body">
            <center>
             <p>Tester</p>
             <hr/>
             <p>14</p>
             </center>
            </div>          
          </Col>
          <Col md={2}>
            <div className="small-card card-body">
            <center>
             <p>Projects</p>
             <hr/>
             <p>46</p>
             </center>
            </div>                   
          </Col>
          <Col md={2}>
            <div className="small-card card-body">
            <center>
             <p>Test Cases</p>
             <hr/>
             <p>26</p>
             </center>
            </div>          
          </Col>
          <Col md={2}>
            <div className="small-card card-body">
            <center>
             <p>Profile</p>
             <hr/>
             <p>25</p>
             </center>
            </div>          
          </Col>
          <Col md={2}>
            <div className="small-card card-body">
            <center>
             <p>Reports</p>
             <hr/>
             <p>120</p>
             </center>
            </div>          
          </Col>
          <Col md={2}>
            <div className="small-card card-body">
            <center>
             <p>Project</p>
             <hr/>
             <p>+</p>
             </center>
            </div>          
          </Col>
        </div>
          <div className="row">
            <Col md={4} mdOffset={1} >
              <div className="card example-1 scrollbar-ripe-malinka">
              <div className="card-body">
              <h4 id="section1"><strong>Projects</strong></h4>
              <hr/>
              <div className="row">
                <Col md={4}>
                  <p>Project 1</p>                                  
                </Col>
                <Col md={3}>
                <Button bsStyle="danger">Del</Button>                                 
                </Col>
                <Col md={3}>
                <Button bsStyle="info">Edit</Button>                                 
                </Col>                 
              </div>
              <hr/>
              <div className="row">
                <Col md={4}>
                  <p>Project 2</p>                                  
                </Col>
                <Col md={3}>
                <Button bsStyle="danger">Del</Button>                                 
                </Col>
                <Col md={3}>
                <Button bsStyle="info">Edit</Button>                                 
                </Col>                 
              </div>
              <hr/>
              <div className="row">
                <Col md={4}>
                  <p>Project 3</p>                                  
                </Col>
                <Col md={3}>
                <Button bsStyle="danger">Del</Button>                                 
                </Col>
                <Col md={3}>
                <Button bsStyle="info">Edit</Button>                                 
                </Col>                 
              </div>
              <hr/>
              <div className="row">
                <Col md={4}>
                  <p>Project 4</p>                                  
                </Col>
                <Col md={3}>
                <Button bsStyle="danger">Del</Button>                                 
                </Col>
                <Col md={3}>
                <Button bsStyle="info">Edit</Button>                                 
                </Col>                 
              </div>
              <hr/>
              <div className="row">
                <Col md={4}>
                  <p>Project 5</p>                                  
                </Col>
                <Col md={3}>
                <Button bsStyle="danger">Del</Button>                                 
                </Col>
                <Col md={3}>
                <Button bsStyle="info">Edit</Button>                                 
                </Col>                 
              </div>
              <hr/>
              <div className="row">
                <Col md={4}>
                  <p>Project 6</p>                                  
                </Col>
                <Col md={3}>
                <Button bsStyle="danger">Del</Button>                                 
                </Col>
                <Col md={3}>
                <Button bsStyle="info">Edit</Button>                                 
                </Col>                 
              </div>
              <hr/>
              <div className="row">
                <Col md={4}>
                  <p>Project 7</p>                                  
                </Col>
                <Col md={3}>
                <Button bsStyle="danger">Del</Button>                                 
                </Col>
                <Col md={3}>
                <Button bsStyle="info">Edit</Button>                                 
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
                  <Col md ={2}>
                  <p>Test Cases</p>
                  </Col>
                  <Col md ={2}>
                  <p>Start Date</p>
                  </Col>
                  <Col md ={2}>
                  <p>End Date</p>
                  </Col>
                  <Col md ={2}>
                  <p>Status</p>
                  </Col>
                </div>
              </h5>              
              <hr/>
              <div className = "row">
                  <Col md ={1}>
                  <p>#</p>
                  </Col>
                  <Col md ={2}>
                  <p>Test Cases</p>
                  </Col>
                  <Col md ={2}>
                  <p>Start Date</p>
                  </Col>
                  <Col md ={2}>
                  <p>End Date</p>
                  </Col>
                  <Col md ={2}>
                  <p>Status</p>
                  </Col>
                  <Col md={2}>
                <Button bsStyle="danger">Del</Button>                                 
                </Col>
                <Col md={2}>
                <Button bsStyle="info">Edit</Button>                                 
                </Col>
                </div>                         
              <hr/>
              <div className = "row">
                  <Col md ={1}>
                  <p>#</p>
                  </Col>
                  <Col md ={2}>
                  <p>Test Cases</p>
                  </Col>
                  <Col md ={2}>
                  <p>Start Date</p>
                  </Col>
                  <Col md ={2}>
                  <p>End Date</p>
                  </Col>
                  <Col md ={2}>
                  <p>Status</p>
                  </Col>
                  <Col md={2}>
                <Button bsStyle="danger">Del</Button>                                 
                </Col>
                <Col md={2}>
                <Button bsStyle="info">Edit</Button>                                 
                </Col>
                </div>                         
              <hr/> <div className = "row">
                  <Col md ={1}>
                  <p>#</p>
                  </Col>
                  <Col md ={2}>
                  <p>Test Cases</p>
                  </Col>
                  <Col md ={2}>
                  <p>Start Date</p>
                  </Col>
                  <Col md ={2}>
                  <p>End Date</p>
                  </Col>
                  <Col md ={2}>
                  <p>Status</p>
                  </Col>
                  <Col md={2}>
                <Button bsStyle="danger">Del</Button>                                 
                </Col>
                <Col md={2}>
                <Button bsStyle="info">Edit</Button>                                 
                </Col>
                </div>                         
              <hr/> <div className = "row">
                  <Col md ={1}>
                  <p>#</p>
                  </Col>
                  <Col md ={2}>
                  <p>Test Cases</p>
                  </Col>
                  <Col md ={2}>
                  <p>Start Date</p>
                  </Col>
                  <Col md ={2}>
                  <p>End Date</p>
                  </Col>
                  <Col md ={2}>
                  <p>Status</p>
                  </Col>
                  <Col md={2}>
                <Button bsStyle="danger">Del</Button>                                 
                </Col>
                <Col md={2}>
                <Button bsStyle="info">Edit</Button>                                 
                </Col>
                </div>                         
              <hr/> 
              <div className = "row">
                  <Col md ={1}>
                  <p>#</p>
                  </Col>
                  <Col md ={2}>
                  <p>Test Cases</p>
                  </Col>
                  <Col md ={2}>
                  <p>Start Date</p>
                  </Col>
                  <Col md ={2}>
                  <p>End Date</p>
                  </Col>
                  <Col md ={2}>
                  <p>Status</p>
                  </Col>
                  <Col md={2}>
                <Button bsStyle="danger">Del</Button>                                 
                </Col>
                <Col md={2}>
                <Button bsStyle="info">Edit</Button>                                 
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