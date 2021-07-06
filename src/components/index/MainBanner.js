import React from "react";
import ModalVideo from "react-modal-video";
import { Link } from "gatsby";
import Loadable from "@loadable/component";

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

const MainBanner = () => {
  // Popup Video
  const [isOpen, setIsOpen] = React.useState(true);
  const openModal = () => {
    setIsOpen(!isOpen);
  };

  // Owl Carousel
  const [display, setDisplay] = React.useState(false);

  React.useEffect(() => {
    setDisplay(true);
  }, []);

  return (
    <React.Fragment>
      {/* If you want to change the video need to update videoID */}
      {/* <ModalVideo
        channel="youtube"
        isOpen={!isOpen}
        videoId="bk7McNUjWgw"
        onClose={() => setIsOpen(!isOpen)}
      /> */}

      {display ? (
        <OwlCarousel
          className="home-slides owl-carousel owl-theme"
          {...options}
        >
          <div className="main-banner-item item-bg1">
            <div className="d-table">
              <div className="d-table-cell">
                <div className="container">
                  <div className="banner-item-content">
                    <span className="sub-title">Welcome</span>
                    <h1>#FutureReady!</h1>
                    <p>We help you get ready for the future to success!</p>

                    <div className="btn-box">
                      <Link to="/about-us" className="default-btn">
                        <i className="flaticon-right"></i>
                        About Us <span></span>
                      </Link>

                      {/* <Link
                        to="#play-video"
                        onClick={(e) => {
                          e.preventDefault();
                          openModal();
                        }}
                        className="video-btn popup-youtube"
                      >
                        <i className="flaticon-google-play"></i> Watch Video
                      </Link> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="main-banner-item item-bg1">
            <div className="d-table">
              <div className="d-table-cell">
                <div className="container">
                  <div className="banner-item-content">
                    {/* <span className="sub-title">Welcome</span> */}
                    <h1>Techna Mission</h1>
                    <p>Our mission is to train and produce 100,000 skilled application developers in Pakistan.​ This will help to solve unemployment issues of youngsters and they would be able to contribute their part to stable Pakistan.</p>

                    <div className="btn-box">
                      <Link to="/about-us" className="default-btn">
                        <i className="flaticon-right"></i>
                        Learn more <span></span>
                      </Link>

                      {/* <Link
                        to="#play-video"
                        onClick={(e) => {
                          e.preventDefault();
                          openModal();
                        }}
                        className="video-btn popup-youtube"
                      >
                        <i className="flaticon-google-play"></i> Watch Video
                      </Link> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="main-banner-item item-bg1">
            <div className="d-table">
              <div className="d-table-cell">
                <div className="container">
                  <div className="banner-item-content">
                    {/* <span className="sub-title">Welcome</span> */}
                    <h1>1:1 Coaching Program</h1>
                    <p>Great mentors make great students, excel your career growth with 1:1 coaching program</p>

                    <div className="btn-box">
                      <Link to="/courses" className="default-btn" disabled>
                        <i className="flaticon-right"></i>
                        Apply for a personal mentor <span></span>
                      </Link>

                      {/* <Link
                        to="#play-video"
                        onClick={(e) => {
                          e.preventDefault();
                          openModal();
                        }}
                        className="video-btn popup-youtube"
                      >
                        <i className="flaticon-google-play"></i> Watch Video
                      </Link> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="main-banner-item item-bg2">
            <div className="d-table">
              <div className="d-table-cell">
                <div className="container">
                  <div className="banner-item-content">
                    <span className="sub-title">Welcome</span>
                    <h1>Join Our Community</h1>
                    <p>
                      Join our community on facebook to keep yourself updated about our activities, news and events.
                    </p>

                    <div className="btn-box">
                      <Link to="https://facebook.com/groups/TechnaPK" className="default-btn">
                        <i className="flaticon-right"></i>
                        Join Now <span></span>
                      </Link>

                      {/* <Link
                        to="#play-video"
                        onClick={(e) => {
                          e.preventDefault();
                          openModal();
                        }}
                        className="video-btn popup-youtube"
                      >
                        <i className="flaticon-google-play"></i> Watch Video
                      </Link> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </OwlCarousel>
      ) : (
        ""
      )}
    </React.Fragment>
  );
};

export default MainBanner;
