import React, { useEffect } from 'react';
import './SuccessStyle.css';
import { CartState } from '../Context/Contextt';


function Success() {
  const { state, dispatch } = CartState();

  useEffect(() => {
    // Dispatch REMOVE_CART action to empty the cart
    dispatch({ type: 'REMOVE_CART' });
  }, []); // Empty dependency array ensures this runs only once after the component mounts

  return (
    <div className='success'>
      <h1>Order Placed!</h1>
    </div>
  );
}

export default Success;
