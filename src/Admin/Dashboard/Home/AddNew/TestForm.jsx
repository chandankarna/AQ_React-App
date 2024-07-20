import React, { Component } from "react";
import { Form, Button, Container } from "react-bootstrap";

export class TestForm extends Component {
  render() {
    return (
      <>
        <Container>
          <Form action="192.168.4.101:3000/submit" method="post">
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Title</Form.Label>
              <Form.Control type="text" id="title" placeholder="Title" />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Category</Form.Label>
              <Form.Control type="text" id="category" placeholder="Category" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check type="upload" id="upload" label="Check me out" />
            </Form.Group>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Container>
      </>
    );
  }
}

export default TestForm;
