import React, { Component } from 'react';
import {
    Col,Button,ProgressBar,Badge,ButtonGroup,
    ButtonToolbar,Glyphicon,Tooltip,OverlayTrigger,
    Form,Modal,FormGroup,ControlLabel,FormControl,
    Checkbox
} from 'react-bootstrap';
import './testcase.css'
const New = (
    <Tooltip id="tooltip">
      <strong>Create a New project!</strong> 
    </Tooltip>
  );
class Newproject extends Component {
    //state = {  }
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
        return (  <Form horizontal>
                <ButtonToolbar>
                    <OverlayTrigger placement="left" overlay={New}>
                        <Button bsStyle="primary" bsSize="small" onClick={this.handleShow}>
                            Project +
                        </Button>
                    </OverlayTrigger>
                 </ButtonToolbar>
                    <div className = "row">
                    <Modal show={this.state.show} onHide={this.handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Test Project</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                       
                        <FormGroup controlId="formHorizontalText">  
                            <Col componentClass={ControlLabel}>
                               <p>Name</p>  
                             </Col>                         
                            <Col>
                            <FormControl type="text" placeholder="Name" required />
                            </Col>
                        </FormGroup>
                        <FormGroup controlId="formHorizontalText">  
                            <Col componentClass={ControlLabel}>
                               <p>Description</p>  
                             </Col>                         
                            <Col>
                            <FormControl componentClass="textarea" placeholder="Name" required />
                            </Col>
                        </FormGroup>
                        <Checkbox checked readOnly>
                         <p>Active</p>
                        </Checkbox>
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
 
export default Newproject;