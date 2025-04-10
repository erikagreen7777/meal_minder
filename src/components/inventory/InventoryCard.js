import Card from "react-bootstrap/Card";

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
      <Card.Body>
        <Card.Text className="text-truncate">{props.description}</Card.Text>
        <Card.Text className="fw-bold">Qty: {props.quantity}</Card.Text>
      </Card.Body>
    </Card>
  );
}

export default InventoryCard;
