import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useState } from "react";
import validateEmail from "../utils/validateEmail";
import validateName from "../utils/validateName";
import { createUser } from "../../api/createUser";
import fetchUserInfo from "../utils/fetchUserInfo";
import { useNavigate } from "react-router";
import { loginUser } from "../../api/loginUser";
// TODO: send the user to the dashboard, or where they're going to do the inventory stuff
// TODO: session cookie stuff
// TODO: confirm password field (type it twice)
// TODO: Password strength meter
// TODO: Reset password option

export default function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [firstName, setFirstName] = useState("");
  const [firstNameError, setFirstNameError] = useState("");
  const [lastNameError, setLastNameError] = useState("");
  const [lastName, setLastName] = useState("");
  const [systemMessage, setSystemMessage] = useState(null);
  const [systemMessageClass, setSystemMessageClass] = useState("");
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();

    const form = e.currentTarget;
    const formEmail = form.elements.formEmail.value.trim();
    const formPassword = form.elements.formPassword.value.trim();
    const formFirstName = form.elements.firstName.value.trim();
    const formLastName = form.elements.lastName.value.trim();

    setEmail(formEmail);
    setPassword(formPassword);
    setFirstName(formFirstName);
    setLastName(formLastName);

    if (!formEmail || !formFirstName || !formLastName) {
      setSystemMessage("All fields are required");
      setSystemMessageClass("text-danger");
      return;
    }

    if (emailError || firstNameError || lastNameError) {
      setSystemMessage(emailError || firstNameError || lastNameError);
      setSystemMessageClass("text-danger");
      return;
    }

    try {
      const isDuplicateEmail = await fetchUserInfo(formEmail);
      if (isDuplicateEmail) {
        throw new Error("User already exists");
      }

      await createUser({
        email: formEmail,
        firstName: formFirstName,
        lastName: formLastName,
        password: formPassword,
      });

      setSystemMessage("Account created successfully");
      setSystemMessageClass("text-success");

      const isUserAuthenticated = await loginUser({
        email: formEmail,
        password: formPassword,
      });

      if (!isUserAuthenticated) {
        throw new Error("Login failed after signup");
      }

      navigate("/dashboard");
    } catch (error) {
      console.error(error);
      setSystemMessage(error.message || "Something went wrong");
      setSystemMessageClass("text-danger");
    }
  }

  const handleEmailChange = (e) => {
    const value = e.target.value;
    setEmail(value);

    // 5 is an arbitrary length
    email.length > 3 && !validateEmail(email)
      ? setEmailError("Invalid email")
      : setEmailError("");
  };

  const handleFirstNameChange = (e) => {
    const value = e.target.value;
    setFirstName(value);

    !validateName(firstName)
      ? setFirstNameError("Invalid first name")
      : setFirstNameError("");
  };

  const handleLastNameChange = (e) => {
    const value = e.target.value;
    setLastName(value);

    !validateName(lastName)
      ? setLastNameError("Invalid last name")
      : setLastNameError("");
  };

  return (
    <>
      <h1>Sign up</h1>
      {<h4 className={systemMessageClass}>{systemMessage}</h4>}
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            required
            isInvalid={emailError}
            onChange={handleEmailChange}
            value={email}
          />
          <Form.Control.Feedback type="invalid">
            {email && emailError}
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group className="mb-3" controlId="firstName">
          <Form.Label>First Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="First Name"
            required
            isInvalid={firstNameError}
            value={firstName}
            onChange={handleFirstNameChange}
          />
          <Form.Control.Feedback type="invalid">
            {firstName && firstNameError}
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group className="mb-3" controlId="lastName">
          <Form.Label>Last Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Last Name"
            required
            isInvalid={lastNameError}
            value={lastName}
            onChange={handleLastNameChange}
          />
          <Form.Control.Feedback type="invalid">
            {lastName && lastNameError}
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formPassword">
          <Form.Label>Create Password</Form.Label>
          <Form.Control type="text" placeholder="Password" required />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </>
  );
}
