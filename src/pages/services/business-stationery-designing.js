import React, { useEffect } from 'react'
import Layout from "../../components/App/Layout"
import NavbarTwo from "../../components/App/NavbarTwo"
import Footer from "../../components/App/Footer"

import ServiceDetailsSection from '../../components/ServicesDetails/ServiceDetailsSection'
import ServicePricingSection from '../../components/ServicesDetails/ServicePricingSection'

import { Element, scroller } from 'react-scroll'

const service = {
    seoTitle: `Business Card, Letterhead, and Stationery Designing Services & Pricing  - CanBusiness Club`,

    serviceVideoId: "5cmoTa5KRRs",
    serviceVideoThumb: '/images/services/stationery-designing.png',
    serviceHeading: "Business Cards and Stationery Designing ",
    serviceDetails: [
        `Do you want to keep promoting your business continuously without any extra effort?`,
        `Did you know? Branded stationery for a business; helps a business to promote the business continuously which becomes a massive advantage to any business. Using branded stationery is a cost-effective marketing tool that will place the brand at the forefront of the customer's minds when they see the stationery.`,
        `At CanBusiness Club; we design very beautiful double-sided business cards (with QR code), complete stationery, letterhead, invoice, envelope, presentation folders, CD/DVD covers, pen drives, mug designs, shopping bags, notepads, ID cards, etc.`,
    ],
};

const servicePackages = {
    title: `Business Cards & Stationery Designing Prices`,
    description: `Our services are priced to be affordable to enable businesses worldwide to get top-notch services at a low cost and grow smoothly!`,

    pricing: {
        basic: {
            title: `Basic`,
            price: `$30`,
            saving: `Save $10`,
            discountedPrice: `$20`,
            description: `✔Business Card (Both sides + QR Code) ✔or Letterhead.`
        },
        standard: {
            title: `Standard`,
            price: `$60`,
            saving: `Save $20`,
            discountedPrice: `$40`,
            description: `✔Business Card ✔Letterhead ✔Envelope ✔Presentation Folder`
        },
        premium: {
            title: `Premium`,
            price: `$110`,
            saving: `Save $30`,
            discountedPrice: `$80`,
            description: `✔ You get 15 Items. For the product list; please check the description`
        },
    },

    features: [
        {
            title: "Number of Initial Concepts",
            basic: `1`,
            standard: `2`,
            premium: `2`,
        },
        {
            title: "Front & Back Design",
            basic: true,
            standard: true,
            premium: true,
        },
        {
            title: "Files Ready for Print",
            basic: true,
            standard: true,
            premium: true,
        },
        {
            title: "Premium Quality Image",
            basic: true,
            standard: true,
            premium: true,
        },
        {
            title: "Source Files",
            basic: true,
            standard: true,
            premium: true,
        },
        {
            title: "Email Signature",
            basic: false,
            standard: false,
            premium: true,
        },
        {
            title: "Revisions",
            basic: `3`,
            standard: `5`,
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