import React from "react";
import { Button, Form, Col, Row } from "react-bootstrap";
import { InputGroup } from "react-bootstrap";
import UnitDropdown from "../forms/UnitDropdown";
import { Info } from "../icons/Info";
import { OverlayTrigger, Tooltip } from "react-bootstrap";
import InventoryRequired from "../forms/InventoryRequired";
import { Carousel } from "react-bootstrap";
import { useState } from "react";

// Add in fiber and net carbs?

export default function SaveInventory() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };
  return (
    <>
      <Carousel
        activeIndex={index}
        onSelect={handleSelect}
        style={{
          backgroundImage:
            "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRY4EYBJdnabuSbsKOxUEYLv8pqeYXr5fJntw&s')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          minHeight: "50vh",
          color: "white", // Make sure text color is visible
          textShadow: "0px 0px 5px black", // Optional: adds contrast for readability
          zIndex: 10,
        }}
        // style={{ backgroundColor: "rgba(0, 0, 0, 0.5)", minHeight: "50vh" }}
      >
        <Carousel.Item>
          <Carousel.Caption style={{ color: "blue" }}>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      {/* <Carousel>
        <Carousel.Item>
          <Form>
            <Form.Group as={Col} controlId="productName">
              <Form.Label>Product Name</Form.Label>
              <Form.Control type="text" placeholder="Sriracha" required />
            </Form.Group>
            <Form.Group as={Col} controlId="productQuantity">
              <Form.Label>Product Quantity</Form.Label>
              <OverlayTrigger
                placement="right"
                overlay={
                  <Tooltip id="product-quantity-tooltip">
                    {
                      "The amount inside the package (e.g. tuna packet has 3 oz)"
                    }
                  </Tooltip>
                }
              >
                <span style={{ cursor: "pointer", color: "#6c757d" }}>
                  <Info />
                </span>
              </OverlayTrigger>

              <InputGroup>
                <Form.Control type="text" placeholder="34" />
                <UnitDropdown className="primary" props="productQuantityUnit" />
              </InputGroup>
            </Form.Group>
          </Form>
        </Carousel.Item>
      </Carousel>
      <Form>
        <Row className="mb-3">
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
