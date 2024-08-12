import React from "react";
import ReactPlayer from "react-player";
import Loadable from "@loadable/component";
import { Link } from "gatsby";

// Styles
import "../../assets/css/youtubeBanner.css";

const OwlCarousel = Loadable(() => import("react-owl-carousel3"));

const options = {
  loop: true,
  nav: true,
  dots: false,
  autoplayHoverPause: true,
  autoplay: true,
  items: 1,
  navText: [
    "<i class='flaticon-left-1'></i>",
    "<i class='flaticon-right-1'></i>",
  ],
};

const Youtube = () => {
  return (
    <div className="container">
      

     {/* <p className="text-center"> Jr.Hackathon 2021 @Peel </p> */}
      <div className="player-wrapper">
        <ReactPlayer
          url="https://youtu.be/bKplCDQcLWk"
          className="react-player"
          playing
          width="100%"
          height="100%"
          controls={true}
        />
      </div>

      <h3 className="text-center mt-3 " >New classes starting May 01</h3>
      <div className="btn-box text-center" >
        <Link to="/apply" className="default-btn">
          <i className="flaticon-right"></i>
          Register Today! <span></span>
        </Link>
      </div>
     </div>
  );
};

// Exporting Component
export default Youtube;
