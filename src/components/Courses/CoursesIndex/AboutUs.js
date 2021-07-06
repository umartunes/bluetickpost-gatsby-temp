import React from 'react'
import aboutImg1 from '../../../assets/images/about/about-img1.png'

const AboutUs = () => {
    return (
        <section className="overview-area ptb-100">
            <div className="container">
                

                <div className="overview-box">
                    <div className="overview-content">
                        <div className="content">
                            <span className="sub-title">Power of Coding</span>
                            <h2>Bring their craziest ideas to life!</h2>
                            <p>After-school program where your child learns while having fun. STEM1 is a virtual after-school coding program for grade 2 to 8 children. </p>

                            <div className="features-text">
                                <h4><i className="flaticon-tick"></i> Core Development</h4>
                                <p>No fake products and services. The customer is king, their lives and needs are the inspiration.</p>
                            </div>

                            <div className="features-text">
                                <h4><i className="flaticon-tick"></i> Define Your Choices</h4>
                                <p>No fake products and services. The customer is king, their lives and needs are the inspiration.</p>
                            </div>
                        </div>
                    </div>

                    <div className="overview-image">
                        <div className="image">
                            <img src={aboutImg1} alt="about" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutUs