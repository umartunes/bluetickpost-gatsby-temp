import React, { useEffect } from 'react'
import tawkTo from "tawkto-react";

// tawk.to configurations
const tawkToPropertyId = '60508301f7ce182709308b7d'
const tawkToKey = '1f0t7vgau'
// https://tawk.to/chat/tawkToPropertyId/tawkToKey // Direct Chat Link


const TawkTo = () => {

    useEffect(() => {

        // Inject Tawk.to if not already injected
        if (!window.injectedTawkTo) {
            // console.log("tawk")
            window.injectedTawkTo = true
            tawkTo(tawkToPropertyId, tawkToKey)
        }

    }, [])


    return (
        <></>
    )
}

export default TawkTo