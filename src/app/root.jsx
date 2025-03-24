import logo from "../assets/mm_logo.png";
import "./root.css";
import CameraComponent from "../components/inventory/CameraComponent";
import { Link } from "react-router";
import { Navigation } from "../components/navigation/Navigation";

function App() {
  return (
    <div className="App">
      <Navigation />
      <header className="App-header">
        <h1>Meal Minder</h1>
        <img src={logo} alt="" />
        {/* <div>
          <label htmlFor="barcode">Barcode</label>
        </div>
        <CameraComponent /> */}
      </header>
    </div>
  );
}

export default App;
