import React from "react";
import Layout from "../../components/App/Layout";
import Footer from "../../components/App/Footer";

import OurServices from "../../components/Programs/ProgramLayout/OurServices";
import CourseDetailsContent from "../../components/Programs/ProgramLayout/CourseDetailsContent";
import NavbarTwo from "../../components/App/NavbarTwo";
import Pricing from "../../components/Programs/ProgramLayout/Pricing";
// import RelatedCourses from '../../components/Programs/ProgramLayout/RelatedCourses'

const program = {
  title: "Senior (Grade 6+)",
  description: ` Our senior program is designed for students who have graduated from Junior program at STEM1 or for students who are in Grade 6+ with no coding experience. By the end of the program, students learn to create online games, apps & websites. `,
  certification: `We gamify learning through awarding points, badges and certificates to recognize the progress & hardwork of our students. Students will be awarded a certificate of completion after they finish every level. Students are required to submit a presentation or project to graduate each course.`,
  
  courseFor: `Our Senior program is designed for 6 to 8 graders. 10 courses are included in this program. We also conduct exams after every course to ensure that efficient results are obtained. This program also offers leadership projects to improve the soft skills of students.`,

  price: "$96*/month",
  duration: "~12 wks/Course",
  courseDetailsImage: "/images/courses-details.jpg",

  courses: "10",
  support: "Unlimited",
  reports: "Quarterly",
};

 

const curriculum = [
  {
    heading: `Introduction to Coding 201`,
    description: `Did you learn the basics of coding and loved it? Dive deep into the world of programming. `,
  },
  {
    heading: `Game Design  201`,
    description: `Do you want to create animations to help your juniors understand the basic concept of your major? Our animation course can help you do that! `,
  },
  {
    heading: `3D Design 201`,
    description: `Build your 3D objects and learn more about merging and algining different objects and create print ready 3D objects in this course.`,
  },
  {
    heading: `HTML 201`,
    description: `Do you get amazed by the complex websites out there on the internet? Learn HTML to reveal the secrets behind them.`,
  },
  {
    heading: `Python 101`,
    description: `Python is a fun and powerful language which will help you start your journey into real world applications. `,
  },
  {
    heading: `Python 201`,
    description: `Complete couple of projects that are cool and good enough to boast with your friends!`,
  },
  {
    heading: `Hacking 201`,
    description: `One word: Digital Forensics & some cool problem solving. `,
  },
  {
    heading: `Python 301`,
    description: `Game on!`,
  },
  {
    heading: `Python 401`,
    description: `Space Invaders, elaborate game with everything you need to build a serious game and use your advanced concepts. `,
  },
  {
    heading: `AI/ML 101`,
    description: `Artificial Intelligence and Machine Learning are not magic, its just something cool you can understand and use in your next project.    `,
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

      <CourseDetailsContent
        program={program}
        curriculum={curriculum}
        reviews={reviews}
      />
      {/* <RelatedCourses /> */}
      <Pricing />
      <OurServices />
      <Footer />
    </Layout>
  );
};

export default Details;
