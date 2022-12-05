import React from "react";
import Layout from "../../components/App/Layout";
import Footer from "../../components/App/Footer";

import NavbarTwo from "../../components/App/NavbarTwo";
import CourseDetailsContent from "../../components/Courses/CourseLayout/CourseDetailsContent";
import Pricing from "../../components/Courses/CourseLayout/Pricing";
// import OurServices from "../../components/Courses/CourseLayout/OurServices";
// import RelatedCourses from '../../components/Courses/CourseLayout/RelatedCourses'

const program = {
  title: "Web & Mobile App Development",
  slug: "web-and-mobile-app-development",
  image: "/images/courses/course3.jpg",
  description: ` Take your career as a Full Stack Web & Mobile App Developer to the next level with our Application Development Program; where you’ll become an expert at front-end and back-end using latest state of the art technologies MERN (MongoDB, Express, React and Node.js) Stack. The objective to design this program is to train and produce skilled applications developer which are in high demand in Local and International job marketplace.`,
  certification: `We gamify learning through awarding points, badges and certificates to recognize the progress & hardwork of our students. Students will be awarded a certificate of completion after they finish the course. Students are required to submit assignments and projects assigned to them to graduate this course.`,
  courseFor: `Our Web & Mobile App Development program is designed for students who have passed grade 10 from their schools. and are motivated to do achieve big things in life.`,

  price: "Rs. 2000 / month",
  discountPercentage: "50% Off",
  priceBeforeDiscount: "Rs. 4000 / month",
  courseDuration: "~6 months",
  classDuration: "~2 Hours",
  classDays: "2 days a week(Sat & Sunday)",
  courseDetailsImage: "/images/courses-details.jpg",

  courses: "10",
  support: "Unlimited",
  reports: "Quarterly",

  isAvailable: true,
};

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
    details: `First-time connect with Web Development. In the beginning I thought that Web Development is really hard to learn but after this course, it seems easy and fun to learn and implement. Our instructors Sir Umar is a nice person, explaining everything at a good pace. Thank you, Techna, for this great job.`,
  },
];

const Details = () => {
  return (
    <Layout>
      <NavbarTwo />

      <CourseDetailsContent
        program={program}
        curriculum={curriculum}
        reviews={reviews}
      />
      <Pricing />
      {/* <RelatedCourses /> */}
      {/* <OurServices /> */}
      <Footer />
    </Layout>
  );
};

export default Details;
