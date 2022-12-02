import { Link } from 'react-router-dom'

const NavLinks = ({navLinksToggle}) => {
  return (
    <>
    <Link className="nav-link" to='/' onClick={navLinksToggle}><div>Home</div></Link>
    <Link className="nav-link" to='/about' onClick={navLinksToggle}><div>About</div></Link>
    <Link className="nav-link" to='/projects' onClick={navLinksToggle}><div>Projects</div></Link>
    <Link className="nav-link" to='/contact' onClick={navLinksToggle}><div>Contact Me</div></Link>
    </>
  )
}

export default NavLinks