import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useEffect, useState } from "react";
import validateEmail from "../utils/validateEmail";
import { getUserInfo } from "../../api/getUserInfo";

// TODO: As you type validation: https://react-bootstrap.netlify.app/docs/forms/validation/#feedback
// TODO: Reset password option

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [validated, setValidated] = useState(false);
  const [userData, setUserData] = useState(null);

  function handleSubmit(e) {
    e.preventDefault();

    setEmail(e.currentTarget.elements.formEmail.value);
    setPassword(e.currentTarget.elements.formPassword.value);
  }

  useEffect(() => {
    const validatedEmail = validateEmail(email);
    if (validatedEmail === false) {
      setEmailError("Invalid email");
    } else {
      setValidated(true);
      setEmailError("");
      const fetchUserInfo = async () => {
        try {
          const userDataFromApi = await getUserInfo(email);
          if (userDataFromApi) {
            // get password and email address and compare with DB to authorization.
          } else {
            // session cookie/token thing and then redirect to dashboard
          }
        } catch (error) {
          console.log(error); // setEmailError?
        }
      };
      fetchUserInfo();
    }
  }, [email]);

  return (
    <>
      <h1>Login</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            required
            isInvalid={emailError}
          />
          <Form.Control.Feedback type="invalid">
            {emailError}
          </Form.Control.Feedback>
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
