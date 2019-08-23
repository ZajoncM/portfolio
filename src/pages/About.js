import React from "react";
import myPhoto from "../img/my-photo.jpg";
const About = () => {
  return (
    <div>
      <img
        src={myPhoto}
        alt=""
        className="img-fluid z-depth-1 rounded-circle"
      />
    </div>
  );
};

export default About;
