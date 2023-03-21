import React from 'react';
import { Link } from 'gatsby'

const CallToAction = () => {
    return (
        <div className="project-start-area bg-color ptb-100">
            <div className="container">
                <div className="project-start-content text-center">

                    {/* <h2 className="text-white">New classes starting December 24</h2> */}
                    <h2 className="text-white">Join The Lead Tech Industry</h2>

                    <div className="btn-box text-center" >
                        <Link to="/courses" className="default-btn">
                            <i className="flaticon-right"></i>
                            Apply For A Course <span></span>
                        </Link>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}

export default CallToAction;