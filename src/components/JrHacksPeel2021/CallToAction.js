import React from 'react';
import {Link} from 'gatsby'

const CallToAction = () => {
    return (
        <div className="project-start-area bg-color ptb-100">
            <div className="container">
                <div className="project-start-content text-center">
                    <h2 className="text-white">Enjoy A Demo Class On Us.</h2>

                    <Link to="/schedule" className="default-btn" style={{paddingLeft: 25}}>
                        Sign-up Today! <span></span>
                    </Link>

                </div>
            </div>
        </div>
    )
}

export default CallToAction;