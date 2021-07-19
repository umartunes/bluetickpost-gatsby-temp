import React from 'react';
import {Link} from 'gatsby'

const CallToAction = () => {
    return (
        <div className="project-start-area bg-color ptb-100">
            <div className="container">
                <div className="project-start-content text-center">
                    <h2 className="text-white">New classes starting August 02</h2>

                    <Link to="/apply" className="default-btn" style={{paddingLeft: 25}}>
                        Apply Now! <span></span>
                    </Link>

                </div>
            </div>
        </div>
    )
}

export default CallToAction;