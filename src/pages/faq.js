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
        answer: `No, your child doesn’t need prior coding experience for Junior and Senior Programs. Only students who graduate from our Senior Program can enrol in STEM1’s Leader Program.`
    },
    {
        question: `If my child has finished Junior Program, do they need to learn every course in the Senior Program?`,
        answer: `No, they will be assessed for their knowledge and directly enrolled at level 6 or 7 of the Senior Program.`
    },
    {
        question: `Can my child directly enrol in the Leader Program?`,
        answer: `Only students who graduate from our Senior Program can enrol in STEM1’s Leader Program.`
    },
    {
        question: `Will my child have to meet his peers personally every month?`,
        answer: `Junior and Senior Programs are conducted virtually and they don’t need to meet in-person. Students enrolled in the Leader Program should meet once a month for leadership workshops.`
    },
    {
        question: `How do you charge your fees?`,
        answer: `STEM1 offers two payment options - monthly and yearly. Monthly costs $100, which you must pay at the beginning of every month. 
        <br><br>Yearly fee costs $1000, which needs to be paid in advance. If you’re unsatisfied with our programs, we offer a money back guarantee.`
    },
    {
        question: `What if my child misses a class?`,
        answer: `STEM1 only conducts one class per week. We highly encourage our students to not miss any class as we do not conduct any backup classes. All information will be available on their LMS. If your child misses more than 3 classes per course, they will have to re-do the course.`
    },
    {
        question: `Will my child get to participate in activities other than the coursework? `,
        answer: `Yes, STEM1 is a for-community enterprise. Our students actively help build websites for local non-profitable organizations.`
    },
]

const FAQ = () => {

    return (
        <Layout>
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