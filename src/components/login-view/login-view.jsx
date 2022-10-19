import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Container, Card, Form, Button } from 'react-bootstrap';

import './login-view.scss';

export function LoginView(props) {
  const [ username, setUsername ] = useState('');
  const [ password, setPassword ] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(username, password);
    /* Send a request to the server for authentication */
    /* then call props.onLoggedIn(username) */
    props.onLoggedIn(username);
  };

  const handleRegisterClick = (e) => {
    e.preventDefault();
    props.toRegister();
  };


  return (
    <Container className="login-container">
      <Card className="login-card mt-5">
        <Card.Body>
          <Card.Title className="text-center" as="h4">
            Please log in
          </Card.Title>
            <Form>

              <Form.Group>
                <Form.Label>Username:</Form.Label>
                <Form.Control
                  type="text"
                  onChange={e => setUsername(e.target.value)}
                />
              </Form.Group>

              <Form.Group>
                <Form.Label>Password:</Form.Label>
                <Form.Control
                  type="password"
                  onChange={e => setPassword(e.target.value)}
                />
              </Form.Group>

              <Button className="login-button mt-2 mr-2"
                variant="primary"
                type="submit"
                onClick={handleSubmit}
                >Log In</Button>

              <Button className="register-button mt-2"
                variant="secondary"
                type="submit"
                onClick={handleRegisterClick}
                >Register</Button>
            </Form>
        </Card.Body>
      </Card>
    </Container>
  );
}

LoginView.propTypes = {
  onLoggedIn: PropTypes.func.isRequired,
  toRegister: PropTypes.func.isRequired,
};