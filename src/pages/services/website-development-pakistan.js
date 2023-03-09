import React, { useEffect } from 'react'
import Layout from "../../components/App/Layout"
import NavbarTwo from "../../components/App/NavbarTwo"
import Footer from "../../components/App/Footer"

import ServiceDetailsSection from '../../components/Services/ServiceDetailsSection'
import ServicePricingSection from '../../components/Services/ServicePricingSection'

import { Element, scroller } from 'react-scroll'

const service = {
    seoTitle: `Web Design & Development Service & Pricing  - CanBusiness Club`,

    serviceVideoId: "_e0Hh9mnun8",
    serviceVideoThumb: '/images/services/website-development.png',
    serviceHeading: "Website Development",
    serviceDetails: [
        `Are you looking for a website or an e-commerce online shop to grow your business?`,
        `Don't need to look further; We will build a professional, clean & modern WordPress website or e-commerce online store which is professional, SEO optimized has fast-loading pages, and is responsive across all devices (Mobile, Desktop, Tablet) according to your needs and requirements.`,
        `Our web development service is perfect for: <br /> E-COMMERCE / BUSINESS / BLOG / NEWS / MAGAZINE / COMPANY / PORTFOLIO / RESTAURANT / REAL ESTATE / NGO`
    ],
};

const servicePackages = {
    title: `Web Design & Development Prices`,
    description: `E-COMMERCE / BUSINESS / BLOG / NEWS / MAGAZINE / COMPANY / PORTFOLIO / RESTAURANT / REAL ESTATE / NGO`,

    pricing: {
        basic: {
            title: `Basic`,
            price: `Rs. 29,000`,
            saving: `Save Rs. 10,000`,
            discountedPrice: `Rs. 19,000`,
            description: `Business / Blog Website: Clean & modern website with contact form, social media etc. Responsive & SEO optimized.`
        },
        standard: {
            title: `Standard`,
            price: `Rs. 44,000`,
            saving: `Save Rs. 15,000`,
            discountedPrice: `Rs. 29,000`,
            description: `Standard E-Commerce Website: Complete business website with eCommerce functionality. Fully responsive & SEO optimized.`
        },
        premium: {
            title: `Premium`,
            price: `Rs. 89,000`,
            saving: `Save Rs. 30,000`,
            discountedPrice: `Rs. 59,000`,
            description: `Premium E-Commerce Website: Highly customized ecommerce website with premium features, Plugins, & advance layouts.`
        },
    },

    features: [
        {
            title: "Functional Website",
            basic: true,
            standard: true,
            premium: true,
        },
        {
            title: "Content upload",
            basic: true,
            standard: true,
            premium: true,
        },
        {
            title: "Design Customization",
            basic: true,
            standard: true,
            premium: true,
        },
        {
            title: "Business Emails Setup",
            basic: true,
            standard: true,
            premium: true,
        },
        {
            title: "Business Branding (Stationery Design)",
            basic: true,
            standard: true,
            premium: true,
        },
        {
            title: "E-Commerce Functionality",
            basic: false,
            standard: true,
            premium: true,
        },
        {
            title: "E-Commerce Design Layouts",
            basic: false,
            standard: `30+`,
            premium: `90+`,
        },
        {
            title: "Number of products",
            basic: false,
            standard: `20`,
            premium: `30`,
        },
        {
            title: "Number of pages",
            basic: `5`,
            standard: `8`,
            premium: `12`,
        },
        {
            title: "Revisions",
            basic: `3`,
            standard: `5`,
            premium: `7`,
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