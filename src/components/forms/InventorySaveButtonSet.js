import { Row, Col, Button, Container } from "react-bootstrap";
import React from "react";
import { Link } from "react-router";

export const InventorySaveButtonSet = () => {
  return (
    <Row className="f-dlex justify-content-between p-4">
      <Button as={Col} xl={2} variant="secondary">
        Cancel
      </Button>
      <Container as={Col} className="d-flex justify-content-end">
        <Link
          to="/inventory"
          as={Col}
          xl={2}
          className="me-4 align-self-center"
        >
          Skip
        </Link>
        <Button as={Col} xl={2} variant="primary">
          Next
        </Button>
      </Container>
    </Row>
  );
};
