import React, { createContext, useContext, useReducer } from "react";
import Data from "../Shop/data";
import { Cartreducer } from "./Reducers";

const Cart = createContext();

function Contextt({ children }) {
  const products = Data;
  const [state, dispatch] = useReducer(Cartreducer, {
    products: products,
    cart: [],
  });
  return <Cart.Provider value={{ state, dispatch }}>{children}</Cart.Provider>;
}

export default Contextt;
export const CartState = () => {
  return useContext(Cart);
};
