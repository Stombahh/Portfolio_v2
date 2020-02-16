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
    background-color: #288477;
    margin: 0 auto 20px auto;
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
      </ScrollAnimation>
      <ScrollAnimation
        animateIn="slideInLeft"
        duration="1"
        offset="10"
        animateOnce="true"
      >
        <Underline />
      </ScrollAnimation>
    </>
  );
};

export default Title;
