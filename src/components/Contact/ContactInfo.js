import React from 'react'
import starIcon from '../../assets/images/star-icon.png'
const ContactInfo = () => {
    return (
        <div className="contact-info-area pt-100 pb-70">
            <div className="container">
                {/* <div className="section-title">
                    <span className="sub-title">
                        <img src={starIcon} alt="contact" />
                        Get in Touch
                    </span>
                    <h2>Ready to Get Started?</h2>
                    <p>Your email address will not be published. Required fields are marked *</p>
                </div> */}
                <div className="row">
                    <div className="col-lg-4 col-md-6">
                        <div className="contact-info-box">
                            <div className="back-icon">
                                <i className='bx bx-map'></i>
                            </div>
                            <div className="icon">
                                <i className='bx bx-map'></i>
                            </div>
                            <h3>Our Address</h3>
                            <p>1075 Ceremonial Dr #7, Mississauga, ON L5R 2Z4, Canada</p>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6">
                        <div className="contact-info-box">
                            <div className="back-icon">
                                <i className='bx bx-phone-call'></i>
                            </div>
                            <div className="icon">
                                <i className='bx bx-phone-call'></i>
                            </div>
                            <h3>Contact</h3>
                            <p>Mobile: <a href="tel:+16479317707">647 931 7707</a></p>
                            <p>E-mail: <a href="mailto:admin@stem.one">admin@stem.one</a></p>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 offset-lg-0 offset-md-3">
                        <div className="contact-info-box">
                            <div className="back-icon">
                                <i className='bx bx-time-five'></i>
                            </div>
                            <div className="icon">
                                <i className='bx bx-time-five'></i>
                            </div>
                            <h3>Hours of Operation</h3>
                            <p>Monday - Friday: 5PM - 8PM</p>
                            <p>Saturday: 11AM - 4PM</p>
                            <p>Sunday: Closed</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactInfo