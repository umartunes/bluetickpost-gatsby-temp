import React from 'react'
import { Helmet } from "react-helmet"

const SEO = ({
    seoTitle = "BlueTickPost - Create Verified-Like Social Media Posts",
    seoDescription = "Generate professional-looking social media posts with BlueTickPost. Stand out with posts that give the feeling of being verified. Customize with your name, username, content, and hashtags to make your posts shine!",
    seoKeywords = "BlueTickPost, Verified social media posts, Social media post generator, Custom social media posts, Professional social posts, Verified-like posts, Create social media posts, Blue tick posts, Social media tools",
    seoCanonical = "/",
    seoOgImage = "/images/bluetickpost-cover.png",
    ...otherProps
}) => {

    return (
        <div>
            <Helmet>
                <meta name="robots" content="index, follow" />

                <title>{seoTitle}</title>
                <meta name="description" content={seoDescription} />
                <meta name="keywords" content={seoKeywords} />
                <link rel="canonical" href={`https://bluetickpost.com${seoCanonical}`}></link>

                <meta name="author" content="BlueTickPost Team" />
                {/* <meta name="robots" content="index, follow" /> */}


                {/* Open Graph / Facebook */}
                <meta property="og:title" content={seoTitle} />
                <meta property="og:description" content="Generate professional-looking posts that make you feel verified on social media. Customize and share your unique posts today!" />
                <meta property="og:image" content={seoOgImage} />
                <meta property="og:url" content="https://bluetickpost.com" />

                {/* Twitter */}
                <meta name="twitter:title" content={seoTitle} />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:description" content="Stand out on social media with custom posts that give the feel of being verified. Create and share your posts now!" />
                <meta name="twitter:image" content={seoOgImage} />


                {/* Facebook Domain Verification Meta Tag */}
                {/* <meta name="facebook-domain-verification" content="0dw4w932imlkc1e4o0nn2plr4ovxzx" /> */}

                {/* FontAwesome CDN */}
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css" integrity="sha512-1ycn6IcaQQ40/MKBW2W4Rhis/DbILU74C1vSrLJxCq57o941Ym01SwNsOMqvEBFlcgUa6xLiPY/NS5R+E6ztJQ==" crossorigin="anonymous" referrerpolicy="no-referrer" />

                <style>{`
                    .font-option { font-size: 20px; padding: 15px 10px; }
                    .font-Roboto { font-family: 'Roboto', sans-serif; }
                    .font-OpenSans { font-family: 'Open Sans', sans-serif; }
                    .font-Lato { font-family: 'Lato', sans-serif; }
                    .font-Montserrat { font-family: 'Montserrat', sans-serif; }
                    .font-Oswald { font-family: 'Oswald', sans-serif; }
                    .font-Raleway { font-family: 'Raleway', sans-serif; }
                    .font-Slabo { font-family: 'Slabo 27px', serif; }
                    .font-Merriweather { font-family: 'Merriweather', serif; }
                    .font-Arimo { font-family: 'Arimo', sans-serif; }
                    .font-Ubuntu { font-family: 'Ubuntu', sans-serif; }

                    .font-NastaliqUrdu { font-family: "Noto Nastaliq Urdu", serif; font-weight: 400; font-style: normal; }
                `}</style>
                {/* <!-- Link to Google Fonts --> */}
                <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400&display=swap" rel="stylesheet" />
                <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300&display=swap" rel="stylesheet" />
                <link href="https://fonts.googleapis.com/css2?family=Lato:wght@400&display=swap" rel="stylesheet" />
                <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400&display=swap" rel="stylesheet" />
                <link href="https://fonts.googleapis.com/css2?family=Oswald:wght@400&display=swap" rel="stylesheet" />
                <link href="https://fonts.googleapis.com/css2?family=Raleway:wght@400&display=swap" rel="stylesheet" />
                <link href="https://fonts.googleapis.com/css2?family=Slabo+27px&display=swap" rel="stylesheet" />
                <link href="https://fonts.googleapis.com/css2?family=Merriweather:wght@400&display=swap" rel="stylesheet" />
                <link href="https://fonts.googleapis.com/css2?family=Arimo:wght@400&display=swap" rel="stylesheet" />
                <link href="https://fonts.googleapis.com/css2?family=Ubuntu:wght@400&display=swap" rel="stylesheet" />

                <link href="https://fonts.googleapis.com/css2?family=Noto+Nastaliq+Urdu&display=swap" rel="stylesheet"></link>

            </Helmet>
        </div>
    )
}

export default SEO
