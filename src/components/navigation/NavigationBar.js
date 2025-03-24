import { NavLink } from "react-router";
import logo from "../../assets/mm_logo.png";
import "./NavigationBar.css";

export function Navigation() {
  return (
      <nav>
      <img src={logo} id="navlogo" alt="" />
      <div className="navlinks">
        <NavLink to="/" end>
          Home
        </NavLink>
        <NavLink to="/users" end>
          Users
        </NavLink>
        <NavLink to="/signup">Signup</NavLink>
        <NavLink to="/newInventory">Add Inventory</NavLink>
        </div>
      </nav>
  );
}
