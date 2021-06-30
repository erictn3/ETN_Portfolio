import React, {useState, useEffect} from 'react';
import { FaBars } from 'react-icons/fa';
import {IconContext} from 'react-icons/lib';
import {animateScroll as scroll} from 'react-scroll'; 
import {
  Nav,
  NavbarContainer,
  NavLogo,
  MobileIcon, 
  NavMenu,
  NavItem,
  NavLinks,
  // NavBtn,
  // NavBtnLink
} from "./NavbarElements";

import './navbar.css';

const Navbar = ({ toggle }) => {
  const [scrollNav, setScrollNav] = useState(false)

  const changeNav = () => {
    if(window.scrollY >= 80) {
      setScrollNav(true)
    } else {
      setScrollNav(false)
    }
  }

  const toggleHome = () => {
    scroll.scrollToTop();
  }

  useEffect(() => {
    window.addEventListener('scroll', changeNav)
  }, [])
  return (
    <>
    <IconContext.Provider value={{ color: '#fff'}}>
      <Nav scrollNav={scrollNav}>
        <NavbarContainer>
          <NavLogo to='/' onClick={toggleHome}>
            ETN
          </NavLogo>
          <MobileIcon onClick={ toggle }>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLinks 
                className="navbarTitle"
                to='about'
                smooth={true}
                duration={500}
                spy={true}
                exact='true'
                offset={-80}
              >About</NavLinks>
            </NavItem>
            {/* <NavItem>
              <NavLinks 
                to='discover'
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={-80}            
              >Discover</NavLinks>
            </NavItem> */}
            <NavItem>
              <NavLinks 
                className="navbarTitle"
                to='portfolio'
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={-80}                
              >Portfolio</NavLinks>
            </NavItem>
            <NavItem className="navbarTitle">
              <NavLinks 
                className="navbarTitle"
                to='contact'
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={-80}              
              >Contact</NavLinks>
            </NavItem>
            <NavItem>
              <a className="navbarResume" href="https://www.dropbox.com/s/b1tr14rtcal7k09/EricTayN_Resume_Plain_062421_.pdf?dl=0">Resume
              </a>
              {/* <NavLinks 
                
                to=''
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={-80}              
              >Resume</NavLinks> */}
            </NavItem>
          </NavMenu>
        </NavbarContainer>
      </Nav>
    </IconContext.Provider>
    </>
  )
}

export default Navbar;
