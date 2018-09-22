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
            <Col md={4} sm={6} >
                <div className ="card" style = {{width:"360px", marginTop:"20px"}}>
                    <div className ="card-body">
                        <h4>Testing Results</h4>
                        <hr/>
                            <Doughnut
                                    data={data1}
                                    width={100}
                                    height={90}
                                    options={{
                                                legend:{display:true},
                                                title:{
                                                    display:true
                                                },
                                                labels: {
                                                    fontColor: "#fff",
                                                    fontSize: 20
                                                }

                                                
                                            }}
                            />
                     </div>
                 </div>
            </Col>

            <Col md={4}>
                <div className ="card" style = {{width:"360px", marginTop:"20px"}}>
                    <div className ="card-body">
                        <h4>Statistic</h4>
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
                <div className ="card" style = {{width:"360px", marginTop:"20px"}}>
                    <div className ="card-body">
                        <h4>Project Status</h4>
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