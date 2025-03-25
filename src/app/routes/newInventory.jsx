import CameraComponent from "../../components/inventory/CameraComponent";
import { Navigation } from "../../components/navigation/NavigationBar";
import { Container } from "react-bootstrap";

export default function NewInventory() {
  return (
    <>
      <Navigation />
      <Container className="d-flex flex-column align-items-center text-center">

        <label htmlFor="barcode">Barcode</label>
        <CameraComponent />
      </Container>
    </>
  );
}
