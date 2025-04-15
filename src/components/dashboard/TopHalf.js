import React from "react";
import InventoryList from "../inventory/InventoryGrid";

const TopHalf = () => {
  const inventoryItems = [
    {
      image:
        "https://images.openfoodfacts.org/images/products/073/762/806/4502/front_en.6.200.jpg",
      title: "Thai peanut noodle kit",
      cuisine: "Thai",
      tags: ["en:protein"],
      // description:
      // "A spicy chili sauce made from chili peppers, vinegar, garlic, sugar, and salt.",
      quantity: 2,
    },
    {
      image:
        "https://s.turbifycdn.com/aah/mex-grocer/cholula-hot-sauce-with-chipotle-43.png",
      title: "Cholula Hot Sauce",
      cuisine: "Mexican",
      tags: [
        "en:condiment",
        "en:spicy",
        "cool-yo",
        "en:hot-sauce",
        "en:spicy-wow",
      ],
      // description: "A hot sauce made from chili peppers, spices, and vinegar.",
      quantity: 5,
    },
  ];

  return (
    <>
      <h2>Current Inventory</h2>
      <InventoryList items={inventoryItems} />
    </>
  );
};

export default TopHalf;
