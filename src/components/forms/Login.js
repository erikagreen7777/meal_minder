import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useState } from "react";

function validateEmail(email) {
  const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
  //   console.log(emailRegex.test(email));
  return emailRegex.test(email);
}

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  //   const [passwordError, setPasswordError] = useState("");
  const [validated, setValidated] = useState(false);
  // const [loginError, setLoginError] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    const emailValue = e.currentTarget.elements.formEmail.value;
    if (!validateEmail(emailValue)) {
      setEmailError("Invalid email");
    } else {
      setEmail(emailValue);
    }

    setPassword(e.currentTarget.elements.formPassword.value);

    if (password && email) {
      console.log("hi");
      setValidated(true);
    }
  }

  return (
    <>
      <h1>Login</h1>
      <Form validated={validated} onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" required />
          {/* how to do error handling */}
        </Form.Group>

        <Form.Group className="mb-3" controlId="formPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" required />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </>
  );
}
