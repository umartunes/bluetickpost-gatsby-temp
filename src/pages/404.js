import React from 'react'
import {Link} from 'gatsby'
import logo from '../assets/images/logo.png'

const FourZeroFour = () => {
 

    return (
        <React.Fragment>
            <div className="coming-soon-area">
                <div className="d-table">
                    <div className="d-table-cell">
                        <div className="coming-soon-content">

                            <Link to="/" className="logo">
                                <img src={logo} alt="logo" />
                            </Link>

                            <h1 className="my-5 display-1">404</h1>

                            <h2>Page Not Found</h2>

                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default FourZeroFour
