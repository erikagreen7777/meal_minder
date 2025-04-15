import Card from "react-bootstrap/Card";
import { Button, Container } from "react-bootstrap";
import PlusCircle from "../buttons/PlusCircle";
import SubtractCircle from "../buttons/SubtractCircle";
import { useState } from "react";
import Badge from "react-bootstrap/Badge";
import Stack from "react-bootstrap/Stack";

function InventoryCard({ ...props }) {
  const [quantity, setQuantity] = useState(props.quantity);

  const handleIncrement = () => {
    setQuantity(quantity + 1);
  };
  const handleDecrement = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
    }
    // else delete item
  };

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
            <SubtractCircle onClick={handleDecrement} />
          </Button>
          <Button variant="light">
            <PlusCircle onClick={handleIncrement} />
          </Button>
        </Container>

        <Card.Text className="text-truncate ">
          {" "}
          <Stack direction="horizontal" gap={1}>
            {props.tags.map((item, index) => {
              return (
                <Badge pill bg="info">
                  {item.split(":")[1]}
                </Badge>
              );
            })}
          </Stack>
        </Card.Text>
        <Card.Text className="fw-bold">Qty: {quantity}</Card.Text>
      </Card.Body>
    </Card>
  );
}

export default InventoryCard;
