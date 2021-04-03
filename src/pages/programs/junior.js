import React from "react";
import Layout from "../../components/App/Layout";
import Footer from "../../components/App/Footer";

import OurServices from "../../components/Programs/ProgramLayout/OurServices";
import CourseDetailsContent from "../../components/Programs/ProgramLayout/CourseDetailsContent";
import NavbarTwo from "../../components/App/NavbarTwo";
import Pricing from "../../components/Programs/ProgramLayout/Pricing";
// import RelatedCourses from '../../components/Programs/ProgramLayout/RelatedCourses'

const program = {
  title: "Junior (Grade 3+)",
  description: ` Just as we consider Mainframe computers and Televison as old technology, students currently in Grade 3+ are going to consider YouTube, Google, Bitcoin as old technology. Its very natural for these students to ask Alexa to play their favorite song or find answers to almost anything in Google. Our job at STEM1 is to help students to get introduced to coding as another cool thing to do rather than thinking of it as a boring mandatory class. This program has 10 levels with weekly 1 hour class.`,
  certification: `We gamify learning through awarding points, badges and certificates to recognize the progress & hardwork of our students. Students will be awarded a certificate of completion after they finish every level. Students are required to submit a presentation or project to graduate each course.`,
  courseFor: `Our Junior program is designed for Grade 3+ students to teach them basics of coding. At the end of each level/course, we conduct quiz & assessment to understand the student's progress.`,

  price: "$96*/month",
  duration: "~12 Wks/Course",
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
    author: `Darshita Desai`,
    authorImage: "/images/reviews/female.jpg",
    heading: `On Task!`,
    details: `Wonderful experience for my son who is in Grade 5. The staff is very knowledgeable, kind, and helpful. My son is always excited to go in class and do extra courses as homework at home. Felt much confident in coding after joining this program and always ahead in his batch .. Tks to all staff for doing wonderful job 👍"`,
  },
  {
    author: `Balaji Pulivarthi`,
    authorImage: "/images/reviews/balaji.png",
    heading: `Excellent`,
    details: `My son is leaning coding, robotics etc at Stem1, I really appreciate the faculty who takes a special attention with each student and support individual intellectual skills. During this pandemic situation, the Institute i able to conduct online classes amd kids are leaning to the best possible ways...Good luck to the future generation kids joining at STEM1..`,
  },
  {
    author: `Linh Tam`,
    authorImage: "/images/reviews/female.jpg",
    heading: `On Task!`,
    details: `If you're looking for an after school program for your child that is both educational and fun then STEM1 is the place.  My son is in the Robotics class and he enjoys himself all the while learning without realizing.  My son tells me "It's fun there, I like the technology and playing with Cue and Dash robots... and they keep us on task!"`,
  },
];

const Details = () => {
  return (
    <Layout>
    <NavbarTwo />

    <CourseDetailsContent program={program} curriculum={curriculum} reviews={reviews} />
    {/* <RelatedCourses /> */}
    <Pricing />
    <OurServices />
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
