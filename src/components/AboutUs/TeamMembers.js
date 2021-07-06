import React from "react";
import { Link } from "gatsby";
import starIcon from "../../assets/images/star-icon.png";

const members = [
  {
    name: "Umar Ahmad",
    bio:`Founder & CEO`,
    image: "/images/team/scientist2.png",
    facebook: "https://facebook.com/umartunes",
    twitter: "https://twitter.com/umartunes",
    instagram: "https://instagram.com/umartunes",
    linkedIn: "https://linkedin.com/in/umartunes",
    github: "https://linkedin.com/in/umartunes",
  },
  {
    name: "Umair Ahmad",
    bio:`Co-founder & COO`,
    image: "/images/team/scientist2.png",
    facebook: "https://facebook.com",
    twitter: "https://twitter.com",
    instagram: "https://instagram.com",
    linkedIn: "https://linkedin.com",
  },
  {
    name: "Coming Soon",
    bio:`Network Specialist`,
    image: "/images/team/scientist3.png",
    facebook: "https://facebook.com",
    twitter: "https://twitter.com",
    instagram: "https://instagram.com",
    linkedIn: "https://linkedin.com",
  },
  {
    name: "Coming Soon",
    bio:`Graphic Designer`,
    image: "/images/team/scientist4.png",
    facebook: "https://facebook.com",
    twitter: "https://twitter.com",
    instagram: "https://instagram.com",
    linkedIn: "https://linkedin.com",
  },

];

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
            return (
              <div key={i} className="col-lg-3 col-sm-6 col-md-6">
                <div className="single-scientist-box">
                  <div className="image">
                    <img src={member.image} alt="about" />
                  </div>
                  <div className="content">
                    <h3>{member.name}</h3>
                    <span>{member.bio}</span>

                    <ul className="social">
                      {member.facebook && <li>
                        <Link
                          to={member.facebook}
                          className="d-block"
                          target="_blank"
                        >
                          <i className="bx bxl-facebook"></i>
                        </Link>
                      </li>}
                      {member.twitter && <li>
                        <Link
                          to={member.twitter}
                          className="d-block"
                          target="_blank"
                        >
                          <i className="bx bxl-twitter"></i>
                        </Link>
                      </li>}
                      {member.instagram && <li>
                        <Link
                          to={member.instagram}
                          className="d-block"
                          target="_blank"
                        >
                          <i className="bx bxl-instagram"></i>
                        </Link>
                      </li>}
                      {member.linkedIn && <li>
                        <Link
                          to={member.linkedIn}
                          className="d-block"
                          target="_blank"
                        >
                          <i className="bx bxl-linkedin"></i>
                        </Link>
                      </li>}
                      {member.github && <li>
                        <Link
                          to={member.github}
                          className="d-block"
                          target="_blank"
                        >
                          <i className="bx bxl-github"></i>
                        </Link>
                      </li>}

                    </ul>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TeamMembers;
