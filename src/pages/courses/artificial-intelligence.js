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
  description: `A one year AI program in Data Science, Machine Learning, and Deep Learning designed for absolute beginners. Getting Pakistan ready for the new era of computing enabled by the rise of AI. The objective to design this program is to train and produce skilled applications developer which are in high demand in Local and International job marketplace.`,
  certification: `We gamify learning through awarding points, badges and certificates to recognize the progress & hardwork of our students. Students will be awarded a certificate of completion after they finish the course. Students are required to submit assignments and projects assigned to them to graduate this course.`,
  courseFor: `Our Leadership Program is designed for students grade 7+. After graduating from this program, we’ll offer students 
  a chance to become instructors at STEM1.`,

  price: "Rs. 1500 / month",
  courseDuration: "~12 months",
  classDuration: "~2 Hours",
  classDays: "2 days a week(Sat & Sunday)",
  courseDetailsImage: "/images/courses-details.jpg",

  courses: "10",
  support: "Unlimited",
  reports: "Quarterly",
};

const curriculum = [
  {
    heading: `Intro to Artificial Intelligence`,
    description: `A brief introductory module specifically designed to help you understanding the fundamental concepts of the programming & development, knowledge of software industry, and scope of Artificial Intelligence in the market. etc.`,
  },
  {
    heading: `Version Control with Git​`,
    description: `You won't find a top programmer, web developer, or AI engineer who doesn't use version control. This is true because version control helps developers produce better results and makes collaboration easy. Around the world, in teams both large and small, Git is an essential part of the toolchain. This module covers Git and Github.`,
  },
  {
    heading: `Object Oriented and Functional Programming using Python`,
    description: `In the second module of the program, students will learn about basic programming concepts such as lists, dictionaries, classes, functions and loops, and practice writing clean and readable code with exercises for each topic. Students will also learn how to make programs interactive and how to test code safely before adding it to a project. It is a fast-paced, thorough introduction to programming with Python 3.6 that will have students writing programs, solving problems, and making things that work in no time.`,
  },
  {
    heading: `Introduction to Linear Algebra and Statistics`,
    description: `In this module, students will learn the basic mathematical and statistical concepts that are needed to practice data science and understand deep learning. Students will also implement these concepts in Python and TensorFlow.`,
  },
  {
    heading: `Advanced Python Libraries with Anaconda`,
    description: `In this module, students will be introduced to Anaconda, the leading open data science platform powered by Python. The open source version of Anaconda is a high performance distribution of Python and R and includes over 100 of the most popular Python and R packages for data science, such as NumPy, Matplotlib, etc.`,
  },
  {
    heading: `Data Science Essentials`,
    description: `In this module, students will learn key concepts and techniques used to perform data science; including statistical analysis, data cleansing and transformation, and data visualization with Python.`,
  },
  {
    heading: `The Fundamentals of Deep Learning with Keras with TensorFlow Backend`,
    description: `Before implementing deep-learning algorithms, students will first become familiar with the mathematical blocks of the neural networks theory. Students will get a chance to get their hands dirty writing some simple Keras code right away! Then they will move on to advanced deep learning concepts. This module will also cover some essential advantages of Keras to prove it’s the deep-learning library of choice.`,
  },
  {
    heading: `Introduction to Linux and Bash`,
    description: `Linux containers are poised to take over the world. In this module, students will begin learning with an introduction of Linux and the command line interface. For many non-technical people, the command line (also referred to as CLI, Terminal, bash, or shell) is a place of mystery. However, knowledge of only a handful of basic commands is enough to start feeling comfortable. In this module, we will cover the basic commands to get you started.`,
  },
  {
    heading: `Docker Deep Dive`,
    description: `This module provides a soup-to-nuts learning experience for core Docker technologies, including the Docker Engine, Images, Containers, Registries, Networking, Storage, and more. All of the behind the scenes theory is explained, and all concepts are clearly demonstrated on the command line. No prior knowledge of Docker or Linux is required.`,
  },
  {
    heading: `Python Microservices Development`,
    description: `In recent years, REST (REpresentational State Transfer) has emerged as the standard architectural design for web services and web APIs. In this module, students will learn how easy it is to create a RESTfulweb service using Python and Flask.`,
  },
  {
    heading: `Build AI Microservices for ContainerDeployments`,
    description: `In this module, students will learn to use containers to simplify AI solution deployments and implement continuous integration and deployment strategies.`,
  },
  {
    heading: `Artificial Intelligence (AI) in Practice`,
    description: `This module is structured around a series of practical code examples, demonstrating on real world problems. Techna strongly believes in the value of teaching using concrete examples, anchoring theoretical ideas into actual results and tangible code patterns. These examples all rely on Keras, the Python deep learning library. Students will learn Deep Learning for computer vision, text and sequences, finance, and advanced neural network design.`,
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
