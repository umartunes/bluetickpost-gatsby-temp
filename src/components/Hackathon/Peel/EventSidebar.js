import React from 'react'
import {Link} from 'gatsby'
import payment1 from '../../../assets/images/payment/payment1.png'
import payment2 from '../../../assets/images/payment/payment2.png'
import payment3 from '../../../assets/images/payment/payment3.png'

const EventSidebar = ({peel}) => {
    return (
        <div className="events-details-info">
            <ul className="info">
                <li className="price">
                    <div className="d-flex justify-content-between align-items-center">
                        <span>Cost</span>
                        {peel.cost}
                    </div>
                </li>
                <li>
                    <div className="d-flex justify-content-between align-items-center">
                        <span>Grades</span>
                        {peel.grades}
                    </div>
                </li>
                <li>
                    <div className="d-flex justify-content-between align-items-center">
                        <span>Region</span>
                        {peel.region}
                    </div>
                </li>
                <li>
                    <div className="d-flex justify-content-between align-items-center">
                        <span>Supporting</span>
                        {peel.supporting}
                    </div>
                </li>
            </ul>

            <div className="btn-box">
                <Link to="#" className="default-btn">
                    <i className="flaticon-user"></i> 
                    Book Now <span></span>
                </Link>
                <p>You must <Link to="/profile-authentication">login</Link> before register event.</p>
            </div>

            <div className="events-share">
                <div className="share-info">
                    <span>Share This Course <i className="flaticon-share"></i></span>

                    <ul className="social-link">
                        <li>
                            <Link to="#" className="d-block">
                                <i className='bx bxl-facebook'></i>
                            </Link>
                        </li>
                        <li>
                            <Link to="#" className="d-block">
                                <i className='bx bxl-twitter'></i>
                            </Link>
                        </li>
                        <li>
                            <Link to="#" className="d-block">
                                <i className='bx bxl-instagram'></i>
                            </Link>
                        </li>
                        <li>
                            <Link to="#" className="d-block">
                                <i className='bx bxl-linkedin'></i>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default EventSidebar