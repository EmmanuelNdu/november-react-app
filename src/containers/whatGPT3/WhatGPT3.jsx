import React from 'react'
import './whatGPT3.css';
import { Feature } from '../../components';

const WhatGPT3 = () => {
  return (
    <div className='gpt3__whatgpt3 section__margin' id='wgpt3'>
      <div className='gpt3__whatgpt3-feature'>
        <Feature title = "What is GPT-3" text = "The mountain trail was steep, yet the vibrant leaves painted in autumn,yet the vibrant leaves painted in autumn." />
      </div>
      <div className='gpt3__whatgpt3-heading'>
        <h1 className='gradient__text'>The Possibilities are beyond your imagnation</h1>
        <p>Explore The Library</p>
      </div>
      <div className='gpt3__whatgpt3-container'>
        <Feature title = "Chatbots" text = "The mountain trail was steep, yet the vibrant leaves painted in autumn,yet the vibrant leaves painted in autumn." />
        <Feature title = "Knowledgebase" text = "The mountain trail was steep, yet the vibrant leaves painted in autumn,yet the vibrant leaves painted in autumn." />
        <Feature title = "Education" text = "The mountain trail was steep, yet the vibrant leaves painted in autumn,yet the vibrant leaves painted in autumn." />
      </div>
    </div>
  )
}

export default WhatGPT3
