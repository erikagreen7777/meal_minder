import React from "react";
import InventoryCard from "./InventoryCard";
import { Container } from "react-bootstrap";

function InventoryList({ items }) {
  return (
    <Container className="d-flex flex-wrap gap-3 justify-content-start">
      {items.map((item) => (
        <InventoryCard key={item.id} {...item} />
      ))}
    </Container>
  );
}

export default InventoryList;
