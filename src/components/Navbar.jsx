import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-grey shadow-sm border rounded px-3 py-2">
      <div className="container-fluid">

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto gap-2">

            <li className="nav-item">
              <NavLink
                to="/counter"
                className={({ isActive }) =>
                  "nav-link px-3 py-2 rounded " +
                  (isActive ? "bg-primary text-white fw-semibold" : "text-dark")
                }
              >
                <b>Counter</b>
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink
                to="/todolist"
                className={({ isActive }) =>
                  "nav-link px-3 py-2 rounded " +
                  (isActive ? "bg-primary text-white fw-semibold" : "text-dark")
                }
              >
                <b>TodoList</b>
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink
                to="/products"
                className={({ isActive }) =>
                  "nav-link px-3 py-2 rounded " +
                  (isActive ? "bg-primary text-white fw-semibold" : "text-dark")
                }
              >
                <b>Products</b>
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink
                to="/recipes"
                className={({ isActive }) =>
                  "nav-link px-3 py-2 rounded " +
                  (isActive ? "bg-primary text-white fw-semibold" : "text-dark")
                }
              >
                <b>Recipes</b>
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink
                to="/leads"
                className={({ isActive }) =>
                  "nav-link px-3 py-2 rounded " +
                  (isActive ? "bg-primary text-white fw-semibold" : "text-dark")
                }
              >
                <b>Leads</b>
              </NavLink>
            </li>

          </ul>
        </div>

      </div>
    </nav>
  );
}

export default Navbar;
