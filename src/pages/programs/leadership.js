import React from "react";
import Layout from "../../components/App/Layout";
import Footer from "../../components/App/Footer";

import OurServices from "../../components/Programs/ProgramLayout/OurServices";
import CourseDetailsContent from "../../components/Programs/ProgramLayout/CourseDetailsContent";
import NavbarTwo from "../../components/App/NavbarTwo";
import Pricing from "../../components/Programs/ProgramLayout/Pricing";

const program = {
  title: "Leadership",
  description: ` Our Leadrship program is designed to help students take up the real world challenges and provide solutions.  This program requires both individual and team projects in each level complete with public speaking presentations. Our Leader Program will train them to become an excellent programmer, leader, and team member.  `,
  certification: `Every level is completed with completion of Completing a Project & completing a Course as Course Mentor.`,
  courseFor: `Our Leader Program is designed for students grade 7+. To enroll in this program, students must have graduated from the Senior Program. After graduating from this program, we’ll offer students a chance to become instructors at STEM1.`,

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
    author: `James Anderson`,
    authorImage: "/users/umar.png",
    heading: `Excellent`,
    details: `Very well built theme, couldn't be happier with it. Can't wait for future updates to see what else they add in.`,
  },
  {
    author: `Sarah Taylor`,
    authorImage: "/users/dummy.jpg",
    heading: `Video Quality!`,
    details: `Was really easy to implement and they quickly answer my additional questions!`,
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
