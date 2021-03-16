import React from 'react';
import { useRecoilState } from 'recoil'
import { collapsedState } from '../../utils/recoil-atoms'
import { Link } from 'gatsby'
import logo from "../../assets/images/logo.png"

const NavbarTwo = () => {
    const [collapsed, setCollapsed] = useRecoilState(collapsedState);

    const toggleNavbar = () => {
        setCollapsed(!collapsed);
    }

    React.useEffect(() => {
        let elementId = document.getElementById("navbar");
        document.addEventListener("scroll", () => {
            if (window.scrollY > 170) {
                elementId.classList.add("is-sticky");
            } else {
                elementId.classList.remove("is-sticky");
            }
        });
        window.scrollTo(0, 0);
    })

    const classOne = collapsed ? 'collapse navbar-collapse' : 'collapse navbar-collapse show';
    const classTwo = collapsed ? 'navbar-toggler navbar-toggler-right collapsed' : 'navbar-toggler navbar-toggler-right';

    return (
        <React.Fragment>
            <div id="navbar" className="navbar-area navbar-style-two">
                <div className="tarn-nav">
                    
                    <div className="container">
                        <nav className="navbar navbar-expand-lg navbar-light">
                            <Link
                                to="/"
                                onClick={() => setCollapsed(true)}
                                className="navbar-brand"
                            >
                                <img src={logo} alt="logo" />
                            </Link>

                            <button
                                onClick={toggleNavbar}
                                className={classTwo}
                                type="button"
                                data-toggle="collapse"
                                data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                                aria-expanded="false"
                                aria-label="Toggle navigation"
                            >
                                <span className="icon-bar top-bar"></span>
                                <span className="icon-bar middle-bar"></span>
                                <span className="icon-bar bottom-bar"></span>
                            </button>

                            <div className={classOne} id="navbarSupportedContent">
                                <ul className="navbar-nav">
                                    <li className="nav-item">
                                        <Link
                                            to="/"
                                            activeClassName="active"
                                            onClick={e => window.location.pathname === "/" ? e.preventDefault() : setCollapsed(true) }
                                            // onClick={(e) => e.preventDefault()}
                                            className="nav-link"
                                        >
                                            Home <i className='bx bx-chevron-down'></i>
                                        </Link>

                                        <ul className="dropdown-menu">
                                            <li className="nav-item">
                                                <Link
                                                    to="/lms"
                                                    activeClassName="active"
                                                    onClick={() => setCollapsed(true)}
                                                    className="nav-link"
                                                >
                                                    LMS
                                                </Link>
                                            </li>
                                        </ul>
                                    </li>

                                    <li className="nav-item">
                                        <Link
                                            to="#"
                                            activeClassName="active"
                                            // onClick={e => window.location.pathname === "/programs" ? e.preventDefault() : setCollapsed(true) }
                                            onClick={(e) => e.preventDefault()}
                                            className="nav-link"
                                        >
                                            Programs <i className='bx bx-chevron-down'></i>
                                        </Link>

                                        <ul className="dropdown-menu">
                                            <li className="nav-item">
                                                <Link
                                                    to="/programs-junior"
                                                    activeClassName="active"
                                                    onClick={() => setCollapsed(true)}
                                                    className="nav-link"
                                                >
                                                    Junior (Grade 3+)
                                                </Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link
                                                    to="/programs-senior"
                                                    activeClassName="active"
                                                    onClick={() => setCollapsed(true)}
                                                    className="nav-link"
                                                >
                                                    Senior (Grade 6+)
                                                </Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link
                                                    to="/programs-leadership"
                                                    activeClassName="active"
                                                    onClick={() => setCollapsed(true)}
                                                    className="nav-link"
                                                >
                                                    Leadership
                                                </Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link
                                                    to="/events"
                                                    activeClassName="active"
                                                    onClick={() => setCollapsed(true)}
                                                    className="nav-link"
                                                >
                                                    Events
                                                </Link>
                                            </li>
                                        </ul>
                                    </li>

                                    <li className="nav-item">
                                        <Link
                                            to="#"
                                            activeClassName="active"
                                            // onClick={e => window.location.pathname === "/about" ? e.preventDefault() : setCollapsed(true) }
                                            onClick={e => e.preventDefault()}
                                            className="nav-link"
                                        >
                                            About <i className='bx bx-chevron-down'></i>
                                        </Link>

                                        <ul className="dropdown-menu">
                                            <li className="nav-item">
                                                <Link
                                                    to="/about-us"
                                                    activeClassName="active"
                                                    onClick={() => setCollapsed(true)}
                                                    className="nav-link"
                                                >
                                                    About Us
                                                </Link>
                                            </li>

                                            <li className="nav-item">
                                                <Link
                                                    to="/community"
                                                    activeClassName="active"
                                                    onClick={() => setCollapsed(true)}
                                                    className="nav-link"
                                                >
                                                    Community
                                                </Link>
                                            </li>

                                            <li className="nav-item">
                                                <Link
                                                    to="/testimonials"
                                                    activeClassName="active"
                                                    onClick={() => setCollapsed(true)}
                                                    className="nav-link"
                                                >
                                                    Testimonials
                                                </Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link
                                                    to="/success-stories"
                                                    activeClassName="active"
                                                    onClick={() => setCollapsed(true)}
                                                    className="nav-link"
                                                >
                                                    Success Stories
                                                </Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link
                                                    to="/team"
                                                    activeClassName="active"
                                                    onClick={() => setCollapsed(true)}
                                                    className="nav-link"
                                                >
                                                    Team
                                                </Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link
                                                    to="/faq"
                                                    activeClassName="active"
                                                    onClick={() => setCollapsed(true)}
                                                    className="nav-link"
                                                >
                                                    FAQ
                                                </Link>
                                            </li>
                                        </ul>
                                    </li>

                                    <li className="nav-item">
                                        <Link
                                            to="/blog"
                                            activeClassName="active"
                                            onClick={e => window.location.pathname === "/blog" ? e.preventDefault() : setCollapsed(true) }
                                            // onClick={e => e.preventDefault()}
                                            className="nav-link"
                                        >
                                            Blog
                                        </Link>

                                    </li>
                                </ul>

                                <div className="others-option d-flex align-items-center">
                                    <div className="option-item">
                                        <Link
                                            to="/schedule"
                                            activeClassName="active"
                                            onClick={() => setCollapsed(true)}
                                            className="default-btn"
                                        >
                                            <i className="flaticon-right"></i> Get Started <span></span>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </nav>
                    </div>
               
                </div>
            </div>
        </React.Fragment>
    );
}

export default NavbarTwo
