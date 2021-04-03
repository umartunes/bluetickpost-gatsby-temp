import React from "react";
import Layout from "../../components/App/Layout";
import Footer from "../../components/App/Footer";

import OurServices from "../../components/Programs/ProgramLayout/OurServices";
import CourseDetailsContent from "../../components/Programs/ProgramLayout/CourseDetailsContent";
import NavbarTwo from "../../components/App/NavbarTwo";
import Pricing from "../../components/Programs/ProgramLayout/Pricing";

const program = {
  title: "Leadership",
  description: ` Our Leadrship Program is designed for grade 7+ or for students who have completed the Stem1 Senior Program.
   These students have mastered the concepts of coding that include logic, problem solving and computational thinking.
   Students are required to complete 10 projects (5 team and 5 solo) and particpate in the instructor in training program
   to become an instructor at Stem1.`,
  certification: `All 10 levels require a presentation and a project report that is judged by a panel.`,
  courseFor: `Our Leadership Program is designed for students grade 7+. After graduating from this program, we’ll offer students 
  a chance to become instructors at STEM1.`,

  price: "$96*/month",
  courseDetailsImage: "/images/courses-details.jpg",

  duration: "~12 Wks/Project",
  courses: "10",
  support: "Unlimited",
  reports: "Quarterly",
};

const curriculum = [
  {
    heading: `Space`,
    description: `Concept is Space and come up with a probem and tell how you can solve it. Look up the possibilities are endless!`,
  },
  {
    heading: `Game Design`,
    description: `Design and build a custom game with all the elements required for a succesful game that you and your friends love to play.`,
  },
  {
    heading: `Community Focus`,
    description: `Build a project or solve a problem that can help our community. #SupportLocal `,
  },
  {
    heading: `Digital Arts`,
    description: `Bring out the creative inside you to complete a Graphics related project, you can use Photoshop, Blender or any cool software to create your digital assets.`,
  },

  {
    heading: `AI/ML`,
    description: `What can you build to get your feet wet in Artificial Intelligence. Its just the beginging of something really cool.`,
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
