import React from "react";
import { Link } from "gatsby";

import shape9 from "../../assets/images/shape/vector-shape9.png";
import shape10 from "../../assets/images/shape/vector-shape10.png";

const StartProject = () => {
	return (
		<div className="project-start-area bg-color ptb-100">
			<div className="container">
				<div className="row align-items-center">

					<div className="col-lg-6 col-md-12">
						<div className="project-start-content">
							<h2>STEM1 Blog</h2>
							<p>
								An opportunity to showcase our students and instructors work along with some ideas we share on Coding. 
              				</p>

							 
						</div>
					</div>

					<div className="col-lg-6 col-md-12">
						<div className="project-start-image">
							<div className="image">
								<img src="/images/blog/blogging-Main.png" alt="BLOG " />
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
