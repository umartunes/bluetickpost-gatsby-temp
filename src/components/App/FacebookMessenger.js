import React, { useEffect } from 'react'

const facebookPageId = '2243849832567495'

// not working somehow, need to fix this component to use this
const FacebookMessenger = () => {

    useEffect(() => {

        // Inject Facebook Messenger
        if (!window.injectedFacebookMessenger) {
            
            window.injectedFacebookMessenger = true

            window.fbAsyncInit = function () {
                window.FB.init({
                    xfbml: true,
                    version: 'v7.0'
                });
            };

            (function (d, s, id) {
                var js, fjs = d.getElementsByTagName(s)[0];
                if (d.getElementById(id)) return;
                js = d.createElement(s); js.id = id;
                js.src = 'https://connect.facebook.net/en_US/sdk/xfbml.customerchat.js';
                fjs.parentNode.insertBefore(js, fjs);
            }(document, 'script', 'facebook-jssdk'));

        }

    }, [])


    return (
        <>
            <div id="fb-root" />
            <div className="fb-customerchat" attribution="setup_tool" page_id={facebookPageId}
                logged_in_greeting="Hi! How can we help you?" logged_out_greeting="Hi! How can we help you?">
            </div>
        </>
    )
}

export default FacebookMessenger