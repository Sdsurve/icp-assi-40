import React from 'react'
import './Navbar.css'
import {Link} from "react-router-dom"
function Navbar() {
  return (
    <div className='Navbar'>
        <Link className='nav-links' to='/'>Home</Link>
        <Link className='nav-links' to='/About'>About</Link>
        <Link className='nav-links' to='/Contact'>Contact</Link>
        <Link className='nav-links' to='/Services'>Services</Link>
    </div>
  )
}

export default Navbar