import React, { Component } from 'react';
//import {Footer} from 'react-bootstrap';
import './Footer.css';
class Footer extends Component {
   // state = {  }
    render() { 
        return ( 

            <footer className="footer" style={{backgroundColor:"black",height:"40px"}}>
            <div className="container">
            <center>
              <span className="text-muted">© {(new Date().getFullYear())}, RadiumQ, All rights reserved &nbsp;|| &nbsp; Designed By Iconvix Business Solution</span>
              </center>
            </div>
          </footer>

         );
    }
}
 
export default Footer;