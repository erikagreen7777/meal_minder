import TopHalf from "../../components/dashboard/TopHalf";
import { Container } from "react-bootstrap";
import { Navigation } from "../../components/navigation/NavigationBar";
import Button from "react-bootstrap/Button";

export default function DashboardPage() {
  return (
    <>
      <Navigation />
      <Container>
        <h1>Dashboard!</h1>
        <br/>
        <TopHalf />
        <Button variant="primary" type="submit">
          Add New Item
        </Button>
      </Container>
    </>
  );
}
