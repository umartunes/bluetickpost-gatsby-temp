import React from 'react'
// import { Link } from 'gatsby'
import aboutImage from '../../assets/images/about/about-img5.png'
import starIcon from '../../assets/images/star-icon.png'
import shape1 from '../../assets/images/shape/circle-shape1.png'

const AboutUsContent = () => {
    return (
        <section className="about-area ptb-100">
            <div className="container-fluid">
                <div className="row align-items-center">
                    <div className="col-lg-6 col-md-12">
                        <div className="about-image">
                            <img src={aboutImage} alt="banner" />
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
                                <h4>Coding or Technology is always feared by parents and students alike</h4>
                                <p>STEM1 was founded in September 2017 with just one simple motive. And that was “Make Coding fun for Kids to learn”. We are determined to bridge the gap between the demand and supply for coding experts. We have started a chain where we teach kids and employ them to spread their knowledge.</p>
                                <p>STEM1 founder, Chandra Andhe, wanted to promote that coding is not confined to males only. Therefore, most of the workforce at STEM1 are women. Besides, his inspiration was his daughter who did not know how to code. Therefore, he came forward to change that and create role models for young learners.</p>
                                <p>We also organize hackathons and are proud to see the huge number of people participating in our programs. 150 students participated in our first hackathon which was organized in 2018.</p>
                                <p>Choose us to help your children to learn code besides their academic studies.</p>
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
                                <p>Make coding for kids easy to learn and practice for students of a diverse age group.</p>
                                <p>We are a dedicated group of women aiming to make children ready for this revolutionizing world. Our mission is to help your child fall in love with coding and practice it as a passion.</p>

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
                                <p>Teach 300 kids by the end of 2022 so they can do what they love and make the right career choices.</p>
                                <p>Our vision is to educate children about the importance of coding that is important in every field of life. Our virtual coding classes are sure to make your child future-ready.</p>
                                
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
                                <p>We are a team of engineers & educators with a passion to make learning both purposeful and exciting for children.</p>
                                <p>We teach Coding & Robotics to students from Grade 1 - 12.</p>

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
    )
}

export default AboutUsContent;