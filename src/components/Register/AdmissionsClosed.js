import React, { } from 'react'
import { Link, } from 'gatsby'

import starIcon from '../../assets/images/star-icon.png'


const AdmissionsClosed = () => {

    return (
        <section className="contact-area ptb-70 bg-fafafb">
            <div className="container">

                <div className="section-title mb-4" style={{ maxWidth: '100%' }}>
                    <span className="sub-title">
                        <img src={starIcon} alt="contact" />
                        Admission Form
                    </span>
                    <h2>Join The Lead Tech Industry</h2>
                    {/* <p className='mx-auto' style={{ maxWidth: '80%' }}>Please fill in the form below to apply for a course. All fields are required.</p> */}
                </div>

                <div className="row">
                    <div className="col-12">
                        <div className="card border border-info shadow text-center">
                            <div className="card-body py-5">
                                <h4 className="text-dark">Admissions Are Closed.</h4>
                                <h6 className="text-dark">New classes would be starting soon...</h6>
                                <h6 className="text-dark"> Join us on Facebook to keep yourself updated about new admissions openings and other activities.</h6>

                                <Link to="https://facebook.com/groups/TechnaPK" className="default-btn mt-3">
                                    <i className="flaticon-right"></i>
                                    Click Here To Join Us On Facebook <span></span>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section >
    )
}

export default AdmissionsClosed