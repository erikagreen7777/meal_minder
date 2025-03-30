import TopHalf from "../../components/dashboard/TopHalf";
import { Container } from "react-bootstrap";
import { Navigation } from "../../components/navigation/NavigationBar";
export default function DashboardPage() {
  return (
    <>
      <Navigation />
      <Container>
        <h1>Dashboard!</h1>
        <TopHalf />
      </Container>
    </>
  );
}
