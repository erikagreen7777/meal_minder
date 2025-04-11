import Card from "react-bootstrap/Card";
import { Button, Container } from "react-bootstrap";
import PlusCircle from "../buttons/PlusCircle";
import SubtractCircle from "../buttons/SubtractCircle";

function InventoryCard({ ...props }) {
  return (
    <Card style={{ flex: "1 1 20vw", maxWidth: "80vw" }}>
      <Card.Title className="p-2 text-center">{props.title}</Card.Title>
      <Card.Img
        variant="top"
        src={props.image}
        alt={props.title}
        style={{
          maxHeight: "10vh",
          objectFit: "contain",
        }}
      />

      <Card.Body className="d-flex flex-column justify-content-end">
        <Container className="d-flex justify-content-around pb-3">
          <Button variant="light">
            <SubtractCircle />
          </Button>
          <Button variant="light">
            <PlusCircle />
          </Button>
        </Container>

        <Card.Text className="text-truncate ">{props.description}</Card.Text>
        <Card.Text className="fw-bold">Qty: {props.quantity}</Card.Text>
      </Card.Body>
    </Card>
  );
}

export default InventoryCard;
