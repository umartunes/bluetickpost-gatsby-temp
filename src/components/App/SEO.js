import React from 'react'
import { Helmet } from "react-helmet"

const SEO = ({
    seoTitle = "Techna - Pakistan's Lead IT Trainings Institute and Technology Solutions Center",
    seoDescription = "Techna is the Best IT Institution in Faisalabad Pakistan. At Techna we aim to train and produce 100,000 skilled application developers to resolve the unemployment issues of youngsters.",
    seoCanonical = "/",
    seoOgImage = "/images/techna-cover.jpg",
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


                {/* Facebook Domain Verification Meta Tag */}
                <meta name="facebook-domain-verification" content="0dw4w932imlkc1e4o0nn2plr4ovxzx" />

            </Helmet>
        </div>
    )
}

export default SEO
