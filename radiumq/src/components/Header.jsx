import React, { Component } from 'react';
import {Col,Tooltip,OverlayTrigger,Button,ButtonToolbar} from 'react-bootstrap';
import {Link} from 'react-router-dom';
const chgpwd = (
    <Tooltip id="tooltip">
      <strong>Settings!</strong> 
    </Tooltip>
  );
  const logout = (
    <Tooltip id="tooltip">
      <strong>Log Out!</strong> 
    </Tooltip>
  );

  const help = (
    <Tooltip id="tooltip">
      <strong>Help!</strong> 
    </Tooltip>
  );
class Header extends Component {
    //state = {  }
    render() { 
        return ( 
            <div className = "container">
                <div className = "row">
                    <Col md={2} mdOffset={1}>
                    <Link to = "/">
                    <img src="./assets/Logo.png" style={{width:"80px"}} />
                    </Link>
                    </Col>
                    <Col md={2}>
                    <img src="./assets/user.png" style={{width:"30px",margin:"30px",marginLeft:"70rem"}} />
                    </Col>
                    <Col md={1} style={{marginTop:"3.2rem"}}>
                    <p style={{marginLeft:"62rem"}}>Welcome,User</p>
                    </Col>                    
                    <Col md={1}>
                    <OverlayTrigger placement = "top" overlay = {logout}>
                    <img src="./assets/logout.png" style={{width:"30px",margin:"30px",marginLeft:"62rem"}} />
                    </OverlayTrigger>
                    </Col>                    
                    <Col md={1}>
                    <ButtonToolbar>                 
                    <Link to="/Changepassword">
                    <OverlayTrigger placement ="bottom" overlay ={chgpwd}>                   
                    <img src="./assets/settings.png" style={{width:"30px",marginLeft:"55rem",marginTop:"30px"}} />                   
                   </OverlayTrigger>
                    </Link>
                    </ButtonToolbar>                      
                    </Col>
                    <Col md={1}>
                    <OverlayTrigger placement = "right" overlay = {help}>
                    <img src="./assets/help.png" style={{width:"30px",margin:"30px",marginLeft:"48.5rem"}} />
                    </OverlayTrigger>
                    </Col>
                </div>
            </div>
         );
    }
}
export default Header;