import React from "react";
import myPhoto from "../img/my-photo.jpg";
const About = () => {
  return (
    <>
      <div className="about__home">
        <i class="fas fa-home" />
        <span className="about__home-text">Home</span>
      </div>
      <div className="about__school">
        <span className="about__school-text">School</span>
        <i class="fas fa-school" />
      </div>
      <img
        src={myPhoto}
        alt=""
        className="img-fluid z-depth-1 rounded-circle about__image "
      />
      <h1 className="about__title">Who I am?</h1>

      <div className="about__code">
        <i class="fas fa-code " />
        <span className="about__code-text">Coding</span>
      </div>
      <div className="about__guitar">
        <span className="about__guitar-text">Guitar</span>
        <i class="fas fa-guitar " />
      </div>
    </>
  );
};

export default About;
