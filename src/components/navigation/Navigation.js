import { NavLink } from "react-router";

export function Navigation() {
  return (
    <nav>
      <NavLink to="/" end>
        Home
      </NavLink>
      <NavLink to="/users" end>
        Users
      </NavLink>
      <NavLink to="/signup">Signup</NavLink>
      <NavLink to="/newInventory">Add Inventory</NavLink>
    </nav>
  );
}
