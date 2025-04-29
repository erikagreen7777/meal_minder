import React from "react";
import { Button, Form, Col, Row, Container } from "react-bootstrap";
import { InputGroup } from "react-bootstrap";
import UnitDropdown from "../forms/UnitDropdown";
import { Info } from "../icons/Info";
import { OverlayTrigger, Tooltip } from "react-bootstrap";
import InventoryRequired from "../forms/InventoryRequired";
import { ProgressBar } from "react-bootstrap";
import { useState } from "react";
import { InventorySaveButtonSet } from "../forms/InventorySaveButtonSet";

// Add in fiber and net carbs?

export default function SaveInventory() {
  const [progress, setProgress] = useState(0);

  // TODO: some sort of handleProgress function to update the progress bar?

  return (
    <>
      <Container className="mb-3">
        <ProgressBar now={progress} className="mb-3" />
        <InventoryRequired />
      </Container>
      <Container>
        <InventorySaveButtonSet />
      </Container>
      {/*
          


      <Form>
       </Row> <Row className="mb-3">
          <Form.Group as={Col} className="mb-3" controlId="servingSize">
            <Form.Label>Serving Size</Form.Label>
            <InputGroup>
              <Form.Control type="number" placeholder="113" required />
              <UnitDropdown props="servingSizeUnit" />
            </InputGroup>
          </Form.Group>
        </Row>

       </Row> <Row className="mb-3">
          <Form.Group as={Col} className="mb-3" controlId="calories">
            <Form.Label>Calories (kcal)</Form.Label>
            <Form.Control type="number" placeholder="10" required />
          </Form.Group>
          <Form.Group as={Col} className="mb-3" controlId="protein">
            <Form.Label>Protein</Form.Label>
            <InputGroup>
              <Form.Control type="number" placeholder="20" />
              <InputGroup.Text
                className="bg-primary text-black opacity-50"
                id="proteinGrams"
              >
                g
              </InputGroup.Text>
            </InputGroup>
          </Form.Group>
          <Form.Group as={Col} className="mb-3" controlId="fat">
            <Form.Label>Fat</Form.Label>
            <InputGroup>
              <Form.Control type="number" placeholder="10" />
              <InputGroup.Text
                className="bg-primary text-black opacity-50"
                id="proteinGrams"
              >
                g
              </InputGroup.Text>
            </InputGroup>
          </Form.Group>
          <Form.Group as={Col} className="mb-3" controlId="carbohydrates">
            <Form.Label>Carbohydrates</Form.Label>
            <InputGroup>
              <Form.Control type="number" placeholder="10" />
              <InputGroup.Text
                className="bg-primary text-black opacity-50"
                id="carbohydratesGrams"
              >
                g
              </InputGroup.Text>
            </InputGroup>
          </Form.Group>
        </Row>

        <Row>
          <Form.Group as={Col} className="mb-3" controlId="sugars">
            <Form.Label>Sugar</Form.Label>
            <InputGroup>
              <Form.Control type="number" placeholder="16" />
              <InputGroup.Text
                id="sugarGrams"
                className="bg-primary text-black opacity-50"
              >
                g
              </InputGroup.Text>
            </InputGroup>
          </Form.Group>
          <Form.Group as={Col} className="mb-3" controlId="saturatedFat">
            <Form.Label>Saturated Fat</Form.Label>
            <InputGroup>
              <Form.Control type="number" placeholder="20" />
              <InputGroup.Text
                id="saturatedFatGrams"
                className="bg-primary text-black opacity-50"
              >
                g
              </InputGroup.Text>
            </InputGroup>
          </Form.Group>
          <Form.Group as={Col} className="mb-3" controlId="calcium">
            <Form.Label>Calcium</Form.Label>
            <InputGroup>
              <Form.Control type="number" placeholder="10" />
              <InputGroup.Text
                id="calciumMilligrams"
                className="bg-primary text-black opacity-50"
              >
                mg
              </InputGroup.Text>
            </InputGroup>
          </Form.Group>
          <Form.Group as={Col} className="mb-3" controlId="cholesterol">
            <Form.Label>Cholesterol</Form.Label>
            <InputGroup>
              <Form.Control type="number" placeholder="10" />
              <InputGroup.Text
                id="cholesterolMilligrams"
                className="bg-primary text-black opacity-50"
              >
                mg
              </InputGroup.Text>
            </InputGroup>
          </Form.Group>
        </Row>

        <Form.Group className="mb-3" controlId="iron">
          <Form.Label>Iron</Form.Label>
          <InputGroup>
            <Form.Control type="number" placeholder="10" />
            <InputGroup.Text id="ironMilligrams">mg</InputGroup.Text>
          </InputGroup>
        </Form.Group>
        <Form.Group className="mb-3" controlId="potassium">
          <Form.Label>Potassium</Form.Label>
          <InputGroup>
            <Form.Control type="number" placeholder="20" />
            <InputGroup.Text id="potassiumMilligrams">mg</InputGroup.Text>
          </InputGroup>
        </Form.Group>
        <Form.Group className="mb-3" controlId="sodium">
          <Form.Label>Sodium</Form.Label>
          <InputGroup>
            <Form.Control type="number" placeholder="200" />
            <InputGroup.Text id="sodiumMilligrams">mg</InputGroup.Text>
          </InputGroup>
        </Form.Group>
        <Button variant="primary" type="submit">
          Save
        </Button>
      </Form> */}
    </>
  );
}
