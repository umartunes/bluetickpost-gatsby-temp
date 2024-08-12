import React from 'react'
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemPanel,
    AccordionItemButton
} from 'react-accessible-accordion'
import Layout from "../components/App/Layout"
import NavbarThree from "../components/App/NavbarThree"
import PageBanner from '../components/Common/PageBanner'
import Footer from "../components/App/Footer"
import StartProject from '../components/Common/StartProject'

const faqs = [
    {
        question: `Does my child need previous coding experience?`,
        answer: `No, your child doesn’t need prior coding experience for Junior and Senior Programs. Only students who graduate from our Senior Program can enrol in BlueTickPost’s Leader Program.`
    },
    // {
    //     question: `Who can participate in Jr.Hacks 2021?`,
    //     answer: `Peel Students from grade 2 to 8 are eligible to participate. No prior hackathon or coding experience required.`
    // },
    {
        question: `Will my child have to work in groups or alone?`,
        answer: `BlueTickPost is designed to foster leadership and communication skills in children. All participants will be divided into groups and guided by a skilled mentor to complete the challenge.`
    },
    // {
    //     question: `Where and when can I pickup the SWAG bag?`,
    //     answer: `SWAG bags will be available for pickup from Wednesday Noon till Friday 2PM at select Meridian branches & Streetsville HomeHardware store.`
    // },
    {
        question: `How will you make sure my child can access the information for the event?`,
        answer: `Students will be using our learning platform. Our Mentors will contact them before the event to make sure everything is working fine.`
    },
    {
        question: `If my child has finished Junior Program, do they need to learn every course in the Senior Program?`,
        answer: `No, they will be assessed for their knowledge and directly enrolled at level 6 or 7 of the Senior Program.`
    },
    {
        question: `Can my child directly enrol in the Leader Program?`,
        answer: `Only students who graduate from our Senior Program can enrol in BlueTickPost’s Leader Program.`
    },
    {
        question: `How do you charge your fees?`,
        answer: `BlueTickPost offers two types of courses - Monthly Fee Courses and One-time Fee Courses. 
        <br><br>
        For Monthly Fee Courses: The 1st fee for the courses is submitted at the time of submission of the admission form, and then at the beginning of every month.
        <br>
        For One-time Fee Courses: The course enrollment fees are submitted at the time of attestation and submission of the admission form.`
    },
    {
        question: `What if my child misses a class?`,
        answer: `We highly encourage our students to not miss any class as we do not conduct any backup classes. All information will be available on their LMS. If your child misses more than 3 classes per course, they will have to re-do the course.`
    },
    {
        question: `Will my child get to participate in activities other than the coursework? `,
        answer: `Yes, BlueTickPost is a for-community enterprise. Our students actively help build websites for local non-profitable organizations.`
    },
]

const FAQ = () => {

    return (
        <Layout >
            <NavbarThree />
            <PageBanner
                pageTitle="FAQ"
                homePageText="Home"
                homePageUrl="/"
                activePageText="FAQ"
            />
            <div className="ptb-100">
                <div className="container">
                    <div className="faq-accordion">
                        <Accordion>
                            {faqs.map((faq, i) => {
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
            </div>
            <StartProject />
            <Footer />
        </Layout>
    );
}

export default FAQ