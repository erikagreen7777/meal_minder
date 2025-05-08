import { Form } from "react-bootstrap";
import React from "react";

//TODO: put these selections in some sort of GLOBAL VARIABLE
//TODO: add isInvalid to this component because it's not showing in parent
export default function UnitDropdown({
  dropDownId,
  onChange,
  onBlur,
  onFocus,
}) {
  return (
    <Form.Select
      aria-title="select unit"
      id={dropDownId}
      onChange={(e) => onChange(dropDownId, e.target.value)}
      onBlur={(e) => onBlur(dropDownId, e.target.value)}
      onFocus={(e) => onFocus(dropDownId, e.target.value)}
    >
      <option value="">select unit </option>
      <option value="cups">cups</option>
      <option value="grams">grams</option>
      <option value="ounces">ounces</option>
      <option value="pieces">pieces</option>
      <option value="slices">slices</option>
      <option value="tablespoons">tablespoons</option>
      <option value="teaspoons">teaspoons</option>
    </Form.Select>
  );
}
