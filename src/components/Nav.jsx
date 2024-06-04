import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import astronautHelmet from '../assets/astronaut-helmet.png'
import deadEye from '../assets/dead-eye.png'
import stack from '../assets/stack.png'
import envelope from '../assets/envelope.png'
import "../styles/nav.css"

const Nav = () => {
  const location = useLocation();

  const getNavPositionClass = () => {
    if (location.pathname === '/') {
      return 'nav-about'
    } else if (location.pathname === '/skills') {
      return 'nav-skills'
    } else if (location.pathname === '/projects') {
      return 'nav-projects'
    } else if (location.pathname === '/contact') {
      return 'nav-contact'
    } else {
      return ''
    }
  }

  const getPageTitle = () => {
    if (location.pathname === '/') {
      return 'ABOUT'
    } else if (location.pathname === '/skills') {
      return 'SKILLS'
    } else if (location.pathname === '/projects') {
      return 'PROJECTS'
    } else if (location.pathname === '/contact') {
      return 'CONTACT'
    } else {
      return ''
    }
  }

  const navPositionClass = getNavPositionClass();
  const pageTitle = getPageTitle();

  const isCurrentPage = (navClass) => {
    return navClass === navPositionClass;
  }

  const renderNavLink = (to, imgSrc, altText, navClass) => {
    const isCurrent = isCurrentPage(navClass);
    const linkClass = isCurrent ? 'nav-link current' : 'nav-link';

    return (
      <Link to={to} className={linkClass} key={to}>
        <img src={imgSrc} alt={altText} />
        {isCurrent && <h1 className='page-title'>{pageTitle}</h1>}
      </Link>
    )
  }

  return (
    <nav className={`nav ${navPositionClass}`}>
        {renderNavLink(
          '/', 
          astronautHelmet, 
          'Astronaut Helmet Icon', 
          'nav-about'
        )}

        {renderNavLink(
          '/skills',
          deadEye,
          'Dead Eye Icon',
          'nav-skills'
          )}

        {renderNavLink(
          '/projects',
          stack,
          'Stack Icon',
          'nav-projects'
        )}

        {renderNavLink(
            '/contact',
            envelope,
            'Envelope Icon',
            'nav-contact'
        )}           
    </nav>
  )
}

export default Nav