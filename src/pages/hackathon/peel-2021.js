import React from 'react'
import Layout from "../../components/App/Layout"
import NavbarTwo from "../../components/App/NavbarTwo"
// import PageBanner from '../../components/Common/PageBanner'
import Footer from "../../components/App/Footer"
import EventDetailsContent from '../../components/Hackathon/EventLayout/EventDetailsContent'
import PeelSponsors from "../../components/Hackathon/EventLayout/Sponsors";
import HowItWork from '../../components/Hackathon/EventLayout/HowItWork'

import peel2021 from '../../components/Hackathon/Data/peel-2021'

const PeelYear = () => {
    return (
        <Layout>
            <NavbarTwo />
            <EventDetailsContent peel={peel2021} />
            <HowItWork />
            <PeelSponsors sponsors={peel2021.sponsors} />
            <Footer />
        </Layout>
    );
}

export default PeelYear;