import React from 'react';
import {Link} from 'gatsby'

const HacksUpdates = () => {
    return (
        <div className="upcoming-bootcamps-area ptb-100 bg-fafafb">
            <div className="container">
                <div className="upcoming-bootcamps-content">
                    <h2>SWAG bag pickup loction information</h2>

                    <Link to="/swag" className="default-btn">
                        <i className="flaticon-view"></i> 
                        Request pickup location <span></span>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default HacksUpdates;