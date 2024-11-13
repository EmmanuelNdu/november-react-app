import React from 'react'
import './footer.css';
import gpt3Logo from '../../assets/logo.svg'
const Footer = () => {
  return (
    <div className='gpt3__footer section__padding'>
      <div className='gpt3__footer-heading'>
        <h1 className='gradient__text'>
          Do you want to step into the future before others?
        </h1>
      </div>
      <div className='gpt3__footer-btn'>
        <p> Request Early Access</p>
      </div>
      <div className='gpt3__footer-links'>
        <div className='gpt3__footer-links_logo'>
          <img src= { gpt3Logo } alt='logo'  />
          <p>27, pal alto avenue,Canada.</p>
        </div>
        <div className='gpt3__footer-links_div'>
          <h4>Links</h4>
          <p>Overons</p>
          <p>Social Media</p>
          <p>Counter</p>
          <p>Contacts</p>
        </div>
        <div className='gpt3__footer-links_div'>
          <h4>Company</h4>
          <p>Terms & Condition</p>
          <p>Privacy Policy</p>
          <p>Contacts</p>
        </div> <div className='gpt3__footer-links_div'>
          <h4>Get in touch</h4>
          <p>27, pal alto avenue,Canada.</p>
          <p>08124046544</p>
          <p>ndubuaku.emmanuel@gmail.com</p>
        </div>
      </div>
      <div className='gpt3__footer-copyright'>
        <p>2024 GPT-3 . All rights reserved</p>
      </div>
    </div>
  )
}

export default Footer