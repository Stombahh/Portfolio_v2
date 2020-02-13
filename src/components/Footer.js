import React from "react";
import styled from "styled-components";
import SocialMediaButtons from "./SocialMediaButtons";

const Footer = () => {
  const FooterWrapper = styled.div`
    height: 150px;
    width: 100%;
    background: radial-gradient(ellipse at top, #1b2735 0%, #090a0f 100%);
  `;

  const Copyright = styled.div`
    color: white;
    text-align: center;
  `;

  return (
    <FooterWrapper>
      <SocialMediaButtons />
      <Copyright>Tommi Ilvonen © 2020</Copyright>
    </FooterWrapper>
  );
};

export default Footer;
