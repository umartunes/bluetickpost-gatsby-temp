import React from 'react'
import service3 from '../../assets/images/services/service3.png'
import service6 from '../../assets/images/services/service6.png'
import service7 from '../../assets/images/services/service7.png'

import { Link } from 'gatsby'

import { Element } from 'react-scroll'

const ServicesDescription = () => {
    return (
        <section className="overview-area ptb-100">
            <div className="container">

                {/* Left Image Style */}
                <Element name="web-development" className="element">&nbsp;</Element>
                <div className="overview-box">
                    <div className="overview-image">
                        <div className="image">
                            <img src={service3} alt="features" />
                        </div>
                    </div>

                    <div className="overview-content">
                        <div className="content right-content">
                            <span className="sub-title">Web Design & Development</span>
                            <h2>Professional, Clean, and Modern Websites</h2>
                            <p>At Techna; we design and develop clean and attractive websites and e-commerce (online) stores which are SEO optimized, has fast-loading pages, and is responsive across all devices (Mobile, Desktop, Tablet)</p>

                            <ul className="features-list mb-3">
                                <li><span><i className='bx bx-check'></i> E-commerce Websites / Online Stores</span></li>
                                <li><span><i className='bx bx-check'></i> Blogging / News / Magazine Websites</span></li>
                                <li><span><i className='bx bx-check'></i> Business / Company / Agency Websites</span></li>
                                <li><span><i className='bx bx-check'></i> Personal (Bio) / Portfolio / Coaching Websites</span></li>
                                <li><span><i className='bx bx-check'></i> School / Education / LMS Websites</span></li>
                                <li><span><i className='bx bx-check'></i> Health / Doctors / Medical Websites </span></li>
                                <li><span><i className='bx bx-check'></i> Restaurant / Hotel Booking Websites</span></li>
                                <li><span><i className='bx bx-check'></i> Consultation / Accountant / Lawyer Firm Websites</span></li>
                                <li><span><i className='bx bx-check'></i> Real Estate / Constructors (Architect) Websites</span></li>
                                <li><span><i className='bx bx-check'></i> NGO / Charity / Donation Websites</span></li>
                            </ul>

                            <Link to="/contact" className="default-btn">
                                <i className="flaticon-right"></i>
                                Order Now!
                                <span></span>
                            </Link>

                            {/* <Link to="/pricing/" className=""> */}
                            <Link to="/services/website-development#pricing-section" className="default-btn ml-1 ml-sm-3" >
                                <i className="flaticon-price-tag"></i>
                                Pricing
                                <span></span>
                            </Link>
                        </div>
                    </div>
                </div>
                {/* End Left Image Style */}

                {/* Right Image Style */}
                <Element name="graphics-designing" className="element">&nbsp;</Element>
                <div className="overview-box">
                    <div className="overview-content">
                        <div className="content">
                            <span className="sub-title">Graphics Designing</span>
                            <h2>Creative, Stunning and Eye-Catching Graphics</h2>
                            <p>We design creative, stunning and eye-catching graphics that makes your business more professional.</p>

                            <ul className="features-list">
                                <li><span><i className='bx bx-check'></i> Logo Designing</span></li>
                                <li><span><i className='bx bx-check'></i> Brand Identity Kit</span></li>
                                <li><span><i className='bx bx-check'></i> Business Cards</span></li>
                                <li><span><i className='bx bx-check'></i> Corporate Stationery</span></li>
                                <li><span><i className='bx bx-check'></i> Certificate Design</span></li>
                                <li><span><i className='bx bx-check'></i> Letterhead Design</span></li>
                                <li><span><i className='bx bx-check'></i> Brochures & Flyers</span></li>
                                <li><span><i className='bx bx-check'></i> Posters & Banners</span></li>
                                <li><span><i className='bx bx-check'></i> T-shirts Design</span></li>
                                <li><span><i className='bx bx-check'></i> Social Media Design</span></li>
                            </ul>
                        </div>
                    </div>

                    <div className="overview-image">
                        <div className="image">
                            <img src={service7} alt="features" />
                        </div>
                    </div>
                </div>
                {/* End Right Image Style */}

                {/* Left Image Style */}
                <Element name="digital-marketing" className="element">&nbsp;</Element>
                <div className="overview-box">
                    <div className="overview-image">
                        <div className="image">
                            <img src={service6} alt="features" />
                        </div>
                    </div>

                    <div className="overview-content">
                        <div className="content right-content">
                            <span className="sub-title">Digital Marketing</span>
                            <h2>We are the next generation of the advertising world</h2>
                            <p>We can help your product reach the most accurate lead and the target audience in attempt for it to be traded on the spot.</p>

                            <ul className="features-list">
                                <li><span><i className='bx bx-check'></i> SEO (Search Engine Optimization)</span></li>
                                <li><span><i className='bx bx-check'></i> SMM (Social Media Marketing)</span></li>
                                <li><span><i className='bx bx-check'></i> Brand Awareness</span></li>
                                <li><span><i className='bx bx-check'></i> Lead Generation</span></li>
                                <li><span><i className='bx bx-check'></i> Google Analytics</span></li>
                                <li><span><i className='bx bx-check'></i> Facebook Ads & Insights</span></li>
                                <li><span><i className='bx bx-check'></i> PPC (Pay-per-click) Campaigns</span></li>
                                <li><span><i className='bx bx-check'></i> Keyword Research & Optimization</span></li>
                                <li><span><i className='bx bx-check'></i> Email Marketing</span></li>
                                <li><span><i className='bx bx-check'></i> Affiliate Marketing</span></li>
                            </ul>
                        </div>
                    </div>
                </div>
                {/* End Left Image Style */}

            </div>
        </section>
    )
}

export default ServicesDescription