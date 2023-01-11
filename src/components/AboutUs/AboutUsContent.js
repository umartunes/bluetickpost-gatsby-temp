import React from "react";
// import { Link } from 'gatsby'
import aboutImage from "../../assets/images/about/about-img5.png";
import starIcon from "../../assets/images/star-icon.png";
import shape1 from "../../assets/images/shape/circle-shape1.png";

const AboutUsContent = () => {
  return (
    <section className="about-area ptb-100">
      <div className="container-fluid">
        <div className="row align-items-center">
          <div className="col-lg-6 col-md-12">
            <div className="about-image">
              <img src="/images/aboutus/techna-collage.png" alt="Teaching at Techna" />
            </div>
          </div>

          <div className="col-lg-6 col-md-12">
            <div className="about-content">
              <div className="content">
                <span className="sub-title">

                  <img src={starIcon} alt="banner" />
                  About Us
                </span>
                <h2>TRAIN NEW GENERATION FOR A BETTER FUTURE</h2>
                <h4>
                  Coding or Technology is always feared by parents and students alike
                </h4>
                <p>
                  Techna now is a community based youth led organization; organized to provide opportunities for youth to gain confidence in technology related fields.
                </p>
                <p>
                  The company was founded in January, 2013 under the name of PHPbaba; When we started delivering services on LAMP Stack. After a 2 and half years we started delivering services on State Of The Art Technologies as well; and settled with name Techna.
                  One of the main focuses of the company was to provide cost effective and quality Software Solutions to customers across the world.
                </p>
              
                {/*                                 
                                <ul className="features-list">
                                    <li>
                                        <img src={icon4} alt="banner" />
                                        <h3>10 Years</h3>
                                        <p>On the market</p>
                                    </li>
                                    <li>
                                        <img src={icon5} alt="banner" />
                                        <h3>45+</h3>
                                        <p>Team members</p>
                                    </li>
                                    <li>
                                        <img src={icon6} alt="banner" />
                                        <h3>100%</h3>
                                        <p>Satisfaction rate</p>
                                    </li>
                                    <li>
                                        <img src={icon7} alt="banner" />
                                        <h3>80%</h3>
                                        <p>Senior scientist</p>
                                    </li>
                                </ul>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.</p>
                                 */}
                {/* <Link to="/about-us" className="default-btn">
                                    <i className="flaticon-right"></i>More About Us<span></span>
                                </Link> */}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="circle-shape1">
        <img src={shape1} alt="banner" />
      </div>

      <div className="container">
        <div className="about-inner-area">
          <div className="row">
            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="about-text">
                <h3>Mission</h3>
                <p>
                  As our country is facing extreme unemployment and financial crisis;
                </p>
                <p>
                  Now our main focus and mission is to spread technology and produce skilled application developers in Pakistan.
                </p>

                {/* <ul className="features-list">
                                    <li><i className="flaticon-tick"></i> Activate Listening</li>
                                    <li><i className="flaticon-tick"></i> Brilliant minds</li>
                                    <li><i className="flaticon-tick"></i> Better. Best. Wow!</li>
                                    <li><i className="flaticon-tick"></i> Branding it better!</li>
                                </ul> */}
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="about-text">
                <h3>Vision</h3>
                <p>Train and produce <strong>100,000</strong> skilled application developers in Pakistan by the year 2027.</p>
                <p>If each of these Developers earn Only <strong>$1000 USD</strong> per month</p>
                <p>It will boost I.T export of Pakistan by <strong>$1.2 Billion</strong> Annually ($ 1,200,000,000).</p>

              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-sm-6 offset-lg-0 offset-md-3 offset-sm-3">
              <div className="about-text">
                <h3>Who we are</h3>
                <p>
                  We are a team of engineers & educators with a passion to make
                  learning both purposeful and exciting for students.
                </p>
                <p>We teach Coding & Robotics to students of schools, colleges, and universities.</p>

                {/* <ul className="features-list">
                                    <li><i className="flaticon-tick"></i> Stay real. Always.</li>
                                    <li><i className="flaticon-tick"></i> We have you covered</li>
                                    <li><i className="flaticon-tick"></i> We turn heads</li>
                                    <li><i className="flaticon-tick"></i> Your brand, promoted</li>
                                </ul> */}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="circle-shape1">
        <img src={shape1} alt="banner" />
      </div>
    </section>
  );
};

export default AboutUsContent;
