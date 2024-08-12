import React, { Fragment, useState } from 'react'
import { Link, } from 'gatsby'

// import starIcon from '../../assets/images/star-icon.png'
import displayPhoto from '../../assets/images/dp.jpg'

import { useToasts } from 'react-toast-notifications'

import { Element, scroller } from 'react-scroll'

import { courses } from '../../data/courses'

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

    const [formData, setFormData] = useState({ ...initialValues })

    const handleFormData = e => {
        e.persist() // hack to be used on gatsby, I saw it first time
        setFormData((s) => ({ ...s, [e.target.name]: e.target.value }))
    }

    const notify = (message, type = "success") => { addToast(message, { appearance: type, autoDismiss: true }) }

    // const actionOnSuccess = (applicantData) => {

    //     // console.log(applicantData)

    //     window.location.assign(`/form-download?course=${applicantData.course}&CNIC=${applicantData.CNIC}&batch=${applicantData.batch}`)

    //     setIsSubmitted(true)
    //     setIsLoading(false)

    //     scroller.scrollTo('success-section', {
    //         duration: 500,
    //         delay: 300,
    //         smooth: true,
    //         // containerId: 'ContainerElementID',
    //         offset: -100, // Scrolls to element -10 pixels down the page
    //     })

    // }

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

        // let applicantData = { name, fatherName, email, CNIC, mobileNumber, DOB, gender, qualification, address, city, country, course, classMode, learningMode, referrer }
        // applicantData.photo = userPhoto.src

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
            useCustomBackground: useCustomBackground ? "true" : "false", // send value as string
            hideVerifiedTick: hideVerifiedTick ? "true" : "false", // send value as string
            hideWatermark: hideWatermark ? "true" : "false", // send value as string
        };
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

            console.log(postFormData)

            const response = await fetch('https://api.bluetickpost.com/blue-tick/generate-post', {
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

            // const response = await axios.post('http://localhost:8000/blue-tick/generate-post', formData, {
            //   headers: {
            //     'Content-Type': 'multipart/form-data'
            //   }, 
            //   responseType: 'blob' // Ensure Axios handles the response as a Blob
            // });

            // const blob = response.data;
            // const imageUrl = window.URL.createObjectURL(blob);

        } catch (error) {
            console.error('Error generating post image:', error);
            alert('Failed to generate post image');
        }
    };

    const downloadImage = (imageUrl) => {
        const link = document.createElement('a');
        link.href = imageUrl;
        link.download = `${formData.theme}-post-bluetickpost.com.png`;
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
                                        <p className='my-4 text-center'>Your post is successfully created.</p>
                                        <img src={generatedPost.imageUrl} alt="Generated Post" className="img-fluid" />
                                        <div className="my-5">
                                            <button className="btn btn-info mx-2" onClick={() => { handleEdit() }}>Edit</button>
                                            <button className="btn btn-secondary mx-2" onClick={() => { handleRegenerate() }}>Regenerate</button>
                                            <button className="btn btn-success mx-2" onClick={() => { downloadImage(generatedPost.imageUrl) }}>Download</button>
                                        </div>
                                    </div>
                                </div>

                            </div>

                        </div>
                    </>
                    : <>

                        <div className="section-title mb-4" style={{ maxWidth: '100%' }}>
                            <h2>Create A Post</h2>
                            <p className='mx-auto' style={{ maxWidth: '80%' }}>Please fill in the form below to apply for a course. All fields are required.</p>
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

                                                        <div className="d-flex p-3 flex-column align-items-center justify-content-center" style={{ background: "#f5f5f5" }} onClick={() => {
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
                                                            <button type="button" class="btn btn-info btn-sm my-1 px-5">Profile Photo</button>

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
                                                <h6 className='mt-3'>Content</h6>
                                                <div className="form-group">
                                                    <textarea name="content" value={formData.content} style={{ textAlign: `center`, fontSize: `${formData.fontSize}px` }} className="form-control" cols="30" rows="6" required placeholder="Write post content" onChange={handleFormData} />
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
                                                <h6 className='mt-3'>Font Style</h6>
                                                <div className="form-group">
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

                                            <div className="col-md-12">
                                                <h6 className='mt-3'>Font Size</h6>
                                                <div className="form-group">
                                                    <input type="range" class="custom-range" min="10" max="50" step="1" name='fontSize' id="fontSize" value={formData.fontSize} onChange={handleFormData} />
                                                </div>
                                            </div>

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
                                                    useCustomBackground
                                                        ? <Fragment>
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
                                                                            ? <Fragment>
                                                                                <p ><small><i class="fas fa-edit fa-2x text-dark"></i></small></p>
                                                                            </Fragment>
                                                                            : <Fragment>
                                                                                <p className='mb-1'><small><span className="fas fa-image fa-lg text-grey"></span></small></p>
                                                                                <small className="mb-1"><span className="fas fa-plus mr-2"></span>Select Background Image</small>
                                                                            </Fragment>
                                                                    }

                                                                </div>

                                                                <div className="form-group border border-1 mb-0 d-none">
                                                                    <input id="backgroundImageInput" type="file" name="photo" accept="image/*" className="form-control pl-0" onChange={handleBackgroundImageChange} style={{ height: `50px` }} />
                                                                </div>

                                                            </div>
                                                        </Fragment>
                                                        : <Fragment>

                                                        </Fragment>
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
                                                <p><small><i className="flaticon-right"></i> By Clicking <strong>'Generate Post'</strong> button, you acknowledge that you agree to the <a href="https://bluetickpost.com/terms-of-service" target="_blank">Terms &amp; Conditions</a>.</small></p>
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