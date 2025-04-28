import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useState } from "react";
import validateEmail from "../utils/validateEmail";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { loginUser } from "../../api/loginUser";
import { useNavigate } from "react-router";

// TODO: send the user to the dashboard, or where they're going to do the inventory stuff
// TODO: session cookie stuff
// TODO: Password strength meter
// TODO: Reset password option

// test

export default function Signup() {
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [passwordError, setPasswordError] = useState(null);
  const [systemMessage, setSystemMessage] = useState(null);
  const [systemMessageClass, setSystemMessageClass] = useState("");
  const navigate = useNavigate();
  const [isUserAuthenticated, setIsUserAuthenticated] = useState(false);

  //TODO: Make systemMessages and class one object so it's cleaner??
  async function handleSubmit(e) {
    e.preventDefault();

    if (email && !emailError && password && !passwordError) {
      try {
        const isUserAuthenticated = await loginUser({
          email,
          password,
        });
        console.log("isUserAuthenticated", isUserAuthenticated);
        if (isUserAuthenticated) {
          setSystemMessage("Login Successful");
          setSystemMessageClass("text-success");
          return navigate("/dashboard");
        } else {
          setSystemMessage("Please check your email and password");
          setSystemMessageClass("text-danger");
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
    email.length > 5 && !validateEmail(email)
      ? setEmailError("Invalid email")
      : setEmailError("");
  };

  const handlePasswordChange = (e) => {
    const value = e.target.value;
    setPassword(value);
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
              onChange={handlePasswordChange}
              value={password}
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
