import { Form } from "react-router";
import { Navigation } from "../../components/navigation/NavigationBar";
import { Container } from "react-bootstrap";

export default function SignupPage() {
  return (
    <>
      <Navigation />
      <Container className="d-flex flex-column align-items-center text-center">
        <h1>Sign up</h1>
        <Form action="/signup" method="post">
          <input name="email" label="email" type="email" />
          <br />
          <input name="password" label="password" type="text" />
        </Form>
      </Container>
    </>
  );
}
