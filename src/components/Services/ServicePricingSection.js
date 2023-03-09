import React from 'react'
import { Link } from 'gatsby'

import starIcon from '../../assets/images/star-icon.png'

const ServicePricingSection = ({ servicePackages }) => {

    const getFeatureMarker = (feature) => {
        let marker;

        if (feature === true) {
            marker = <td className="item-check"><i className='bx bx-check'></i></td>
        } else if (feature === false) {
            marker = <td><span style={{cursor: 'context-menu'}}>➖</span></td>
        } else {
            marker = <td>{feature}</td>
        }

        return marker;
    }


    return (
        <React.Fragment>
            <div className="membership-levels-area ptb-100">
                <div className="container">

                    <div className="section-title" style={{ maxWidth: `100%` }}>
                        <span className="sub-title">
                            <img src={starIcon} alt="contact" />
                            Pricing & Packages
                        </span>

                        <h2>{servicePackages.title}</h2>
                        <p dangerouslySetInnerHTML={{ __html: servicePackages.description }}></p>

                    </div>

                    <div className="membership-levels-table table-responsive">
                        <table className="table table-striped">
                            <thead>
                                <tr>
                                    {/* <th>
                                        <span className="price">Packages</span>
                                    </th> */}

                                    <th colSpan={2} style={{ whiteSpace: 'normal', verticalAlign: 'text-top' }}>
                                        <span className="title">{servicePackages.pricing.basic.title}</span>
                                        <span className="title"> <strike>{servicePackages.pricing.basic.price}</strike> <span className="badge badge-warning d-inline-block">{servicePackages.pricing.basic.saving}</span> </span>
                                        <span className="price"> {servicePackages.pricing.basic.discountedPrice} </span>
                                        <br />
                                        <span style={{ fontSize: 13 }} className="desc" dangerouslySetInnerHTML={{ __html: servicePackages.pricing.basic.description }}></span>
                                    </th>

                                    <th style={{ whiteSpace: 'normal', verticalAlign: 'text-top' }}>
                                        <span className="title">{servicePackages.pricing.standard.title}</span>
                                        <span className="title"> <strike>{servicePackages.pricing.standard.price}</strike> <span className="badge badge-warning d-inline-block">{servicePackages.pricing.standard.saving}</span> </span>
                                        <span className="price"> {servicePackages.pricing.standard.discountedPrice} </span>
                                        <br />
                                        <span style={{ fontSize: 13 }} className="desc" dangerouslySetInnerHTML={{ __html: servicePackages.pricing.standard.description }}></span>
                                    </th>

                                    <th style={{ whiteSpace: 'normal', verticalAlign: 'text-top' }}>
                                        <span className="title">{servicePackages.pricing.premium.title}</span>
                                        <span className="title"> <strike>{servicePackages.pricing.premium.price}</strike> <span className="badge badge-warning d-inline-block">{servicePackages.pricing.premium.saving}</span> </span>
                                        <span className="price"> {servicePackages.pricing.premium.discountedPrice} </span>
                                        <br />
                                        <span style={{ fontSize: 13 }} className="desc" dangerouslySetInnerHTML={{ __html: servicePackages.pricing.premium.description }}></span>
                                    </th>

                                </tr>
                            </thead>
                            <tbody>

                                {servicePackages.features.map((feature, i) => {
                                    return <>
                                        <tr key={i}><td colSpan={4}>{feature.title}</td></tr>
                                        <tr>
                                            <td></td>
                                            {getFeatureMarker(feature.basic)}
                                            {getFeatureMarker(feature.standard)}
                                            {getFeatureMarker(feature.premium)}
                                        </tr>
                                    </>
                                })}

                                <tr className='d-none d-md-table-row'>
                                    <td></td>
                                    <td>
                                        <Link to="/services/contact" target="_blank" className="select-btn">
                                            Order Now
                                        </Link>
                                    </td>
                                    <td>
                                        <Link to="/services/contact" target="_blank" className="select-btn">
                                            Order Now
                                        </Link>
                                    </td>
                                    <td>
                                        <Link to="/services/contact" target="_blank" className="select-btn">
                                            Order Now
                                        </Link>
                                    </td>
                                </tr>

                                <tr className='d-table-row d-md-none'>
                                    <td className='p-0' colSpan={4}>
                                        <Link to="/services/contact" target="_blank" className="select-btn w-100 text-center" >
                                            Order Now
                                        </Link>
                                    </td>
                                </tr>

                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

        </React.Fragment>
    )
}

export default ServicePricingSection