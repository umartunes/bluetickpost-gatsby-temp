import React from 'react'
// import {Link} from 'gatsby'
import shape1 from '../../assets/images/shape/shape1.svg'
import shape2 from '../../assets/images/shape/shape2.png'
import shape3 from '../../assets/images/shape/shape3.png'

const PageBanner = ({pageTitle, homePageUrl, homePageText, activePageText}) => {
    return (
        <div className="page-title-area pb-5">
            <div className="container">
                <div className="page-title-content">
                    <h2>{pageTitle}</h2>
                    {/* <ul>
                        <li>
                            <Link to={homePageUrl}>
                                {homePageText}
                            </Link>
                        </li>
                        <li>{activePageText}</li>
                    </ul> */}
                </div>
                <div className="row mt-3">
                    <div className="col">
                        <p>Do you want to enroll your child in one of our programs? Do you want to know how our classes work? Well, lucky for you, we have the appropriate measures. STEM1 offers free demo workshops to give you a gist of what we have to offer in our coding academy.</p>
                        <p>In our workshop, instructors will give you insights into the importance of science, technology, engineering, and mathematics (STEM), its importance, and its applications in future career options. Besides, they will also provide brief information regarding our different courses.</p>
                        <p>So, what are you waiting for? Fill out the required information to book a demo now!</p>
                    </div>
                </div>
            </div>



            <div className="shape-img1">
                <img src={shape1} alt="banner" />
            </div>
            <div className="shape-img2">
                <img src={shape2} alt="banner" />
            </div>
            <div className="shape-img3">
                <img src={shape3} alt="banner" />
            </div>
        </div>
    )
}

export default PageBanner;