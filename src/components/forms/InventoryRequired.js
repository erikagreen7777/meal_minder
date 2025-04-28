import React from "react";
import { Button, Form, Col, Row, Container } from "react-bootstrap";
import { InputGroup } from "react-bootstrap";
import UnitDropdown from "../forms/UnitDropdown";
import { Info } from "../icons/Info";
import { OverlayTrigger, Tooltip } from "react-bootstrap";
import { ProgressBar } from "react-bootstrap";
import { useState } from "react";

export default function InventoryRequired() {
  const [productName, setProductName] = useState("");
  const [productQuantity, setProductQuantity] = useState("");
  const [productQuantityUnit, setProductQuantityUnit] = useState("grams");
  const [servingSize, setServingSize] = useState("");
  const [servingSizeUnit, setServingSizeUnit] = useState("");
  return (
    <Container>
      <h2>Alright, let's do the must-haves first:</h2>
      <Form>
        <Form.Group as={Col} controlId="productName" className="pt-4">
          <Form.Label>
            Product Name<span className="text-danger">*</span>
          </Form.Label>

          <Form.Control type="text" placeholder="Sriracha" required />
        </Form.Group>
        <Row>
          <Form.Group as={Col} controlId="productQuantity" className="pt-4">
            <Form.Label>
              Product Quantity<span className="text-danger">*</span>
            </Form.Label>
            <OverlayTrigger
              placement="right"
              overlay={
                <Tooltip id="product-quantity-tooltip">
                  {"The amount inside the package (e.g. tuna packet has 3 oz)"}
                </Tooltip>
              }
            >
              <span style={{ cursor: "pointer", color: "#6c757d" }}>
                <Info />
              </span>
            </OverlayTrigger>

            <InputGroup as={Col} lg-2>
              <Form.Control type="text" placeholder="34" />
              <UnitDropdown
                lg-2
                className="primary"
                props="productQuantityUnit"
                value={productQuantityUnit}
                onBlur={() => console.log(":)")}
                onClick={(e) => {
                  console.log("hi");
                  setProductQuantityUnit(e.target.value);
                }}
              />
            </InputGroup>
          </Form.Group>
        </Row>
        <Form.Group
          as={Col}
          className="mb-3"
          controlId="servingSize"
          className="pt-4"
        >
          <Form.Label>Serving Size</Form.Label>
          <span className="text-danger">*</span>
          <InputGroup>
            <Form.Control type="number" placeholder="113" required />
            <UnitDropdown props="servingSizeUnit" />
          </InputGroup>
        </Form.Group>
      </Form>
    </Container>
  );
}
