import React, { Component } from 'react';
import { Form,Col,Row,Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
class Payment extends Component {
    
    render() { 
        return ( 
    <Card>
        <Card.Header>
            Please Fill Your Information
        </Card.Header>
        <Card.Body>
    <Form>
        <h4>Personal Information</h4>
        <Col>
        <Form.Control placeholder="First name" />
        <Form.Control placeholder="Last name" />
        <Form.Control placeholder="Email" />
        <Form.Control placeholder="Confirm Email" />
        </Col>
        <hr />
        <h4>Payment Information</h4>
        <Col sm={10}>
        <Form.Check
          type="radio"
          label="IDeal"
          name="formHorizontalRadios"
          id="formHorizontalRadios1"
        />
        <Form.Check
          type="radio"
          label="PayPal"
          name="formHorizontalRadios"
          id="formHorizontalRadios2"
        />
        <Form.Check
          type="radio"
          label="Credit Card"
          name="formHorizontalRadios"
          id="formHorizontalRadios3"
        />
      </Col>
      <hr />
      <h4>Billing Information</h4>
        <Col>
        <Form.Control placeholder="First name" />
        <Form.Control placeholder="Last name" />
        <Form.Control placeholder="Email" />
        <Form.Control placeholder="Confirm Email" />
        <Form.Control placeholder="Adress 1" />
        <Form.Control placeholder="Address 2" />
        <Form.Control
        as="select"
        className="mr-sm-2"
        id="inlineFormCustomSelect"
        custom
      >
        <option value="0">Country</option>
        <option value="1">The Netherlands</option>
        <option value="2">Germany</option>
        <option value="3">Bleguim</option>
      </Form.Control>
        </Col>
        <hr/>
        <Form.Group>
            <Form.Check
              required
              name="terms"
              label="Agree to terms and conditions"
              id="validationFormik0"
            />
          </Form.Group>
    </Form>
    </Card.Body>
    <Card.Footer>
        <Link to='exit'>
        <Button>
            Continue 
        </Button>
        </Link>
    </Card.Footer>
    </Card>
         );
    }
}
 
export default Payment;