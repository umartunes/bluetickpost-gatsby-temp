import React from 'react'
import { Link } from 'gatsby'
import { useRecoilState } from 'recoil'
import { collapsedState } from '../../utils/recoil-atoms'

export default function Menu() {
    const [collapsed, setCollapsed] = useRecoilState(collapsedState);
    console.log(collapsed)

    return (


        <ul className="navbar-nav">


            <li className="nav-item">
                <Link
                    to="/"
                    activeClassName="active"
                    onClick={e => window.location.pathname === "/" ? e.preventDefault() : setCollapsed(true)}
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
                            Leaders (Grade 7+)
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
                    Jr.Hacks <i className='bx bx-chevron-down'></i>
                </Link>

                <ul className="dropdown-menu">
                    <li className="nav-item">
                        <Link
                            to="/Peel2021"
                            activeClassName="active"
                            onClick={() => setCollapsed(true)}
                            className="nav-link"
                        >
                            Jr.Hacks - Peel
                                                </Link>
                    </li>

                    <li className="nav-item">
                        <Link
                            to="/community"
                            activeClassName="active"
                            onClick={() => setCollapsed(true)}
                            className="nav-link"
                        >
                            Volunteer
                                                </Link>
                    </li>

                    <li className="nav-item">
                        <Link
                            to="/success-stories"
                            activeClassName="active"
                            onClick={() => setCollapsed(true)}
                            className="nav-link"
                        >
                            Past Events
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


        </ul>

    )
}
