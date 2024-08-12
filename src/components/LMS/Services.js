import React from "react";

import service6 from "../../assets/images/services/service6.png";

const Services = () => {
  return (
    <section className="overview-area ptb-100">
      <div className="container">
        {/* Left Image Style */}
        <div className="overview-box">
          <div className="overview-image">
            <div className="image">
              <img src="/images/lms/certificate1.jpg" alt="certificate" />

              {/* <img src={service6} alt="features" /> */}
            </div>
          </div>

          <div className="overview-content">
            <div className="content right-content">
              <span className="sub-title">Gamified learning</span>
              <h2>Motivate through Gamification</h2>
              <p>
                Our LMS helps make the learning more of a game that students are
                excited about while learning the most important concepts.
              </p>

              <ul className="features-list">
                <li>
                  <span>
                    <i className="bx bx-check"></i> Weekly Tasks
                  </span>
                </li>
                <li>
                  <span>
                    <i className="bx bx-check"></i> Presentations
                  </span>
                </li>
                <li>
                  <span>
                    <i className="bx bx-check"></i> Journal entries{" "}
                  </span>
                </li>
                <li>
                  <span>
                    <i className="bx bx-check"></i> Reviews
                  </span>
                </li>
                <li>
                  <span>
                    <i className="bx bx-check"></i> Tasks
                  </span>
                </li>
                <li>
                  <span>
                    <i className="bx bx-check"></i> Quiz
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
