import React from "react";

import Layout from "../components/App/Layout";
import NavbarThree from "../components/App/NavbarThree";
import NavbarTwo from "../components/App/NavbarTwo";
import SwagLocation from "../components/index/SwagLocation";

const SWAG = () => {
  return (
    <Layout>
      <NavbarTwo />

    <SwagLocation />

      <div className="demo-iframe-container">

        <iframe
          title="Reserve your spot"
          loading="lazy"
          src="https://admin-stem2.zohobookings.com/portal-embed#/customer/swag"
        ></iframe>
      </div>
    </Layout>
  );
};

export default SWAG;
