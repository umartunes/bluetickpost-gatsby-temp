import React, { useEffect } from 'react'
import { RecoilRoot } from 'recoil'
import GoTop from './GoTop'
import SEO from './SEO'
import { ToastProvider } from 'react-toast-notifications';
// import FacebookMessenger from './FacebookMessenger'
// import TawkTo from './TawkTo'
// import ZohoSalesIQ from './ZohoSalesIQ'



const Layout = ({ children, ...otherProps }) => {

    return (
        <RecoilRoot>
            <ToastProvider>
                <SEO {...otherProps} />
                {children}
                <GoTop scrollStepInPx="100" delayInMs="10.50" />
            </ToastProvider>
            {/* <FacebookMessenger /> */} //
            {/* <TawkTo /> */}
            {/* <ZohoSalesIQ /> */}
        </RecoilRoot>
    )
}

export default Layout