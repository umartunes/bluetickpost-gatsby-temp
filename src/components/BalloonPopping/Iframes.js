import React from "react";
import { Link } from "gatsby";

const Iframes = () => {
  return (
    <div className="project-start-area  bg-color py-5">
      <div className="container">
        {/* <div className="text-center">
                    <h4 className="text-white">create your own game</h4>
                    <h2 className="text-white">Coding is easy like this</h2>
                </div> */}

        <div className="row mt-5 balloon-popping-iframes">
          <div className="col-12 col-md-8">
            <h4 className="text-white text-center">
              Build this with: HTML #201 (Sr. Level 4)
            </h4>
            <iframe
              title=""
              src="https://balloon-popping-stem.web.app"
            ></iframe>
          </div>
          <div className="col-12 col-md-4">
            <h4 className="text-white text-center">Leaderboard 🏆</h4>
            <iframe
              title=""
              src="https://balloon-popping-stem.web.app/leaderboard_fullpage.html"
            ></iframe>
          </div>
        </div>

        <h3 className="text-center mt-3 text-white ">New classes starting May 01</h3>
        <div className="btn-box text-center">
          <Link to="/Register" className="default-btn">
            <i className="flaticon-right"></i>
            Register Today! <span></span>
          </Link>
        </div>  
      </div>
    </div>
  );
};

export default Iframes;
