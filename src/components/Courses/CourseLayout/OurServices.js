import React from 'react'
// import service1 from '../../../assets/images/services/service1.png'
import service2 from '../../../assets/images/services/service2.png'
import starIcon from '../../../assets/images/star-icon.png'

const OurServices = () => {
    return (
        <React.Fragment>
            

            {/* Service Right Image Style */}
            <div className="our-mission-area ptb-100">
                <div className="container-fluid">
                    <div className="row align-items-center">
                        <div className="col-lg-6 col-md-12">
                            <div className="our-mission-content">
                                <div className="content">
                                    <span className="sub-title">
                                        <img src={starIcon} alt="icon" /> Jr. Program highlights
                                    </span>
                                    
                                    <h2>Concepts Learnt</h2>
                                    <p>Students start from block based coding and quickly graduate to script based through building games and creating presentations</p>

                                    <ul className="our-mission-list mb-0">
                                        <li>
                                            <i className="flaticon-tick"></i>
                                            Algorithms
                                        </li>
                                        <li>
                                            <i className="flaticon-tick"></i>
                                            Game development
                                        </li>
                                        <li>
                                            <i className="flaticon-tick"></i>
                                            3D Design
                                        </li>
                                        <li>
                                            <i className="flaticon-tick"></i>
                                            Computational Thinking
                                        </li>
                                        <li>
                                            <i className="flaticon-tick"></i>
                                            Conditional statements
                                        </li>
                                        <li>
                                            <i className="flaticon-tick"></i>
                                           Deploy & Publish Code
                                        </li>
                                        <li>
                                            <i className="flaticon-tick"></i>
                                            Web Design
                                        </li>
                                        <li>
                                            <i className="flaticon-tick"></i>
                                             Debugging & Testing
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-6 col-md-12">
                            <div className="our-mission-image">
                                <img src={service2} alt="service" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* End Service Right Image Style */}
        </React.Fragment>
    )
}

export default OurServices;