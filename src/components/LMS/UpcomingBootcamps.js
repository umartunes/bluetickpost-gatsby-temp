import React from "react";
import { Link } from "gatsby";

const UpcomingBootcamps = () => {
  return (
    <div className="upcoming-bootcamps-area ptb-100 bg-fafafb">
      <div className="container">
        <div className="upcoming-bootcamps-content">
          <h2>Not our student yet?</h2>

          <Link to="/demo" className="default-btn">
            <i className="flaticon-view"></i>
            Register for Trial Class <span></span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default UpcomingBootcamps;
