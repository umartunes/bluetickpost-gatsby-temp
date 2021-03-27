import React from 'react'
import service4 from '../../assets/images/services/service4.png'
import service5 from '../../assets/images/services/service5.png'
import service6 from '../../assets/images/services/service6.png'

const EventDay = () => {
    return (
        <section className="overview-area ptb-100">
            <div className="container">
                {/* Left Image Style */}
                <div className="overview-box">
                    <div className="overview-image">
                        <div className="image">
                            <img src={service4} alt="features" />
                        </div>
                    </div>
                    
                    <div className="overview-content">
                        <div className="content right-content">
                            <span className="sub-title">Teams</span>
                            <h2>Grade specific</h2>
                            <p>Everything is specific to the Grade level of the student. No previous experience required.</p>

                            <ul className="features-list">
                                <li><span><i className='bx bx-check'></i> STEM Workshops </span></li>
                                <li><span><i className='bx bx-check'></i> STEM Challenges </span></li>
                                <li><span><i className='bx bx-check'></i> Coding Workshops</span></li>
                                <li><span><i className='bx bx-check'></i> Code Challenges</span></li>
                                <li><span><i className='bx bx-check'></i> Quiz Competition</span></li>
                                <li><span><i className='bx bx-check'></i> Prizes & Certificates!</span></li>
                            </ul>
                        </div>
                    </div>
                </div>
                {/* End Left Image Style */}

                

                {/* Left Image Style */}
                <div className="overview-box">
                    <div className="overview-image">
                        <div className="image">
                            <img src={service6} alt="features" />
                        </div>
                    </div>
                    
                    <div className="overview-content">
                        <div className="content right-content">
                            <span className="sub-title">SEO Consultancy</span>
                            <h2>We make smart, good-looking things</h2>
                            <p>We believe brand interaction is key in communication. Real innovations and a positive customer experience are the heart of successful communication.</p>

                            <ul className="features-list">
                                <li><span><i className='bx bx-check'></i> Recommender systems</span></li>
                                <li><span><i className='bx bx-check'></i> Demand prediction</span></li>
                                <li><span><i className='bx bx-check'></i> Omnichannel analytics</span></li>
                                <li><span><i className='bx bx-check'></i> Lead generation</span></li>
                                <li><span><i className='bx bx-check'></i> Dedicated Developers</span></li>
                                <li><span><i className='bx bx-check'></i> 24/7 Support</span></li>
                            </ul>
                        </div>
                    </div>
                </div>
                {/* End Left Image Style */}
            </div>
        </section>
    )
}

export default EventDay