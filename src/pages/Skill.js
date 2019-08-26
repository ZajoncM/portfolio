import React from "react";
import { MDBProgress } from "mdbreact";
const Skill = () => {
  return (
    <>
      <div className="skill__html">
        <i className="fab fa-html5" />
        <MDBProgress value={90} className="my-2" />
      </div>
      <div className="skill__css-sass">
        <i className="fab fa-sass" />
        <MDBProgress value={90} className="my-2" color="secondary" />
      </div>
      <div className="skill__javascript">
        <i className="fab fa-js-square" />
        <MDBProgress value={70} className="my-2" color="warning" />
      </div>
      <div className="skill__react">
        <i className="fab fa-react" />
        <MDBProgress value={50} className="my-2" color="info" />
      </div>
      <div className="skill__nodeJS">
        <i className="fab fa-node-js" />
        <MDBProgress value={25} className="my-2" color="success" />
      </div>
    </>
  );
};

export default Skill;
