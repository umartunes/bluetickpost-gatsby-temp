import React from "react";
// import { Link } from 'gatsby'
import aboutImage from "../../assets/images/banner-img3.png";
import starIcon from "../../assets/images/star-icon.png";
import shape1 from "../../assets/images/shape/circle-shape1.png";

const AboutUsContent = () => {
  return (
    <section className="about-area ptb-100">
      <div className="container-fluid">
        <div className="row align-items-center">
          <div className="col-lg-6 col-md-12">
            <div className="about-image">
              <img src={aboutImage} alt="Teaching at BlueTickPost" />
            </div>
          </div>

          <div className="col-lg-6 col-md-12">
            <div className="about-content">
              <div className="content">
                <span className="sub-title">

                  <img src={starIcon} alt="banner" />
                  About Us
                </span>
                <h3>Generate Professional-Looking Social Media Posts with BlueTickPost</h3>
                <p>BlueTickPost is designed to elevate your social media presence with ease. This platform transforms your input into stunning, professionally designed posts that give you a verified look on social media. With BlueTickPost, simply provide your name, username, content, profile photo, and hashtags, and watch as your post is crafted into a visually impressive format.</p>
                <p>Designed for both individuals and businesses, BlueTickPost ensures that creating eye-catching content is straightforward and quick. Enjoy a seamless process that enhances your online presence while you focus on engaging with your audience.</p>

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

                <h3>Who We Are</h3>
                <p>BlueTickPost operates with the mission of enhancing social media profiles through high-quality, visually appealing posts. This platform is built to provide users with an effortless way to generate professional content that stands out. By prioritizing user experience and design excellence, BlueTickPost helps users make a significant impact on their social media platforms.</p>

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


                <h3>What We Do</h3>
                <p>BlueTickPost specializes in converting user inputs into beautifully crafted social media posts. This platform takes essential details such as your name, username, content, profile photo, and hashtags, and creates polished posts that capture attention. Whether for personal branding or business promotion, BlueTickPost offers an intuitive solution for generating impressive content.</p>

              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-sm-6 offset-lg-0 offset-md-3 offset-sm-3">
              <div className="about-text">
                <h3>Our Vision</h3>
                <p>BlueTickPost envisions transforming how users present themselves on social media by making high-quality post generation accessible to everyone. The goal is to provide a platform where creating professional, engaging content is simple and efficient. Through continuous innovation and user-focused design, BlueTickPost aims to be the leading tool for social media post creation, empowering users to make a lasting impression online.</p>

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
