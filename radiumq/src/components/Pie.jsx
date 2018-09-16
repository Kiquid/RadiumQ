import React, { Component } from 'react';
import DonutChart from 'react-donut-chart';
import {Col} from 'react-bootstrap';
import './Pie.css';

class Pie extends Component {
    state = {  }
    render() { 
        return ( 
     <div className='container'>
          <div className='row'>
          <Col md={2}>
                <DonutChart
                data={[{
                    label: 'Completed',
                    value: 50,
                    className:'bgcolor'
                
                
                
                },
                {
                    label: 'Let you down',
                    value: 50,
                    className:'bgcolor1'
                
                }
                
                ]} 
        
                />
            </Col>
        </div>
    </div>
         )
    }
}
 
export default Pie;