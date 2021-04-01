import React, { useEffect } from 'react'
import { RecoilRoot } from 'recoil'
import GoTop from './GoTop'
import SEO from './SEO'
// import tawkTo from "tawkto-react";

// tawk.to configurations
// const tawkToPropertyId = '60508301f7ce182709308b7d'
// const tawkToKey = '1f0t7vgau'
// https://tawk.to/chat/tawkToPropertyId/tawkToKey // Direct Chat Link

const Layout = ({ children, ...otherProps }) => {

    useEffect(() => {
        // Inject Tawk.to if not already injected
        // if (!window.injectedTawkTo) {
        //     // console.log("tawk")
        //     window.injectedTawkTo = true
        //     tawkTo(tawkToPropertyId, tawkToKey)
        // }
        
        // Inject Zoho SalesIQ
        if (!window.injectedZohoIQ) {
            window.injectedZohoIQ = true
            window.$zoho=window.$zoho || {};
            window.$zoho.salesiq = window.$zoho.salesiq || {widgetcode:"264574aeef8b127fb85039b1a70918612bfe049700da65b023b2667f82b39331", values:{},ready:function(){}};
            var d=document;
            var s=d.createElement("script");
            s.type="text/javascript";
            s.id="zsiqscript";
            s.defer=true;
            s.src="https://salesiq.zoho.com/widget";
            var t=d.getElementsByTagName("script")[0];
            t.parentNode.insertBefore(s,t);
            // d.write("<div id='zsiqwidget'></div>");
        }
    

    }, [])


    return (
        <RecoilRoot>
            <SEO {...otherProps} />
            {children}
            <GoTop scrollStepInPx="100" delayInMs="10.50" />
        </RecoilRoot>
    )
}

export default Layout