import React from "react";
import service1 from "../../../assets/images/services/service1.png";
import service2 from "../../../assets/images/services/service2.png";
import starIcon from "../../../assets/images/star-icon.png";

import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemPanel,
  AccordionItemButton,
} from "react-accessible-accordion";

const timings = [
  {
    heading: `10:00 - 10:30 - Opening Ceremonies `,
    content: `The day is here! Join us for the opening ceremonies using the general meeting link sent in the registration package. Listen to our surprise keynote speaker as you await for the big theme reveal.`,
  },
  {
    heading: `10:35 - 11:00 - Meet your Team!`,
    content: `Break off into your assigned groups and get to know your fellow team members as well as your Team Lead by engaging in fun activities together`,
  },
  {
    heading: `11:00 - 12:30 - Activity 1 (Coding Challenge)`,
    content: `Dive into your surprise Coding Challenge and find ways to apply your team’s skills to  efficiently complete the activity before the clock runs out!`,
  },
  {
    heading: `11:00 - 12:30 - Activity 1 (Coding Challenge)`,
    content: `Dive into your surprise Coding Challenge and find ways to apply your team’s skills to  efficiently complete the activity before the clock runs out!`,
  },
  {
    heading: `12:30 - 1:00 - Lunch`,
    content: `Time for a break! Grab some food and drinks, relax and join us back at 1:00 pm.`,
  },
  {
    heading: `1:00 - 2:30 - Activity 2 (Innovation Challenge)`,
    content: `Take your creativity to the next level as you and your team members undertake the Innovation Challenge to design and create Tomorrow's Solutions to Today's Problems!`,
  },
  {
    heading: `2:30 - 3:00 - Finalize Team Presentation & Submit `,
    content: `Record a 3-5 min presentation as a team based on your innovative solution. Keep an eye on our social media for honourable mentions!`,
  },
  {
    heading: `3:00 - 4:00 - Quiz`,
    content: `Put your knowledge to the test as you partake in our highly anticipated quiz competition. Compete against other teams in your grade and answer as many questions together to earn more points for your team!`,
  },
  {
    heading: `4:00 - 4:30 - Raffle & Talent Showcase`,
    content: `Sit back, grab your popcorn, and enjoy our STEAM Talent Showcase from participants of the competition! Plus, you might also be one of our many Raffle Ticket winners! Stay tuned!`,
  },
  {
    heading: `4:30 - 5:00 - Awards & Closing Ceremonies`,
    content: `Hang tight, the moment has finally come to wrap up our 3rd Annual Jr. Hacks and reveal our hackathon winners!`,
  },
];

const StudentSchedule = () => {
  return (
    <React.Fragment>
      {/* Service Left Image Style */}
      <div className="about-area ptb-100 bg-fafafb">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12">
              <div className="about-img">
                <img src={service1} alt="service" />
              </div>
            </div>

            <div className="col-lg-6 col-md-12">
              <div className="about-content">
                <div className="content">
                  <span className="sub-title">
                    <img src={starIcon} alt="icon" /> Student Schedule
                  </span>
                </div>
              </div>
              <div className="faq-accordion">
                <Accordion>
                  {timings.map((t, i) => {
                    return (
                      <AccordionItem key={i}>
                        <AccordionItemHeading>
                          <AccordionItemButton>{t.heading}</AccordionItemButton>
                        </AccordionItemHeading>
                        <AccordionItemPanel>
                          <p
                            dangerouslySetInnerHTML={{ __html: t.content }}
                          ></p>
                        </AccordionItemPanel>
                      </AccordionItem>
                    );
                  })}
                </Accordion>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End Service Left Image Style */}
    </React.Fragment>
  );
};

export default StudentSchedule;
