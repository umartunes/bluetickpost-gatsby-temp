import React from "react";
import { Link } from "gatsby";

import shape9 from "../../../assets/images/shape/vector-shape9.png";
import shape10 from "../../../assets/images/shape/vector-shape10.png";

const StartProject = () => {
  return (
    <div className="project-start-area bg-color ptb-100">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6 col-md-12">
            <div className="project-start-content">
              <h2>Jr.Hackathon 2021</h2>
              <p>
                Please stay tuned for Jr.Hackathon Live link!
              </p>

              {/* <Link to="/swag" className="default-btn">
                <i className="flaticon-web"></i>
                Schedule Pickup
                <span></span>
              </Link> */}
              
            </div>

            {/* <div className="project-start-content">
              
              <Link to="https://lms.JrHacks.com" className="default-btn">
                <i className="flaticon-web"></i>
                Update Pickup location
                <span></span>
              </Link>
			  <p>Update your pickup information!</p>
            </div> */}
          </div>

          <div className="col-lg-6 col-md-12">
            <div className="project-start-image">
              <div className="image">
                <img
                  src="/images/hackathon/jrhackssite.png"
                  alt="Jr. Hackathon"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="vector-shape9">
        <img src={shape9} alt="about" />
      </div>
      <div className="vector-shape10">
        <img src={shape10} alt="about" />
      </div>
    </div>
  );
};

export default StartProject;
