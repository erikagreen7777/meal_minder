import logo from "../assets/mm_logo.png";
import "./root.css";
import { Navigation } from "../components/navigation/NavigationBar";

function App() {
  return (
    <div className="App">
      <Navigation id="Nav-header" />
      <header className="App-header">
        <h1>Meal Minder</h1>
      </header>
      <div className="App-body">
        <p>
          Welcome to Meal Minder, the app that helps you keep track of your
          groceries! Keep track of what you have in your pantry, fridge, and
          freezer; what you have, what you need, and what you need to use up.
        </p>

      </div>
      {/* <img src={logo} alt="" /> */}
      {/* <div>
          <label htmlFor="barcode">Barcode</label>
        </div>
        <CameraComponent /> */}
    </div>
  );
}

export default App;
