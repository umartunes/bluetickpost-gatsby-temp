import React from 'react'
import starIcon from '../../../assets/images/star-icon.png'

import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemPanel,
    AccordionItemButton
} from 'react-accessible-accordion'

const questions = [
    {
        question: `Previous Experience`,
        answer: `Students don't need previous STEM, coding, or robotics experience. `
    },
    {
        question: `Teams`,
        answer: `Students can form teams on their own or STEM1 will be able to assign teams to them based on the Grade level and school information. If you would like to form your own teams, each student must register separately and must be from the same grade. `
    },
    {
        question: `Materials Required`,
        answer: `We would expect students to have access to a computer, internet, and some basic stationery and household items to complete the challenges.`
    },
    {
        question: `Where to Connect`,
        answer: `Each team in the Hackathon is led by our Trained Team Mentors. They will be providing a Google Meet link specific to the team and also a group on the website where they will share information and updates.For general updates about Jr.Hacks 2021, follow our Instagram handle - @stem1ca`
    },
    {
        question: `Time`,
        answer: `Hackathon is a day-long event with several breaks to refresh. Students are expected to be available from 10AM to 5 PM for the event.`
    },
    {
        question: `Benefits of Jr.Hacks 2021`,
        answer: `Working in team stimulates leadership, communication, & interpersonal skills.
        A day filled with STEM learning and activities.
        SWAG Bags with a cool t-shirt, stickers, and goodies from our sponsors`
    },

]

const HackathonExpectations = () => {
    return (
        <React.Fragment>
            {/* Service Left Image Style */}
            <div className="about-area ptb-100 bg-fafafb">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6 col-md-12">
                            <div className="about-content">
                                <div className="content">
                                    <span className="sub-title">
                                        <img src={starIcon} alt="icon" /> Expectations from Student
                                    </span>

                                </div>
                            </div>
                            <div className="faq-accordion">
                                <Accordion>
                                    {questions.map((faq, i) => {
                                        return <AccordionItem key={i}>
                                            <AccordionItemHeading>
                                                <AccordionItemButton>
                                                    {faq.question}
                                                </AccordionItemButton>
                                            </AccordionItemHeading>
                                            <AccordionItemPanel>
                                                <p dangerouslySetInnerHTML={{ __html: faq.answer }}></p>
                                            </AccordionItemPanel>
                                        </AccordionItem>
                                    })}
                                </Accordion>
                            </div>
                        </div>

                        <div className="col-lg-6 col-md-12">
                            <div className="about-img">
                                <img src="/images/hackathon/volunteers2020.jpg" alt="service" />
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            {/* End Service Left Image Style */}

        </React.Fragment>
    )
}

export default HackathonExpectations;