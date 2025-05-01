import React from "react";
import { Form, Col, Container } from "react-bootstrap";

export default function InventoryVitaminsMinerals({ formData, onChange }) {
  return (
    <Container>
      <h2>Lastly, the nitty-gritty:</h2>
      <Form>
        {/* SATURATED FAT */}
        <Form.Group as={Col} controlId="saturatedFat" className="pt-4">
          <Form.Label>Saturated Fat (g)</Form.Label>

          <Form.Control
            type="text"
            placeholder="Optional"
            value={formData.saturatedFat || ""}
            onChange={(e) => onChange("saturatedFat", e.target.value)}
            required
          />
        </Form.Group>

        {/* SUGARS */}
        <Form.Group as={Col} controlId="sugars" className="pt-4">
          <Form.Label>Total Sugars (g)</Form.Label>

          <Form.Control
            type="text"
            placeholder="Optional"
            value={formData.sugars || ""}
            onChange={(e) => onChange("sugars", e.target.value)}
            required
          />
        </Form.Group>

        {/* IRON */}
        <Form.Group as={Col} controlId="iron" className="pt-4">
          <Form.Label>Iron (mg)</Form.Label>

          <Form.Control
            type="text"
            placeholder="Optional"
            value={formData.iron || ""}
            onChange={(e) => onChange("iron", e.target.value)}
            required
          />
        </Form.Group>

        {/* CALCIUM */}
        <Form.Group as={Col} controlId="calcium" className="pt-4">
          <Form.Label>Calcium (mg)</Form.Label>

          <Form.Control
            type="text"
            placeholder="Optional"
            value={formData.calcium || ""}
            onChange={(e) => onChange("calcium", e.target.value)}
            required
          />
        </Form.Group>

        {/* POTASSIUM */}
        <Form.Group as={Col} controlId="potassium" className="pt-4">
          <Form.Label>Potassium (mg)</Form.Label>

          <Form.Control
            type="text"
            placeholder="Optional"
            value={formData.potassium || ""}
            onChange={(e) => onChange("potassium", e.target.value)}
            required
          />
        </Form.Group>
      </Form>
    </Container>
  );
}
