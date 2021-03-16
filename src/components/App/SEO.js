import React from 'react'
import { Helmet } from "react-helmet"

const SEO = () => {
    return (
        <div>
            <Helmet>
                <title>Virtual Coding Classes | Learn Robotics Programming - STEM One</title>
                <meta name="description" content="Virtual Coding Classes | Learn Robotics Programming - STEM One" />
                <meta name="og:title" property="og:title" content="Virtual Coding Classes | Learn Robotics Programming - STEM One"></meta>
                <meta name="twitter:card" content="Virtual Coding Classes | Learn Robotics Programming - STEM One"></meta>
                <link rel="canonical" href="https://stem.one/"></link>
                <meta property="og:image" content="https://res.cloudinary.com/dev-empty/image/upload/v1593069801/explore-learning.jpg" />
            </Helmet>
        </div>
    )
}

export default SEO
