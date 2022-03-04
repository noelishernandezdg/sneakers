import React from 'react';
import imgProduct1Grande from '../img/imgProduct1Grande.jpg';
import imgProduct1Peque from '../img/imgProduct1Peque.jpg';
import imgProduct2Peque from '../img/imgProduct2Peque.jpg';
import imgProduct3Peque from '../img/imgProduct3Peque.jpg';
import imgProduct4Peque from '../img/imgProduct4Peque.jpg';

const Sample = () => {
  return (
    <div className='contentSample'>
      <img className='imgSample1' src={imgProduct1Grande} alt="" />
      <div className='contentImg'>
        <img className='imgSample2' src={imgProduct1Peque} alt="" />
        <img className='imgSample2' src={imgProduct2Peque} alt="" />
        <img className='imgSample2' src={imgProduct3Peque} alt="" />
        <img className='imgSample2' src={imgProduct4Peque} alt="" />
      </div>
    </div>
  );
};

export default Sample;