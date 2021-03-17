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
        title: "Leadership",
        description: `Is your child considering a career in coding? Our Leader Program will train them to become an excellent programmer, leader, and team member. After graduating from this program, we’ll offer students a chance to become instructors at STEM1. `,
        certification: `We gamify the learning through badges to recognize the growth of our students. Leaders are required to attend two or more classes every week. They will also have to submit projects and presentations to successfully complete every course.`,
        courseFor: `Our Leader Program is designed for students above 8th grade. To enroll in this program, students must have graduated from the Senior Program. It offers both individual and team projects in each course with some additional monthly presentations. 8 courses are included in this program.`,
        
        price: "$84/month",
        duration: "12 - 16 Weeks",
        courses: "10",
        support: "12 - 18 Weeks",
        reports: "Quarterly",
    })

    const [curriculum, setCurriculum] = useState([
        {
            heading: `Space`,
            description: `Do you get fascinated with planets and stars? Do you want to learn coding to study them? Our Space course is specifically designed to do just that!`
        },
        {
            heading: `Game Design`,
            description: `Do you love games? Do you want to engage your juniors in games designed by you? Learn through our Game Design course to live your dreams.`
        },
        {
            heading: `Community Focus`,
            description: `Every revolution requires great leaders. We are ambitious to provide great leaders to this world. Our community focus course aims to train leaders that are ready to serve their community. `
        },
        {
            heading: `Digital Arts`,
            description: `Have you got an artistic mind? Our Digital Arts course is designed to help you convert your pencil sketches into digital ones.`
        },
        {
            heading: `Computational Thinking`,
            description: `Do you love programming and want to know how programmers come up with those amazing ideas? Our computational thinking course can help you with that.`
        },
        {
            heading: `AI/ML`,
            description: `AI/ML is the future in every walk of life. Enroll in our course to learn some basic complex concepts of Artificial Intelligence. `
        },
        {
            heading: `Education`,
            description: `The study of science, technology, engineering, and mathematics is crucial to compete in this revolutionizing world. Start your journey with STEM1 and get ready for that.`
        },
        {
            heading: `Auto CAD`,
            description: `Do you want to know how architectures make those incredible sky-touching buildings? Learn Autocad to understand the complexities of 3D modeling. `
        },
        {
            heading: `Python`,
            description: `Learn the complexities of the python language. From loops to dictionaries and functions, this course is designed to make you a pro in python language. `
        },
        {
            heading: `Java`,
            description: `Do you love Java, the most versatile language out there? Learn Java to create applications, extensions, and much more.`
        },
    ])

    return (
        <Layout>
            <NavbarThree />
            <PageBanner
                pageTitle="Junior (Grade 3+)"
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