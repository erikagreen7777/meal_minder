import { Navigation } from "../../components/navigation/NavigationBar";
import { Container } from "react-bootstrap";
import Signup from "../../components/forms/Signup";

export default function SignupPage() {
  return (
    <>
      <Navigation />
      <Container>
        <Signup />
      </Container>
    </>
  );
}
