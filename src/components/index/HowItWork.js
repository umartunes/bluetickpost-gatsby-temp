import React from "react";

import StarIcon from "../../assets/images/star-icon.png";
import HowItsWork from "../../assets/images/how-its-work.png";
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
                Our Program
              </span>
              <h2>STEM1 Learning process</h2>
              <p>
                Learn to code by completing challenges, building games, apps,
                and more. Continuously develop interpersonal (active listening,
                team work, leadership, etc.) and presentation skills in each of
                our courses.
              </p>
              <div className="inner-box">
                <div className="single-item">
                  <div className="count-box">1</div>
                  <h3>
                    <Link to="/programs-junior">Junior (Grade 3+)</Link>
                  </h3>
                  <p>
                    Understand the basic fundamentals of coding through
                    introductory Game Design, Scratch, Animation, TinkerCAD,
                    HTML, Python courses. Complete all 10 levels and progress to
                    Level 7 in our Senior Coding Program.
                  </p>
                </div>
                <div className="single-item">
                  <div className="count-box">2</div>
                  <h3>
                    <Link to="/programs-senior">Senior (Grade 6+)</Link>
                  </h3>

                  <p>
                    Advance your programming knowledge in our intermediate
                    courses on Hacking, HTML, Python, AI/ML, and more. Proceed
                    to our Leadership program after finishing all 10 levels.{" "}
                  </p>
                </div>
                <div className="single-item">
                  <div className="count-box">3</div>
                  <h3>
                    <Link to="/programs-leadership">Leaders</Link>
                  </h3>
                  <p>
                    Apply your gained experience and skills into advanced
                    teamwork and individual coding projects. You can choose to
                    start your internship with us by shadowing our current
                    instructors and interviewing to become one yourself!
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-6 col-md-12">
            <div className="how-its-work-image">
              {/* <img src={HowItsWork} alt="image_alt" /> */}
              <img src="/images/aboutus/shreya.jpg" alt="Teaching by Eric" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWork;
