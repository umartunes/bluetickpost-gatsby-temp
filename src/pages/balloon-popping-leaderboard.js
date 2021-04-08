import React from 'react'
import NavbarTwo from "../components/App/NavbarTwo";
import RealtimeLeaderboard from "../components/BalloonPopping/RealtimeLeaderboard";
import Footer from "../components/App/Footer"
import Layout from "../components/App/Layout"

const BalloonGame = () => {
    
    return (
        <Layout>
            <NavbarTwo />
            <RealtimeLeaderboard />
            <Footer />
        </Layout>
    );
}

export default BalloonGame