import React from 'react'
import NavbarTwo from "../components/App/NavbarTwo";
import LeaderboardVideos from "../components/BalloonPopping/LeaderboardVideos";
import Footer from "../components/App/Footer"
import Layout from "../components/App/Layout"

const BalloonGame = () => {
    
    return (
        <Layout>
            <NavbarTwo />
            <LeaderboardVideos />
            <Footer />
        </Layout>
    );
}

export default BalloonGame