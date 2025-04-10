import Card from "react-bootstrap/Card";
import { Button } from "react-bootstrap";
import BaselineAddCircleOutline from "../buttons/BaselineAddCircleOutline";

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
      <Button>
        <BaselineAddCircleOutline />
      </Button>

      <Card.Body className="d-flex flex-column justify-content-end">
        <Card.Text className="text-truncate ">{props.description}</Card.Text>
        <Card.Text className="fw-bold">Qty: {props.quantity}</Card.Text>
      </Card.Body>
    </Card>
  );
}

export default InventoryCard;
