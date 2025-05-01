import React from "react";
import { Form, Col, Row, Container } from "react-bootstrap";
import { InputGroup } from "react-bootstrap";
import UnitDropdown from "../UnitDropdown";
import { Info } from "../../icons/Info";
import { OverlayTrigger, Tooltip } from "react-bootstrap";

// TODO: refactor this with a map?

export default function InventoryNutrition({ formData, onChange }) {
  return (
    <Container>
      <h2>Let's get the broad nutritional strokes:</h2>
      <Form>
        {/* FAT     */}
        <Form.Group as={Col} controlId="fat" className="pt-4">
          <Form.Label>Total Fat (g)</Form.Label>

          <Form.Control
            type="text"
            placeholder="Optional"
            value={formData.fat || ""}
            onChange={(e) => onChange("fat", e.target.value)}
            required
          />
        </Form.Group>

        {/* CHOLESTEROL     */}
        <Form.Group as={Col} controlId="cholesterol" className="pt-4">
          <Form.Label>Cholesterol (mg)</Form.Label>

          <Form.Control
            type="text"
            placeholder="Optional"
            value={formData.cholesterol || ""}
            onChange={(e) => onChange("cholesterol", e.target.value)}
            required
          />
        </Form.Group>

        {/* SODIUM     */}
        <Form.Group as={Col} controlId="sodium" className="pt-4">
          <Form.Label>Sodium (mg)</Form.Label>

          <Form.Control
            type="text"
            placeholder="Optional"
            value={formData.sodium || ""}
            onChange={(e) => onChange("sodium", e.target.value)}
            required
          />
        </Form.Group>

        {/* CARBOHYDRATES     */}
        <Form.Group as={Col} controlId="carbohydrates" className="pt-4">
          <Form.Label>Total Carbohydrates (g)</Form.Label>
          <Form.Control
            type="text"
            placeholder="Optional"
            value={formData.carbohydrates || ""}
            onChange={(e) => onChange("carbohydrates", e.target.value)}
            required
          />
        </Form.Group>

        {/* PROTEIN     */}
        <Form.Group as={Col} controlId="protein" className="pt-4">
          <Form.Label>Protein (g)</Form.Label>

          <Form.Control
            type="text"
            placeholder="Optional"
            value={formData.protein || ""}
            onChange={(e) => onChange("protein", e.target.value)}
            required
          />
        </Form.Group>
      </Form>
    </Container>
  );
}
