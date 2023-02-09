import React from 'react'
import service3 from '../../assets/images/services/service3.png'
import service6 from '../../assets/images/services/service6.png'
import service7 from '../../assets/images/services/service7.png'

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
                            <h2>Amazing, Lightning Fast, and High-Converting Websites</h2>
                            <p>We design and develop amazing, lightning fast, and high-converting websites that make your business grow.</p>


                            <ul className="features-list">
                                <li><span><i className='bx bx-check'></i> E-commerce Websites</span></li>
                                <li><span><i className='bx bx-check'></i> Business Websites</span></li>
                                <li><span><i className='bx bx-check'></i> Blogging Websites</span></li>
                                <li><span><i className='bx bx-check'></i> News Websites</span></li>
                                <li><span><i className='bx bx-check'></i> Magazine Websites</span></li>
                                <li><span><i className='bx bx-check'></i> Company Websites</span></li>
                                <li><span><i className='bx bx-check'></i> Portfolio Websites</span></li>
                                <li><span><i className='bx bx-check'></i> Restaurant Websites</span></li>
                                <li><span><i className='bx bx-check'></i> Real Estate Websites</span></li>
                                <li><span><i className='bx bx-check'></i> NGO Websites</span></li>
                            </ul>
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