import React from "react";
import {
  MDBCarousel,
  MDBCarouselInner,
  MDBCarouselCaption,
  MDBCarouselItem,
  MDBView,
  MDBBtn,
  MDBMask,
  MDBContainer
} from "mdbreact";
const Project = () => {
  return (
    <MDBContainer fluid>
      <MDBCarousel
        activeItem={1}
        length={2}
        showControls={true}
        showIndicators={true}
        className="z-depth-1"
      >
        <MDBCarouselInner>
          <MDBCarouselItem itemId="1">
            <MDBView>
              <div className="project__github">
                <i class="fab fa-github" />
                <span className="project__github-text">Portfolio project</span>
              </div>
              <MDBMask overlay="black-light" />
            </MDBView>
            <MDBCarouselCaption>
              <MDBBtn
                outline
                href="https://github.com/ZajoncM/portfolio"
                target="_blank"
                color="white"
              >
                Check it
              </MDBBtn>
            </MDBCarouselCaption>
          </MDBCarouselItem>
          <MDBCarouselItem itemId="2">
            <MDBView>
              <div className="project__coming-soon">
                <span className="project__coming-soon-text">
                  Coming soon...
                </span>
              </div>
              <MDBMask overlay="black-strong" />
            </MDBView>
          </MDBCarouselItem>
        </MDBCarouselInner>
      </MDBCarousel>
    </MDBContainer>
  );
};

export default Project;
