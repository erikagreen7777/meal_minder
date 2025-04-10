import TopHalf from "../../components/dashboard/TopHalf";
import { Container } from "react-bootstrap";
import { Navigation } from "../../components/navigation/NavigationBar";
import Button from "react-bootstrap/Button";
import InventoryList from "../../components/inventory/InventoryGrid";

export default function DashboardPage() {
  const inventoryItems = [
    {
      image: "https://m.media-amazon.com/images/I/71ry2B5h7YL.jpg",
      title: "Sriracha Sauce",
      cuisine: "Thai",
      description:
        "A spicy chili sauce made from chili peppers, vinegar, garlic, sugar, and salt.",
      quantity: 2,
    },
    {
      image:
        "https://s.turbifycdn.com/aah/mex-grocer/cholula-hot-sauce-with-chipotle-43.png",
      title: "Cholula Hot Sauce",
      cuisine: "Mexican",
      description: "A hot sauce made from chili peppers, spices, and vinegar.",
      quantity: 5,
    },
  ];
  return (
    <>
      <Navigation />
      <Container>
        <h1>Current Inventory</h1>
        <br />
        {/* <TopHalf /> */}
        <InventoryList items={inventoryItems} />
        <br />
        <Button variant="primary" href="/new-inventory">
          Add New Item
        </Button>
      </Container>
    </>
  );
}
