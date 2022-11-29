import { useState } from 'react'
import { Link } from 'react-router-dom'
import NavLinks from './NavLinks'

const Nav = ({navLinksActivated, navLinksToggle}) => {
  return (
    <>
    <div className='navbar'>
      <Link className="site-name" to='/'><div>Roberto J. Rodriguez</div></Link>
      <div className='nav-hamburger' onClick={navLinksToggle}>{navLinksActivated ? <div>✕</div> : <div>☰</div>}</div>
    </div>
    <div className='nav-links'>
      {navLinksActivated ? <NavLinks navLinksToggle={navLinksToggle} /> : null}
    </div>
    </>
  )
}

export default Nav