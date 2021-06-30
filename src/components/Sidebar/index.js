import React from "react";
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarWrapper,
  SidebarMenu,
  SidebarLink,
  SideBtnWrap,
  SidebarRoute,
} from "./SidebarElements";

import "./test.css"

const Sidebar = ({ isOpen, toggle }) => {
  return (
    <SidebarContainer className="sideBarContainer" isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper className="sideBarWrapper">
        <SidebarMenu className="sideBarMenu">
          <SidebarLink to="about" onClick={toggle}>About</SidebarLink>
          <SidebarLink to="discover" onClick={toggle}>Discover</SidebarLink>
          <SidebarLink to="portfolio" onClick={toggle}>Portfolio</SidebarLink>
          <SidebarLink to="contact" onClick={toggle}>Contact</SidebarLink>
          <a className="sideBarLink" href="https://www.dropbox.com/s/b1tr14rtcal7k09/EricTayN_Resume_Plain_062421_.pdf?dl=0" >Resume</a>
        </SidebarMenu>
      </SidebarWrapper>
    </SidebarContainer>
  );
};

export default Sidebar;
