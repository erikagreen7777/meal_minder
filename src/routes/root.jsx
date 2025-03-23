import logo from "../mm_logo.png";
import "./root.css";
import CameraComponent from "./components/CameraComponent";
import { Users } from "./components/users/Users";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Users />
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
