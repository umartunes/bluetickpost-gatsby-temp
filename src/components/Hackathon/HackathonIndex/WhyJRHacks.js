import React from 'react'
import starIcon from '../../../assets/images/star-icon.png'

const WhyJRHacks = () => {
    return (
        <section className="how-its-work-area ptb-100">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6 col-md-12">
                        <div className="how-its-work-content">
                            <span className="sub-title">
                                <img src={starIcon} alt="choose" /> 
                                Why 
                            </span>
                            <h2>Learn + Fun + Fundraising</h2>
                            <p>Jr.Hacks 2021 is a full day of STEM and art showcase while raising funds for our local Charity PLF. We aim to raise over $5,000.</p>
                            <p>The <strong>Peel Learning Foundation</strong> is a community-based, charitable nonprofit organization that raises funds to enable Peel District School Board students to achieve personal excellence by providing resources that help them overcome barriers.</p>

                        </div>
                    </div>

                    <div className="col-lg-6 col-md-12">
                        <div className="how-its-work-image">
                            <img className="rounded-lg" src="/images/hackathon/sponsors.jpg" alt="choose" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default WhyJRHacks