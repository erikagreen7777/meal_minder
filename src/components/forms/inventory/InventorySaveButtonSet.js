import { Row, Col, Button, Container } from "react-bootstrap";
import React from "react";
import { Link } from "react-router";

export const InventorySaveButtonSet = ({
  stepIndex,
  incrementFormStep,
  decrementFormStep,
  skipOptionalSteps,
}) => {
  const secondaryButtonText = stepIndex === 0 ? "Cancel" : "Back";

  return (
    <Row className="f-dlex justify-content-between p-4">
      <Button as={Col} xl={2} variant="secondary" onClick={decrementFormStep}>
        {secondaryButtonText}
      </Button>
      <Container as={Col} className="d-flex justify-content-end">
        {stepIndex > 0 && (
          <Link
            onClick={skipOptionalSteps}
            to="/dashboard" // <------ GOING TO HAVE TO SAVE DATA
            as={Col}
            xl={2}
            className="me-4 align-self-center"
            variant="secondary"
          >
            Skip
          </Link>
        )}
        <Button as={Col} xl={2} variant="primary" onClick={incrementFormStep}>
          Next
        </Button>
      </Container>
    </Row>
  );
};

/* child to parent component through callback
PARENT
import StepOne from './StepOne';

function SaveInventory() {
  const handleProductNameChange = (name) => {
    console.log('Product name from child:', name);
    // You could also update parent state here
  };

  return (
    <StepOne onProductNameChange={handleProductNameChange} />
  );
}

CHILD
import { Form } from 'react-bootstrap';

function StepOne({ onProductNameChange }) {
  const handleChange = (e) => {
    onProductNameChange(e.target.value);
  };

  return (
    <Form.Group controlId="productName">
      <Form.Label>Product Name</Form.Label>
      <Form.Control type="text" onChange={handleChange} />
    </Form.Group>
  );
}
*/
