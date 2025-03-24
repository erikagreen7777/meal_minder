import logo from "../assets/mm_logo.png";
import "./root.css";
import { Navigation } from "../components/navigation/NavigationBar";

function App() {
  return (
    <div className="App">
      <Navigation id="Nav-header"/>
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
