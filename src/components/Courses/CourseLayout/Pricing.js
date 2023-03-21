import React from "react";
import { Link } from "gatsby";

const packages = [

  {
    name: "Normal Online Classes",
    price: "PKR 3000",
    discountPercentage: "80% Off",
    priceBeforeDiscount: "PKR 15000",
    isSkillsDevelopmentProgram: true,
    link: "/courses",
    description: [],
    // description: ["Online VIA Zoom"],
  },
  // {
  //   name: "Online Classes",
  //   price: "Rs. 2500",
  //   discountPercentage: "50% Off",
  //   priceBeforeDiscount: "Rs. 5000",
  //   isOneTimeFee: true,
  //   link: "/apply",
  //   // link: "/register?type=group",
  //   description: ["Online VIA Zoom",],
  // },
  {
    name: "Personal / Private",
    price: "USD 70",
    // discountPercentage: "50% Off",
    // priceBeforeDiscount: "USD 150",
    link: "/apply",
    // link: "/register?type=private",
    description: ["1:1 Instructor", "Onsite & Online VIA Zoom",],
  },

];

// const packages = [

//   {
//     name: "Normal Class",
//     price: "Rs. 2500",
//     discountPercentage: "50% Off",
//     priceBeforeDiscount: "Rs. 5000",
//     link: "/apply",
//     description: ["Face To Face & Online VIA Zoom",],
//   },
//   {
//     name: "Group",
//     price: "Rs. 8000 / student", // $450 per month
//     link: "/apply",
//     // link: "/register?type=group",
//     description: ["6 students", "Face To Face & Online VIA Zoom",],
//   },
//   {
//     name: "Personal / Private",
//     price: "Rs. 12000",
//     link: "/apply",
//     // link: "/register?type=private",
//     description: ["1:1 Instructor", "Face To Face & Online VIA Zoom",],
//   },

// ];

const Pricing = (program) => {
  return (
    <div className="partner-area ptb-70 bg-fafafb">
      <div className="container">
        <div className="row">
          <div className="col">
            <h2 className="text-center">Our Fees</h2>
            <p className="text-center mb-4">
              Our programs are priced to be affordable and help more students
              get into Tech Industry!{" "}
            </p>
            {/* <p className="text-center mb-5">
              All of group courses will have a maximum of 6 students, each class
              is led by an Instructor and a Leader in Training.{" "}
            </p> */}

          </div>
        </div>
        <div className="row">
          {packages.map((pkg, i) => {
            return (
              <div key={i} className="col-12 col-md-6">
                <div className="card text-center mb-3">
                  <h5 className="card-header">{pkg.name}</h5>
                  <div className="card-body">

                    {/* {pkg.discountPercentage
                      ? <p className="card-text mb-0">
                        <del>{pkg.priceBeforeDiscount}</del> <span className="badge badge-success">{pkg.discountPercentage}</span>
                      </p>
                      : <></>
                    } */}


                    {
                      pkg.isSkillsDevelopmentProgram
                        ? <p className="card-text my-1"> All our normal classes are run under the <strong>Skills Development Program</strong> and have very low fees; It helps to spread technology education to more people and produce skilled people in our country!</p>
                        : <h5 className="card-title">{pkg.price} <small className="text-muted"> / month </small></h5>
                    }


                    {pkg.description.map((d, j) => {
                      return (
                        <p key={j} className="card-text mb-0">
                          {d}
                        </p>
                      );
                    })}

                    {
                      pkg.isSkillsDevelopmentProgram
                        ? <Link to={pkg.link} className="default-btn mt-3">
                          {" "}
                          <i className="flaticon-right"></i>Visit Each Course To Learn More about It's Fee
                        </Link>
                        : <Link to={pkg.link} className="default-btn mt-3">
                          {" "}
                          <i className="flaticon-right"></i>Apply Now!
                        </Link>
                    }

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
