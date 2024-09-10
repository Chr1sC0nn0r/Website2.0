import { Link, useMatch, useResolvedPath  } from "react-router-dom";
// import About from "../About";

// import { Container } from 'react-bootstrap';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faInstagram, faTwitter, faTiktok, faYoutube } from '@fortawesome/free-brands-svg-icons';

export default function Footer () {
    return <div>
        <footer className="footer">
            <div className="footer-logo">
                <Link to="/"> 
                    <div className="logo-image">
                        <img src="./mja_logo.png" className="img-fluid" alt=""/>
                    </div>
                </Link>
            </div>
            <div>
                <ul className='footer-links'>
                    <CustomLink to="/" className="About-footer">Home</CustomLink>
                    <div className="verticalLine"></div>
                    <CustomLink to="/Contact">Contact</CustomLink>
                    <div className="verticalLine"></div>
                    <CustomLink to="/About">About</CustomLink>
                    <div className="verticalLine"></div>
                    <CustomLink to="/Services">Services</CustomLink>
                </ul>
            </div>
            <div className="singleCol social-media-icons-white d-flex justify-content-evenly">
                <Link to="https://facebook.com">
                    <FontAwesomeIcon icon={faFacebook} />
                </Link>
                <Link to="https://instagram.com">
                    <FontAwesomeIcon icon={faInstagram} />
                </Link>
                <Link to="https://twitter.com">
                    <FontAwesomeIcon icon={faTwitter} />
                </Link>
                <Link to="https://tiktok.com">
                    <FontAwesomeIcon icon={faTiktok} />
                </Link>
                <Link to="https://youtube.com">
                    <FontAwesomeIcon icon={faYoutube} />
                </Link>
                </div>
            <hr className="separator" />
            <div className="copyright-block">
                <p className="copyright">&copy; {new Date().getFullYear()} MJALLYANZ Enterprise</p>
            </div>
        </footer>
    </div>

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
}