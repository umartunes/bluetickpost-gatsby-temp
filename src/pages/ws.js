import React, { useEffect } from 'react'
import { navigate } from "@reach/router"


const WS = () => {

    // /ws route is printed in banner for booking a demo, so lets redirect it to the the schedule page
    useEffect(() => {
        navigate(`/schedule`)
    }, [])

    return (<></>);
}

export default WS