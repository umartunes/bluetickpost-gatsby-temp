import React from 'react'
import { Link } from 'gatsby'
import start1 from '../../../assets/images/project-start1.png'
import shape9 from '../../../assets/images/shape/vector-shape9.png'
import shape10 from '../../../assets/images/shape/vector-shape10.png'

const StartProject = () => {
    return (
        <div className="project-start-area bg-color ptb-100">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6 col-md-12">
                        <div className="project-start-image">
                            <img src='/images/lms/courses.png' alt="about" />
                        </div>
                    </div>

                    <div className="col-lg-6 col-md-12">
                        <div className="project-start-content">
                            <h2>Coding & Leadership</h2>
                            <p>All our programs are designed to encourage to learn and master the concepts</p>

                            <Link to="/demo" className="default-btn">
                                <i className="flaticon-web"></i> 
                                Get Started 
                                <span></span>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            <div className="vector-shape9">
                <img src={shape9} alt="about" />
            </div>
            <div className="vector-shape10">
                <img src={shape10} alt="about" />
            </div>
        </div>
    )
}

export default StartProject