import React from 'react'
import {Link} from 'gatsby'
import ModalVideo from 'react-modal-video'
import learning from '../../../assets/images/explore-learning.jpg'

const VideosSection = () => {
    const [isOpenVideo1, setIsOpenVideo1] = React.useState(true);
    const [isOpenVideo2, setIsOpenVideo2] = React.useState(true);
    
    const openModal1 = () => {
        setIsOpenVideo1(!isOpenVideo1);
    }
    const openModal2 = () => {
        setIsOpenVideo2(!isOpenVideo2);
    }

    return (
        <React.Fragment>
            {/* If you want to change the video need to update videoID */}
            <ModalVideo 
                channel='youtube' 
                isOpen={!isOpenVideo1} 
                videoId='EX4e_Kb4s1k' 
                onClose={() => setIsOpenVideo1(!isOpenVideo1)} 
            />

            <ModalVideo 
                channel='youtube' 
                isOpen={!isOpenVideo2} 
                videoId='NAt5qUSM6j4' 
                onClose={() => setIsOpenVideo2(!isOpenVideo2)} 
            />
        
            <div className="explore-learning-area ptb-100">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6 col-md-12">
                            <div className="explore-learning-video mb-3">
                                <img src="/images/hackathon/videobg1.jpg" alt="Mayor" />
 
                                <Link 
                                    to="#"
                                    onClick={e => {e.preventDefault(); openModal1()}}
                                    className="video-btn popup-youtube"
                                >
                                    <i className="flaticon-google-play"></i>
                                </Link>
                            </div>
                        </div>

                        <div className="col-lg-6 col-md-12">
                            <div className="explore-learning-video mb-3">
                                <img src="/images/hackathon/videobg2.jpg" alt="Mayor" />
 
                                <Link 
                                    to="#"
                                    onClick={e => {e.preventDefault(); openModal2()}}
                                    className="video-btn popup-youtube"
                                >
                                    <i className="flaticon-google-play"></i>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default VideosSection