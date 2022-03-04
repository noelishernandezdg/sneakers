import React from 'react';
import imageAvatar from '../img/imageAvatar.png';

const User = () => {
  return (
    <div className='contentUser'>
      <img className='imgUser' src={imageAvatar} alt="" />
    </div>
  );
};

export default User;