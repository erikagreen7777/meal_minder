import { Navigation } from "../../components/navigation/NavigationBar";
import { Container } from "react-bootstrap";
import Login from "../../components/forms/Login";

export default function LoginPage() {
  return (
    <>
      <Navigation />
      <Container>
        <Login />
      </Container>
    </>
  );
}
