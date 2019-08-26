import React from "react";
import myPhoto from "../img/my-photo.jpg";
const About = () => {
  return (
    <>
      <div className="about__home">
        <i className="fas fa-home" />
        <span className="about__home-text">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deleniti
          expedita nihil voluptatem sequi eaque,
        </span>
      </div>
      <div className="about__school">
        <span className="about__school-text">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deleniti
          expedita nihil voluptatem sequi eaque,
        </span>
        <i className="fas fa-school" />
      </div>
      <img
        src={myPhoto}
        alt=""
        className="img-fluid z-depth-1 rounded-circle about__image "
      />
      <h1 className="about__title">Who I am?</h1>

      <div className="about__code">
        <i className="fas fa-code " />
        <span className="about__code-text">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deleniti
          expedita nihil voluptatem sequi eaque,
        </span>
      </div>
      <div className="about__guitar">
        <span className="about__guitar-text">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deleniti
          expedita nihil voluptatem sequi eaque,
        </span>
        <i className="fas fa-guitar " />
      </div>
    </>
  );
};

export default About;
