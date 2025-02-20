import logo from "./mm_logo.png";
import "./App.css";
import { BarcodeScanner } from "./components/BarcodeScanner";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Meal Minder</h1>
        <img src={logo} />
        <div>
          <label htmlFor="barcode">Barcode</label>
          <input
            id="barcode"
            name="barcode"
            alt="barcode"
            type="file"
            accept="image/*"
            capture="environment"
            defaultValue={null}
          />
        </div>
      </header>
      <BarcodeScanner />
    </div>
  );
}

export default App;
