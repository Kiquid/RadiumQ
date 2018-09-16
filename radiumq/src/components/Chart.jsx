import React, { Component } from 'react';
import {Doughnut, Bar} from 'react-chartjs-2';
import{Col,ProgressBar } from 'react-bootstrap';

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

class Chart extends Component {

    
   // state = {  }
    render() { 
        return ( 
    <div className="container">
        <div className="row">
            <Col md={6} sm={6} lg ={2}>
                <div className ="card" style = {{width:"360px", marginLeft:"100px", marginTop:"20px"}}>
                    <div className ="card-body">
                        <b>Testing Results</b>
                        <hr/>
                            <Doughnut
                                    data={data1}
                                    width={100}
                                    height={90}
                                    options={{
                                                legend:{display:true},
                                                title:{
                                                    display:true
                                                }
                                                
                                            }}
                            />
                     </div>
                 </div>
            </Col>

            <Col md={4}>
                <div className ="card" style = {{width:"360px", marginLeft:"100px", marginTop:"20px"}}>
                    <div className ="card-body">
                        <b>Statistic</b>
                        <hr/>
                        <div>
                            <p>Execution Time</p>
                            <ProgressBar active  striped bsStyle="info" now={40} />
                            <p>Completed</p>                   
                             <ProgressBar striped bsStyle="success" now={20} />
                             <p>Failed</p>
                            <ProgressBar striped bsStyle="danger" now={60} />
                            <p>In Progress</p>
                            <ProgressBar striped bsStyle="warning" now={80} />
                        </div>;
                     </div>
                 </div>
            </Col>
            <Col md={4}>
                <div className ="card" style = {{width:"360px", marginLeft:"100px", marginTop:"20px"}}>
                    <div className ="card-body">
                        <b>Project Status</b>
                        <hr/>
                            <Doughnut
                                    data={data2}
                                    width={100}
                                    height={90}
                                    options={{
                                              
                                                legend:{display:true},
                                                title:{
                                                    display:true
                                                }
                                                
                                            }}
                            />
                            
                     </div>
                 </div>
            </Col>
            
        </div>
</div> 
         );
    }
}
 
export default Chart;