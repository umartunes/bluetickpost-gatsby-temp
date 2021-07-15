import React, { useEffect } from 'react'

const ZohoSalesIQ = () => {

    useEffect(() => {

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
        <></>
    )
}

export default ZohoSalesIQ