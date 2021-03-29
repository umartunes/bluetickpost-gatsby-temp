import React from "react";
import ReactWOW from "react-wow";
import KitchenMate from "../../../assets/images/Hackathons/Peel2021/Sponsors/KitchenMate.png";
import Meridian from "../../../assets/images/Hackathons/Peel2021/Sponsors/Meridian.png";
import Mississauga from "../../../assets/images/Hackathons/Peel2021/Sponsors/Mississauga.png";
import ACE from "../../../assets/images/Hackathons/Peel2021/Sponsors/ACE.png";
import TSOC from "../../../assets/images/Hackathons/Peel2021/Sponsors/TSOC.png";
import PDSB from "../../../assets/images/Hackathons/Peel2021/Sponsors/PDSB.png";

import UWaterloo from "../../../assets/images/Hackathons/Peel2021/Sponsors/UWaterloo.png";

import Brampton from "../../../assets/images/Hackathons/Peel2021/Sponsors/Brampton.png";

// import partner2 from '../../assets/images/partner/partner2.png'
// import partner3 from '../../assets/images/partner/partner3.png'
// import partner4 from '../../assets/images/partner/partner4.png'
// import partner5 from '../../assets/images/partner/partner5.png'
// import partner6 from '../../assets/images/partner/partner6.png'

const Partner = () => {
  return (
    <div className="partner-area pt-100 pb-70 bg-f1f8fb">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-2 col-6 col-sm-4 col-md-4">
            <ReactWOW delay=".1s" animation="fadeInUp">
              <div className="single-partner-item">
                <img src={KitchenMate} alt="about" />
              </div>
            </ReactWOW>
          </div>

          <div className="col-lg-2 col-6 col-sm-4 col-md-4">
            <ReactWOW delay=".2s" animation="fadeInUp">
              <div className="single-partner-item">
                <img src={Meridian} alt="about" />
              </div>
            </ReactWOW>
          </div>

          <div className="col-lg-2 col-6 col-sm-4 col-md-4">
            <ReactWOW delay=".3s" animation="fadeInUp">
              <div className="single-partner-item">
                <div className="single-partner-item">
                  <img src={Mississauga} alt="about" />
                </div>
              </div>
            </ReactWOW>
          </div>

          <div className="col-lg-2 col-6 col-sm-4 col-md-4">
            <ReactWOW delay=".4s" animation="fadeInUp">
              <div className="single-partner-item">
                <div className="single-partner-item">
                  <img src={Brampton} alt="about" />
                </div>
              </div>
            </ReactWOW>
          </div>

          <div className="col-lg-2 col-6 col-sm-4 col-md-4">
            <ReactWOW delay=".5s" animation="fadeInUp">
              <div className="single-partner-item">
                <div className="single-partner-item">
                  <img src={TSOC} alt="about" />
                </div>
              </div>
            </ReactWOW>
          </div>

          <div className="col-lg-2 col-6 col-sm-4 col-md-4">
            <ReactWOW delay=".5s" animation="fadeInUp">
              <div className="single-partner-item">
                <div className="single-partner-item">
                  <img src={PDSB} alt="about" />
                </div>
              </div>
            </ReactWOW>
          </div>

          <div className="col-lg-2 col-6 col-sm-4 col-md-4">
            <ReactWOW delay=".5s" animation="fadeInUp">
              <div className="single-partner-item">
                <div className="single-partner-item">
                  <img src={UWaterloo} alt="about" />
                </div>
              </div>
            </ReactWOW>
          </div>

          <div className="col-lg-2 col-6 col-sm-4 col-md-4">
            <ReactWOW delay=".6s" animation="fadeInUp">
              <div className="single-partner-item">
                <div className="single-partner-item">
                  <img src={ACE} alt="about" />
                </div>
              </div>
            </ReactWOW>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Partner;
