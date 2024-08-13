import React, { useState, useEffect } from 'react'
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemPanel,
    AccordionItemButton
} from 'react-accessible-accordion'
import { Link, } from 'gatsby'

// import starIcon from '../../assets/images/star-icon.png'
import displayPhoto from '../../assets/images/dp.jpg'

import { useToasts } from 'react-toast-notifications'

import { Element, scroller } from 'react-scroll'

const initialValues = {
    name: '',
    username: '',
    content: '',
    hashTags: '',
    theme: 'twitter',
    fontSize: 30,
    fontFamily: 'Roboto',
    createdAt: '',
}

const PostForm = ({ onGenerate }) => {

    const { addToast } = useToasts()
    const [isLoading, setIsLoading] = useState(false)

    const [generatedPost, setGeneratedPost] = useState(null);

    const [profileImage, setProfileImage] = useState(displayPhoto);
    const [backgroundImage, setBackgroundImage] = useState(null);
    const [useCustomBackground, setUseCustomBackground] = useState(false);
    const [hideVerifiedTick, setHideVerifiedTick] = useState(false);
    const [hideWatermark, setHideWatermark] = useState(false);
    const [contentAlign, setContentAlign] = useState('center');
    const [showFontSizeSettings, setShowFontSizeSettings] = useState(false);
    const [showFontFamilySettings, setShowFontFamilySettings] = useState(false);
    const [formData, setFormData] = useState({ ...initialValues })

    const handleFormData = e => {
        e.persist() // hack to be used on gatsby, I saw it first time
        setFormData((s) => ({ ...s, [e.target.name]: e.target.value }))
    }

    const notify = (message, type = "success") => { addToast(message, { appearance: type, autoDismiss: true }) }

    // Check if query data available in url
    useEffect(() => {

        // Ref: https://stackoverflow.com/questions/901115/how-can-i-get-query-string-values-in-javascript
        const urlParams = new Proxy(new URLSearchParams(window.location.search), {
            get: (searchParams, prop) => searchParams.get(prop),
        });

        // // Get the value of "some_key" in eg "https://example.com/?some_key=some_value"
        // let value = urlParams.some_key; // "some_value"

        let initValuesToSet = {}
        if (urlParams.theme)
            initValuesToSet.theme = urlParams.theme.trim()

        setTimeout(() => {
            setFormData({ ...formData, ...initValuesToSet })
        }, 1000)

    }, [])

    const handleSubmit = e => {

        e.preventDefault();

        let { name, username, content, hashTags, theme, fontSize, fontFamily, createdAt } = formData

        name = name.trim()
        username = username.trim()
        content = content.trim()
        hashTags = hashTags.trim()
        theme = theme.trim()

        fontSize = parseInt(fontSize)
        fontFamily = fontFamily.trim()

        if (name.length < 3) {
            notify('Please enter your name correctly', 'error')
            return;
        }

        if (content.length < 3) {
            notify('Please enter at least 3 characters in content field', 'error')
            return;
        }


        const postData = {
            name,
            username,
            content,
            profileImage,
            backgroundImage,
            createdAt: createdAt || new Date().toISOString(),
            hashTags,
            theme,
            fontSize,
            fontFamily,
            contentAlign,
            hideVerifiedTick: hideVerifiedTick ? "true" : "false", // send value as string
            hideWatermark: hideWatermark ? "true" : "false", // send value as string
            useCustomBackground: useCustomBackground ? "true" : "false", // send value as string
        };

        console.log(postData)

        handleGenerate(postData);

    }

    const handleGenerate = async (postData) => {

        setIsLoading(true)

        try {
            const postFormData = new FormData();
            postFormData.append('name', postData.name);
            postFormData.append('username', postData.username);
            postFormData.append('content', postData.content);
            postFormData.append('hashTags', postData.hashTags);
            postFormData.append('theme', postData.theme);
            postFormData.append('fontSize', postData.fontSize);
            postFormData.append('fontFamily', postData.fontFamily);
            postFormData.append('contentAlign', postData.contentAlign);
            postFormData.append('useCustomBackground', postData.useCustomBackground);
            postFormData.append('hideVerifiedTick', postData.hideVerifiedTick);
            postFormData.append('hideWatermark', postData.hideWatermark);

            if (postData.createdAt) {
                postFormData.append('createdAt', postData.createdAt);
            }
            if (postData.profileImage) {
                const response = await fetch(postData.profileImage);
                const blob = await response.blob();
                postFormData.append('profileImage', blob, 'profile-image.png');
            }

            if (postData.backgroundImage) {
                const response = await fetch(postData.backgroundImage);
                const blob = await response.blob();
                postFormData.append('backgroundImage', blob, 'background-image.png');
            }

            const response = await fetch('https://api.bluetickpost.com/blue-tick/generate-post', {
            // const response = await fetch('http://localhost:5000/blue-tick/generate-post', {
                method: 'POST',
                body: postFormData
            });

            const blob = await response.blob();
            const imageUrl = window.URL.createObjectURL(blob);

            setIsLoading(false)

            setGeneratedPost({ imageUrl: imageUrl });

            scroller.scrollTo('success-section', {
                duration: 500,
                delay: 300,
                smooth: true,
                // containerId: 'ContainerElementID',
                offset: 10, // Scrolls to element -10 pixels down the page
            })

            // const response = await axios.post('http://localhost:5000/blue-tick/generate-post', formData, {
            //   headers: {
            //     'Content-Type': 'multipart/form-data'
            //   }, 
            //   responseType: 'blob' // Ensure Axios handles the response as a Blob
            // });

            // const blob = response.data;
            // const imageUrl = window.URL.createObjectURL(blob);

        } catch (error) {
            setIsLoading(false)
            console.error('Error generating post image:', error);
            alert('Failed to generate post image');
        }
    };

    const downloadImage = (imageUrl) => {
        const link = document.createElement('a');
        link.href = imageUrl;
        link.download = `${formData.theme}-post-bluetickpost.com.jpg`;
        link.click();
        // document.body.removeChild(link);
    };

    const handleProfileImageChange = (e) => {
        if (e.target.files && e.target.files[0]) {
            setProfileImage(window.URL.createObjectURL(e.target.files[0]));
        }
    };
    const handleBackgroundImageChange = (e) => {
        if (e.target.files && e.target.files[0]) {
            setBackgroundImage(window.URL.createObjectURL(e.target.files[0]));
        }
    };

    const handleEdit = () => {
        setGeneratedPost(null)
    }

    const handleRegenerate = () => {
        setGeneratedPost(null)
        setBackgroundImage(null)
        setFormData({ ...formData, content: '', hashTags: '' })
    }

    return (
        <section className="contact-area ptb-70 bg-fafafb">
            <div className="container">


                {generatedPost
                    ? <>
                        <Element name="success-section" className="element">&nbsp;</Element>
                        <div className="row">
                            <div className="col-12">

                                <div className="generated-post p-0 text-center">
                                    <div className="bg-light border rounded p-4">
                                        <h5 className='my-4 text-center'>Your post is ready to be shared. Click on the button below to download it.</h5>
                                        
                                        <div className="my-4">
                                            <button className="btn btn-secondary mx-2 my-2" onClick={() => { handleEdit() }}>Edit <i class="fas fa-edit"></i></button>
                                            <button className="btn btn-info mx-2 my-2" onClick={() => { handleRegenerate() }}>Regenerate <i class="fas fa-redo"></i></button>
                                            <button className="btn btn-success mx-2 my-2" onClick={() => { downloadImage(generatedPost.imageUrl) }}>Download <i class="fas fa-download"></i></button>
                                        </div>
                                        <img src={generatedPost.imageUrl} alt="Generated Post" className="img-fluid" />
                                    </div>
                                </div>

                            </div>

                        </div>
                    </>
                    : <>

                        <div className="section-title mb-4" style={{ maxWidth: '100%' }}>
                            <h2>Create A Post</h2>
                            <p className='mx-auto' style={{ maxWidth: '80%' }}>Generate professional-looking social media posts with BlueTickPost. Stand out with posts that give the feeling of being verified. Customize with your photo, name, username, content, and hashtags to make your posts shine!</p>
                        </div>


                        <div className="row">
                            <div className="col-12">

                                {/* Code below to be Uncomment to open registration */}
                                <div className="contact-form ml-0">
                                    <form id="contactForm">

                                        <div className="row">
                                            <div className="col-md-3 d-flex align-items-center justify-content-center">
                                                <div className="row" >
                                                    <div className="col-md-12">

                                                        <div className="d-flex p-3 flex-column align-items-center justify-content-center" style={{ background: "#f5f5f5", cursor: "pointer" }} onClick={() => {
                                                            document.getElementById("profileImageInput").click();
                                                        }}>

                                                            <div className="previewOuter" style={{
                                                                border: `2px solid #ccc`,
                                                                width: `124px`,
                                                                height: `124px`,
                                                                boxSizing: `border-box`,
                                                                borderRadius: "50%",
                                                                margin: `0 auto`,
                                                            }}>
                                                                <div className="preview" style={{
                                                                    backgroundImage: `url("${profileImage}")`,
                                                                    width: "120px",
                                                                    height: "120px",
                                                                    overflow: "hidden",
                                                                    backgroundSize: "cover",
                                                                    backgroundPosition: "50%",
                                                                    borderRadius: "50%",
                                                                }}>

                                                                </div>
                                                            </div>

                                                            <small className="mt-3"> <strong>Select Profile Photo</strong> </small>
                                                            <div className="form-group border border-1 mb-0 d-none">
                                                                <input id="profileImageInput" type="file" name="photo" accept="image/*" className="form-control pl-0" onChange={handleProfileImageChange} style={{ height: `50px` }} />
                                                            </div>

                                                        </div>

                                                    </div>
                                                </div>

                                            </div>
                                            <div className="col-md-9">
                                                <div className="row">
                                                    <div className="col-md-12">
                                                        <h6 className='mt-3'>Name</h6>
                                                        <div className="form-group">
                                                            <input type="text" name="name" value={formData.name} className="form-control" required placeholder="" onChange={handleFormData} />
                                                        </div>
                                                    </div>
                                                    <div className="col-md-12">
                                                        <h6 className='mt-3'>Username</h6>
                                                        <div className="form-group">
                                                            <input type="text" name="username" value={formData.username} className="form-control" required placeholder="" onChange={handleFormData} />
                                                        </div>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                        <div className="row">

                                            <div className="col-md-12">

                                                <h5 className='mt-3 mb-0'>Post Content</h5>
                                                <p className='mb-2'><small className='text-dark'> 🛈 You can change the <strong>Font Size</strong> and <strong>Font Style</strong> from the toolbar buttons available on the right side.</small></p>
                                                <div className="row">
                                                    <div className="col">
                                                        <div className="btn-toolbar justify-content-end mb-2" role="toolbar" aria-label="Content Toolbar">
                                                            <div className="btn-group mr-2" role="group" aria-label="Content Align">
                                                                {['left', 'center', 'right'].map((align) => {
                                                                    return <button type="button" className={`btn btn-secondary ${align === contentAlign ? 'active' : ''}`}
                                                                        onClick={() => { setContentAlign(align) }}>
                                                                        <i class={`fas fa-align-${align}`}></i>
                                                                    </button>
                                                                })}
                                                            </div>
                                                            <div className="btn-group mr-2" role="group" aria-label="Font Size">
                                                                <button type="button" className={`btn btn-secondary ${showFontSizeSettings === true ? 'active' : ''}`}
                                                                    onClick={() => {
                                                                        setShowFontSizeSettings(!showFontSizeSettings)
                                                                        setShowFontFamilySettings(false)
                                                                    }}
                                                                >
                                                                    <i class="fas fa-text-height"></i>
                                                                </button>
                                                            </div>
                                                            <div className="btn-group" role="group" aria-label="Font Family">
                                                                <button type="button" className={`btn btn-secondary ${showFontFamilySettings === true ? 'active' : ''}`}
                                                                    onClick={() => {
                                                                        setShowFontFamilySettings(!showFontFamilySettings)
                                                                        setShowFontSizeSettings(false)
                                                                    }}
                                                                >
                                                                    <i class="fas fa-font"></i>
                                                                </button>
                                                            </div>
                                                        </div>

                                                    </div>
                                                </div>
                                                

                                                {showFontSizeSettings && <div className="row justify-content-end">
                                                    <div className="col-md-4">
                                                        <div className="d-flex justify-content-end">
                                                            <div className="form-group flex-grow-1">
                                                                <input type="range" class="custom-range" min="10" max="100" step="1" name='fontSize' id="fontSize" value={formData.fontSize} onChange={handleFormData} />
                                                            </div>
                                                            <h6 className='ml-2'>{formData.fontSize}px</h6>
                                                        </div>
                                                    </div>
                                                </div>}

                                                {showFontFamilySettings && <div className="row justify-content-end">
                                                    <div className="col-md-4">
                                                        <h6 className='mr-2'>Font Style</h6>
                                                        <div className="form-group flex-grow-1">
                                                            <select name="fontFamily" className={`form-control font-${formData.fontFamily}`} value={formData.fontFamily} onChange={handleFormData}>
                                                                <option className='font-option font-Roboto' value="Roboto">Roboto</option>
                                                                <option className='font-option font-OpenSans' value="OpenSans">Open Sans</option>
                                                                <option className='font-option font-Lato' value="Lato">Lato</option>
                                                                <option className='font-option font-Montserrat' value="Montserrat">Montserrat</option>
                                                                <option className='font-option font-Oswald' value="Oswald">Oswald</option>
                                                                <option className='font-option font-Raleway' value="Raleway">Raleway</option>
                                                                <option className='font-option font-Slabo' value="Slabo 27px">Slabo</option>
                                                                <option className='font-option font-Merriweather' value="Merriweather">Merriweather</option>
                                                                <option className='font-option font-Arimo' value="Arimo">Arimo</option>
                                                                <option className='font-option font-Ubuntu' value="Ubuntu">Ubuntu</option>
                                                                <option className='font-option font-Roboto' value="Roboto"></option>
                                                                <option className='font-option font-NastaliqUrdu' value="NastaliqUrdu">Urdu Nastaliq ( اردو ) </option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                </div>}

                                                <div className="form-group">
                                                    <textarea name="content"
                                                        className={`form-control font-${formData.fontFamily}`}
                                                        value={formData.content}
                                                        style={{ textAlign: `${contentAlign}`, fontSize: `${formData.fontSize}px` }}
                                                        cols="30" rows="6" required placeholder="Write post content..."
                                                        onChange={handleFormData} />
                                                </div>

                                            </div>

                                            <div className="col-md-12">
                                                <h6 className='mt-3'>Hash Tags</h6>
                                                <div className="form-group">
                                                    <input type="text" name="hashTags" value={formData.hashTags} className="form-control" required placeholder="#Hastag1 #Hastag2  #Hastag3" onChange={handleFormData} />
                                                    <small className='text-info'>🛈 Seperate Hash Tags using spaces</small>
                                                </div>
                                            </div>


                                            <div className="col-md-12">
                                                <h6 className='mt-3'>Theme</h6>
                                                <div className="form-group">
                                                    <select name="theme" className="form-control" value={formData.theme} onChange={handleFormData}>
                                                        <option value="facebook">Facebook</option>
                                                        <option value="instagram">Instagram</option>
                                                        <option value="twitter">Twitter</option>
                                                        <option value="x">Twitter(X)</option>
                                                        <option value="whatsapp">WhatsApp</option>
                                                        <option value="linkedin">LinkedIn</option>
                                                        <option value="youtube">YouTube</option>
                                                        <option value="telegram">Telegram</option>
                                                        <option value="discord">Discord</option>
                                                        <option value="customComment">Custom</option>
                                                    </select>
                                                </div>
                                            </div>




                                            <div className="col-md-12">
                                                <Accordion>
                                                    <AccordionItem>
                                                        <AccordionItemHeading >
                                                            <AccordionItemButton style={{ backgroundColor: '#17a2b8', color: 'white', fontWeight: 'bold' }}>
                                                                Additional Post Settings
                                                            </AccordionItemButton>
                                                        </AccordionItemHeading>
                                                        <AccordionItemPanel>
                                                            <div className="row">
                                                                <div className="col-md-12 mt-2">

                                                                    <div className="row">
                                                                        <div className="col-10"><h6>Use Custom Background Image?</h6></div>
                                                                        <div className="col-2">
                                                                            <div className="custom-control custom-switch text-right">
                                                                                <input type="checkbox" className="custom-control-input" id="useCustomBackground" checked={useCustomBackground} onChange={() => setUseCustomBackground(!useCustomBackground)} />
                                                                                <label className="custom-control-label" for="useCustomBackground"></label>
                                                                            </div>
                                                                        </div>
                                                                    </div>


                                                                    {
                                                                        useCustomBackground && <>
                                                                            <p className='mt-1 mb-3'><small className='text-info'> 🛈 If you're using custom background image make sure image size is less than 1mb.  <a className='font-weight-bold' href="https://bulkresizephotos.com/en?type=filesize" rel='nofollow'>[OR] REDUCE IMAGE SIZE BY CLICKING HERE.</a> We're working on this feature to improve it. </small> </p>
                                                                            <div className="d-flex p-3 flex-column align-items-center justify-content-center" style={{ background: "#f5f5f5", cursor: "pointer" }} onClick={() => {
                                                                                document.getElementById("backgroundImageInput").click();
                                                                            }}>

                                                                                <div className="previewOuter d-flex align-items-center justify-content-center flex-column cursor-pointer" style={{
                                                                                    border: `2px solid #eee`,
                                                                                    width: `250px`,
                                                                                    maxWidth: `100%`,
                                                                                    height: `250px`,
                                                                                    padding: `8px`,
                                                                                    boxSizing: `border-box`,
                                                                                    margin: `0 auto`,
                                                                                    backgroundImage: `url("${backgroundImage}")`,
                                                                                    backgroundSize: "cover",
                                                                                    backgroundPosition: "center",
                                                                                }}>

                                                                                    {
                                                                                        backgroundImage
                                                                                            ? <>
                                                                                                <button type="button" className="btn btn-light btn-lg"><i className="fas fa-sync fa-lg text-dark"></i></button>
                                                                                            </>
                                                                                            : <>
                                                                                                <p className='mb-1'><small><span className="fas fa-image fa-lg text-grey"></span></small></p>
                                                                                                <small className="mb-1"><span className="fas fa-plus mr-2"></span>Select Background Image</small>
                                                                                            </>
                                                                                    }

                                                                                </div>

                                                                                <div className="form-group border border-1 mb-0 d-none">
                                                                                    <input id="backgroundImageInput" type="file" name="photo" accept="image/*" className="form-control pl-0" onChange={handleBackgroundImageChange} style={{ height: `50px` }} />
                                                                                </div>

                                                                            </div>
                                                                        </>

                                                                    }

                                                                </div>

                                                                <div className="col-md-12 mt-2">

                                                                    <div className="row">
                                                                        <div className="col-10"><h6>Hide Verified Tick?</h6></div>
                                                                        <div className="col-2">
                                                                            <div className="custom-control custom-switch text-right">
                                                                                <input type="checkbox" className="custom-control-input" id="hideVerifiedTick" checked={hideVerifiedTick} onChange={() => setHideVerifiedTick(!hideVerifiedTick)} />
                                                                                <label className="custom-control-label" for="hideVerifiedTick"></label>
                                                                            </div>
                                                                        </div>
                                                                    </div>

                                                                </div>
                                                                <div className="col-md-12 mt-2">

                                                                    <div className="row">
                                                                        <div className="col-10"><h6>Hide Watermark?</h6></div>
                                                                        <div className="col-2">
                                                                            <div className="custom-control custom-switch text-right">
                                                                                <input type="checkbox" className="custom-control-input" id="hideWatermark" checked={hideWatermark} onChange={() => setHideWatermark(!hideWatermark)} />
                                                                                <label className="custom-control-label" for="hideWatermark"></label>
                                                                            </div>
                                                                        </div>
                                                                    </div>

                                                                </div>
                                                            </div>
                                                        </AccordionItemPanel>
                                                       
                                                    </AccordionItem>
                                                </Accordion>
                                            </div>

                                            <div className="col-md-12">
                                                <hr />
                                            </div>


                                            <div className="col-md-12 ">

                                                <div className="text-right">
                                                    <button type="submit" className="default-btn" disabled={isLoading} onClick={handleSubmit}>

                                                        {!isLoading
                                                            ? <>
                                                                <i className="flaticon-right"></i>
                                                                Generate Post <span></span>
                                                            </>
                                                            : <>
                                                                <i className="flaticon-right"></i>
                                                                Processing... <span></span>
                                                            </>
                                                        }
                                                    </button>
                                                </div>
                                                <p><small><i className="flaticon-right"></i> By Clicking <strong>'Generate Post'</strong> button, you acknowledge that you agree to the <a href="https://bluetickpost.com/terms-and-conditions" target="_blank">Terms &amp; Conditions</a>.</small></p>
                                                {/* <p className='mb-2'><small className='text-info'> 🛈 By Clicking <strong>'Generate Post'</strong> button, you confirm that all the information provided above is valid [OR] you're allowed to use it without any conflict, and generated image would be used only in good context.</small></p> */}

                                            </div>
                                        </div>
                                    </form>
                                </div>

                            </div>
                        </div>
                    </>
                }


            </div>
        </section>
    )
}

export default PostForm