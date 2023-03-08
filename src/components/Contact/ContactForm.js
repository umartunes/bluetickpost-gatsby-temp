import React, { useState } from 'react'
import starIcon from '../../assets/images/star-icon.png'
import contact from '../../assets/images/contact.png'
// import { firebase, firestore } from '../../utils/firebase'
import { useToasts } from 'react-toast-notifications'

import emailjs from '@emailjs/browser';

const ContactForm = () => {

    const { addToast } = useToasts()
    const [isLoading, setIsLoading] = useState(false)
    const [isSubmitted, setIsSubmitted] = useState(false)

    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        phoneNumber: '',
        message: '',
    })

    const handleFormData = e => {
        e.persist() // hack to be used on gatsby, I saw it first time
        setFormData((s) => ({ ...s, [e.target.name]: e.target.value }))
    }

    const handleSubmit = e => {

        e.preventDefault();

        let { fullName, email, phoneNumber, message } = formData

        fullName = fullName.trim()
        email = email.trim()
        phoneNumber = phoneNumber.trim()
        message = message.trim()

        let notify = (message, type="success") => { addToast(message, { appearance: type, autoDismiss: true }) }

        if (fullName.length < 3) {
            notify('Please enter your name correctly', 'error')
            return;
        }
        if (!(/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/.test(email))) {
            notify('Please enter a valid email address', 'error')
            return;
        }
        if (phoneNumber.length < 10) {
            notify('Please enter your valid phone number', 'error')
            return;
        }
        if (message.length < 10) {
            notify('Please enter your message', 'error')
            return;
        }

        setIsLoading(true)

        let postData = {}
        postData.from_name = fullName
        postData.from_email = email
        postData.from_phone = phoneNumber
        postData.message = message

        let serviceId = "service_irinftl"
        let templateId = "template_7svim2c"
        let publicKey = "a9gON-kp1nNytbrUf"

        emailjs.send(serviceId, templateId, postData, publicKey)
            .then((result) => {
                console.log(result.text);
                notify('Thanks! Your message has been submitted successfully')
                setIsSubmitted(true)
            })
            .catch(err => {
                notify('Something went wrong. Please contact us using chat below OR via facebook page', 'error')
                console.log(err)
            })
            .finally(() => {
                setIsLoading(false)
            });


        // let dataToSave = { fullName, email, phoneNumber, message }

        // dataToSave.id = Math.random().toString(36).slice(2)
        // dataToSave.dateCreated = firebase.firestore.Timestamp.fromDate(new Date())
        // dataToSave.dateModified = firebase.firestore.Timestamp.fromDate(new Date())
        // dataToSave.status = "active"

        // setIsLoading(true)

        // let ContactForms = firestore.collection("ContactForms").doc(dataToSave.id)

        // ContactForms.set(dataToSave).then(() => {
        //     notify('Thanks! Your message has been submitted successfully')
        //     setIsSubmitted(true)
        // }).catch((error) => {
        //     alert("Something went wrong. Please try again later.")
        //     console.log(error)
        // }).finally(() => {
        //     setIsLoading(false)
        // })

    }

    return (
        <section className="contact-area pb-100">
            <div className="container">
                <div className="section-title">
                    <span className="sub-title">
                        <img src={starIcon} alt="contact" />
                        Get in Touch
                    </span>
                    <h2>Ready to Get Started?</h2>
                    <p>Your email address will not be published. Required fields are marked *</p>
                </div>

                <div className="row">
                    <div className="col-lg-6 col-md-12">
                        <div className="contact-image">
                            <img src={contact} alt="contact" />
                        </div>
                    </div>
                    {isSubmitted
                        ? <>
                        <div className="col-lg-6 col-md-12">

                            <div className="p-5 bg-success text-white d-flex flex-column justify-content-center align-items-center">
                                <h3>Thanks!</h3>
                                <h5>Your message has been submitted.</h5>
                                <h5>We'll get back to you as soon as possible.</h5>
                            </div>
                        </div>
                        </>
                        : <>
                            <div className="col-lg-6 col-md-12">
                                <div className="contact-form">
                                    <form id="contactForm">
                                        <div className="row">
                                            <div className="col-lg-12 col-md-6">
                                                <div className="form-group">
                                                    <input type="text" name="fullName" value={formData.fullName} className="form-control" required placeholder="Your name" onChange={handleFormData} />
                                                </div>
                                            </div>

                                            <div className="col-lg-12 col-md-6">
                                                <div className="form-group">
                                                    <input type="email" name="email" value={formData.email} className="form-control" required placeholder="Your email address" onChange={handleFormData} />
                                                </div>
                                            </div>

                                            <div className="col-lg-12 col-md-12">
                                                <div className="form-group">
                                                    <input type="text" name="phoneNumber" value={formData.phoneNumber} className="form-control" required placeholder="Your phone number" onChange={handleFormData} />
                                                </div>
                                            </div>

                                            <div className="col-lg-12 col-md-12">
                                                <div className="form-group">
                                                    <textarea name="message" value={formData.message} className="form-control" cols="30" rows="6" required placeholder="Write your message..." onChange={handleFormData} />
                                                </div>
                                            </div>

                                            <div className="col-lg-12 col-md-12">
                                                <button type="submit" className="default-btn" disabled={isLoading} onClick={handleSubmit}>

                                                    {!isLoading
                                                        ? <>
                                                            <i className="flaticon-tick"></i>
                                                            Send Message <span></span>
                                                        </>
                                                        : <>
                                                            <i className="flaticon-tick"></i>
                                                            Sending... <span></span>
                                                        </>
                                                    }
                                                </button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </>
                    }

                </div>
            </div>
        </section>
    )
}

export default ContactForm