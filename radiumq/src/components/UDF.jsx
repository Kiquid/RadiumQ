import React, { Component } from 'react';
import 
{
    Col,Form,
    FormGroup,FormControl,
    Checkbox,Button
} from 'react-bootstrap';
import {Link} from 'react-router-dom';
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
        </div>
    </div>);
    }
}
 
export default UDF;