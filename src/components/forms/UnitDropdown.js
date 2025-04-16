import { DropdownButton, Dropdown } from "react-bootstrap";
import React from "react";

export default function UnitDropdown(dropDownId) {
  return (
    <DropdownButton
      variant="outline-primary"
      title="select unit"
      id={dropDownId}
    >
      <Dropdown.Item href="#">cups</Dropdown.Item>
      <Dropdown.Item href="#">grams</Dropdown.Item>
      <Dropdown.Item href="#">ounces</Dropdown.Item>
      <Dropdown.Item href="#">pieces</Dropdown.Item>
      <Dropdown.Item href="#">slices</Dropdown.Item>
      <Dropdown.Item href="#">tablespoons</Dropdown.Item>
      <Dropdown.Item href="#">teaspoons</Dropdown.Item>
    </DropdownButton>
  );
}
