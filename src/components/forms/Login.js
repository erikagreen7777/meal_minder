import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useState } from "react";
import validateEmail from "../utils/validateEmail";
import validateName from "../utils/validateName";
import { createUser } from "../../api/createUser";
import fetchUserInfo from "../utils/fetchUserInfo";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";

// TODO: send the user to the dashboard, or where they're going to do the inventory stuff
// TODO: Password strength meter
// TODO: Reset password option

export default function Signup() {
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [passwordError, setPasswordError] = useState("");
  const [systemMessage, setSystemMessage] = useState(null);
  const [systemMessageClass, setSystemMessageClass] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    setEmail(e.currentTarget.elements.formEmail.value);
    setPassword(e.currentTarget.elements.formPassword.value);

    if (email && !emailError && password && !passwordError) {
      try {
        const isDuplicateEmail = await fetchUserInfo(email);
        if (!isDuplicateEmail) {
          setEmailError("");
          // const postCreateUser = await createUser({
          //   email,
          //   password,
          // });
          // CHECK IF THE USER EXISTS AND HAS THE RIGHT PASSWORD
          setSystemMessage("Login successful");
          setSystemMessageClass("text-success");
          // SEND THEM TO THE DASHBOARD
        } else {
          setEmailError("Email already exists");
        }
      } catch (error) {
        setSystemMessage(error.message);
        setSystemMessageClass("text-danger");
      }
    } else {
      setSystemMessage(emailError || passwordError);
      setSystemMessageClass("text-danger");
    }
  }

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  const handleEmailChange = (e) => {
    const value = e.target.value;
    setEmail(value);

    // 5 is an arbitrary length
    email.length > 3 && !validateEmail(email)
      ? setEmailError("Invalid email")
      : setEmailError("");
  };

  return (
    <>
      <h1>Login</h1>
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

        <Form.Group className="mb-3" controlId="formPassword">
          <Form.Label>Password</Form.Label>
          <div className="input-group">
            <Form.Control
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              required
            />
            <Button
              variant="outline-secondary"
              onClick={handleTogglePassword}
              className="input-group-text password-toggle"
            >
              <FontAwesomeIcon
                icon={showPassword ? faEyeSlash : faEye}
                className="password-icon"
              />
            </Button>
          </div>
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </>
  );
}
