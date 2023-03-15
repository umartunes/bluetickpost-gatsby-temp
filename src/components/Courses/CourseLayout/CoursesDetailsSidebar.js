import React from 'react'
import { Link } from 'gatsby'
// import ModalVideo from 'react-modal-video'

// functional component
const CoursesDetailsSidebar = ({ program }) => {
    const [isOpen, setIsOpen] = React.useState(true);
    const openModal = () => {
        setIsOpen(!isOpen);
    }

    return (
        <React.Fragment>
            {/* If you want to change the video need to update videoID */}
            {/* <ModalVideo
                channel='youtube'
                isOpen={!isOpen}
                videoId='bk7McNUjWgw'
                onClose={() => setIsOpen(!isOpen)}
            /> */}

            <div className="courses-details-info">
                <div className="image border-bottom">
                    <img src={program.image} alt="course1" />

                    {/* <Link
                        to="#"
                        onClick={e => { e.preventDefault(); openModal() }}
                        className="link-btn popup-youtube"
                    >
                    </Link>

                    <div className="content">
                        <i className="flaticon-google-play"></i>
                        <span>Course Preview</span>
                    </div> */}
                </div>
                <div className="btn-box">
                    <Link to="/apply" className="default-btn">
                        <i className="flaticon-right"></i> Apply Now! <span></span>
                    </Link>

                    {program.isAvailable ? "" : <div class="alert alert-danger mt-2 text-center" role="alert"> <small>Admissions closed for this program</small>  </div>}

                    {/* <Link to="#" className="default-btn">
                        <i className="flaticon-price-tag"></i>
                        Buy Now <span></span>
                    </Link> */}
                </div>
                <ul className="info">
                    <div className="d-flex justify-content-between align-items-center">
                        {/* <div className=""> */}
                        {program.discountPercentage
                            ? <>
                                <span></span>
                                <span><del style={{ fontWeight: 'bold' }}>{program.priceBeforeDiscount}</del> <span className="badge badge-success ml-1">{program.discountPercentage}</span></span>
                            </>
                            : <></>
                        }
                    </div>
                    <li className="price pt-1">

                        <div className="d-flex justify-content-between align-items-center">
                            <span><i className="flaticon-price-tag"></i> Fee</span>
                            <small style={{ fontWeight: 'bold' }}>{program.price}</small>
                        </div>
                    </li>
                    <li>
                        <div className="d-flex justify-content-between align-items-center">
                            <div>
                                <p className="mb-1">This course includes</p>
                                <p className="mb-0"><small><span><i className="flaticon-tick" style={{ fontSize: 12 }}></i>Some premium software</span></small></p>
                                <p className="mb-0"><small><span><i className="flaticon-tick" style={{ fontSize: 12 }}></i>Course material (Soft copy)</span></small></p>
                                <p className="mb-0"><small><span><i className="flaticon-tick" style={{ fontSize: 12 }}></i>Certificate of completion</span></small></p>
                                <p className="mb-0"><small><span><i className="flaticon-tick" style={{ fontSize: 12 }}></i>Access to LMS (Student Portal)</span></small></p>
                                <p className="mb-0"><small><span><i className="flaticon-tick" style={{ fontSize: 12 }}></i>Weekly Assignments & Quizzes</span></small></p>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div className="d-flex justify-content-between align-items-center">
                            <div>
                                <p className="mb-1">Timings &amp; Duration</p>
                                <p className="mb-0"><small><strong className="text-dark">Course Duration</strong>: {program.courseDuration}</small></p>
                                <p className="mb-0"><small><strong className="text-dark">Class Duration</strong>: {program.classDuration}</small></p>
                                <p className="mb-0"><small><strong className="text-dark">Class Days</strong>: {program.classDays}</small></p>
                            </div>
                        </div>
                    </li>

                </ul>

                <div className="courses-share">
                    <div className="share-info">
                        <span>Share This Course <i className="flaticon-share"></i></span>

                        <ul className="social-link">
                            <li>
                                <Link to={`https://www.facebook.com/sharer/sharer.php?u=${`https://techna.pk/courses/${program.slug}`}`} className="d-block">
                                    <i className='bx bxl-facebook'></i>
                                </Link>
                            </li>
                            <li>
                                <Link to={`https://twitter.com/intent/tweet?url=${`https://techna.pk/courses/${program.slug}`}&text=${program.title}`} className="d-block">
                                    <i className='bx bxl-twitter'></i>
                                </Link>
                            </li>
                            <li>
                                <Link to={`https://www.linkedin.com/shareArticle?mini=true&url=${`https://techna.pk/courses/${program.slug}`}`} className="d-block">
                                    <i className='bx bxl-linkedin'></i>
                                </Link>
                            </li>
                            {/* <li>
                                <Link to="#" className="d-block">
                                    <i className='bx bxl-instagram'></i>
                                </Link>
                            </li> */}
                        </ul>

                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default CoursesDetailsSidebar