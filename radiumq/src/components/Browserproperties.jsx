import React, { Component } from 'react';
import {Button,Modal,FormGroup,ControlLabel,Col,FormControl} from 'react-bootstrap';
class BrowserProperties extends Component {
   
 //   state = {  }
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
            <div className ="row">                        
                            <Button bsStyle="primary" bsSize="small" onClick={this.handleShow} style={{marginLeft:"430px",marginTop:"6px"}}>
                           Configuration
                            </Button>

                        <Modal show={this.state.show} onHide={this.handleClose}>
                            <Modal.Header closeButton>
                                <Modal.Title>Configuration Details</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                            
                            <FormGroup controlId="formHorizontalText">
                            <Col componentClass={ControlLabel} >
                        <p>Type</p>  
                            </Col>                           
                                <Col >
                                <select id = "dropdown">
                                <option value="After Last"> System</option>
                                    <option value="After Last">Drive</option>
                                    <option value="Before Last">Chrome options</option>
                                    <option value="Before Last">FireFox Profile</option>                               
                            </select>                           
                                </Col>
                                </FormGroup>
                                <FormGroup controlId="formHorizontalText">  
                            <Col componentClass={ControlLabel} >
                            <p> Name</p>
                            </Col>                         
                                <Col >
                                <FormControl type="text" placeholder="Type the Browser Name" required />
                                </Col>                        
                            </FormGroup>
                            <FormGroup controlId="formHorizontalText">  
                            <Col componentClass={ControlLabel} >
                            <p> Value</p>
                            </Col>                         
                                <Col >
                                <FormControl type="text" placeholder="Type the value" required />
                                </Col>                        
                            </FormGroup>
                             {/*<AddData/>*/} 
                            </Modal.Body>
                            <Modal.Footer>
                                <Button bsStyle="danger" onClick={this.handleClose}>Cancel</Button>
                                <Button bsStyle="primary">Save changes</Button>
                            </Modal.Footer>
                        </Modal>  
                        </div> 
        );
    }
}
 
export default BrowserProperties;