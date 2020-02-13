import React from "react";
import styled from "styled-components";
import { FaLinkedinIn, FaGithub, FaInstagram } from "react-icons/fa";

const SocialMediaButtons = () => {
  const IconWrapper = styled.div`
    padding: 30px 0;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
  `;

  const Icon = styled.div`
    width: 50px;
    padding: 10px;
    border: 2px solid rgb(25, 74, 94);
    border-radius: 5px;
    margin: 0 5px;

    &:hover {
      transform: scale(1.1);
      background-color: rgba(25, 74, 94, 0.2);
    }
  `;

  return (
    <IconWrapper>
      <a href="https://www.linkedin.com/in/tommiilvonen">
        <Icon>
          <FaLinkedinIn />
        </Icon>
      </a>
      <a href="https://github.com/Stombahh">
        <Icon>
          <FaGithub />
        </Icon>
      </a>
      <a href="https://www.instagram.com/stombahh/">
        <Icon>
          <FaInstagram />
        </Icon>
      </a>
    </IconWrapper>
  );
};

export default SocialMediaButtons;
