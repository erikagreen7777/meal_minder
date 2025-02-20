import logo from "./mm_logo.png";
import "./App.css";

const form = {
  barcode: "",
  image: new Image(),
};

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} />
        <h1>Add Inventory</h1>
        <form>
          <label htmlFor="barcode">Barcode</label>
          <input
            id="barcode"
            name="barcode"
            alt="barcode"
            type="file"
            accept="image/*"
            capture="environment"
            defaultValue={form.barcode}
          />
        </form>
      </header>
    </div>
  );
}

export default App;
