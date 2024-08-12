import React from "react";

import StarIcon from "../../assets/images/star-icon.png";

const Solutions = () => {
  return (
    <section className="solutions-area pt-100 pb-70">
      <div className="container">
        <div className="section-title" style={{ maxWidth: 800 }}>
          <span className="sub-title">
            <img src={StarIcon} alt="StarIcon" />
            Our core values
          </span>
          <h2>BlueTickPost Difference! </h2>
          {/* <p style={{ maxWidth: 800 }}>All our programs are designed to encourage creativity, group learning, problem solving & mentoring. Learn to code by completing challenges, building games, apps, and more. Continuously develop interpersonal and presentation skills in each of our courses.</p> */}
        </div>

        <div className="row">
          <div className="col-lg-4 col-md-6 col-sm-6">
            <div className="single-solutions-box">
              <div className="icon">
                <i className="flaticon-rocket"></i>
              </div>
              <h3>Learn Anywhere</h3>
              <p>
                {/* Convinience of Virtual class but with instructors are local,
                which means they can offer a better learning experience for the
                students.{" "} */}
                BlueTickPost has gone <strong>virtual!</strong>. This allows students from all areas to learn from industry experts who are passionate about teaching; while working at the comfort of their home!
              </p>

              {/* <Link to="/service-details-two" className="view-details-btn">
                                View Details
                            </Link> */}
            </div>
          </div>

          <div className="col-lg-4 col-md-6 col-sm-6">
            <div className="single-solutions-box">
              <div className="icon">
                <i className="flaticon-laptop"></i>
              </div>

              <h3>Interactive</h3>
              <p>
                Group Learning provides a better learning experience and
                Leadership opportunities for students. We believe there is
                always something to learn from each other.
              </p>

              {/* <Link to="/service-details-two" className="view-details-btn">
                                View Details
                            </Link> */}
            </div>
          </div>

          <div className="col-lg-4 col-md-6 col-sm-6 offset-lg-0 offset-sm-3 offset-md-3">
            <div className="single-solutions-box">
              <div className="icon">
                <i className="flaticon-money"></i>
              </div>
              <h3>#FutureReady</h3>
              <p>
                {" "}
                Our students are our future Instructors!. We provide plenty of
                opportunities for students to lead and present their ideas and
                projects.{" "}
              </p>

              {/* <Link to="/service-details-two" className="view-details-btn">
                                View Details
                            </Link> */}
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col">
            <blockquote>
              <h2>Did you know?</h2>
              <p>
                There are over 700 coding languages!. In 10 years, there will
                have way more, it is important to learn how to be comfortable
                with logic and problem solving than trying to master few
                programming languages!
              </p>
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Solutions;
