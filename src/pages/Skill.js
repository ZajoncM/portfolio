import React from "react";
import { MDBProgress } from "mdbreact";
const Skill = () => {
  return (
    <>
      <div className="skill__html">
        <i class="fab fa-html5" />
        <MDBProgress value={90} className="my-2" />
      </div>
      <div className="skill__css-sass">
        <i class="fab fa-sass" />
        <MDBProgress value={90} className="my-2" />
      </div>
      <div className="skill__javascript">
        <i class="fab fa-js-square" />
        <MDBProgress value={70} className="my-2" />
      </div>
      <div className="skill__react">
        <i class="fab fa-react" />
        <MDBProgress value={50} className="my-2" />
      </div>
      <div className="skill__nodeJS">
        <i class="fab fa-node-js" />
        <MDBProgress value={25} className="my-2" />
      </div>
    </>
  );
};

export default Skill;
