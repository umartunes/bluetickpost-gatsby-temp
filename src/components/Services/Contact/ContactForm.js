import React, { useState } from 'react'
import starIcon from '../../../assets/images/star-icon.png'
import contact from '../../../assets/images/contact.png'
// import { firebase, firestore } from '../../../utils/firebase'
import { useToasts } from 'react-toast-notifications'

import { Element, scroller } from 'react-scroll'

import emailjs from '@emailjs/browser';

const ContactForm = () => {

    const { addToast } = useToasts()
    const [isLoading, setIsLoading] = useState(false)
    const [isSubmitted, setIsSubmitted] = useState(false)

    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        phoneNumber: '',
        company: '',
        budget: '',
        service: '',
        message: '',
    })

    const handleFormData = e => {
        e.persist() // hack to be used on gatsby, I saw it first time
        setFormData((s) => ({ ...s, [e.target.name]: e.target.value }))
    }

    const handleSubmit = e => {

        e.preventDefault();

        let { fullName, email, phoneNumber, company, budget, service, message } = formData

        fullName = fullName.trim()
        email = email.trim()
        phoneNumber = phoneNumber.trim()
        company = company.trim()
        budget = budget.trim()
        service = service.trim()
        message = message.trim()

        let notify = (message, type = "success") => { addToast(message, { appearance: type, autoDismiss: true }) }

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

        if (budget.length < 5) {
            notify('Please select the budget for this project', 'error')
            return;
        }

        if (service.length < 5) {
            notify('Please select a required service', 'error')
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
        postData.message = `
        Company: ${company} &#13; \n
        Budget: ${budget} &#13; \n
        Service: ${service} &#13; \n
        Message: ${message} &#13; \n
        `

        let serviceId = "service_irinftl"
        let templateId = "template_7svim2c"
        let publicKey = "a9gON-kp1nNytbrUf"

        emailjs.send(serviceId, templateId, postData, publicKey)
            .then((result) => {
                console.log(result.text);
                notify('Thanks! Your message has been submitted successfully')
                setIsSubmitted(true)

                scroller.scrollTo('success-section', {
                    duration: 500,
                    delay: 300,
                    smooth: true,
                    // containerId: 'ContainerElementID',
                    offset: -100, // Scrolls to element -10 pixels down the page
                })
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
        <section className="contact-area pt-100 pb-100 bg-fafafb">
            <div className="container">
                <div className="section-title" style={{ maxWidth: '100%' }}>
                    <span className="sub-title">
                        <img src={starIcon} alt="contact" />
                        Contact Us
                    </span>
                    <h2>Let us help your business.</h2>
                    <p style={{ maxWidth: '90%' }}>Techna specialises in bespoke software solutions built upon modern technologies. Our mission is to enable businesses worldwide both large and small to build their products with a cost-efficient, resilient and modern technology stack.</p>
                    <p></p>
                </div>

                <div className="row">
                    <div className="col-lg-5 col-md-12">
                        <div className="contact-image">
                            <img src={contact} alt="contact" />
                        </div>
                    </div>
                    {isSubmitted
                        ? <>
                            <div className="col-lg-7 col-md-12">
                                <Element name="success-section" className="element">&nbsp;</Element>
                                <div className="p-5 bg-success text-white text-center d-flex flex-column justify-content-center align-items-center">
                                    <h3>Thank you!</h3>
                                    <h5>Thanks for getting in touch with us.</h5>
                                    <h5>A team member from Techna will get back to you within 24 - 48 hours.</h5>
                                </div>
                            </div>
                        </>
                        : <>
                            <div className="col-lg-7 col-md-12">
                                <div className="contact-form">
                                    <form id="contactForm">
                                        <div className="row">
                                            <div className="col-lg-6 col-md-6">
                                                <h6 className='mt-3'>Name*</h6>
                                                <div className="form-group">
                                                    <input type="text" name="fullName" value={formData.fullName} className="form-control" required placeholder="What's your name?" onChange={handleFormData} />
                                                </div>
                                            </div>


                                            <div className="col-lg-6 col-md-6">
                                                <h6 className='mt-3'>Email*</h6>
                                                <div className="form-group">
                                                    <input type="email" name="email" value={formData.email} className="form-control" required placeholder="What's your email?" onChange={handleFormData} />
                                                </div>
                                            </div>

                                            <div className="col-lg-6 col-md-6">
                                                <h6 className='mt-3'>Phone*</h6>
                                                <div className="form-group">
                                                    <input type="text" name="phoneNumber" value={formData.phoneNumber} className="form-control" required placeholder="What's your phone number?" onChange={handleFormData} />
                                                </div>
                                            </div>

                                            <div className="col-lg-6 col-md-6">
                                                <h6 className='mt-3'>Company</h6>
                                                <div className="form-group">
                                                    <input type="text" name="company" value={formData.company} className="form-control" required placeholder="What's your company?" onChange={handleFormData} />
                                                </div>
                                            </div>

                                            <div className="col-lg-12 col-md-12">
                                                <h6 className='mt-3'>Budget*</h6>
                                                <div className="form-group">
                                                    <select name="budget" className="form-control" required onChange={handleFormData}>
                                                        <option value="">Select your budget</option>
                                                        <option value="$100 - $1,000">$100 - $1,000</option>
                                                        <option value="$1,000 - $2,500">$1,000 - $2,500</option>
                                                        <option value="$2,500 - $10,000">$2,500 - $10,000</option>
                                                        <option value="$10,000 - $25,000">$10,000 - $25,000</option>
                                                        <option value="$25,000 or more">$25,000 or more</option>
                                                    </select>
                                                </div>
                                            </div>

                                            <div className="col-lg-12 col-md-12 mb-4">
                                                <h6 className='mt-3'>Service*</h6>
                                                <div className="form-group">
                                                    <select name="service" className="form-control" required onChange={handleFormData} >
                                                        <option value="">Select required service</option>
                                                        <option value="Website Development ( WordPress )">Website Development ( WordPress )</option>
                                                        <option value="Web App Development ( Custom )">Web App Development ( Custom )</option>
                                                        <option value="Mobile App Development">Mobile App Development</option>
                                                        <option value="UI/UX Design">UI/UX Design</option>
                                                        <option value="Other">Other</option>
                                                    </select>
                                                </div>

                                            </div>

                                            <div className="col-lg-12 col-md-12">
                                                <h6 className='mt-3'>Message*</h6>
                                                <div className="form-group">
                                                    <textarea name="message" value={formData.message} className="form-control" cols="30" rows="6" required placeholder="Please write a short message about your project..." onChange={handleFormData} />
                                                </div>
                                            </div>

                                            <div className="col-lg-12 col-md-12">
                                                <button type="submit" className="default-btn" disabled={isLoading} onClick={handleSubmit}>

                                                    {!isLoading
                                                        ? <>
                                                            <i className="flaticon-tick"></i>
                                                            Submit  <span></span>
                                                        </>
                                                        : <>
                                                            <i className="flaticon-tick"></i>
                                                            Submitting... <span></span>
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