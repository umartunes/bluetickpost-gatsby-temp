import React, { useEffect } from 'react'
import Layout from "../../components/App/Layout"
import NavbarTwo from "../../components/App/NavbarTwo"
import Footer from "../../components/App/Footer"

import ServiceDetailsSection from '../../components/ServicesDetails/ServiceDetailsSection'
import ServicePricingSection from '../../components/ServicesDetails/ServicePricingSection'

import { Element, scroller } from 'react-scroll'

const service = {
    seoTitle: `Logo Designing Service & Pricing  - CanBusiness Club`,

    serviceVideoId: "STF34yB4Avk",
    serviceVideoThumb: '/images/services/logo-designing.png',
    serviceHeading: "Professional & Eye-Catching Logo Designs",
    serviceDetails: [
        `Are you looking for a modern, unique, eye-catching and professional Logo for your branding start-up? Do you want to take your company or business to the next level?`,
        `You’re at the right place! We're here to help you create a custom stunning minimalist company logo. You will get an amazing and memorable brand identity design.`,
    ],
};

const servicePackages = {
    title: `Logo Designing Prices`,
    description: `Our services are priced to be affordable to enable businesses worldwide to get top-notch services at a low cost and grow smoothly!`,

    pricing: {
        basic: {
            title: `Basic`,
            price: `$30`,
            saving: `Save $10`,
            discountedPrice: `$20`,
            description: `✔2 HQ modern logo designs with JPG & Transparent (PNG) file`
        },
        standard: {
            title: `Standard`,
            price: `$60`,
            saving: `Save $20`,
            discountedPrice: `$40`,
            description: `✔ 3 HQ logo designs concept with JPG & Transparent (PNG) file + ✔ Source files`
        },
        premium: {
            title: `Premium`,
            price: `$140`,
            saving: `Save $40`,
            discountedPrice: `$100`,
            description: `✔ All in Standard Package + ✔ Full Stationery Design`
        },
    },

    features: [
        {
            title: "Number of Initial Concepts",
            basic: `2`,
            standard: `3`,
            premium: `3`,
        },
        {
            title: "Printable Resolution File",
            basic: true,
            standard: true,
            premium: true,
        },
        {
            title: "Logo Transparency",
            basic: true,
            standard: true,
            premium: true,
        },
        {
            title: "Source Files",
            basic: false,
            standard: true,
            premium: true,
        },
        {
            title: "Vector Files",
            basic: false,
            standard: true,
            premium: true,
        },
        {
            title: "Social Media Kit",
            basic: false,
            standard: true,
            premium: true,
        },
        {
            title: "Favicon",
            basic: false,
            standard: true,
            premium: true,
        },
        {
            title: "Stationery Design",
            basic: false,
            standard: false,
            premium: true,
        },
   
        {
            title: "Revisions",
            basic: `2`,
            standard: `4`,
            premium: `unlimited`,
        },
        // {
        //     title: "Delivery Time",
        //     basic: `5 days`,
        //     standard: `7 days`,
        //     premium: `10 days`,
        // },
    ]
}

const ServicePage = () => {

    useEffect(function () {
        if (window.location.hash === "#pricing-section") {
            scroller.scrollTo('pricing-section', {
                duration: 500,
                delay: 1000,
                smooth: true,
                // containerId: 'ContainerElementID',
                offset: -10, // Scrolls to element -10 pixels down the page
            })
        }
    }, [])

    return (
        <Layout
            seoTitle={service.seoTitle}
        >
            <NavbarTwo />

            <ServiceDetailsSection service={service} />
            
            <Element name="pricing-section" className="element">&nbsp;</Element>

            <ServicePricingSection service={service} servicePackages={servicePackages} />

            <Footer />
        </Layout>
    )
}

export default ServicePage