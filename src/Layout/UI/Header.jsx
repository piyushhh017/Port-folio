import React from 'react'
import { HashLink as Link } from 'react-router-hash-link'
import '../../css/header.css'

const Header = () => {
  return (
    <div className='headerDiv'>
      <span></span>
        <div className="options">
            <li><Link to='#about' className='navLink'>About</Link></li>
            <li><Link to='#services' className='navLink'>Services</Link></li>
            <li><Link to='#works' className='navLink'>Works</Link></li>
            <li><Link to='#contact' className='navLink'>Contact</Link></li>
        </div>
  </div>
  )
}

export default Header