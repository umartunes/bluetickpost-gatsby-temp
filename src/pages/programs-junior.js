import React, { useState } from 'react'
import Layout from "../components/App/Layout"
import NavbarThree from "../components/App/NavbarThree"

import Footer from "../components/App/Footer"
import PageBanner from '../components/ProgramsJunior/PageBanner'
import OurServices from '../components/ProgramsJunior/OurServices'
import CourseDetailsContent from '../components/ProgramsJunior/CourseDetailsContent'
import RelatedCourses from '../components/ProgramsJunior/RelatedCourses'

const Details = () => {

    const [program, setPtogram] = useState({
        title: "Junior (Grade 3+)",
        description: `With the 4th industrial revolution, children are now exposed to technology more than ever. From asking Alexa to play their favorite poem and automatically customizing their coffee drinks, they all grow up. Therefore, it is the responsibility of the parents to familiarize them with the technological advancements.`,
        certification: `We gamify the learning through badges to recognize the growth of our students. They will be awarded a certificate of completion after they finish every course. Students will have to submit a presentation or project, required to graduate the program.`,
        courseFor: `Our Junior program is designed for 3 to 5 graders to teach them the basics of coding. This program offers 10 courses and weekly classes are conducted for each course. At the end of each course, we conduct exams to assess the level of learning.`,
        
        price: "$84/month",
        duration: "12 - 16 Weeks",
        courses: "10",
        support: "12 - 18 Weeks",
        reports: "Quarterly",
    })

    const [curriculum, setCurriculum] = useState([
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
    ])

    return (
        <Layout>
            <NavbarThree />
            <PageBanner
                pageTitle={program.title}
                homePageText="Home"
                homePageUrl="/"
                activePageText="Course Details"
            />
            <CourseDetailsContent program={program} curriculum={curriculum} />
            <RelatedCourses />
            <OurServices />
            <Footer />
        </Layout>
    );
}

export default Details