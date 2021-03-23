import React from 'react';

import StarIcon from '../../assets/images/star-icon.png'
import HowItsWork from '../../assets/images/how-its-work.png'
import { Link } from 'gatsby'

const HowItWork = () => {
    return (
        <section className="how-its-work-area ptb-100">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6 col-md-12">
                        <div className="how-its-work-content">
                            <span className="sub-title">
                                <img src={StarIcon} alt="image_alt" /> 
                                Our Program
                            </span>
                            <h2>STEM1 Learning Path</h2>
                            <p>Learning should be exciting and goal oreiented, students are given enough reasons to succeed.</p>
                            <div className="inner-box">
                                <div className="single-item">
                                    <div className="count-box">
                                        jr.
                                    </div>
                                    <h3>
                                    <Link to="/programs-junior">
                                    Junior (Grade 3+)
                                    </Link>

                                    </h3>
                                    <p>10 Courses to master and progress to Level 7 in Senior Program.</p>
                                </div>
                                <div className="single-item">
                                    <div className="count-box">
                                        sr.
                                    </div>
                                    <h3>
                                        
                                    <Link to="/programs-senior">
                                    Senior (Grade 6+)
                                    </Link>

                                   </h3>
                                
                                    <p>Master 10 levels or progress through experience.</p>
                                </div>
                                <div className="single-item">
                                    <div className="count-box">
                                        lr.
                                    </div>
                                    <h3>
                                    <Link to="/programs-leadership">
                                        Leaders
                                    </Link>

                                    </h3>
                                    <p>Complete 10 Projects & Lead 10 classes.</p>
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

export default HowItWork;