import React from 'react'
import Layout from "../../components/App/Layout"
import Footer from "../../components/App/Footer"

import OurServices from '../../components/Programs/ProgramLayout/OurServices'
import CourseDetailsContent from '../../components/Programs/ProgramLayout/CourseDetailsContent'
import NavbarTwo from '../../components/App/NavbarTwo'
// import RelatedCourses from '../../components/Programs/ProgramLayout/RelatedCourses'

const program = {
    title: "Senior (Grade 6+)",
    description: `Coding has become an essential part of every industry. Taking their programming skills to the next level with our Senior Program, will make them independent developers. By the end of the program, they’ll know how to create online games and websites. `,
    certification: `We gamify the learning through badges to recognize the growth of our students. They will be awarded a certificate of completion after they finish every course. Students will have to submit a presentation or project, required to graduate the program. `,
    courseFor: `Our Senior program is designed for 6 to 8 graders. 10 courses are included in this program. We also conduct exams after every course to ensure that efficient results are obtained. This program also offers leadership projects to improve the soft skills of students.`,
    
    price: "$96*/month",
    duration: "~12 wks/Course",
    courseDetailsImage: '/images/courses-details.jpg',

    price: "$84/month",
    duration: "12 - 16 Weeks",
    courses: "10",
    support: "Unlimited",
    reports: "Quarterly",
}

const curriculum = [
    {
        heading: `Introduction to Coding 201`,
        description: `Did you learn the basics of coding and loved it? Dive deep into the world of programming. `
    },
    {
        heading: `Animation  201`,
        description: `Do you want to create animations to help your juniors understand the basic concept of your major? Our animation course can help you do that! `
    },
    {
        heading: `Scratch  201`,
        description: `Do you love designing games? Design impressive stories, animations, and games through the Scratch course.`
    },
    {
        heading: `HTML 201`,
        description: `Do you get amazed by the complex websites out there on the internet? Learn HTML to reveal the secrets behind them.`
    },
    {
        heading: `Cyber Safety 201`,
        description: `Do you want to ensure that nobody is spying on you while you are doing your work on the internet? Learn from our Cyber Safety course to ensure that.`
    },
    {
        heading: `Game Design 201`,
        description: `Do you not like any games on the play store? Do you have plenty of ideas in your brain? Game Design 101 is here to turn your dreams into reality.`
    },
    {
        heading: `VR Vex 201`,
        description: `Already know the basics of coding virtual robots? Enroll in our VR Vex course to further step up your game. `
    },
    {
        heading: `TinkerCad 201`,
        description: `Do you know the basics of 3D modeling and want to take it to the next level? Our TinkerCad course is designed to do just that.`
    },
    {
        heading: `Python 201`,
        description: `Python Turtle is known to be the easiest programming language. Learn through our Python Course and become a master. `
    },
    {
        heading: `Hacking 201`,
        description: `Did someone tell you that hacking can be used to protect one’s self from potential dangers on the internet? Learn ethical hacking to ensure your safety on the internet. 
        `
    },
]

const Details = () => {


    return (
        <Layout>
            <NavbarTwo />
          
            <CourseDetailsContent program={program} curriculum={curriculum} />
            {/* <RelatedCourses /> */}
            <OurServices />
            <Footer />
        </Layout>
    );
}

export default Details