import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import './Style.scss';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleFormSubmit = (e) => {
    e.preventDefault();

    // Check if the username and password are correct
    if (username === 'admin' && password === 'admin@123') {
      // No need to call navigate here, we'll use useEffect
    } else {
      // Display an error message for incorrect credentials
      setError('Invalid username or password');
    }
  };

  useEffect(() => {
    // Use the effect to navigate when the user is authenticated
    if (username === 'admin' && password === 'admin@123') {
      navigate('/dashboard');
    }
  }, [username, password, navigate]);

  return (
    <div className="login-row">
      <Container>
        <Row className="justify-content-center">
          <Col md={6}>
            <div className="login-form">
              <h2>Login to Admin Dashboard</h2>
              {error && <div className="error-message">{error}</div>}
              <Form onSubmit={handleFormSubmit}>
                <Form.Group>
                  <Form.Label>
                    <i className="fa fa-user" /> Username
                  </Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter your username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                  />
                </Form.Group>

                <Form.Group>
                  <Form.Label>
                    <i className="fa fa-lock" /> Password
                  </Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Check type="checkbox" label="Remember Me" />
                </Form.Group>

                <Button variant="primary" type="submit">
                  Sign In
                </Button>
              </Form>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Login;
