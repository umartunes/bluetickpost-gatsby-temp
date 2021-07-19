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
  description: ` Just as we consider Mainframe computers and Televison as old technology, students currently in Grade 3+ are going to consider YouTube, Google, Bitcoin as old technology. Its very natural for these students to ask Alexa to play their favorite song or find answers to almost anything in Google. Our job at STEM1 is to help students to get introduced to coding as another cool thing to do rather than thinking of it as a boring mandatory class. This program has 10 levels with weekly 1 hour class.`,
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
    heading: `Introduction to Coding 101`,
    description: `Learn the basics of coding. The use of different languages and basic command styles that are common in the world of programming languages are included in this course.`,
  },
  {
    heading: `Animation  101`,
    description: `Animations are a great way to learn difficult concepts. Learn programming to create interactive drawings and animations.`,
  },
  {
    heading: `Scratch  101`,
    description: `Let your children learn scratch, a programming language, to create their own stories, animations, and games.`,
  },
  {
    heading: `HTML 101`,
    description: `Learn the fundamentals of HTML and design headings, paragraphs, and links. Let your child dive into the world of website and application development.`,
  },
  {
    heading: `Cyber Safety 101`,
    description: `Children are exposed to a lot of risks while using the internet. Teach your kids the basics of Cyber Safety to ensure safe browsing.`,
  },
  {
    heading: `Game Design 101`,
    description: `Do you love playing games? They are certainly a great way to boost your skills. Learn to design your games through our Game Design 101 course.`,
  },
  {
    heading: `VR Vex 101`,
    description: `Love robots and are interested in how they work? Through our VR Vex, learn how to code a virtual robot based on block-based coding.`,
  },
  {
    heading: `TinkerCad 101`,
    description: `Want to design 3D models of your imaginations? Lucky for you, we have got the right thing for you. Use TinkerCAD course to do just that!`,
  },
  {
    heading: `Python 101`,
    description: `Learn the basics of python language and create software for your everyday small tasks such as calculating percentages and average.`,
  },
  {
    heading: `Hacking 101`,
    description: `Hacking is not always bad as it is generally considered. Teach your child the basics of ethical hacking to protect them from online dangers.`,
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
