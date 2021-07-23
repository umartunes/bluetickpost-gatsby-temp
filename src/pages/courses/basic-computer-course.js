import React from "react";
import Layout from "../../components/App/Layout";
import Footer from "../../components/App/Footer";

import NavbarTwo from "../../components/App/NavbarTwo";
import CourseDetailsContent from "../../components/Courses/CourseLayout/CourseDetailsContent";
// import Pricing from "../../components/Courses/CourseLayout/Pricing";
// import OurServices from "../../components/Courses/CourseLayout/OurServices";
// import RelatedCourses from '../../components/Courses/CourseLayout/RelatedCourses'

const program = {
  title: "Basic Computer Course",
  slug: "basic-computer-course",
  image: "/images/courses/course1.jpg",
  description: `A short course specially designed for those people who are unaware of computer, to help these people understanding all the basics of computer needed to live in the 21st century. In this course; we teach students how to use a computer right from turning it on and off, how you can earn money now a days using internet online, how to play basic games, learn to type fast, core settings, and software knowledge like notepad, paint... In this day an age you will be considered uneducated if you cannot use a computer. So, we're offering this course 100% free of cost.`,
  certification: `We gamify learning through awarding points, badges and certificates to recognize the progress & hardwork of our students. Students will be awarded a certificate of completion after they finish every level. Students are required to submit a presentation or project to graduate each course.`,
  courseFor: `Our Junior program is designed for Grade 3+ students to teach them basics of coding. At the end of each level/course, we conduct quiz & assessment to understand the student's progress.`,

  price: "Free",
  courseDuration: "~1 week",
  classDuration: "~2 Hours",
  classDays: "5 days a week(Mon-Friday)",

  courseDetailsImage: "/images/courses-details.jpg",
  courses: "10",
  support: "Unlimited",
  reports: "Quarterly",
};

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

      <CourseDetailsContent program={program} curriculum={curriculum} reviews={reviews} />
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
