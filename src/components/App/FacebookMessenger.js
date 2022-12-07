import React, { useEffect } from 'react'

const facebookPageId = '2243849832567495'

// solution found: https://stackoverflow.com/questions/13495010/how-to-add-content-to-html-body-using-js
const FacebookMessenger = () => {

    useEffect(() => {

        // Inject Facebook Messenger
        if (!window.injectedFacebookMessenger) {

            window.injectedFacebookMessenger = true

            let fbElements = `
            <div id="fb-root"></div>
            <div id="fb-customer-chat" class="fb-customerchat">
            </div>
            `
            document.body.insertAdjacentHTML('beforeend', fbElements)

            setTimeout(() => {

                var chatbox = document.getElementById('fb-customer-chat');
                chatbox.setAttribute("page_id", facebookPageId);
                chatbox.setAttribute("attribution", "biz_inbox");

                window.fbAsyncInit = function () {
                    window.FB.init({
                        xfbml: true,
                        version: 'v14.0'
                    });
                };

                (function (d, s, id) {
                    var js, fjs = d.getElementsByTagName(s)[0];
                    if (d.getElementById(id)) return;
                    js = d.createElement(s); js.id = id;
                    js.src = 'https://connect.facebook.net/en_US/sdk/xfbml.customerchat.js';
                    fjs.parentNode.insertBefore(js, fjs);
                }(document, 'script', 'facebook-jssdk'));

            }, 1500)
        }

    }, [])


    return (
        <></>
    )
}

export default FacebookMessenger