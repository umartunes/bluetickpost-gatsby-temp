import React from 'react';

import StarIcon from '../../assets/images/star-icon.png'
import HowItsWork from '../../assets/images/how-its-work.png'
import { Link } from 'gatsby'

const HowItWorks = () => {
    return (
        <section className="how-its-work-area ptb-100">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6 col-md-12">
                        <div className="how-its-work-content">
                            <span className="sub-title">
                                <img src={StarIcon} alt="image_alt" /> 
                                Jr.Hacks
                            </span>
                            <h2>Process</h2>
                            <p>Students are placed into teams by Grade level. Top 3 Teams by Grade wins Medals</p>
                            <div className="inner-box">
                                <div className="single-item">
                                    <div className="count-box">
                                       1
                                    </div>
                                    <h3>
                                    <Link to="/programs-junior">
                                    Register
                                    </Link>

                                    </h3>
                                    <p>Register for the Annual event in your Region</p>
                                </div>
                                <div className="single-item">
                                    <div className="count-box">
                                       2
                                    </div>
                                    <h3>
                                        
                                    <Link to="/programs-senior">
                                    SWAG Pickup
                                    </Link>

                                   </h3>
                                
                                    <p>Pickup your swag bag for event from one of our local partners.</p>
                                </div>
                                <div className="single-item">
                                    <div className="count-box">
                                        3
                                    </div>
                                    <h3>
                                    <Link to="/programs-leadership">
                                        Compete & Win
                                    </Link>

                                    </h3>
                                    <p>Attend workshops & complete challenges </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-6 col-md-12">
                        <div className="how-its-work-image">
                            <img src={HowItsWork} alt="image_alt" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HowItWorks;