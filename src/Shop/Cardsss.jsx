import React from "react";
import { CartState } from "../Context/Contextt";


export default function Cards({ imageSource, shoename, mrp, prod }) {
  const {
    state: { cart },
    dispatch,
  } = CartState();

  const addToCart = () => {
    dispatch({
      type: "ADD_TO_CART",
      payload: prod,
    });
  };

  const removeFromCart = () => {
    dispatch({
      type: "REMOVE_FROM_CART",
      payload: prod,
    });
  };

  return (
    <>
      <div className="shop-container">
        <div className="row">
          <div className="shop-box">
            <img src={imageSource} alt="" loading="lazy"/>
            <div className="cart-feature">
              <h2>{shoename}</h2>
              <h4>{mrp}</h4>

              {cart.some((p) => p.id === prod.id) ? (
                <button
                  style={{ backgroundColor: "#ff0000" }}
                  onClick={removeFromCart}
                >
                  Remove from cart
                </button>
              ) : (
                <button
                  style={{ backgroundColor: "black", color: "white" }}
                  onClick={addToCart}
                >
                  Add to Cart
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
