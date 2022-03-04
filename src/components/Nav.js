import React from 'react';
import iconMenu from '../img/iconMenu.svg';

const Nav = () => {
  return (
    <div className='contentNav'>
      <div className='nav'>
        <span className='contentIconMenu'>
          <img className='iconMenu' src={iconMenu} alt="" />
        </span>
        <label className='logoSneakers'>sneakers</label>
        <ul className='menuItems'>
          <li className='itemNav'>Collections</li>
          <li className='itemNav'>Men</li>
          <li className='itemNav'>Women</li>
          <li className='itemNav'>About</li>
          <li className='itemNav'>Contact</li>
        </ul>
        </div>
    </div>
  );
};

export default Nav;