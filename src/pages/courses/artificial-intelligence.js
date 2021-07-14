import React from "react";
import Layout from "../../components/App/Layout";
import Footer from "../../components/App/Footer";

import NavbarTwo from "../../components/App/NavbarTwo";
import CourseDetailsContent from "../../components/Courses/CourseLayout/CourseDetailsContent";
import Pricing from "../../components/Courses/CourseLayout/Pricing";
// import OurServices from "../../components/Courses/CourseLayout/OurServices";
// import RelatedCourses from '../../components/Courses/CourseLayout/RelatedCourses'

const program = {
  title: "Artificial Intelligence",
  slug: "artificial-intelligence",
  image: "/images/courses/course4.jpg",
  description: ` Our Leadrship Program is designed for grade 7+ or for students who have completed the Stem1 Senior Program.
   These students have mastered the concepts of coding that include logic, problem solving and computational thinking.
   Students are required to complete 10 projects (5 team and 5 solo) and particpate in the instructor in training program
   to become an instructor at Stem1.`,
  certification: `All 10 levels require a presentation and a project report that is judged by a panel.`,
  courseFor: `Our Leadership Program is designed for students grade 7+. After graduating from this program, we’ll offer students 
  a chance to become instructors at STEM1.`,

  price: "$96*/month",
  courseDetailsImage: "/images/courses-details.jpg",

  courseDuration: "~6 months",
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
    author: `Muhammad Zain Ul Haq`,
    authorImage: "/images/reviews/female.jpg",
    heading: `Fantastic Experience`,
    details: `A really good and fantastic experience in this institute Alhamdolillah. The management of this institute is outstanding. Teachers and all staff are very hardworking. One of my best decision of life to join this institute.`,
  },
  {
    author: `Muhammad Abu Bakar`,
    authorImage: "/images/reviews/female.jpg",
    heading: `Fantastic Experience`,
    details: `I'm feeling a really good experience. And gaining information about system. A good teacher and management. They give information about your course which you want. ALLAH blessed.`,
  },
  {
    author: `Ali Haider`,
    authorImage: "/images/reviews/balaji.png",
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
