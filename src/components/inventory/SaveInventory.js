import React from "react";
import { Container } from "react-bootstrap";
import InventoryRequired from "../forms/inventory/InventoryRequired";
import { ProgressBar } from "react-bootstrap";
import { useState } from "react";
import { InventorySaveButtonSet } from "../forms/inventory/InventorySaveButtonSet";
import InventoryNutrition from "../forms/inventory/InventoryNutrition";
import InventoryVitaminsMinerals from "../forms/inventory/InventoryVitaminsMinerals";

// Add in fiber and net carbs?

export default function SaveInventory() {
  const [progress, setProgress] = useState(33);
  const [stepIndex, setStepIndex] = useState(0);
  const [formData, setFormData] = useState({
    productName: "",
    productQuantity: 0,
    productQuantityUnit: "",
    servingSize: 0,
    servingSizeUnit: "",
    calories: 0,
    protein: 0,
    fat: 0,
    carbohydrates: 0,
    sodium: 0,
    cholesterol: 0,
    sugars: 0,
    saturatedFat: 0,
    iron: 0,
    calcium: 0,
    potassium: 0,
  });
  const props = { stepIndex }; // <--- may end up passing more
  const renderFormStep = () => {
    switch (stepIndex) {
      case 0:
        return (
          <InventoryRequired
            formData={formData}
            onChange={handleFormDataChange}
          />
        );
      case 1:
        return (
          <InventoryNutrition
            formData={formData}
            onChange={handleFormDataChange}
          />
        );
      case 2:
        return (
          <InventoryVitaminsMinerals
            formData={formData}
            onChange={handleFormDataChange}
          />
        );
      default:
        return null;
    }
  };

  const handleFormDataChange = (field, value) => {
    console.log(`${field}, ${value}`);
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <>
      <Container className="mb-3">
        <ProgressBar now={progress} className="mb-3" />
        {renderFormStep()}
      </Container>
      <Container>
        <InventorySaveButtonSet props={props} />
      </Container>
    </>
  );
}
