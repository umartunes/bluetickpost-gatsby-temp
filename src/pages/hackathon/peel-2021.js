import React from 'react'
import Layout from "../../components/App/Layout"
import NavbarTwo from "../../components/App/NavbarTwo"
import PageBanner from '../../components/Common/PageBanner'
import Footer from "../../components/App/Footer"
import EventDetailsContent from '../../components/Hackathon/Events/EventDetailsContent'
import Sponsors from "../../components/Hackathon/Events/Sponsors";
import HowItWork from '../../components/Hackathon/Events/HowItWork'

const peel = {
    title: "Jr.Hacks 2021",
    year: "2021",
    calendarDate: "Sat, 10 April, 2021",
    time: "10.00 AM",
    location: "Virtual event",
    countDownTime: "April 10, 2021 10:00:00 UTC-3",


    cost: "$20",
    grades: "2 - 8",
    region: "Peel",
    supporting: "PLF",

    details: [
        {
            heading: `About The Event`,
            content: `
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.</p>
            `
        },
        {
            heading: `Where the event?`,
            content: `
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.</p>
            `
        },
    ]
}

const PeelYear = () => {
    return (
        <Layout>
            <NavbarTwo />
            <EventDetailsContent peel={peel} />
            <HowItWork />
            <Sponsors peel={peel} />
            <Footer />
        </Layout>
    );
}

export default PeelYear;