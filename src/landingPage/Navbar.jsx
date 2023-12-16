import React from "react";
import {NavLink} from "react-router-dom";


import { CartState } from "../Context/Contextt";

function Navbar() {
  const {state}=CartState();
  return (
    <div className="navbar">
      <h1>
        <NavLink className="top-header" to="/">
          {" "}
          <h1>Kickshub</h1>{" "}
        </NavLink>
      </h1>
      <div className="right">
        <NavLink to="/shop">Shop</NavLink>

        <NavLink to="/checkout">
          <div className="cart-responsive">
            <p>{state.cart.length}</p>

            <i className="fa-solid fa-cart-shopping" />
          </div>
        </NavLink>
      </div>
    </div>
  );
}

export default Navbar;
