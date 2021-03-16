import React, {useEffect} from 'react'
import { RecoilRoot } from 'recoil'
import GoTop from './GoTop'
import SEO from './SEO'
import tawkTo from "tawkto-react";

// tawk.to configurations
const tawkToPropertyId = '60508301f7ce182709308b7d'
const tawkToKey = '1f0t7vgau'
// https://tawk.to/chat/tawkToPropertyId/tawkToKey // Direct Chat Link

const Layout = ({ children }) => {

    // Inject Tawk.to if not already injected
    useEffect(() => {
        if(!window.injectedTawkTo){
            window.injectedTawkTo = true
            console.log("tawk")
            tawkTo(tawkToPropertyId, tawkToKey)
        }
    }, [])


    return (
        <RecoilRoot>
            <SEO />
            {children}
            <GoTop scrollStepInPx="100" delayInMs="10.50" />
        </RecoilRoot>
    )
}

export default Layout
