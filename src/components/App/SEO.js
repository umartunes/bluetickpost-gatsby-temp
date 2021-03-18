import React from 'react'
import { Helmet } from "react-helmet"

const SEO = ({
    seoTitle = "Virtual Coding Classes | Learn Robotics Programming - STEM One",
    seoDescription = "Virtual Coding Classes | Learn Robotics Programming - STEM One",
    seoCanonical = "",
    seoOgImage = "https://res.cloudinary.com/dev-empty/image/upload/v1593069801/explore-learning.jpg",
    ...otherProps
}) => {

    return (
        <div>
            <Helmet>
                <meta name="robots" content="index, follow" />

                <title>{seoTitle}</title>
                <meta name="description" content={seoDescription} />
                <link rel="canonical" href={`https://stem.one/${seoCanonical}`}></link>

                <meta name="og:title" property="og:title" content={seoTitle}></meta>
                <meta name="twitter:card" content={seoTitle}></meta>
                <meta property="og:image" content={seoOgImage} />
            </Helmet>
        </div>
    )
}

export default SEO
