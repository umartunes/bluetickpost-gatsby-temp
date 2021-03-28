import React from "react";
import UpcomingEventTimer from "../AllHacks/UpcomingEventTimer";
import EventSidebar from "./EventSidebar";
import details from "../../assets/images/events/events-details.jpg";

const Peel2021 = () => {
  return (
    <section className="events-details-area pb-100">
      <div className="events-details-image">
        <img src={details} alt="details" />

        <UpcomingEventTimer />
      </div>

      <div className="container">
        <div className="row">
          <div className="col-lg-8 col-md-12">
            <div className="events-details-header">
              <ul>
                <li>
                  <i className="bx bx-calendar"></i>Sat, 10 April, 2021
                </li>
                <li>
                  <i className="bx bx-map"></i>Virtual event
                </li>
                <li>
                  <i className="bx bx-time"></i>10.00 AM
                </li>
              </ul>
            </div>

            <div className="events-details-location">
              <iframe
                title="Event VIctoria"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.9476519598093!2d-73.99185268459418!3d40.74117737932881!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a3f81d549f%3A0xb2a39bb5cacc7da0!2s175%205th%20Ave%2C%20New%20York%2C%20NY%2010010%2C%20USA!5e0!3m2!1sen!2sbd!4v1588746137032!5m2!1sen!2sbd"
              ></iframe>
            </div>

            <div className="events-details-desc">
              <h3>About The Event</h3>
              <p>
                Jr.Hacks event goal is to spark students’ intellectual curiosity
                towards STEM. Students will engage in day long activities that
                encourage problem solving and Critical thinking. There would be
                parents workshops hosted by industry professionals on education,
                extracurricular, and entrepreneurship
              </p>
              <p>
                We are also supporting our local community by having a goal to
                raise $5000 for the Peel Learning Foundation to help students
                facing challenges regarding food insecurity, lack of school
                supplies and other barriers brought on by this pandemic.
              </p>
              <h3>Where the event?</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
                ipsum suspendisse ultrices gravida. Risus commodo viverra
                maecenas accumsan lacus vel facilisis.
              </p>
              <h3>Who this event is for?</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
                ipsum suspendisse ultrices gravida. Risus commodo viverra
                maecenas accumsan lacus vel facilisis.
              </p>
            </div>
          </div>

          <div className="col-lg-4 col-md-12">
            <EventSidebar />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Peel2021;
