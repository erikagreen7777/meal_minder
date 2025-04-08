import Card from "react-bootstrap/Card";

function InventoryCard({ ...props }) {
  return (
    <Card style={{ maxWidth: "20vw" }}>
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
        <Card.Text>{props.description}</Card.Text>
      </Card.Body>
    </Card>
  );
}

export default InventoryCard;
