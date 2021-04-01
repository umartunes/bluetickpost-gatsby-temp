import React from "react";

import StarIcon from "../../../assets/images/star-icon.png";
import HowItsWork from "../../../assets/images/how-its-work.png";
import { Link } from "gatsby";

const HowItWork = () => {
  return (
    <section className="how-its-work-area ptb-100">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6 col-md-12">
            <div className="how-its-work-content">
              <span className="sub-title">
                <img src={StarIcon} alt="image_alt" />
                Event day
              </span>
              <h2>Jr.Hacks</h2>
              <p>
                No previous experience required for students, its a fun and
                simple
              </p>
              <div className="inner-box">
                <div className="single-item">
                  <div className="count-box">1</div>
                  <h3>
                    <Link to="/programs-junior">Register (Grade 2-8)</Link>
                  </h3>
                  <p>
                    Students are placed into teams with other students in the
                    same grade & school district.
                  </p>
                </div>
                <div className="single-item">
                  <div className="count-box">2</div>
                  <h3>
                    <Link to="/programs-senior">Swag bag</Link>
                  </h3>

                  <p>Custom T-shirt & other goodies for every participant.</p>
                </div>
                <div className="single-item">
                  <div className="count-box">3</div>
                  <h3>
                    <Link to="/programs-leadership">Compete</Link>
                  </h3>
                  <p>
                    STEM Challenges, Coding Missions & Quiz.. mostly have fun
                    while doing it.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-6 col-md-12">
            <div className="how-its-work-image">
              <img src={HowItsWork} alt="image_alt" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWork;
