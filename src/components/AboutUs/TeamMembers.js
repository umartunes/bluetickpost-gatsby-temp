import React from 'react'
import { Link } from 'gatsby'
import starIcon from '../../assets/images/star-icon.png'

const members = [
    {
        name: "Sudiksha D.",
        bio: "Hello! I am Sudiksha Devanathan currently studying biomedical engineering at Ryerson University. At STEM1, I teach different courses related to coding, Game Design, and Python. Besides, I’m also involved in some of the administrative work and organize events with STEM1. Camping is one of my favorite hobbies.",
        image: "/images/team/scientist1.png",
        facebook: "https://facebook.com",
        twitter: "https://twitter.com",
        instagram: "https://instagram.com",
        linkedIn: "https://linkedin.com"
    },
    {
        name: "Khushmeet Kaur",
        bio: "Hello! I am Khushmeet Kaur, a Computer Sciences student, and a technology enthusiast. I love to teach and at STEM1 I teach kids about MakeCode, HTML, and 3D Design. Besides teaching, I love to build, wire, and program robots. Under my supervision, your child will not only learn coding but will also love it.",
        image: "/images/team/scientist2.png",
        facebook: "https://facebook.com",
        twitter: "https://twitter.com",
        instagram: "https://instagram.com",
        linkedIn: "https://linkedin.com"
    },
    {
        name: "Nivey Renga",
        bio: "Hy there! I am Nivey Renga, a Grade 12 student at Rick Hansen Secondary School. At STEM1 I am responsible for designing the curriculum for GameDesign and Python courses. In addition to that, I am also involved in planning annual Junior Hackathon events. Movies and television shows are where I spend my free time. Except for horror movies, I love all genres.",
        image: "/images/team/scientist3.png",
        facebook: "https://facebook.com",
        twitter: "https://twitter.com",
        instagram: "https://instagram.com",
        linkedIn: "https://linkedin.com"
    },
    {
        name: "Jasmine Gu",
        bio: "Hello, my name is Jasmine Gu. I am a student in the IB program at St Francis Xavier. My love for coding started when I studied some courses at the school level. Other than those courses, I mostly study coding by myself. At STEM1 I am the instructor for Python and Game Design courses. I love reading books in my leisure time.",
        image: "/images/team/scientist4.png",
        facebook: "https://facebook.com",
        twitter: "https://twitter.com",
        instagram: "https://instagram.com",
        linkedIn: "https://linkedin.com"
    },

]

const TeamMembers = () => {
    return (
        <section className="scientist-area bg-color ptb-70">
            <div className="container">
                <div className="section-title">
                    <span className="sub-title">
                        <img src={starIcon} alt="about" />
                        Team Members
                    </span>
                    <h2>Meet Our Team</h2>
                    {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.</p> */}
                </div>

                <div className="row">
                    {members.map((member, i) => {

                        return <div key={i} className="col-lg-3 col-sm-6 col-md-6">
                            <div className="single-scientist-box">
                                <div className="image">
                                    <img src={member.image} alt="about" />
                                </div>
                                <div className="content">
                                    <h3>{member.name}</h3>
                                    <span>{member.bio}</span>

                                    <ul className="social">
                                        <li>
                                            <Link to={member.facebook} className="d-block" target="_blank">
                                                <i className='bx bxl-facebook'></i>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to={member.twitter} className="d-block" target="_blank">
                                                <i className='bx bxl-twitter'></i>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to={member.instagram} className="d-block" target="_blank">
                                                <i className='bx bxl-instagram'></i>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to={member.linkedIn} className="d-block" target="_blank">
                                                <i className='bx bxl-linkedin'></i>
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    })}

                </div>
            </div>
        </section>
    )
}

export default TeamMembers