import React from 'react'
import Feature from '../../components/feature/Feature'
import './features.css';

const featuresData = [
  {
    title: 'Improving end distrust instantly',
    text: 'Destructuring is a feature introduced in ECMAScript 6 (ES6) that allows you to unpack values from arrays or properties from objects into distinct variables.'
  },
  {
    title: 'Become the tended active',
    text: 'Destructuring is a feature introduced in ECMAScript 6 (ES6) that allows you to unpack values from arrays or properties from objects into distinct variables.'
  },
  {
    title: 'Message or they will',
    text: 'Destructuring is a feature introduced in ECMAScript 6 (ES6) that allows you to unpack values from arrays or properties from objects into distinct variables.'
  },
  {
    title: 'Really Tinubu man president',
    text: 'Destructuring is a feature introduced in ECMAScript 6 (ES6) that allows you to unpack values from arrays or properties from objects into distinct variables.'
  },
  
]

const Features = () => {
  return (
    <div className='gpt3__features section__padding' id='features'>
      <div className='gpt3__features-heading'>
        <h1 className='gradient__text'>The Future is Now and you just Need To Realize it.Step into Future Today & Make it Happen.</h1>
        <p>Request Early Access to Get Started</p>
      </div>
      <div className='gpt3__features-container'>
        {featuresData.map((item, index) => (
          <Feature title = {item.title} text = {item.text} key = {item.title + index}/> 
        ))}
      </div>
    </div>
  )
}

export default Features