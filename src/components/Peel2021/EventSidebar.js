import React from "react";
import { Link } from "gatsby";
// import payment1 from "../../assets/images/payment/payment1.png";
// import payment2 from "../../assets/images/payment/payment2.png";
// import payment3 from "../../assets/images/payment/payment3.png";

const EventSidebar = () => {
  return (
    <div className="events-details-info">
      <ul className="info">
        <li className="price">
          <div className="d-flex justify-content-between align-items-center">
            <span>Cost</span>
            $20
          </div>
        </li>
        <li>
          <div className="d-flex justify-content-between align-items-center">
            <span>Grades</span>2 - 8
          </div>
        </li>
        <li>
          <div className="d-flex justify-content-between align-items-center">
            <span>Region</span>Peel
          </div>
        </li>

        <li>
          <div className="d-flex justify-content-between align-items-center">
            <span>Supporting</span>
            PLF
          </div>
        </li>
        {/* <li>
          <div className="d-flex justify-content-between align-items-center">
            <span>Pay With</span>
            <div className="payment-method">
              <img src={payment1} className="shadow" alt="payment-card" />
              <img src={payment2} className="shadow" alt="payment-card" />
              <img src={payment3} className="shadow" alt="payment-card" />
            </div>
          </div>
        </li> */}
      </ul>

      <div className="btn-box">
        <Link to="#" className="default-btn">
          <i className="flaticon-user"></i>
          Register <span></span>
        </Link>
        <p>Limited spots available per grade.</p>
      </div>

      <div className="events-share">
        <div className="share-info">
          <span>
            Share This Course <i className="flaticon-share"></i>
          </span>

          <ul className="social-link">
            <li>
              <Link to="#" className="d-block">
                <i className="bx bxl-facebook"></i>
              </Link>
            </li>
            <li>
              <Link to="#" className="d-block">
                <i className="bx bxl-twitter"></i>
              </Link>
            </li>
            <li>
              <Link to="#" className="d-block">
                <i className="bx bxl-instagram"></i>
              </Link>
            </li>
            <li>
              <Link to="#" className="d-block">
                <i className="bx bxl-linkedin"></i>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default EventSidebar;
