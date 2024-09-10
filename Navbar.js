import { Link, useMatch, useResolvedPath } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className='nav'>
      <Link to="/" className="navbar-brand"> 
        <div className="logo-image">
          <img src="./mja_logo.png" className="img-fluid" alt=""/>
        </div>
      </Link>
      <ul className='ul'>
        <CustomLink to="/">Home</CustomLink>
        <div className="verticalLine"></div>
        <CustomLink to="/Contact">Contact</CustomLink>
        <div className="verticalLine"></div>
        <CustomLink to="/About">About</CustomLink>
        <div className="verticalLine"></div>
        <CustomLink to="/Services">Services</CustomLink>
      </ul>
    </nav>
  )

  function CustomLink({ to, children, ...props }) {
    const resolvedPath = useResolvedPath(to)
    const isActive = useMatch({ path: resolvedPath.pathname, end: true })
  
    return (
      <li className={isActive ? "active" : "" }>
        <Link to={to} {...props}>
          {children}
          </Link>
      </li>
    )
  }
};


