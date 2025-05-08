import React from "react";
import { useState, useEffect } from "react";
import { Form, Col, Row, Container } from "react-bootstrap";
import { InputGroup } from "react-bootstrap";
import UnitDropdown from "../UnitDropdown";
import { Info } from "../../icons/Info";
import { OverlayTrigger, Tooltip } from "react-bootstrap";

// TODO: add tags or cuisine type??
// TODO: DRY it up
// UP NEXT: specify the selects in terms of 'not empty' isn't going to cut it.

export default function InventoryRequired({
  formData,
  onChange,
  onDataValidation,
}) {
  const [validated, setValidated] = useState({
    productName: false,
    productQuantity: false,
    productQuantityUnit: false,
    servingSize: false,
    servingSizeUnit: false,
  });

  const [focused, setFocused] = useState({
    productName: false,
    productQuantity: false,
    productQuantityUnit: false,
    servingSize: false,
    servingSizeUnit: false,
  });
  const [everythingVisted, setEverythingVisited] = useState(false);
  const [everythingValid, setEverythingValid] = useState(false);
  const handleFocus = (fieldName, value) => {
    setFocused((prev) => ({ ...prev, [fieldName]: true }));
  };

  const handleBlur = (fieldName, value) => {
    if (value !== "") {
      setValidated((prev) => ({ ...prev, [fieldName]: true }));
    } else if (value === "" && validated[fieldName] === true) {
      setValidated((prev) => ({ ...prev, [fieldName]: false }));
    }
  };

  useEffect(() => {
    Object.values(validated).every((val) => {
      return val === true;
    })
      ? setEverythingValid(true)
      : setEverythingValid(false);
    Object.values(focused).every((val) => {
      return val === true;
    })
      ? setEverythingVisited(true)
      : setEverythingVisited(false);

    if (everythingVisted && everythingValid) {
      onDataValidation(true);
    } else {
      onDataValidation(false);
    }
  }, [validated, focused, everythingVisted, everythingValid]);

  return (
    <Container>
      <h2>Alright, let's do the must-haves first:</h2>
      <Form validated={everythingValid} noValidate>
        {/* PRODUCT NAME */}
        <Form.Group as={Col} controlId="productName" className="pt-4">
          <Form.Label>
            Product Name<span className="text-danger">*</span>
          </Form.Label>
          <Form.Control
            type="text"
            placeholder="Sriracha"
            value={formData.productName || ""}
            onFocus={(e) => handleFocus("productName", e.target.value)}
            onBlur={(e) => handleBlur("productName", e.target.value)}
            onChange={(e) => onChange("productName", e.target.value)}
            isInvalid={focused.productName && !validated.productName}
          />
          <Form.Control.Feedback type="invalid">
            This field is required
          </Form.Control.Feedback>
        </Form.Group>

        {/* PRODUCT QUANTITY */}
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
                onFocus={(e) => handleFocus("productQuantity", e.target.value)}
                onBlur={(e) => handleBlur("productQuantity", e.target.value)}
                isInvalid={
                  focused.productQuantity && !validated.productQuantity
                }
              />
              <UnitDropdown
                dropDownId="productQuantityUnit"
                onChange={onChange}
                onFocus={handleFocus}
                onBlur={handleBlur}
                // isInvalid needs to go to the child
              />
            </InputGroup>
          </Form.Group>

          {/* SERVING SIZE */}
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
              onFocus={(e) => handleFocus("servingSize", e.target.value)}
              onBlur={(e) => handleBlur("servingSize", e.target.value)}
              isInvalid={focused.servingSize && !validated.servingSize}
            />
            <UnitDropdown
              dropDownId="servingSizeUnit"
              onChange={onChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
          </InputGroup>
        </Form.Group>
      </Form>
    </Container>
  );
}
