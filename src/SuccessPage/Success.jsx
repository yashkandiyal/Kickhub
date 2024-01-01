import React, { useEffect } from 'react';
import './SuccessStyle.css';
import { CartState } from '../Context/Contextt';


function Success() {
  const { state, dispatch } = CartState();

  useEffect(() => {
    
    dispatch({ type: 'REMOVE_CART' });
  }, []); 

  return (
    <div className='success'>
      <h1>Order Placed!</h1>
    </div>
  );
}

export default Success;
