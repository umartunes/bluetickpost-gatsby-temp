import React from "react";
import { Link } from "gatsby";
import logo from "../../assets/images/logo-bluetick-capital.png";
import footerMap from "../../assets/images/footer-map.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer-area bg-color">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-sm-6">
            <div className="single-footer-widget">
              <a href="/" className="logo">
                <img src={logo} alt="logo" />
              </a>

              <p>Generate professional-looking social media posts with BlueTickPost.</p>
              <p>Stand out with posts that give the feeling of being verified. Customize with your photo, name, username, content, and hashtags to make your posts shine!</p>

              {/* <ul className="social-link">
                <li>
                  <a
                    href="https://facebook.com/bluetickpost"
                    className="d-block"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className="bx bxl-facebook"></i>
                  </a>
                </li>
                <li>
                  <a
                    href="https://twitter.com/bluetickpost_"
                    className="d-block"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className="bx bxl-twitter"></i>
                  </a>
                </li>
                <li>
                  <a
                    href="https://instagram.com/bluetickpost_"
                    className="d-block"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className="bx bxl-instagram"></i>
                  </a>
                </li>
              </ul> */}

            </div>
          </div>

          <div className="col-lg-4 col-sm-6">
            <div className="single-footer-widget pl-5">
              <h3>Explore</h3>

              <ul className="footer-links-list">
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/about-us">About</Link>
                </li>
                {/* <li>
                  <Link to="/success-stories">Success Stories</Link>
                </li> */}
                {/* <li>
                  <Link to="/faq">FAQ</Link>
                </li> */}
                <li>
                  <Link to="/create">Create A Post</Link>
                </li>
                {/* <li>
                  <Link to="/contact">Contact Us</Link>
                </li> */}
              </ul>
            </div>
          </div>

          {/* <div className="col-lg-2 col-sm-6">
            <div className="single-footer-widget">
              <h3>Resources</h3>

              <ul className="footer-links-list">
                <li>
                  <Link to="/team">Our Team</Link>
                </li>
                <li>
                  <Link to="/community">Community</Link>
                </li>
                <li>
                  <Link to="/testimonials">Testimonials</Link>
                </li>
                <li>
                  <Link to="/faq">FAQ</Link>
                </li>
                <li>
                  <Link to="/success-stories">Success Stories</Link>
                </li>
              </ul>
            </div>
          </div> */}

          {/* <div className="col-lg-4 col-sm-6">
            <div className="single-footer-widget">
              <h3>Address</h3>

              <ul className="footer-contact-info">
                <li>
                  <i className="bx bx-map"></i>
                  P-949 Block G, Gulistan Colony, Faisalabad, Pakistan
                </li>
                <li>
                  <i className="bx bx-phone-call"></i>
                  <a href="tel:+923457790453">+92 345 7790453</a>
                </li>
                <li>
                  <i className="bx bx-envelope"></i>
                  <a href="mailto:contact@bluetickpost.com">contact@bluetickpost.com</a>
                </li>
                <li>
                      <i className='bx bxs-inbox'></i>
                      <a href="tel:+557854578964">+55 785 4578964</a>
                  </li>
              </ul>
            </div>
          </div> */}
        </div>

        <div className="footer-bottom-area">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-6">
              <p>
                Copyright @{currentYear} <strong>BlueTickPost</strong>. All rights
                reserved.
              </p>
            </div>

            <div className="col-lg-6 col-md-6">
              <ul>
                <li>
                  <Link to="/privacy-policy">Privacy Policy</Link>
                </li>
                <li>
                  <Link to="/terms-and-conditions">Terms & Conditions</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-map">
        <img src={footerMap} alt="footer-logo" />
      </div>
    </footer>
  );
};

export default Footer;
