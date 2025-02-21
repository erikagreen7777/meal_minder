import logo from "./mm_logo.png";
import "./App.css";
import { BarcodeScanner } from "./components/BarcodeScanner";
import CameraComponent from "./components/CameraComponent";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Meal Minder</h1>
        <img src={logo} />
        <div>
          <label htmlFor="barcode">Barcode</label>
          {/* <input
            id="barcode"
            name="barcode"
            alt="barcode"
            // type="file"
            accept="video/*"
            capture="environment"
            defaultValue={null}
          /> */}
        </div>
        {/* <BarcodeScanner /> */}
        <CameraComponent />
      </header>
    </div>
  );
}

export default App;
