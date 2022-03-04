import React from 'react';
import iconPlus from '../img/iconPlus.svg';
import iconMinus from '../img/iconMinus.svg';
import { Icon } from '@iconify/react';
// import iconCart from '../img/iconCart.svg';

const Info = () => {
  return (
    <div className='contentInfo'>
      <h3 className='title2'>SNEAKER COMPANY</h3>
      <h1 className='title1'>Fall Limited Edition Sneakers</h1>
      <p className='paragraph'>These low-profile sneakers are your perfect casual wear
        companion. Feature a durable rubber outer sole, they'll
        withstand everything the wather can offer.</p>
      <div className='contentPriceDiscount'>
        <p className='price'>$125.00</p>
        <div className='contentDiscount'>
          <p className='discount'>50%</p>
        </div>
      </div>
      <p className='priceThrough'> $250.00</p>
      <div className='contentButtons'>
        <div className='contentMinusPlus'>
          <button className='iconMinusBtn'>
            <img className='iconMinus' src={iconMinus} alt="" />
          </button>
          <span className='num'>0</span>
          <button className='iconPlusBtn'>
            <img className='iconPlus' src={iconPlus} alt="" />
          </button>
        </div>
        <button className='btnAddToCart'>
          <Icon fontSize="1rem" icon="ant-design:shopping-cart-outlined" color="white" />
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default Info;