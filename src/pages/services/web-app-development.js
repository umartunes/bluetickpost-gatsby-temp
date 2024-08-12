import React, { useEffect } from 'react'
import Layout from "../../components/App/Layout"
import NavbarTwo from "../../components/App/NavbarTwo"
import Footer from "../../components/App/Footer"

import ServiceDetailsSection from '../../components/Services/ServiceDetailsSection'
// import ServicePricingSection from '../../components/Services/ServicePricingSection'

// import { Element, scroller } from 'react-scroll'

const service = {
    seoTitle: `Web App Development Service - BlueTickPost`,

    serviceVideoId: "_e0Hh9mnun8",
    serviceVideoThumb: '/images/services/website-development.png',
    serviceHeading: "Web App Development",
    serviceDetails: [
        `We develop customized, scalable, and responsive web applications according to your business needs using state-of-the-art technologies.`,
        `We use the latest tools and technologies to build your app:`,
    ],

    serviceFeatures: [
        "HTML5 / CSS3",
        "JavaScript / jQuery",
        "Bootstrap / Material UI",
        "SASS / SCSS",
        "ReactJS",
        "NodeJS",
        "MongoDB",
        "Firebase",
        "Gatsby (SSG)",
        "NextJS (SSR)",
    ],

    hidePricingButton: true
};

// const servicePackages = {
//     title: `Web App Development Prices`,
//     description: `E-COMMERCE / BUSINESS / BLOG / NEWS / MAGAZINE / COMPANY / PORTFOLIO / RESTAURANT / REAL ESTATE / NGO`,

//     pricing: {
//         basic: {
//             title: `Basic`,
//             price: `$290`,
//             saving: `Save $100`,
//             discountedPrice: `$190`,
//             description: `Business / Blog Website: Clean & modern website with contact form, social media etc. Responsive & SEO optimized.`
//         },
//         standard: {
//             title: `Standard`,
//             price: `$440`,
//             saving: `Save $150`,
//             discountedPrice: `$290`,
//             description: `Standard E-Commerce Website: Complete business website with eCommerce functionality. Fully responsive & SEO optimized.`
//         },
//         premium: {
//             title: `Premium`,
//             price: `$890`,
//             saving: `Save $300`,
//             discountedPrice: `$590`,
//             description: `Premium E-Commerce Website: Highly customized ecommerce website with premium features, Plugins, & advance layouts.`
//         },
//     },

//     features: [
//         {
//             title: "Functional Website",
//             basic: true,
//             standard: true,
//             premium: true,
//         },
//         {
//             title: "Content upload",
//             basic: true,
//             standard: true,
//             premium: true,
//         },
//         {
//             title: "Design Customization",
//             basic: true,
//             standard: true,
//             premium: true,
//         },
//         {
//             title: "Business Emails Setup",
//             basic: true,
//             standard: true,
//             premium: true,
//         },
//         {
//             title: "Business Branding (Stationery Design)",
//             basic: true,
//             standard: true,
//             premium: true,
//         },
//         {
//             title: "E-Commerce Functionality",
//             basic: false,
//             standard: true,
//             premium: true,
//         },
//         {
//             title: "E-Commerce Design Layouts",
//             basic: false,
//             standard: `30+`,
//             premium: `90+`,
//         },
//         {
//             title: "Number of products",
//             basic: false,
//             standard: `20`,
//             premium: `30`,
//         },
//         {
//             title: "Number of pages",
//             basic: `5`,
//             standard: `8`,
//             premium: `12`,
//         },
//         {
//             title: "Revisions",
//             basic: `3`,
//             standard: `5`,
//             premium: `7`,
//         },
//         // {
//         //     title: "Delivery Time",
//         //     basic: `5 days`,
//         //     standard: `7 days`,
//         //     premium: `10 days`,
//         // },
//     ]
// }

const ServicePage = () => {

    // useEffect(function () {
    //     if (window.location.hash === "#pricing-section") {
    //         scroller.scrollTo('pricing-section', {
    //             duration: 500,
    //             delay: 1000,
    //             smooth: true,
    //             // containerId: 'ContainerElementID',
    //             offset: -10, // Scrolls to element -10 pixels down the page
    //         })
    //     }
    // }, [])

    return (
        <Layout
            seoTitle={service.seoTitle}
        >
            <NavbarTwo />

            <ServiceDetailsSection service={service} />
            
            {/* <Element name="pricing-section" className="element">&nbsp;</Element> */}

            {/* <ServicePricingSection service={service} servicePackages={servicePackages} /> */}

            <Footer />
        </Layout>
    )
}

export default ServicePage