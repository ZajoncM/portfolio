import React from "react";
import Header from "./Header";
import About from "./About";
import Skill from "./Skill";
import Project from "./Project";
import Contact from "./Contact";
const Page = () => {
  return (
    <div className="page">
      <header className="header">
        <Header />
      </header>
      <section className="about">
        <About />
      </section>
      <section className="skill">
        <Skill />
      </section>
      <section className="project">
        <Project />
      </section>
      <section className="contact">
        <Contact />
      </section>
    </div>
  );
};

export default Page;
