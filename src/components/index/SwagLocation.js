import React from "react";
import { Link } from "gatsby";

const swaglocation = () => {
  return (
    <div className="project-start-area bg-color py-5">
      <div className="container">
        <div className="project-start-content text-center">
          <h4 className="text-white">Pickup Location.</h4>

          <h2 className="text-white">April 8 - Rickhansen High School</h2>
          <p>1150 Dream Crest Rd, Mississauga</p>

          <a
            href="https://goo.gl/maps/sEDy1YJKir52sF3d9"
            className="default-btn"
            target="_blank"
          >
            RickHansen Get Directions
          </a>
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
