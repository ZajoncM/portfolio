import React from "react";
import { MDBProgress, MDBAnimation } from "mdbreact";
const Skill = () => {
  return (
    <>
      <div className="skill__html">
        <i className="fab fa-html5" />
        <div className="skill__progress">
          <MDBAnimation type="bounceIn" delay="2.5s">
            <span> HTML5</span>
          </MDBAnimation>
          <MDBProgress value={90} className="my-2" />
        </div>
      </div>
      <div className="skill__css-sass">
        <i className="fab fa-sass" />
        <div className="skill__progress">
          <MDBAnimation type="bounceIn" delay="3s">
            <span> CSS &amp; preprocessor sass</span>
          </MDBAnimation>
          <MDBProgress value={85} className="my-2" color="secondary" />
        </div>
      </div>
      <div className="skill__javascript">
        <i className="fab fa-js-square" />
        <div className="skill__progress">
          <MDBAnimation type="bounceIn" delay="3.5s">
            <span> Javascript</span>
          </MDBAnimation>
          <MDBProgress value={70} className="my-2" color="warning" />
        </div>
      </div>
      <div className="skill__react">
        <i className="fab fa-react" />
        <div className="skill__progress">
          <MDBAnimation type="bounceIn" delay="4s">
            <span> React.js</span>
          </MDBAnimation>
          <MDBProgress value={50} className="my-2" color="info" />
        </div>
      </div>
      <div className="skill__nodeJS">
        <i className="fab fa-node-js" />
        <div className="skill__progress">
          <MDBAnimation type="bounceIn" delay="4.5s">
            <span className="bounceIn">Node.js</span>
          </MDBAnimation>

          <MDBProgress value={25} className="my-2" color="success" />
        </div>
      </div>
    </>
  );
};

export default Skill;
