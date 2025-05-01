import React from "react";
import { Form, Col, Row, Container } from "react-bootstrap";
import { InputGroup } from "react-bootstrap";
import UnitDropdown from "../UnitDropdown";
import { Info } from "../../icons/Info";
import { OverlayTrigger, Tooltip } from "react-bootstrap";

// TODO: add tags or cuisine type??

export default function InventoryRequired({ formData, onChange }) {
  return (
    <Container>
      <h2>Alright, let's do the must-haves first:</h2>
      <Form>
        <Form.Group as={Col} controlId="productName" className="pt-4">
          <Form.Label>
            Product Name<span className="text-danger">*</span>
          </Form.Label>

          <Form.Control
            type="text"
            placeholder="Sriracha"
            value={formData.productName || ""}
            onChange={(e) => onChange("productName", e.target.value)}
            required
          />
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
              <Form.Control
                type="text"
                placeholder="34"
                value={formData.productQuantity || ""}
                onChange={(e) => onChange("productQuantity", e.target.value)}
                required
              />
              <UnitDropdown
                dropDownId="productQuantityUnit"
                onChange={onChange}
                required
              />
            </InputGroup>
          </Form.Group>
        </Row>
        <Form.Group as={Col} controlId="servingSize" className="pt-4">
          <Form.Label>Serving Size</Form.Label>
          <span className="text-danger">*</span>
          <InputGroup>
            <Form.Control
              type="number"
              placeholder="113"
              value={formData.servingSize || ""}
              onChange={(e) => onChange("servingSize", e.target.value)}
              required
            />
            <UnitDropdown
              dropDownId="servingSizeUnit"
              onChange={onChange}
              required
            />
          </InputGroup>
        </Form.Group>
      </Form>
    </Container>
  );
}
