import logo from "./mm_logo.png";
import "./App.css";
import CameraComponent from "./components/CameraComponent";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Meal Minder</h1>
        <img src={logo} />
        <div>
          <label htmlFor="barcode">Barcode</label>
        </div>
        <CameraComponent />
      </header>
    </div>
  );
}

export default App;
