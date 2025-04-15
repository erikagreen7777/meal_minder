import TopHalf from "../../components/dashboard/TopHalf";
import { Container } from "react-bootstrap";
import { Navigation } from "../../components/navigation/NavigationBar";
import AddInventory from "../../components/inventory/AddInventory";

export default function DashboardPage() {
  return (
    <>
      <Navigation />
      <Container>
        <TopHalf />
        <AddInventory />
      </Container>
    </>
  );
}
