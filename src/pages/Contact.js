import React from "react";

const Contact = () => {
  return (
    <>
      <div className="info">
        <h1 className="info__title">Contact</h1>
        <span className="info__name">
          <strong>Name: </strong>Miłosz Zajonc
        </span>
        <span className="info__email">
          <strong>Email: </strong>milosz.zajonc@gmail.com
        </span>
        <span className="info__phone">
          <strong>Phone: </strong>669 719 509
        </span>
      </div>
      <div className="wall"></div>
      <div className="social">
        <a
          href="https://github.com/ZajoncM"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-github-square" />
        </a>
      </div>
    </>
  );
};

export default Contact;
