import React from 'react'
import './possibility.css';
import possibilityImage from '../../assets/possibility.png';

const Possibility = () => {
  return (
    <div className='gpt3__possibility section__padding' id='possibility'>
      <div className='gpt3__possibility-image'>
        <img src= { possibilityImage } alt='possibility'/>
      </div>
      <div className='gpt3__possibility-content'>
        <h4>Request Early Access to get Started</h4>
        <h1 className='gradient__text'>The Possibility are Beyond Your Imagination</h1>
        <p>Predictable CSS: With a structured naming system, 
          you can easily figure out which class applies.structured naming system, 
          you can easily figure out which class applies structured naming system, 
          you can easily figure out which class applies</p>
        <h4>Request Early Access to get Started</h4>
      </div>
    </div>
  )
}

export default Possibility