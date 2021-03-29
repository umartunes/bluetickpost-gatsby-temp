import React from "react";
import { Link } from "gatsby";
import Loadable from '@loadable/component'
const OwlCarousel = Loadable(() => import('react-owl-carousel3'))

const spnsrs = [
	{
		name: "Chandu Andhe",
		image: "/images/sponsors/image1.jpg",
		headline: "Peel Region",
		facebook: "https://facebook.com",
		twitter: "https://twitter.com",
		instagram: "https://instagram.com",
		linkedIn: "https://linkedin.com"
	},
	{
		name: "Sponsor 2",
		image: "/images/sponsors/image2.jpg",
		headline: "Hmmmmm....",
		facebook: "https://facebook.com",
		twitter: "https://twitter.com",
		instagram: "https://instagram.com",
		linkedIn: "https://linkedin.com"
	},
	{
		name: "Sponsor 3",
		image: "/images/sponsors/image1.jpg",
		headline: "Hmmmmm....",
		facebook: "https://facebook.com",
		twitter: "https://twitter.com",
		instagram: "https://instagram.com",
		linkedIn: "https://linkedin.com"
	},
	{
		name: "Sponsor 4",
		image: "/images/sponsors/image2.jpg",
		headline: "Hmmmmm....",
		facebook: "https://facebook.com",
		twitter: "https://twitter.com",
		instagram: "https://instagram.com",
		linkedIn: "https://linkedin.com"
	},
]

const Sponsors = () => {

	// Owl Carousel
	const [display, setDisplay] = React.useState(false);

	React.useEffect(() => {
		setDisplay(true);
	}, [])

	return (
		<div className="scientist-area bg-fafafb pt-100 pb-70">
			<div className="container">
				<div className="section-title">
					<h2>Event Sponsors</h2>
				</div>
				<div className="row">
					<div className="col">

						{display && <OwlCarousel
							className="owl-theme"
							loop margin={20} nav={false} dots={false} autoplay={true} autoplayTimeout={3000}
						>
							{spnsrs.map((sponsor, i) => {

								return <div key={i} class="item">
									<div className="single-scientist-item-box">
										<div className="image">
											<img src={sponsor.image} alt="event" />

											<ul className="social">
												<li>
													<Link to={sponsor.facebook} className="d-block">
														<i className="bx bxl-facebook"></i>
													</Link>
												</li>
												<li>
													<Link to={sponsor.twitter} className="d-block">
														<i className="bx bxl-twitter"></i>
													</Link>
												</li>
												<li>
													<Link to={sponsor.instagram} className="d-block">
														<i className="bx bxl-instagram"></i>
													</Link>
												</li>
												<li>
													<Link to={sponsor.linkedIn} className="d-block">
														<i className="bx bxl-linkedin"></i>
													</Link>
												</li>
											</ul>
										</div>
										<div className="content">
											<h3>{sponsor.name}</h3>
											<span>{sponsor.headline}</span>
										</div>
									</div>
								</div>
							})}

						</OwlCarousel>}

					</div>
				</div>

			</div>
		</div>
	);
};

export default Sponsors;
