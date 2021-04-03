import React from "react";
import service4 from "../../../assets/images/services/service4.png";
import service5 from "../../../assets/images/services/service5.png";
import service6 from "../../../assets/images/services/service6.png";

import Lottie from "lottie-react-web";

import techtransfer from "../../../../static/lottie/TechTransfer.json";

const Services = () => {
  return (
    <section className="overview-area ptb-100">
      <div className="container">
        {/* <div className="row">
          <div className="col">
            <Lottie
              options={{
                animationData: techtransfer,
              }}
            />
          </div>
        </div> */}
        {/* Left Image Style */}
        <div className="overview-box">
          <div className="overview-image">
            <div className="image">
              <img src={service4} alt="features" />
            </div>
          </div>

          <div className="overview-content">
            <div className="content right-content">
              <span className="sub-title">#FutureReady</span>
              <h2>#FutureReady students</h2>
              <p>
                We focus on problem solving and promote creativity by
                challenging student with different tasks every week. All our
                lessons are tied to "Computational Thinking" which is the
                foundation for success.
              </p>

              <ul className="features-list">
                <li>
                  <span>
                    <i className="bx bx-check"></i> Competitions
                  </span>
                </li>
                <li>
                  <span>
                    <i className="bx bx-check"></i> Teamwork
                  </span>
                </li>
                <li>
                  <span>
                    <i className="bx bx-check"></i> Presentations
                  </span>
                </li>
                <li>
                  <span>
                    <i className="bx bx-check"></i> Mentors
                  </span>
                </li>
                <li>
                  <span>
                    <i className="bx bx-check"></i> Dedicated Support
                  </span>
                </li>
                <li>
                  <span>
                    <i className="bx bx-check"></i> Positive learning
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/* End Left Image Style */}

        {/* Right Image Style */}
        <div className="overview-box">
          <div className="overview-content">
            <div className="content">
              <span className="sub-title">Group Learning</span>
              <h2>Everyone has something to offer</h2>
              <p>
                We believe every one has something to offer and our Instructors
                are on a constant learning path. Forming groups and solving
                challenges is just a regular part of our way of doing things.
              </p>

              <div className="features-text">
                <h4>
                  <i className="flaticon-tick"></i> Core Development
                </h4>
                <p>No superstars, just curious learners.</p>
              </div>

              <div className="features-text">
                <h4>
                  <i className="flaticon-tick"></i> Define Your Choices
                </h4>
                <p>Our community support is what we do.</p>
              </div>
            </div>
          </div>

          <div className="overview-image">
            <div className="image">
              <img src={service5} alt="features" />
            </div>
          </div>
        </div>
        {/* End Right Image Style */}

        {/* Left Image Style */}
        <div className="overview-box">
          <div className="overview-image">
            <div className="image">
              <img src={service6} alt="features" />
            </div>
          </div>

          <div className="overview-content">
            <div className="content right-content">
              <span className="sub-title">#LearnLocal</span>
              <h2>Everything is better when its Local!</h2>
              <p>
                Our Instructors provide the best learning experience to the
                students as they have grown up around the same area and have a
                lot to offer whether it is about the schools and the paths they
                are taking or discussing a technology problem.
              </p>

              <ul className="features-list">
                <li>
                  <span>
                    <i className="bx bx-check"></i> Leadership opportunities
                  </span>
                </li>
                <li>
                  <span>
                    <i className="bx bx-check"></i> Community support
                  </span>
                </li>
                <li>
                  <span>
                    <i className="bx bx-check"></i> Quarterly Meetups
                  </span>
                </li>
                <li>
                  <span>
                    <i className="bx bx-check"></i> Team challenges
                  </span>
                </li>
                <li>
                  <span>
                    <i className="bx bx-check"></i> Project Showcase
                  </span>
                </li>
                <li>
                  <span>
                    <i className="bx bx-check"></i> Fun
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/* End Left Image Style */}
      </div>
    </section>
  );
};

export default Services;
