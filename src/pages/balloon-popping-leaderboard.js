import React from 'react'
import NavbarTwo from "../components/App/NavbarTwo";
import Leaderboard from "../components/BalloonPopping/Leaderboard";
import Footer from "../components/App/Footer"
import Layout from "../components/App/Layout"

const BalloonGame = () => {
    
    return (
        <Layout>
            <NavbarTwo />
            <Leaderboard />
            <Footer />
        </Layout>
    );
}

export default BalloonGame