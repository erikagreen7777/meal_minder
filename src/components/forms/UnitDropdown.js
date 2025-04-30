import { Form } from "react-bootstrap";
import React from "react";

//TODO: put these selections in some sort of GLOBAL VARIABLE

export default function UnitDropdown({ dropDownId, onChange }) {
  return (
    <Form.Select
      aria-title="select unit"
      id={dropDownId}
      onChange={(e) => onChange(dropDownId, e.target.value)}
    >
      <option>select unit </option>
      <option href="#">cups</option>
      <option href="#">grams</option>
      <option href="#">ounces</option>
      <option href="#">pieces</option>
      <option href="#">slices</option>
      <option href="#">tablespoons</option>
      <option href="#">teaspoons</option>
    </Form.Select>
  );
}
