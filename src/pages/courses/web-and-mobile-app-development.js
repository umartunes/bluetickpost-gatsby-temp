import React from "react";
import Layout from "../../components/App/Layout";
import Footer from "../../components/App/Footer";

import NavbarTwo from "../../components/App/NavbarTwo";
import CourseDetailsContent from "../../components/Courses/CourseLayout/CourseDetailsContent";
import Pricing from "../../components/Courses/CourseLayout/PricingSingle";
// import OurServices from "../../components/Courses/CourseLayout/OurServices";
// import RelatedCourses from '../../components/Courses/CourseLayout/RelatedCourses'

import { courses } from '../../data/courses'

const program =  courses.find((c)=>{ return c.id === "web-and-mobile-app-development" })

const curriculum = [
  {
    heading: `Intro to Web & Mobile App Development`,
    description: `A brief introductory module specifically designed to help you understanding the fundamental concepts of the programming & development, knowledge of software industry, and scope of application development in the market. etc.`,
  },
  {
    heading: `8+ Practical Projects & Several Assignments (Small-Big)`,
    description: `You'll be building at least 8+ practical projects during the course, and several practical assignments would be assigned which will help you understanding concepts of programming and application development in a versatile manner`,
  },
  {
    heading: `Intro to HTML and CSS​`,
    description: `This module will help you getting started with the web development, and grasping fundamentals of structuring and designing applications`,
  },
  {
    heading: `Bootstrap - CSS Framework`,
    description: `This module is designed to give you good grip on Bootstrap which is used by professionals to structure and design beautiful application in an easier way.`,
  },
  {
    heading: `Git & GitHub - Source code control`,
    description: `A crash course on Git and GitHub. In this module you'll learn versioning your project and control your source code while collaboration with other developers on the same project.`,
  },
  {
    heading: `Javascript and Object-Oriented Programming (OOP)`,
    description: `This module provides you hands-on experience and exposure to develop JavaScript based web application. This module builds strong foundation of JavaScript which will help developer to apply JavaScript concepts for real world projects`,
  },
  {
    heading: `ReactJS - Front-end Development`,
    description: `React is a fun and powerful library backed by Facebook, which will help you start your journey into real world applications.`,
  },
  {
    heading: `Redux - Data Management with Redux`,
    description: `Python is a fun and powerful language which will help you start your journey into real world applications. `,
  },
  {
    heading: `Node.js - Backend Development`,
    description: `You'll learn building backend server and RESTFUL APIs Using Express in this module`,
  },
  {
    heading: `MongoDB - NoSQL Database`,
    description: `This module will help you learn designing and integrating No SQL Databases in an application`,
  },
  {
    heading: `React Native`,
    description: `In this module you'll get a brief overview of how hybrid mobile applications are built in real life now-a-days. At the end of this module we'll be building a mobile application using React Native`,
  },

  {
    heading: `Final Project`,
    description: `At the end of this course you'll be assigned a final project which you would code on your own and submit, which will lead you to course certification.`,
  },
];


const modules = [
  {
    name: "Module 1 (Duration 2 Months)",
    topics: [
      "Intro to Web & Mobile App Development",
      "HTML / HTML5 - Hypertext Markup Language",
      "CSS / CSS3 - Cascading Style Sheet",
      "SCSS - Sassy Cascading Style Sheet",
      "Bootstrap 5 - CSS Framework",
      "Git & GitHub - Source code control",
      "Google Firebase, Netlify, Surge, GitHub Pages (Hosting)",
    ]
  },
  {
    name: "Module 2 (Duration 4 Months)",
    topics: [
      "Javascript and Object-Oriented Programming (OOP)",
      "ReactJS - Front-end Development",
      "Context API / Redux - Data Management For Frond-end Application",
      "Google Firebase (Authentication, Firestore Database, Storage, Analytics, Hosting)",
      "Send Emails, and SMS from websites",
    ]
  },
  {
    name: "Module 3 (Duration 1 Month)",
    topics: [
      "Node.js - Backend Development",
      "MongoDB - NoSQL Database",
      "React Native - Create Hybrid apps for Android and iOS using React",
      "Publish the built App on Google Play Store and other different platforms.",
    ]
  },

  {
    name: "You'll Also Learn",
    topics: [
      "<b>10+ Practical Projects & Several Assignments (Small-Big)</b>",
      "How to <b>Build Games using Javascript</b>",
      "How to add Google Maps on websites.",
      "How to send <b>Emails and SMS</b> from websites and mobile apps.",
      "How to create <b>extensions for Chrome Browser</b>.",
      "How to build a CLI <b>( Command Line Interface )</b>,",
      "How to <b>Purchase</b> a domain & hosting service.",
      "How to get <b>Domains & Hosting</b> for free.",
      "How to deploy your websites to the hosting platforms.",
      "<b>How to start your career as a Programmer.</b>",
      "The difference between <b>Freelancing, Local Jobs, and Remote Job</b>",
      "How to find and apply for Remote Jobs<b></b>",
      "How to write <b>Effective and Job Winning CVs</b>",
      "How to create/open accounts and get projects on different <b>International Freelancing Platforms</b>.",
      "And much more…",
    ]
  },
  
]

const reviews = [
  {
    author: `Muhammad Zain Ul Haq`,
    authorImage: "/images/reviews/zain.jpg",
    heading: `Fantastic Experience`,
    details: `A really good and fantastic experience in this institute Alhamdolillah. The management of this institute is outstanding. Teachers and all staff are very hardworking. One of my best decision of life to join this institute.`,
  },
  {
    author: `Muhammad Abu Bakar`,
    authorImage: "/images/reviews/abubakar.jpg",
    heading: `Fantastic Experience`,
    details: `I'm feeling a really good experience. And gaining information about system. A good teacher and management. They give information about your course which you want. ALLAH blessed.`,
  },
  {
    author: `Ali Haider`,
    authorImage: "/images/reviews/ali.jpg",
    heading: `Excellent`,
    details: `First-time connect with Web Development. In the beginning I thought that Web Development is really hard to learn but after this course, it seems easy and fun to learn and implement. Our instructors Sir Umar is a nice person, explaining everything at a good pace. Thank you, BlueTickPost, for this great job.`,
  },
];

const Details = () => {
  return (
    <Layout>
      <NavbarTwo />

      <CourseDetailsContent
        program={program}
        curriculum={curriculum}
        modules={modules}
        reviews={reviews}
      />
      <Pricing program={program} />
      {/* <RelatedCourses /> */}
      {/* <OurServices /> */}
      <Footer />
    </Layout>
  );
};

export default Details;
