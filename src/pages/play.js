import React from 'react'
import NavbarTwo from "../components/App/NavbarTwo";
import Iframes from "../components/BalloonPopping/Iframes";
import Footer from "../components/App/Footer"
import Layout from "../components/App/Layout"

const BalloonGame = () => {
    
    return (
        <Layout>
            <NavbarTwo />
            <Iframes />
            <Footer />
        </Layout>
    );
}

export default BalloonGame