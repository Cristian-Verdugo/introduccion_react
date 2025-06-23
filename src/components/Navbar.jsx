import React from "react";
import { formatPrice } from "../utils/format";

const Navbar = () => {
  const total = 25000;
  const token = false;
  return (
    <nav className="navbar navbar-dark bg-dark px-3">
      <span className="navbar-brand mb-0 h1">Pizzería Mamma Mia!</span>
      <div className="d-flex align-items-center gap-2">
        <button className="btn btn-outline-warning btn-sm">🍕 Home</button>
        {token ? (
          <>
            <button className="btn btn-outline-secondary btn-sm">🔓 Profile</button>
            <button className="btn btn-outline-secondary btn-sm">🔒 Logout</button>
          </>
        ) : (
          <>
            <button className="btn btn-outline-secondary btn-sm">🔐 Login</button>
            <button className="btn btn-outline-secondary btn-sm">🔐 Register</button>
          </>
        )}
        <button className="btn btn-info btn-sm ms-2">
          🛒 Total: ${formatPrice(total)}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
