import React from "react";
import myPhoto from "../img/my-photo.jpg";
const About = () => {
  return (
    <>
      <div className="about__home">
        <i className="fas fa-home" />
        <span className="about__home-text">
          I come from Poland and I'm 20 years old.. I am interested in web
          development.
        </span>
      </div>
      <div className="about__school">
        <span className="about__school-text">
          I have graduated from IT technical college and i am about to start IT
          University in Łódź.
        </span>
        <i className="fas fa-school" />
      </div>
      <img
        src={myPhoto}
        alt=""
        className="img-fluid z-depth-1 rounded-circle about__image "
      />
      <h1 className="about__title">Who am I?</h1>

      <div className="about__code">
        <i className="fas fa-code " />
        <span className="about__code-text">
          Web development as my passion started when i was 16. I usually design
          web apps in React.js.
        </span>
      </div>
      <div className="about__guitar">
        <span className="about__guitar-text">
          I like to spend my free time playing guitar and listening to music.
        </span>
        <i className="fas fa-guitar " />
      </div>
    </>
  );
};

export default About;
