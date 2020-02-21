import React from "react";
import styled from "styled-components";
import SocialMediaButtons from "./SocialMediaButtons";
import Scroll from "./Scroll";
import { MdKeyboardArrowUp } from "react-icons/md";

const Footer = () => {
  const FooterWrapper = styled.div`
    height: 240px;
    width: 100%;
    background: radial-gradient(ellipse at top, #1b2735 0%, #090a0f 100%);
  `;

  const Copyright = styled.div`
    color: rgb(25, 74, 94);
    text-align: center;
  `;

  const ArrowContainer = styled.div`
    padding: 20px 0 0;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    margin: 0 0 -30px 0;
    animation: bounce 2s infinite;
  `;

  return (
    <FooterWrapper>
      <Scroll type="id" element="home">
        <ArrowContainer>
          <a href="#home">
            <MdKeyboardArrowUp style={{ height: "70px", width: "70px" }} />
          </a>
        </ArrowContainer>
      </Scroll>
      <SocialMediaButtons />
      <Copyright>Tommi Ilvonen © 2020</Copyright>
      <Copyright>Built with Gatsby.js and Contentful</Copyright>
    </FooterWrapper>
  );
};

export default Footer;
