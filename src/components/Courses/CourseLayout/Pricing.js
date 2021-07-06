import React from "react";
import { Link } from "gatsby";

const packages = [
  {
    name: "Private",
    price: "$1200",
    link: "/Register",
    description: ["1:1 Instructor", "On-site / Live Zoom"],
  },
  {
    name: "Group",
    price: "$1200",
    link: "/Register",
    description: ["6 students", "On-site / Live Zoom"],
  },
  {
    name: "Normal",
    price: "$15/month",
    link: "/Register",
    description: ["Normal Class", "On-site / Live Zoom"],
  },
  
];

const Pricing = () => {
  return (
    <div className="partner-area ptb-70 ">
      <div className="container">
        <div className="row">
          <div className="col">
            <h2 className="text-center">Our Fees</h2>
            <p className="text-center">
              Our programs are priced to be affordable and help more students
              get into Coding!{" "}
            </p>
            <p className="text-center mb-5">
              All of group courses will have a maximum of 6 students, each class
              is led by an Instructor and a Leader in Training.{" "}
            </p>
          
          </div>
        </div>
        <div className="row">
          {packages.map((pkg, i) => {
            return (
              <div key={i} className="col-12 col-md-4">
                <div className="card text-center">
                  <h5 className="card-header">{pkg.name}</h5>
                  <div className="card-body">
                    <h5 className="card-title">{pkg.price} </h5>

                    {pkg.description.map((d, j) => {
                      return (
                        <p key={j} className="card-text mb-0">
                          {d}
                        </p>
                      );
                    })}

                    <Link to={pkg.link} className="default-btn mt-3">
                      {" "}
                      <i className="flaticon-right"></i>Register{" "}
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

       
      </div>
    </div>
  );
};

export default Pricing;
