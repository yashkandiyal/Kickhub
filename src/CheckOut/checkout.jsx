import React from "react";
import { CartState } from "../Context/Contextt";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import './Checkout.css'

function checkout() {
  const { state } = CartState();
  const {
    state: { cart },
    dispatch,
  } = CartState();
  
  const [total, setTotal] = useState();
  useEffect(() => {
    
    setTotal(
      cart.reduce(
        (acc, curr) =>
          acc + parseFloat(curr.mrp.replace(/[^\d.]/g, "")) * curr.qty,
        0
      )
    );
    
  
  }, [cart]);
  
  return (
    <>
      {state.cart.length > 0 ? (
        <div className="custom-table">
          <div className="tbody">
            {cart.map((item) => (
              <div key={item.id} className="row">
                <div>
                  <img src={item.image} alt="" loading="lazy"/>
                </div>
                <div>{item.name}</div>
                <div>{item.mrp}</div>
                <div>
                  <select
                    value={item.qty}
                    onChange={(e) =>
                      dispatch({
                        type: "CHANGE_CART_QTY",
                        payload: {
                          id: item.id,

                          qty: e.target.value,
                        },
                      })
                    }
                  >
                    {[...Array(5).keys()].map((x) => (
                      <option key={x + 1}>{x + 1}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <button
                    onClick={() => {
                      dispatch({
                        type: "REMOVE_FROM_CART",
                        payload: item,
                      });
                    }}
                  >
                    <i className="fa-solid fa-trash trash" />
                  </button>
                </div>
              </div>
            ))}
            <div className="payment">
              <h2>Total :Rs {total}</h2>

             
                <Link to="/payment"> <button>Click to Proceed</button></Link>{" "}
              
            </div>
          </div>
        </div>
      ) : (
        <h1 className="check-out">Cart is empty</h1>
      )}
    </>
  );
}

export default checkout;
