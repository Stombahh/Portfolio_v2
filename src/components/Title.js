import React from "react";
import styled from "styled-components";
import ScrollAnimation from "react-animate-on-scroll";

const Title = props => {
  const Title = styled.h1`
    text-align: center;
    margin-bottom: 0;
    color: black;
    font-family: Passion One;
    font-weight: 400;
  `;

  const Underline = styled.div`
    width: 100px;
    height: 4px;
    background-color: #00c6ac;
    margin: 0 auto 40px auto;
  `;

  return (
    <>
      <ScrollAnimation
        animateIn="slideInLeft"
        duration=".8"
        offset="10"
        animateOnce="true"
      >
        <Title>{props.children}</Title>
        <Underline />
      </ScrollAnimation>
    </>
  );
};

export default Title;
