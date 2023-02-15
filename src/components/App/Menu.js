import React from "react";
import { Link } from "gatsby";
import { useRecoilState } from "recoil";
import { collapsedState } from "../../utils/recoil-atoms";

export default function Menu() {
	const [collapsed, setCollapsed] = useRecoilState(collapsedState);
	// console.log(collapsed)

	return (
		<ul className="navbar-nav">
			<li className="nav-item">
				<Link
					to="/"
					activeClassName="active"
					onClick={(e) =>
						window.location.pathname === "/"
							? e.preventDefault()
							: setCollapsed(true)
					}
					// onClick={(e) => e.preventDefault()}
					className="nav-link"
				>
					Home <i className="bx bx-chevron-down"></i>
				</Link>

				<ul className="dropdown-menu">
					<li className="nav-item">
						<Link
							to="https://lms.techna.pk"
							activeClassName="active"
							onClick={() => setCollapsed(true)}
							className="nav-link"
							// target="_blank"
						>
							LMS
						</Link>
					</li>

					<li className="nav-item">
						<Link
							to="/play"
							activeClassName="active"
							onClick={() => setCollapsed(true)}
							className="nav-link"
						>
							Play
						</Link>
					</li>
				</ul>
			</li>

			<li className="nav-item">
				<Link
					to="/courses"
					activeClassName="active"
					onClick={e => window.location.pathname === "/courses" ? e.preventDefault() : setCollapsed(true)}
					// onClick={(e) => e.preventDefault()}
					className="nav-link"
				>
					Courses <i className="bx bx-chevron-down"></i>
				</Link>
				<ul className="dropdown-menu">
				<li className="nav-item">
						<Link
							to="/courses"
							activeClassName="active"
							onClick={() => setCollapsed(true)}
							className="nav-link"
						>
							All Courses
						</Link>
						<Link
							to="/courses/fee"
							activeClassName="active"
							onClick={() => setCollapsed(true)}
							className="nav-link"
						>
							Our Fee
						</Link>
					</li>

				</ul>
				{/* <ul className="dropdown-menu">
					<li className="nav-item">
						<Link
							to="/courses/junior"
							activeClassName="active"
							onClick={() => setCollapsed(true)}
							className="nav-link"
						>
							Junior (Grade 3+)
            			</Link>
					</li>
					<li className="nav-item">
						<Link
							to="/courses/senior"
							activeClassName="active"
							onClick={() => setCollapsed(true)}
							className="nav-link"
						>
							Senior (Grade 6+)
            			</Link>
					</li>
					<li className="nav-item">
						<Link
							to="/courses/leadership"
							activeClassName="active"
							onClick={() => setCollapsed(true)}
							className="nav-link"
						>
							Leaders (Grade 7+)
            			</Link>
					</li>
				</ul> */}
			</li>
			
			<li className="nav-item">
				<Link
					to="/services"
					activeClassName="active"
					onClick={(e) =>
						window.location.pathname === "/services"
							? e.preventDefault()
							: setCollapsed(true)
					}
					// onClick={(e) => e.preventDefault()}
					className="nav-link"
				>
					Services <i className="bx bx-chevron-down"></i>
				</Link>

				<ul className="dropdown-menu">

					<li className="nav-item">
						<Link
							to="/services/website-development"
							activeClassName="active"
							onClick={() => {
								setCollapsed(true)
							}}
							className="nav-link"
						>
							Web Design & Development
						</Link>
					</li>

					{/* <li className="nav-item">
						<Link
							to="/services/logo-designing"
							activeClassName="active"
							onClick={() => {
								setCollapsed(true)
							}}
							className="nav-link"
						>
							Logo Designing
						</Link>
					</li>

					<li className="nav-item">
						<Link
							to="/services/business-stationery-designing"
							activeClassName="active"
							onClick={() => {
								setCollapsed(true)
							}}
							className="nav-link"
						>
							Business Card, Letterhead, and Stationery Designing
						</Link>
					</li> */}


				</ul>

			</li>

			{/* <li className="nav-item">
				<Link
					to="/services"
					activeClassName="active"
					onClick={e => window.location.pathname === "/services" ? e.preventDefault() : setCollapsed(true)}
					// onClick={(e) => e.preventDefault()}
					className="nav-link"
				>
					Services 
				</Link>

			</li> */}

			{/* <li className="nav-item">
				<Link
					to="/products"
					activeClassName="active"
					onClick={e => window.location.pathname === "/products" ? e.preventDefault() : setCollapsed(true)}
					// onClick={(e) => e.preventDefault()}
					className="nav-link"
				>
					Products 
				
				</Link>

			</li> */}

			<li className="nav-item">
				<Link
					to="/about-us"
					activeClassName="active"
					onClick={e => window.location.pathname === "/about-us" ? e.preventDefault() : setCollapsed(true)}
					// onClick={(e) => e.preventDefault()}
					className="nav-link"
				>
					About
				</Link>


			</li>
			{/* <li className="nav-item">
				<Link
					to="/blog"
					activeClassName="active"
					onClick={e => window.location.pathname === "/blog" ? e.preventDefault() : setCollapsed(true) }
					// onClick={(e) => e.preventDefault()}
					className="nav-link"
				>
					Blog 
				</Link>
			</li> */}
		</ul>
	);
}
