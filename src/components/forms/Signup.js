import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useState } from "react";
import validateEmail from "../utils/validateEmail";
import validateName from "../utils/validateName";
import { createUser } from "../../api/createUser";
import fetchUserInfo from "../utils/fetchUserInfo";

// TODO: send the user to the dashboard, or where they're going to do the inventory stuff
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

  async function handleSubmit(e) {
    e.preventDefault();
    setEmail(e.currentTarget.elements.formEmail.value);
    setPassword(e.currentTarget.elements.formPassword.value);
    setFirstName(e.currentTarget.elements.firstName.value);
    setLastName(e.currentTarget.elements.lastName.value);

    if (
      email &&
      firstName &&
      lastName &&
      !emailError &&
      !firstNameError &&
      !lastNameError
    ) {
      try {
        const isDuplicateEmail = await fetchUserInfo(email);
        if (!isDuplicateEmail) {
          setEmailError("");
          const postCreateUser = await createUser({
            email,
            firstName,
            lastName,
            password,
          });
          setSystemMessage("Account created successfully");
          setSystemMessageClass("text-success");
        } else {
          setEmailError("Email already exists");
        }
      } catch (error) {
        setSystemMessage(error.message);
        setSystemMessageClass("text-danger");
      }
    } else {
      setSystemMessage(emailError || firstNameError || lastNameError);
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
          <Form.Label>CreatePassword</Form.Label>
          <Form.Control type="text" placeholder="Password" required />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </>
  );
}
