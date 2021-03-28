import React from "react";
import Layout from "../../components/App/Layout";
import NavbarTwo from "../../components/App/NavbarTwo";
import PageBanner from "../../components/Common/PageBanner";
import Footer from "../../components/App/Footer";
import EventsCard from "../../components/Events/EventsCard";
// export default function index() {
//   return <div>Hello World!</div>;
// }

const index = () => {
  return (
    <Layout>
      <NavbarTwo />

      <EventsCard />
      <Footer />
    </Layout>
  );
};

export default index;
