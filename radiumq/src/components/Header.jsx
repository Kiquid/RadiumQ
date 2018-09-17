import React, { Component } from 'react';
import {Col} from 'react-bootstrap';

class Header extends Component {
    //state = {  }
    render() { 
        return ( 
            <div className = "container">
                <div className = "row">
                    <Col md={2} mdOffset={1}>
                    <img src="./assets/Logo.png" style={{width:"80px"}} />
                    </Col>
                    <Col md={2}>
                    <img src="./assets/user.png" style={{width:"30px",margin:"30px",marginLeft
                    :"70rem"}} />
                    </Col>
                    <Col md={1} style={{marginTop:"3.2rem"}}>
                    <p style={{marginLeft:"62rem"}}>Welcome,User</p>
                    </Col>
                    <Col md={1}>
                    <img src="./assets/logout.png" style={{width:"30px",margin:"30px",marginLeft
                    :"62rem"}} />
                    </Col>
                    <Col md={1}>
                    <img src="./assets/help.png" style={{width:"30px",margin:"30px",marginLeft
                    :"54.5rem"}} />
                    </Col>
                </div>
            </div>
         );
    }
}
 
export default Header;