import React from 'react'
import { Helmet } from "react-helmet"

const SEO = ({
    seoTitle = "Learn to Code: Grade 2 - Grade 8 by STEM One",
    seoDescription = "Coding & Robotics program for Students by local instructors.",
    seoCanonical = "/",
    seoOgImage = "/images/CodingProgram.png",
    ...otherProps
}) => {

    return (
        <div>
            <Helmet>
                <meta name="robots" content="index, follow" />

                <title>{seoTitle}</title>
                <meta name="description" content={seoDescription} />
                <link rel="canonical" href={`https://stem.one${seoCanonical}`}></link>

                <meta name="og:title" property="og:title" content={seoTitle}></meta>
                <meta name="twitter:card" content={seoTitle}></meta>
                <meta property="og:image" content={seoOgImage} />
            </Helmet>
        </div>
    )
}

export default SEO
