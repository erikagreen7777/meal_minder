import React from "react";
import { Button, Form, Col, Row } from "react-bootstrap";
import { InputGroup } from "react-bootstrap";
import UnitDropdown from "../forms/UnitDropdown";

export default function SaveInventory() {
  return (
    <>
      <Form>
        <Row className="mb-3">
          <Form.Group as={Col} controlId="productName">
            <Form.Label>Product Name</Form.Label>
            <Form.Control type="text" placeholder="Sriracha" required />
          </Form.Group>
          <Form.Group as={Col} controlId="productQuantity">
            <Form.Label>Product Quantity</Form.Label>
            <InputGroup>
              <Form.Control type="text" placeholder="34" />
              <UnitDropdown className="primary" props="productQuantityUnit" />
            </InputGroup>
          </Form.Group>
          <Form.Group as={Col} className="mb-3" controlId="servingSize">
            <Form.Label>Serving Size</Form.Label>
            <InputGroup>
              <Form.Control type="number" placeholder="113" required />
              <UnitDropdown props="servingSizeUnit" />
            </InputGroup>
          </Form.Group>
        </Row>

        <Row className="mb-3">
        

          <Form.Group as={Col} className="mb-3" controlId="calories">
            <Form.Label>Calories (kcal)</Form.Label>
            <Form.Control type="number" placeholder="10" required />
          </Form.Group>
          <Form.Group as={Col} className="mb-3" controlId="protein">
            <Form.Label>Protein</Form.Label>
            <InputGroup>
              <Form.Control type="number" placeholder="20" />
              <InputGroup.Text
                className="bg-primary text-white"
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
                className="bg-primary text-white"
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
                className="bg-primary text-white"
                id="carbohydratesGrams"
              >
                g
              </InputGroup.Text>
            </InputGroup>
          </Form.Group>
        </Row>
        <Form.Group className="mb-3" controlId="sugars">
          <Form.Label>Sugar</Form.Label>
          <InputGroup>
            <Form.Control type="number" placeholder="16" />
            <InputGroup.Text id="sugarGrams">g</InputGroup.Text>
          </InputGroup>
        </Form.Group>
        <Form.Group className="mb-3" controlId="saturatedFat">
          <Form.Label>Saturated Fat</Form.Label>
          <InputGroup>
            <Form.Control type="number" placeholder="20" />
            <InputGroup.Text id="saturatedFatGrams">g</InputGroup.Text>
          </InputGroup>
        </Form.Group>
        <Form.Group className="mb-3" controlId="calcium">
          <Form.Label>Calcium</Form.Label>
          <InputGroup>
            <Form.Control type="number" placeholder="10" />
            <InputGroup.Text id="calciumMilligrams">mg</InputGroup.Text>
          </InputGroup>
        </Form.Group>
        <Form.Group className="mb-3" controlId="cholesterol">
          <Form.Label>Cholesterol</Form.Label>
          <InputGroup>
            <Form.Control type="number" placeholder="10" />
            <InputGroup.Text id="cholesterolMilligrams">mg</InputGroup.Text>
          </InputGroup>
        </Form.Group>
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
      </Form>
    </>
  );
}
