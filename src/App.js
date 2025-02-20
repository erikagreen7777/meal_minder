import logo from "./logo.svg";
import "./App.css";

const form = {
  barcode: "",
  image: new Image(),
};

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <form>
        <label htmlFor="barcode">
          Barcode
          <button type="buttton">Take Picture</button>
        </label>
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
    </div>
  );
}

export default App;
