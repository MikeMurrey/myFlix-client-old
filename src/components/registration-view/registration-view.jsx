import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {Form, Button} from 'react-bootstrap';

export function RegistrationView(props) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [birthday, setBirthday] = useState("");
  
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(username, password, email, birthday);
    props.Registration(username);
  };

  return (
    <Form>
      <Form.Group>
        <Form.Label>Username:</Form.Label>
        <Form.Control
          type="text"
          value={username}
          onChange={e => setUsername(e.target.value)}
          required
          placeholder="Enter a username"
        />
      </Form.Group>

      <Form.Group>
        <Form.Label>Password:</Form.Label>
        <Form.Control
          type="text"
          value={password}
          onChange={e => setPassword(e.target.value)}
          required
          minLength="8"
          placeholder="At least 8 characters long"
        />
      </Form.Group>

      <Form.Group>
        <Form.Label>Email:</Form.Label>
        <Form.Control
          type="text"
          value={email}
          onChange={e => setEmail(e.target.value)}
          required
          placeholder="Email address"
        />
      </Form.Group>

      <Button variant="primary" type="submit"
        onClick={handleSubmit}>Register</Button>
    </Form>
  )
}

RegistrationView.propTypes = {
  onRegistration: PropTypes.func.isRequired,
};