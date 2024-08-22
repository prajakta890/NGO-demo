import React from 'react'
import './Header.css';

const Header = () => {
  return (
    <div className='header'>
        <h1 className='header-text'>Community <span style={{color: 'yellow', display:'flex'}}>Connecting</span></h1>
       
        <button className='header-button'>Learn More</button>
    </div>
  )
}

export default Header