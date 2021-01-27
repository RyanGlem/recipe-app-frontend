import React, {useState} from "react"
import {Modal, Form, Button} from 'react-bootstrap'


function Login() {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (  
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton></Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group controlId="formBasicText">
                <Form.Label>Username</Form.Label>
                <Form.Control type="text" placeholder="Username" />
              </Form.Group>

              <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
              </Form.Group>

              <Button variant="primary" type="submit">
                   Submit
               </Button>
            </Form>
          </Modal.Body>
        </Modal>
    )
}

export default Login