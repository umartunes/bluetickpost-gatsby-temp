import React from "react";
import Lottie from 'lottie-react-web'

import techtransfer from '../../../static/lottie/TechTransfer.json'

const AboutUs = () => {
  return (
    <section className="overview-area ptb-100">
      <div className="container">
        <div className="overview-box">
          <div className="overview-content">
            <div className="content">
              <span className="sub-title">Clear progression</span>
              <h2>Lessons designed to teach fundamentals of Coding</h2>
              <p>
               We focus on fundamentals of programming which will never be obselete.
              </p>

              <div className="features-text">
                <h4>
                  <i className="flaticon-tick"></i> Core Development
                </h4>
                <p>
                  No fake products and services. The customer is king, their
                  lives and needs are the inspiration.
                </p>
              </div>

              <div className="features-text">
                <h4>
                  <i className="flaticon-tick"></i> Define Your Choices
                </h4>
                <p>
                  No fake products and services. The customer is king, their
                  lives and needs are the inspiration.
                </p>
              </div>
            </div>
          </div>

          <div className="overview-image">
            <Lottie
              options={{
                animationData: techtransfer,
              }}
            />

            {/* <div className="image">
              <img src={aboutImg1} alt="about" />
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
