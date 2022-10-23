import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";

const Login = () => {
  return (
    <Form className="w-50 mx-auto my-5 bg-warning p-5">
      <h4 className="text-center">Please Login</h4>
      <Row className="mb-3">
        <Form.Group controlId="formGridEmail">
          <Form.Label className="mt-3">Email</Form.Label>
          <Form.Control className="d-block" type="email" placeholder="Enter email" />
        </Form.Group>

        <Form.Group controlId="formGridPassword">
          <Form.Label className="mt-3">Password</Form.Label>
          <Form.Control className="d-block" type="password" placeholder="Password" />
        </Form.Group>
      </Row>
      <Button className="d-block mx-auto mb-2" variant="primary" type="submit">
        Log in
      </Button>
    </Form>
  );
};

export default Login;
