import React from "react";
import { Link } from "gatsby";

import shape9 from "../../../assets/images/shape/vector-shape9.png";
import shape10 from "../../../assets/images/shape/vector-shape10.png";

const StartProject = () => {
	return (
		<div className="project-start-area bg-color ptb-100">
			<div className="container">
				<div className="row align-items-center">

					<div className="col-lg-6 col-md-12">
						<div className="project-start-content">
							<h2>Volunteer Page Banner</h2>
							<p>
								Continue your learning using our state of the art Learning
								Management System.
              				</p>

							<Link to="https://lms.stem.one" className="default-btn">
								<i className="flaticon-web"></i>
								Call to Action
							<span></span>
							</Link>
						</div>
					</div>

					<div className="col-lg-6 col-md-12">
						<div className="project-start-image">
							<div className="image">
								<img src="/images/lms/Python-Course.png" alt="LMS Course" />
							</div>
						</div>
					</div>


				</div>
			</div>

			<div className="vector-shape9">
				<img src={shape9} alt="about" />
			</div>
			<div className="vector-shape10">
				<img src={shape10} alt="about" />
			</div>
		</div>
	);
};

export default StartProject;
