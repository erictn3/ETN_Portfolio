import React from "react";
import { FaLinkedin, FaGithub, FaDropbox} from "react-icons/fa";
import {
  FooterContainer,
  FooterWrap,
  FooterLinksContainer,
  FooterLinksWrapper,
  WebsiteRights,
  SocialIcons,
  SocialIconLink,
} from "./FooterElements";

const Footer = () => {
  return (
    <FooterContainer>
      <FooterWrap>
        <FooterLinksContainer>
          <FooterLinksWrapper>
            <SocialIcons>
              <SocialIconLink 
                href="https://www.linkedin.com/in/eric-t-nguyen-1b1bbb173/" 
                target="_blank" 
                aria-label="LinkedIn">
                <FaLinkedin />
              </SocialIconLink>
              <SocialIconLink 
                href="https://github.com/erictn3" 
                target="_blank" 
                aria-label="Github">
                <FaGithub />
              </SocialIconLink>
              <SocialIconLink 
                href="https://www.dropbox.com/s/b1tr14rtcal7k09/EricTayN_Resume_Plain_062421_.pdf?dl=0" 
                target="_blank" 
                aria-label="Dropbox">
                <FaDropbox />
              </SocialIconLink>
            </SocialIcons>

          </FooterLinksWrapper>
        </FooterLinksContainer>
        <WebsiteRights>
        ETN {new Date().getFullYear() }  © All rights reserved.
        </WebsiteRights>
      </FooterWrap>
    </FooterContainer>
  );
};

export default Footer;
