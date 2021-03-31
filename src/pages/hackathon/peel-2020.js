import React from 'react'
import Layout from "../../components/App/Layout"
import NavbarTwo from "../../components/App/NavbarTwo"
// import PageBanner from '../../components/Common/PageBanner'
import Footer from "../../components/App/Footer"
import EventDetailsContent from '../../components/Hackathon/Events/EventDetailsContent'
import PeelSponsors from "../../components/Hackathon/Events/Sponsors";
import HowItWork from '../../components/Hackathon/Events/HowItWork'

const peel = {
    title: "Jr.Hacks 2020",
    year: "2020",
    calendarDate: "Sat, 10 February, 2020",
    time: "10.00 AM",
    location: "Virtual event",
    countDownTime: "February 10, 2020 10:00:00 UTC-3",


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

const sponsors = [
	{
		name: "Chandu Andhe",
		image: "/images/sponsors/image1.jpg",
		headline: "Peel Region",
		facebook: "https://facebook.com",
		twitter: "https://twitter.com",
		instagram: "https://instagram.com",
		linkedIn: "https://linkedin.com"
	},
	{
		name: "Jr. Hacks 2020 Sponsor",
		image: "/images/sponsors/image2.jpg",
		headline: "Hmmmmm....",
		facebook: "https://facebook.com",
		twitter: "https://twitter.com",
		instagram: "https://instagram.com",
		linkedIn: "https://linkedin.com"
	},
	{
		name: "Sponsor 3",
		image: "/images/sponsors/image1.jpg",
		headline: "Hmmmmm....",
		facebook: "https://facebook.com",
		twitter: "https://twitter.com",
		instagram: "https://instagram.com",
		linkedIn: "https://linkedin.com"
	},
	{
		name: "Sponsor 4",
		image: "/images/sponsors/image2.jpg",
		headline: "Hmmmmm....",
		facebook: "https://facebook.com",
		twitter: "https://twitter.com",
		instagram: "https://instagram.com",
		linkedIn: "https://linkedin.com"
	},
]

const PeelYear = () => {
    return (
        <Layout>
            <NavbarTwo />
            <EventDetailsContent peel={peel} />
            <HowItWork />
            <PeelSponsors sponsors={sponsors} />
            <Footer />
        </Layout>
    );
}

export default PeelYear;