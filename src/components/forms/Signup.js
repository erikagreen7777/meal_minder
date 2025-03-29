import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useEffect, useState } from "react";
import validateEmail from "../utils/validateEmail";
import validateName from "../utils/validateName";
import { createUser } from "../../api/createUser";
import fetchUserInfo from "../utils/fetchUserInfo";

// TODO: As you type validation: https://react-bootstrap.netlify.app/docs/forms/validation/#feedback
// TODO: the handleSubmit isn't actually handling any submitting - it's happening in the useEffect,
//       which doesn't make a lot of sense. this could be figured out with the field level validation TODO above
// TODO: Password strength meter
// TODO: Reset password option
// TODO: general error component

export default function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [firstName, setFirstName] = useState("");
  const [firstNameError, setFirstNameError] = useState("");
  const [lastNameError, setLastNameError] = useState("");
  const [lastName, setLastName] = useState("");
  const [generalError, setGeneralError] = useState(null);

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
          console.log("User created successfully:", postCreateUser);
          setGeneralError("");
        } else {
          console.log("Email already exists");
          setEmailError("Email already exists");
        }
      } catch (error) {
        console.log("Signup error");
        setGeneralError(error.message);
      }
    }
  }

  useEffect(() => {
    const validatedEmail = validateEmail(email);
    !validatedEmail ? setEmailError("Invalid email") : setEmailError("");
  }, [email]);

  useEffect(() => {
    const validatedFirstName = validateName(firstName);
    !validatedFirstName
      ? setFirstNameError("Invalid first name")
      : setFirstNameError("");

    const validatedLastName = validateName(lastName);
    !validatedLastName
      ? setLastNameError("Invalid last name")
      : setLastNameError("");
  }, [firstName, lastName]);

  return (
    <>
      <h1>Sign up</h1>
      {<h4 className="text-danger">{generalError}</h4>}
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            required
            isInvalid={email && emailError}
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
            isInvalid={firstName && firstNameError}
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
            isInvalid={lastName && lastNameError}
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
