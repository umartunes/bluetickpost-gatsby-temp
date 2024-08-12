import React from 'react'
import NavbarTwo from "../components/App/NavbarTwo";
import LeaderboardGame from "../components/BalloonPopping/LeaderboardGame";
import Footer from "../components/App/Footer"
import Layout from "../components/App/Layout"

const BalloonGame = () => {
    
    return (
        <Layout>
            <NavbarTwo />
            <LeaderboardGame />
            <Footer />
        </Layout>
    );
}

export default BalloonGame