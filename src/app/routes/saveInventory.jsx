import { Navigation } from "../../components/navigation/NavigationBar";
import { Container } from "react-bootstrap";
import SaveInventory from "../../components/inventory/SaveInventory";

export default function SaveInventoryPage() {
  return (
    <>
      <Navigation />
      <Container>
        <SaveInventory />
      </Container>
    </>
  );
}
