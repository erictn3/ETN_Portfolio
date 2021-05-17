import React from "react";
import { FaLinkedin, FaGithub} from "react-icons/fa";
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
