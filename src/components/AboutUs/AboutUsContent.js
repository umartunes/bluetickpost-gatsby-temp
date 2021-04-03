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
            <img src="/images/aboutus/eric.jpg" alt="Teaching by Eric" />
            </div>
          </div>

          <div className="col-lg-6 col-md-12">
            <div className="about-content">
              <div className="content">
                <span className="sub-title">
               
                  <img src={starIcon} alt="banner" />
                  About Us
                </span>
                <h2>TRAIN NEW GENERATION FOR A BETTER FUTURE </h2>
                <h4>
                  Coding or Technology is always feared by parents and students
                  alike
                </h4>
                <p>
                  STEM1 was founded in September 2017 to “Make Coding fun for Kids”. We strongly believe in empowering the younger generation 
                  especially girls, to explore technology - tinkering, making mistakes and exploring are all part of the learning
                </p>
                <p>
                  
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
                  Our mission is to remove the fear of coding for students. .
                </p>
                <p>
                  We empower the students by introducing the fundementals of
                  programming and focusing on Problem solving over scripting.
                  Students are also encouraged to develop their soft skills
                  through presentations and public speaking challenges.{" "}
                </p>
                <h4>Practice</h4>
                <p>
                  We provide opportunities for students to practice what they
                  have learnt by being leaders in training & ultimately becoming
                  our own Instructors.
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
                <p>
                  Teach 500 kids by the end of 2022 so they can do what they
                  love and make the right career choices.
                </p>
                <p>
                  Our vision is to create a environment that helps both the
                  students and Mentors to reach their full potential by
                  providing the tools & technologies that are needed for them to
                  be successful and #FutureReady.
                </p>

                {/* <ul className="features-list">
                                    <li><i className="flaticon-tick"></i> Creating. Results.</li>
                                    <li><i className="flaticon-tick"></i> Expect more</li>
                                    <li><i className="flaticon-tick"></i> Good thinking</li>
                                    <li><i className="flaticon-tick"></i> In real we trust</li>
                                </ul> */}
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-sm-6 offset-lg-0 offset-md-3 offset-sm-3">
              <div className="about-text">
                <h3>Who we are</h3>
                <p>
                  We are a team of engineers & educators with a passion to make
                  learning both purposeful and exciting for children.
                </p>
                <p>We teach Coding & Robotics to students from Grade 3 - 12.</p>

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
