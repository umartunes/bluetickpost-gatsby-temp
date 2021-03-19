import React from 'react'
import starIcon from '../../assets/images/star-icon.png'
import history1 from '../../assets/images/history/history1.jpg'
import history2 from '../../assets/images/history/history2.jpg'

const OurHistory = () => {
    return (
        <section className="history-area ptb-100 bg-fafafb">
            <div className="container">
                <div className="section-title">
                    <span className="sub-title">
                        <img src={starIcon} alt="banner" /> 
                        Our History
                    </span>
                    <h2>GIVING BACK TO THE COMMUNITY </h2>
                </div>

                <ol className="timeline history-timeline">
                    <li className="timeline-block">
                        <div className="timeline-date">
                            <span>2021</span>
                            April 21
                            <sup>st</sup>
                        </div>

                        <div className="timeline-icon">
                            <span className="dot-badge"></span>
                        </div>

                        <div className="timeline-content">
                            <div className="row align-items-center">
                                <div className="col-lg-7 col-md-12">
                                    <div className="content">
                                        <h3>Jr.hacks 2021</h3>
                                        <p>Every year we host Jr.Hacks, the only STEM hackathon for kids in the Greater Toronto Area. This is our 3rd year hosting Jr.Hacks and we’re going virtual. We’ll be hosting it on April 10, 2021 and fundraising $5,000 for Peel Learning Foundation, a non-profit that supports Peel students with basic necessities they need to excel at school. </p>
                                        <p>To register, click <a href="https://jrhacks.com/students" target="_blank" rel="noopener noreferrer">here</a>. </p>
                                    </div>
                                </div>

                                <div className="col-lg-5 col-md-12">
                                    <div className="image">
                                        <img src={history1} alt="banner" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>

                    <li className="timeline-block">
                        <div className="timeline-date">
                            <span>2020</span>
                            December 
                        </div>

                        <div className="timeline-icon">
                            <span className="dot-badge"></span>
                        </div>

                        <div className="timeline-content">
                            <div className="row align-items-center">
                                <div className="col-lg-7 col-md-12">
                                    <div className="content">
                                        <h3>Twas The Bite Before Christmas Breakfast</h3>
                                        <p>In December 2020, we hosted Twas The Bite Before Christmas Breakfast along with Streetsville.org. We raised over $32,000 for Eden Food for Change, a local food bank, which has been doing excellent work helping those in need throughout the pandemic. </p>
                                    </div>
                                </div>

                                <div className="col-lg-5 col-md-12">
                                    <div className="image">
                                        <img src={history2} alt="banner" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>

                </ol>
            </div>
        </section>
    )
}

export default OurHistory