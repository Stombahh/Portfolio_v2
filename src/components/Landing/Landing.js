import React from "react";
import Typed from "react-typed";
import styled from "styled-components";
import Scroll from "../Scroll";
import { MdKeyboardArrowDown } from "react-icons/md";
import SocialMediaButtons from "../SocialMediaButtons";
import "./Landing.css";

class Landing extends React.Component {
  render() {
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
      <div id="home" className="intro route bg-image background">
        <div id="stars" />
        <div id="stars2" />
        <div id="stars3" />
        <div className="intro-content display-table">
          <div className="table-cell">
            <div className="container">
              <h1 className="intro-title mb-4">
                Hello, I'm <span className="highlight">Tommi Ilvonen</span>
              </h1>
              <div className="text-slider">
                <Typed
                  strings={["Software Developer", "Scrum Master", "BBA in IT", "Gamer"]}
                  typeSpeed={80}
                  backDelay={1100}
                  backSpeed={30}
                  loop
                />
              </div>
            </div>
            <SocialMediaButtons />
            <Scroll type="id" element="about">
              <ArrowContainer>
                <a href="#about">
                  <MdKeyboardArrowDown style={{ height: "70px", width: "70px" }} />
                </a>
              </ArrowContainer>
            </Scroll>
          </div>
        </div>
      </div>
    );
  }
}

export default Landing;
