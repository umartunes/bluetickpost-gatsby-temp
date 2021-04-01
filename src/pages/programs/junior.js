import React from 'react'
import Layout from "../../components/App/Layout"
import NavbarThree from "../../components/App/NavbarThree"
import Footer from "../../components/App/Footer"

import PageBanner from '../../components/Programs/ProgramLayout/PageBanner'
import OurServices from '../../components/Programs/ProgramLayout/OurServices'
import CourseDetailsContent from '../../components/Programs/ProgramLayout/CourseDetailsContent'
// import RelatedCourses from '../../components/Programs/ProgramLayout/RelatedCourses'

const program = {
    title: "Junior (Grade 3+)",
    description: `Children are now growing up with technology as axxxxxxxxxx. From asking Alexa to play their favorite song to finding answers to almost anything in Google, they all grow up. Therefore, it is the responsibility of parents to familiarize them with technological advancements.`,
    certification: `We gamify the learning through badges to recognize the growth of our students. Students will be awarded a certificate of completion after they finish every course. Students will have to submit a presentation or project, required to graduate the program.`,
    courseFor: `Our Junior program is designed for Grade 3+ students to teach them basics of coding. This program offers 10 levels with weekly 1 hour class. At the end of each course, we conduct exams to assess the level of learning.`,

    price: "$84/month",
    duration: "12 - 16 Weeks",
    courses: "10",
    support: "12 - 18 Weeks",
    reports: "Quarterly",
}

const curriculum = [
    {
        heading: `Introduction to Coding 101`,
        description: `Learn the basics of coding. The use of different languages and basic command styles that are common in the world of programming languages are included in this course.`
    },
    {
        heading: `Animation  101`,
        description: `Animations are a great way to learn difficult concepts. Learn programming to create interactive drawings and animations.`
    },
    {
        heading: `Scratch  101`,
        description: `Let your children learn scratch, a programming language, to create their own stories, animations, and games.`
    },
    {
        heading: `HTML 101`,
        description: `Learn the fundamentals of HTML and design headings, paragraphs, and links. Let your child dive into the world of website and application development.`
    },
    {
        heading: `Cyber Safety 101`,
        description: `Children are exposed to a lot of risks while using the internet. Teach your kids the basics of Cyber Safety to ensure safe browsing.`
    },
    {
        heading: `Game Design 101`,
        description: `Do you love playing games? They are certainly a great way to boost your skills. Learn to design your games through our Game Design 101 course.`
    },
    {
        heading: `VR Vex 101`,
        description: `Love robots and are interested in how they work? Through our VR Vex, learn how to code a virtual robot based on block-based coding.`
    },
    {
        heading: `TinkerCad 101`,
        description: `Want to design 3D models of your imaginations? Lucky for you, we have got the right thing for you. Use TinkerCAD course to do just that!`
    },
    {
        heading: `Python 101`,
        description: `Learn the basics of python language and create software for your everyday small tasks such as calculating percentages and average.`
    },
    {
        heading: `Hacking 101`,
        description: `Hacking is not always bad as it is generally considered. Teach your child the basics of ethical hacking to protect them from online dangers.`
    },
]

const Details = () => {

    return (
        <Layout>
            <NavbarThree />
            <PageBanner
                pageTitle={program.title}
                homePageText="Home"
                homePageUrl="/"
                activePageText="Junior program details"
            />
            <CourseDetailsContent program={program} curriculum={curriculum} />
            {/* <RelatedCourses /> */}
            <OurServices />
            <Footer />
        </Layout>
    );
}

export default Details