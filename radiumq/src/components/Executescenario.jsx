import React, { Component } from 'react';

import {Form,Button,Modal,FormGroup,ControlLabel,Col,FormControl} from 'react-bootstrap'
class Executescenario extends Component {
   // state = {  }

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
            <Form horizontal>                                  
                        <Button bsStyle="success" bsSize="small" onClick={this.handleShow}>
                           Execute
                        </Button>
                    <div className = "row">
                    <Modal show={this.state.show} onHide={this.handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Execute Scenarion/Test case</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                       
                        <FormGroup controlId="formHorizontalText">  
                            <Col componentClass={ControlLabel}>
                               <p>Test case Name</p>  
                             </Col>                         
                            <Col>
                            <FormControl type="text" placeholder="Name" required />
                            </Col>
                        </FormGroup>
                        <FormGroup controlId="formHorizontalText">
                            <Col componentClass={ControlLabel} >
                               <p>Execution Profile</p>  
                            </Col>                           
                            <Col >
                              <select id = "dropdown">
                                <option value="After Last"> Execution profile 1</option>
                                <option value="After Last">Execution Profile 2</option>
                                <option value="Before Last">Execution Profile 2</option>
                                                          
                             </select>                           
                            </Col>
                        </FormGroup>
                        
                    </Modal.Body>
                    <Modal.Footer>
                        <Button bsStyle="danger" onClick={this.handleClose}>Cancel</Button>
                        <Button bsStyle="primary">Save</Button>
                    </Modal.Footer>
                </Modal>
                    
                    </div>
                   
        </Form> 
         );
    }
}
 
export default Executescenario;