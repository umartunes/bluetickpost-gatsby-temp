import React, { useState } from 'react'
import { Link } from 'gatsby'
import ModalVideo from 'react-modal-video'
import Leaderboard from './Leaderboard'

const LeaderboardVideos = () => {
    const [isOpenVideo1, setIsOpenVideo1] = useState(true);

    const openModal1 = () => {
        setIsOpenVideo1(!isOpenVideo1);
    }

    return (
        <>
            <ModalVideo
                channel='youtube'
                isOpen={!isOpenVideo1}
                videoId='EX4e_Kb4s1k'
                onClose={() => setIsOpenVideo1(!isOpenVideo1)}
            />
            <div className="project-start-area bg-color py-5">
                <div className="container">


                    <div className="row mt-5 balloon-popping-iframes">
                        <div className="col-12 col-md-8">
                            <h4 className="text-white text-center">Grand prize submissions</h4>

                            <div className="row align-items-center">
                                
                                <div className="col-lg-6 col-md-12">
                                    <div className="single-events-box">
                                        <div className="image">
                                            <div className="explore-learning-video mb-3">
                                                <img className="rounded-0" src="/images/groupPhoto/2a.png" alt="Mayor" />

                                                <Link
                                                    to="#"
                                                    onClick={e => { e.preventDefault(); openModal1() }}
                                                    className="video-btn popup-youtube"
                                                >
                                                    <i className="flaticon-google-play"></i>
                                                </Link>
                                            </div>
                                            <span className="date">10 April, 2021</span>
                                        </div>

                                        <div className="content">
                                            <h3>
                                                <Link to="/event-details">Team Name</Link>
                                            </h3>
                                            <span className="location"><i className="bx bx-map"></i> Peel</span>
                                        </div>
                                    </div>
                                </div>
                                
                                <div className="col-lg-6 col-md-12">
                                    <div className="single-events-box">
                                        <div className="image">
                                            <div className="explore-learning-video mb-3">
                                                <img className="rounded-0" src="/images/groupPhoto/3a.png" alt="Mayor" />

                                                <Link
                                                    to="#"
                                                    onClick={e => { e.preventDefault(); openModal1() }}
                                                    className="video-btn popup-youtube"
                                                >
                                                    <i className="flaticon-google-play"></i>
                                                </Link>
                                            </div>
                                            <span className="date">10 April, 2021</span>
                                        </div>

                                        <div className="content">
                                            <h3>
                                                <Link to="/event-details">Team Name</Link>
                                            </h3>
                                            <span className="location"><i className="bx bx-map"></i> Peel</span>
                                        </div>
                                    </div>
                                </div>
                                
                                <div className="col-lg-6 col-md-12">
                                    <div className="single-events-box">
                                        <div className="image">
                                            <div className="explore-learning-video mb-3">
                                                <img className="rounded-0" src="/images/groupPhoto/4a.png" alt="Mayor" />

                                                <Link
                                                    to="#"
                                                    onClick={e => { e.preventDefault(); openModal1() }}
                                                    className="video-btn popup-youtube"
                                                >
                                                    <i className="flaticon-google-play"></i>
                                                </Link>
                                            </div>
                                            <span className="date">10 April, 2021</span>
                                        </div>

                                        <div className="content">
                                            <h3>
                                                <Link to="/event-details">Team Name</Link>
                                            </h3>
                                            <span className="location"><i className="bx bx-map"></i> Peel</span>
                                        </div>
                                    </div>
                                </div>
                                
                                <div className="col-lg-6 col-md-12">
                                    <div className="single-events-box">
                                        <div className="image">
                                            <div className="explore-learning-video mb-3">
                                                <img className="rounded-0" src="/images/groupPhoto/5a.png" alt="Mayor" />

                                                <Link
                                                    to="#"
                                                    onClick={e => { e.preventDefault(); openModal1() }}
                                                    className="video-btn popup-youtube"
                                                >
                                                    <i className="flaticon-google-play"></i>
                                                </Link>
                                            </div>
                                            <span className="date">10 April, 2021</span>
                                        </div>

                                        <div className="content">
                                            <h3>
                                                <Link to="/event-details">Team Name</Link>
                                            </h3>
                                            <span className="location"><i className="bx bx-map"></i> Peel</span>
                                        </div>
                                    </div>
                                </div>

                            </div>

                        </div>
                        <div className="col-12 col-md-4">
                            <h4 className="text-white text-center">Leaderboard 🏆</h4>
                            <Leaderboard />
                        </div>
                    </div>

                    <div className="text-center mt-5">
                        <h4 className="text-white">Coding is fun</h4>
                        <h2 className="text-white">Start Today!</h2>
                    </div>

                </div>
            </div>
        </>

    )
}

export default LeaderboardVideos