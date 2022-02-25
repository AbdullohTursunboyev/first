import {Link } from 'react-router-dom'
import React, { useState } from 'react'
import Home from '../Home/Home'

function Navbar() {

  const [collapsed, setCollapsed] = useState(true)

  const toggleNavbar = () => setCollapsed(!collapsed)

  return (
    <div>
        <section className='navbar'>
        <div className="NavbarToggler" onClick={toggleNavbar}>
        <div className="Collapse" isOpen={! collapsed} >
          <div className="nav-navbar">
           <Link to='/'>
            <Home/>
           </Link>
          </div>
        </div>
        </div>
        </section>
            
    </div>
  )
}

export default Navbar