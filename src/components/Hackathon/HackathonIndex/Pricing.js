import React from 'react'
import { Link } from "gatsby";

const packages = [
    {
        name: "Free",
        price: "$0",
        link: '/programs/junior',
        description: [
            '10 users included',
            '2 GB of storage',
        ]
    },
    {
        name: "Pro",
        price: "$15",
        link: '/programs/senior',
        description: [
            '10 users included',
            '2 GB of storage',
        ]
    },
    {
        name: "Enterprise",
        price: "$29",
        link: '/programs/leadership',
        description: [
            '10 users included',
            '2 GB of storage',
        ]
    },
]

const Pricing = () => {
    return (
        <div className="partner-area ptb-70 bg-fafafb">
            <div className="container">
                <div className="row">
                    <div className="col">
                        <h2 className="text-center">Pricing</h2>
                        <p className="text-center mb-5">Quickly build an effective pricing table for your potential customers with this Bootstrap example. It's built with default Bootstrap components and utilities with little customization.</p>
                    </div>
                </div>
                <div className="row">
                    {packages.map( (pkg, i) => {
                        return <div key={i} className="col-12 col-md-4">
                            <div className="card text-center">
                                <h5 className="card-header">{pkg.name}</h5>
                                <div className="card-body">
                                    <h5 className="card-title">{pkg.price}  <small className="text-muted"> / mo</small></h5>
                                    
                                    {pkg.description.map((d, j)=>{
                                        return <p key={j} className="card-text mb-0">{d}</p>
                                    })}
                                    
                                    <Link to={pkg.link} className="default-btn mt-3"> <i className="flaticon-right"></i> Get Started </Link>
                                </div>
                            </div>
                        </div>
                    })}

                </div>
            </div>
        </div>
    )
}

export default Pricing