import React from "react";
import { Modal, Button } from "react-bootstrap";
import { useState } from "react";
import CameraComponent from "./CameraComponent";

export default function AddInventory({ ...props }) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow} className="mt-3">
        Add New Inventory
      </Button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add New Inventory</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <CameraComponent />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
