import React from 'react';
import iconCart from '../img/iconCart.svg';

const ShoppingCart = () => {
  return (
    <div className='contentCart'>
      <img className='cart' src={iconCart} alt="" />
    </div>
  );
};

export default ShoppingCart;