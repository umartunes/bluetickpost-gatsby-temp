import React from 'react'
import partner1 from '../../../assets/images/partner/partner1.png'
import partner2 from '../../../assets/images/partner/partner2.png'
import partner3 from '../../../assets/images/partner/partner3.png'
import partner4 from '../../../assets/images/partner/partner4.png'
import partner5 from '../../../assets/images/partner/partner5.png'
import partner6 from '../../../assets/images/partner/partner6.png'

const Sponsors = () => {
    return (
        <div className="partner-area ptb-70 bg-fafafb">
            <div className="container">
                <div className="row">
                    <div className="col">
                        <h2 className="text-center mb-5">Our Sponsors</h2>
                    </div>
                </div>
                <div className="row align-items-center">
                    <div className="col-lg-2 col-6 col-sm-4">
                        <div className="single-partner-item">
                            <img src={partner1} alt="partner" />
                        </div>
                    </div>

                    <div className="col-lg-2 col-6 col-sm-4">
                        <div className="single-partner-item">
                            <img src={partner2} alt="partner" />
                        </div>
                    </div>

                    <div className="col-lg-2 col-6 col-sm-4">
                        <div className="single-partner-item">
                            <img src={partner3} alt="partner" />
                        </div>
                    </div>

                    <div className="col-lg-2 col-6 col-sm-4">
                        <div className="single-partner-item">
                            <img src={partner4} alt="partner" />
                        </div>
                    </div>

                    <div className="col-lg-2 col-6 col-sm-4">
                        <div className="single-partner-item">
                            <img src={partner5} alt="partner" />
                        </div>
                    </div>

                    <div className="col-lg-2 col-6 col-sm-4">
                        <div className="single-partner-item">
                            <img src={partner6} alt="partner" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Sponsors