import React from 'react'
import { Link } from 'gatsby'
import ModalVideo from 'react-modal-video'

import { Link as ScrollLink } from 'react-scroll'

const ServiceDetailsSection = ({ service }) => {
    const [isOpen, setIsOpen] = React.useState(true);
    const openModal = () => {
        setIsOpen(!isOpen);
    }
    return (
        <React.Fragment>
            {/* If you want to change the video need to update videoID */}
            <ModalVideo
                channel='youtube'
                isOpen={!isOpen}
                videoId={service.serviceVideoId}
                autoplay={1}
                onClose={() => setIsOpen(!isOpen)}
            />

            <div className="explore-learning-area ptb-100 bg-f1f8fb">
                <div className="container">
                    <div className="row align-items-center">

                        <div className="col-lg-6 col-md-12">
                            <div className="explore-learning-video">
                                <img src={service.serviceVideoThumb} className="mb-4" alt={service.serviceHeading} />

                                {/* <Link
                                    to="#"
                                    onClick={e => { e.preventDefault(); openModal() }}
                                    className="video-btn popup-youtube"
                                >
                                    <i className="flaticon-google-play"></i>
                                </Link> */}
                            </div>
                        </div>

                        <div className="col-lg-6 col-md-12">
                            <div className="explore-learning-content">
                                <h2>{service.serviceHeading}</h2>
                                {service.serviceDetails.map((para, i) => {
                                    return <p key={i} dangerouslySetInnerHTML={{ __html: para }}></p>
                                })}
                                
                                <Link to="/services/contact" className="default-btn">
                                    <i className="flaticon-right"></i>
                                    Order Now!
                                    <span></span>
                                </Link>

                                {/* <Link to="/pricing/" className=""> */}
                                <ScrollLink href="#" className="default-btn ml-1 ml-sm-3" activeClass="active" to="pricing-section" spy={false} smooth={true} offset={-5} duration={750}>
                                    <i className="flaticon-price-tag"></i>
                                    Pricing
                                    <span></span>
                                </ScrollLink>
                                {/* </Link> */}
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default ServiceDetailsSection