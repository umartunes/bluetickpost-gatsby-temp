import React from "react";
import { Link } from "gatsby";

const swaglocation = () => {
  return (
    <div className="project-start-area bg-color py-5">
      <div className="container">
            <div className="project-start-content text-center">
            <h4 className="text-white">Pickup Location.</h4>

            <h2 className="text-white">Streetsville Home Hardware</h2>
            <p>3 Queen St N, Mississauga ON L5N 1A2</p>

<a href="https://goo.gl/maps/bqyyumwVNYu4UWzR7" className="default-btn" target="_blank" >Get Directions</a>
            {/* <Link
                to="https://goo.gl/maps/bqyyumwVNYu4UWzR7"
                className="default-btn"
                style={{ paddingLeft: 25 }}
            >
                Directions <span></span>    
            </Link> */}
            </div>
      </div>
    </div>
  );
};

export default swaglocation;
