import React from "react";
import Header from "./Header";
import About from "./About";
import Skill from "./Skill";
import Project from "./Project";
import Contact from "./Contact";
const Page = () => {
  return (
    <div className="page">
      <header className="header" id="home">
        <Header />
      </header>
      <section className="about" id="about">
        <About />
      </section>
      <section className="skill" id="skill">
        <Skill />
      </section>
      <section className="project" id="project">
        <Project />
      </section>
      <section className="contact" id="contact">
        <Contact />
      </section>
    </div>
  );
};

export default Page;
