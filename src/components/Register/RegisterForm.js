import React, { useState } from 'react'
import starIcon from '../../assets/images/star-icon.png'

import { firebase, firestore } from '../../utils/firebase'
import { useToasts } from 'react-toast-notifications'

import { courses } from '../../data/courses'

const RegisterForm = () => {

    const { addToast } = useToasts()
    const [isLoading, setIsLoading] = useState(false)
    const [isSubmitted, setIsSubmitted] = useState(false)

    const [formData, setFormData] = useState({
        course: '',
        fullName: '',
        fatherName: '',
        email: '',
        CNIC: '',
        phoneNumber: '',
        qualification: '',
        city: '',
        country: '',
        referrer: '',
    })

    const handleFormData = e => {
        e.persist() // hack to be used on gatsby, I saw it first time
        setFormData((s) => ({ ...s, [e.target.name]: e.target.value }))
    }

    const handleSubmit = e => {

        e.preventDefault();

        let { course, fullName, fatherName, email, CNIC, phoneNumber, qualification, city, country, referrer } = formData

        course = course.trim()
        fullName = fullName.trim()
        fatherName = fatherName.trim()
        email = email.trim()
        CNIC = CNIC.trim()
        phoneNumber = phoneNumber.trim()
        qualification = qualification.trim()
        city = qualification.trim()
        country = qualification.trim()
        referrer = referrer.trim()

        let notify = (message, type = "success") => { addToast(message, { appearance: type, autoDismiss: true }) }

        if (!course.length) {
            notify("Please select a course you're willing to join", 'error')
            return;
        }

        if (fullName.length < 3) {
            notify('Please enter your name correctly', 'error')
            return;
        }

        if (fatherName.length < 3) {
            notify('Please enter your father name correctly', 'error')
            return;
        }

        if (CNIC.length !== 13) {
            notify('Please enter your CNIC / B-Form # correctly without hyphens', 'error')
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


        let dataToSave = { course, fullName, fatherName, email, CNIC, phoneNumber, qualification, city, country, referrer }

        dataToSave.id = Math.random().toString(36).slice(2)
        dataToSave.dateCreated = firebase.firestore.Timestamp.fromDate(new Date())
        dataToSave.dateModified = firebase.firestore.Timestamp.fromDate(new Date())
        dataToSave.status = "active"

        setIsLoading(true)

        let Applications = firestore.collection("Applications").doc(dataToSave.id)

        Applications.set(dataToSave).then(() => {
            notify(`Your application have been submitted successfully`)
            setIsSubmitted(true)
        }).catch((error) => {
            alert("Something went wrong. Please try again later.")
            console.log(error)
        }).finally(() => {
            setIsLoading(false)
        })

    }

    return (
        <section className="contact-area ptb-100 bg-fafafb">
            <div className="container">
                <div className="section-title">
                    <span className="sub-title">
                        <img src={starIcon} alt="contact" />
                        Application Form
                    </span>
                    <h2>Join The Lead Tech Industry</h2>
                    <p>Please fill in the form below to apply for a course. All fields are required.</p>
                </div>

                <div className="row">
                    {/* <div className="col-lg-6 col-md-12">
                        <div className="contact-image">
                            <img src={contact} alt="contact" />
                        </div>
                    </div> */}
                    {isSubmitted
                        ? <>
                            <div className="col-12">

                                <div className="p-5 bg-success text-white d-flex flex-column justify-content-center align-items-center">
                                    <h3>Success!</h3>
                                    <h5>Your application have been submitted successfully.</h5>
                                    <h5>We'll get back to you as soon as possible.</h5>
                                </div>
                            </div>
                        </>
                        : <>
                            <div className="col-12">

                                <div className="card bg-info text-center">
                                    <div className="card-body py-5">
                                        <h2 className="text-white">New classes starting soon...</h2>
                                        <h2 className="text-white">Stay in touch with us.</h2>
                                    </div>
                                </div>


                                {/* Code below to be Uncomment to open registration */}
                                {/* <div className="contact-form">
                                    <form id="contactForm">

                                        <div className="row">
                                            <div className="col">
                                                <h5>Select a course</h5>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-12">
                                                <div className="form-group">
                                                    <select name="course" defaultValue="" className="form-control" onChange={handleFormData}>
                                                        <option value="">Select</option>

                                                        {courses
                                                            .filter((course, i) => { return course.isAvailable })
                                                            .map((course, i) => {
                                                                return <option key={course.id} value={course.id}>{course.name}</option>
                                                            })}
                                                    </select>
                                                </div>
                                            </div>
                                        </div>

                                        <hr />
                                        <div className="row">
                                            <div className="col">
                                                <h5>Enter your information</h5>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-6">
                                                <div className="form-group">
                                                    <input type="text" name="fullName" value={formData.fullName} className="form-control" required placeholder="Full name" onChange={handleFormData} />
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="form-group">
                                                    <input type="text" name="fatherName" value={formData.fatherName} className="form-control" required placeholder="Father Name" onChange={handleFormData} />
                                                </div>
                                            </div>

                                            <div className="col-md-6">
                                                <div className="form-group">
                                                    <input type="CNIC" name="CNIC" value={formData.CNIC} className="form-control" required placeholder="CNIC number (only numbers without hyphens)" onChange={handleFormData} />
                                                </div>
                                            </div>

                                            <div className="col-md-6">
                                                <div className="form-group">
                                                    <input type="email" name="email" value={formData.email} className="form-control" required placeholder="Email address" onChange={handleFormData} />
                                                </div>
                                            </div>

                                            <div className="col-md-6">
                                                <div className="form-group">
                                                    <input type="text" name="phoneNumber" value={formData.phoneNumber} className="form-control" required placeholder="Phone/WhatsApp Number" onChange={handleFormData} />
                                                </div>
                                            </div>

                                            <div className="col-md-6">
                                                <div className="form-group">
                                                    <input type="text" name="qualification" value={formData.qualification} className="form-control" required placeholder="Qualification (eg: Matric, Inter, Graduation)" onChange={handleFormData} />
                                                </div>
                                            </div>

                                            <div className="col-md-6">
                                                <div className="form-group">
                                                    <input type="text" name="city" value={formData.city} className="form-control" required placeholder="City" onChange={handleFormData} />
                                                </div>
                                            </div>

                                            <div className="col-md-6">
                                                <div className="form-group">
                                                    <input type="text" name="country" value={formData.country} className="form-control" required placeholder="Country" onChange={handleFormData} />
                                                </div>
                                            </div>
                                            <div className="col-md-12">
                                                <hr />
                                            </div>


                                            <div className="col-md-12">
                                                <h5>Where from you heard about Techna?</h5>
                                                <div className="form-group">
                                                    <select name="referrer" className="form-control" onChange={handleFormData}>
                                                        <option value="">Select</option>
                                                        <option value="Social Media">Social Media</option>
                                                        <option value="Printing Media">Printing Media</option>
                                                        <option value="Friends/Family">Friends/Family</option>
                                                        <option value="Colleagues">Colleagues</option>
                                                    </select>
                                                </div>
                                            </div>

                                            <div className="col-md-12 ">
                                                <p>
                                                    <small><i className="flaticon-right"></i> By Registering I acknowledge that I agree to the <a href="https://techna.pk/terms-of-service" target="_blank">Terms &amp; Conditions</a>.</small>
                                                </p>
                                                <div className="text-right">
                                                    <button type="submit" className="default-btn" disabled={isLoading} onClick={handleSubmit}>

                                                        {!isLoading
                                                            ? <>
                                                                <i className="flaticon-tick"></i>
                                                                Register <span></span>
                                                            </>
                                                            : <>
                                                                <i className="flaticon-tick"></i>
                                                                Processing... <span></span>
                                                            </>
                                                        }
                                                    </button>
                                                </div>

                                            </div>
                                        </div>
                                    </form>
                                </div> */}
                            
                            </div>
                        </>
                    }

                </div>
            </div>
        </section>
    )
}

export default RegisterForm