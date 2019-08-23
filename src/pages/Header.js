import React from "react";
import { MDBAnimation, MDBContainer } from "mdbreact";
const Header = () => {
  return (
    <MDBContainer className="header__title">
      {/* <MDBAnimation type="bounce" infinite>
        <h1>Hello</h1>
      </MDBAnimation> */}
      <MDBAnimation type="fadeInLeft">
        <h1 className="header__greeting">Hello,</h1>
      </MDBAnimation>
      <MDBAnimation type="fadeInRight" delay="1s">
        <h2 className="header__name">My name is Miłosz Zajonc</h2>
      </MDBAnimation>

      <MDBAnimation type="fadeIn" delay="2s">
        <h2 className="header__proffesion">I'm Front-End Developer</h2>
      </MDBAnimation>
    </MDBContainer>
  );
};

export default Header;
