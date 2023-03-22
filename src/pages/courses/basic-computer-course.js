import React from "react";
import Layout from "../../components/App/Layout";
import Footer from "../../components/App/Footer";

import NavbarTwo from "../../components/App/NavbarTwo";
import CourseDetailsContent from "../../components/Courses/CourseLayout/CourseDetailsContent";
// import Pricing from "../../components/Courses/CourseLayout/Pricing";
// import OurServices from "../../components/Courses/CourseLayout/OurServices";
// import RelatedCourses from '../../components/Courses/CourseLayout/RelatedCourses'

import { courses } from '../../data/courses'

const program = courses.find((c) => { return c.id === "basic-computer-course" })

const curriculum = [
  {
    heading: `Introduction to Computer`,
    description: `A brief introductory lecture specifically designed to help you understanding the fundamentals of a computer`,
  },
  {
    heading: `Basic hardware information, settings in Windows to make your computer secure`,
    description: `It's important to know the basic hardware information of a computer, and important settings to keep your computer safe and secure`,
  },
  {
    heading: `Knowledge of laptops and other mobile devices & accessories`,
    description: `Students would be given knowledge of laptops, mobile devices and other accessories.`,
  },
  {
    heading: `Operating Systems - Windows, Linux and macOS`,
    description: `Different kind of operating systems, their manufacturers, history and use case`,
  },
  {
    heading: `Typing Master - Learn to type faster`,
    description: `Double your typing speed. Learn keyboarding in a fun way. Test your words per minute speed and accuracy. Play top-notch typing games and more...`,
  },
  {
    heading: `Several ways to earn money online using internet`,
    description: `Students would be given proper information about earning online using legit ways and proper channels such as: web development, mobile apps development, seo, digital marketing, graphic designing, video editing, youtube.`,
  },
  {
    heading: `Scope & opportunities of different fields in marketplace`,
    description: `Proper information about Freelancing, Remote Jobs. Average Salary of different fields an individual is making in job marketplaces. (eg: how much a we developer is making now a days.)`,
  },
  {
    heading: `and much more...`,
    description: `Students would learn to play games, use of different computer software, accessories, and much more...`,
  },
];

const modules = []

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

      <CourseDetailsContent program={program} curriculum={curriculum} modules={modules} reviews={reviews} />
      {/* <Pricing /> */}
      {/* <RelatedCourses /> */}
      {/* <OurServices /> */}
      <Footer />
    </Layout>
  );
};
// return (
// <Layout>
//     <NavbarTwo />

//     <CourseDetailsContent program={program} curriculum={curriculum} reviews={reviews} />
//     {/* <RelatedCourses /> */}
//     <OurServices />
//     <Footer />
// </Layout>
// );
// }

export default Details;
