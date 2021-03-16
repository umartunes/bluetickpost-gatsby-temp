import React from 'react'
// import service1 from '../../assets/images/services/service1.png'
import service2 from '../../assets/images/services/service2.png'
import starIcon from '../../assets/images/star-icon.png'

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
                                        <img src={starIcon} alt="icon" /> Services
                                    </span>
                                    
                                    <h2>Design & Development</h2>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.</p>

                                    <ul className="our-mission-list mb-0">
                                        <li>
                                            <i className="flaticon-tick"></i>
                                            Responsive Design
                                        </li>
                                        <li>
                                            <i className="flaticon-tick"></i>
                                            React Development
                                        </li>
                                        <li>
                                            <i className="flaticon-tick"></i>
                                            Apps Development
                                        </li>
                                        <li>
                                            <i className="flaticon-tick"></i>
                                            Laravel Development
                                        </li>
                                        <li>
                                            <i className="flaticon-tick"></i>
                                            UX/UI Design
                                        </li>
                                        <li>
                                            <i className="flaticon-tick"></i>
                                            E-commerce Design
                                        </li>
                                        <li>
                                            <i className="flaticon-tick"></i>
                                            Web Design
                                        </li>
                                        <li>
                                            <i className="flaticon-tick"></i>
                                            Print Ready Design
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