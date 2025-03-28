import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useEffect, useState } from "react";
import validateEmail from "../utils/validateEmail";
import validateName from "../utils/validateName";
import { getUserInfo } from "../../api/getUserInfo";
import { createUser } from "../../api/createUser";

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

  function handleSubmit(e) {
    e.preventDefault();
    setEmail(e.currentTarget.elements.formEmail.value);
    setPassword(e.currentTarget.elements.formPassword.value);
    setFirstName(e.currentTarget.elements.firstName.value);
    setLastName(e.currentTarget.elements.lastName.value);
  }

  useEffect(() => {
    const validatedEmail = validateEmail(email);
    if (validatedEmail === false) {
      setEmailError("Invalid email");
    } else {
      setEmailError("");
      const fetchUserInfo = async () => {
        try {
          const userDataFromApi = await getUserInfo(email);
          if (userDataFromApi.length > 0) {
            setEmailError("User already exists");
            throw new Error("User already exists");
          }
        } catch (error) {
          console.log(error);
          setEmailError(error);
        }
      };
      fetchUserInfo();
    }
  }, [email]);

  useEffect(() => {
    const validatedFirstName = validateName(firstName);
    if (validatedFirstName === false) {
      setFirstNameError("Invalid first name");
    } else {
      setFirstNameError("");
    }

    const validatedLastName = validateName(lastName);
    if (validatedLastName === false) {
      setLastNameError("Invalid last name");
    } else {
      setLastNameError("");
    }
  }, [firstName, lastName]);

  useEffect(() => {
    if (
      email &&
      firstName &&
      lastName &&
      !emailError &&
      !firstNameError &&
      !lastNameError
    ) {
      const sendCreateUser = async () => {
        try {
          const userDataToApi = await createUser({
            email,
            firstName,
            lastName,
            password,
          });
        } catch (e) {
          console.log(e);
        }
      };
      sendCreateUser();
    }
  }, [email, firstName, lastName, emailError, firstNameError, lastNameError]);

  return (
    <>
      <h1>Sign up</h1>
      {/* {userData ?? "No user found"} */}
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
