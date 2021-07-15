import React, { useEffect } from 'react'
import { RecoilRoot } from 'recoil'
import GoTop from './GoTop'
import SEO from './SEO'
// import FacebookMessenger from './FacebookMessenger'
// import TawkTo from './TawkTo'
// import ZohoSalesIQ from './ZohoSalesIQ'



const Layout = ({ children, ...otherProps }) => {

    return (
        <RecoilRoot>
            <SEO {...otherProps} />
            {children}
            <GoTop scrollStepInPx="100" delayInMs="10.50" />
            {/* <FacebookMessenger /> */} //
            {/* <TawkTo /> */}
            {/* <ZohoSalesIQ /> */}
        </RecoilRoot>
    )
}

export default Layout