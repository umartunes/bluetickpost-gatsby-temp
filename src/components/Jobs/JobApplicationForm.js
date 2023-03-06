import React, { useState } from 'react'
import starIcon from '../../assets/images/star-icon.png'

import { firebase, firestore, resumesRef } from '../../utils/firebase'
import { useToasts } from 'react-toast-notifications'

import { jobs } from '../../data/jobs'

import { Element, scroller } from 'react-scroll'

const JobApplicationForm = () => {

    const { addToast } = useToasts()
    const [isLoading, setIsLoading] = useState(false)
    const [isSubmitted, setIsSubmitted] = useState(false)
    const [resumeFile, setResumeFile] = useState(false)

    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        phoneNumber: '',
        address: '',
        city: '',
        state: '',
        zip: '',
        country: '',
        jobPosition: '',
        highestEducation: '',
        referrer: '',
        expectedSalary: '',
        previousJobDetails: '',
        portfolioDetails: '',
        partOfJobExperienced: '',
        partOfJobExcited: '',
        questionsAboutJob: '',
    })

    const handleFormData = e => {
        e.persist() // hack to be used on gatsby, I saw it first time
        setFormData((s) => ({ ...s, [e.target.name]: e.target.value }))
    }

    const handleSubmit = e => {

        e.preventDefault();

        let { fullName, email, phoneNumber, address, city, state, zip, country, jobPosition, highestEducation, referrer, expectedSalary, previousJobDetails, portfolioDetails, partOfJobExperienced, partOfJobExcited, questionsAboutJob } = formData

        fullName = fullName.trim()
        email = email.trim()
        phoneNumber = phoneNumber.trim()
        address = address.trim()
        city = city.trim()
        state = state.trim()
        zip = zip.trim()
        country = country.trim()
        jobPosition = jobPosition.trim()
        highestEducation = highestEducation.trim()
        referrer = referrer.trim()
        expectedSalary = expectedSalary.trim()
        previousJobDetails = previousJobDetails.trim()
        portfolioDetails = portfolioDetails.trim()
        partOfJobExperienced = partOfJobExperienced.trim()
        partOfJobExcited = partOfJobExcited.trim()
        questionsAboutJob = questionsAboutJob.trim()

        let notify = (message, type = "success") => { addToast(message, { appearance: type, autoDismiss: true }) }


        if (fullName.length < 3) {
            notify('Please enter your name correctly', 'error')
            return;
        }


        if (!(/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/.test(email))) {
            notify('Please enter a valid email address', 'error')
            return;
        }

        if (phoneNumber.length < 13) {
            notify('Please enter your valid phone number', 'error')
            return;
        }

        if (!resumeFile) {
            notify('Upload a valid pdf / docx resume file.', 'error')
            return;
        }

        if (!address || !city || !state || !zip || !country ||
            !jobPosition || !highestEducation || !referrer || !expectedSalary || !previousJobDetails ||
            !portfolioDetails || !partOfJobExperienced || !partOfJobExcited || !questionsAboutJob
        ) {
            notify('Please fill in all the required fields to apply for this job.', 'error')
            return;
        }

        let dataToSave = { fullName, email, phoneNumber, address, city, state, zip, country, jobPosition, highestEducation, referrer, expectedSalary, previousJobDetails, portfolioDetails, partOfJobExperienced, partOfJobExcited, questionsAboutJob }

        dataToSave.id = Math.random().toString(36).slice(2)
        dataToSave.dateCreated = firebase.firestore.Timestamp.fromDate(new Date())
        dataToSave.dateModified = firebase.firestore.Timestamp.fromDate(new Date())
        dataToSave.status = "pending"

        setIsLoading(true)

        uploadFileAsPromise(resumeFile)
            .then((snapshot) => {

                console.log(snapshot)

                snapshot.ref.getDownloadURL().then((downloadURL) => {

                    console.log(downloadURL)

                    dataToSave.resumeFileURL = downloadURL

                    let JobApplications = firestore.collection("JobApplications").doc(dataToSave.id)

                    JobApplications.set(dataToSave).then(() => {
                        notify(`Your job application has been submitted successfully`)
                        setIsSubmitted(true)

                        scroller.scrollTo('success-section', {
                            duration: 500,
                            delay: 1000,
                            smooth: true,
                            // containerId: 'ContainerElementID',
                            offset: -100, // Scrolls to element -10 pixels down the page
                        })

                    }).catch((error) => {
                        notify("Something went wrong. Please try again later.", 'error')
                        console.log(error)
                    }).finally(() => {
                        setIsLoading(false)
                    })

                });

            })
            .catch(err => {
                notify("Failed to upload your CV. Please contact us using our Facebook Page.", 'error')
                console.log(err)
                setIsLoading(false)
            })



    }


    const onFileSelect = e => {

        let notify = (message, type = "success") => { addToast(message, { appearance: type, autoDismiss: true }) }

        let files = e.target.files;

        if (!files.length) {
            setResumeFile(false)
            notify('Upload a valid pdf / docx resume file.', 'error')
            return;
        }

        let file = files[0];

        const isWordDoc = /\.docx$/i.test(file.name);
        const isPDF = /\.pdf$/i.test(file.name);
        const fileSize = file.size / 1024 / 1024; // in MiB

        if (!isWordDoc && !isPDF) {
            notify('Upload a valid pdf / docx resume file.', 'error')
            return;
        }

        if (fileSize > 2) {
            notify('Your Resume/CV file shouldn\'t be larger than 2mb in size.', 'error')
            return;
        }

        console.log(file)

        setResumeFile(file)

    }

    const uploadFileAsPromise = file => {

        return new Promise(function (resolve, reject) {

            const fileName = Math.random().toString(36).slice(2);
            const ext = file.name.split('.').pop();

            let fileRef = resumesRef.child(fileName + '.' + ext);

            //Upload file
            var uploadTask = fileRef.put(file);

            //Update progress bar
            uploadTask.on('state_changed',
                function progress(snapshot) {
                    var progress = snapshot.bytesTransferred / snapshot.totalBytes * 100;
                    console.log('Upload is ' + progress + '% done');
                },
                function error(err) {
                    // switch (err.code) {
                    // 	case 'storage/unauthorized':
                    // 		// User doesn't have permission to access the object
                    // 		break;
                    // 	case 'storage/canceled':
                    // 		// User canceled the upload
                    // 		break;

                    // 	case 'storage/unknown':
                    // 		// Unknown error occurred, inspect error.serverResponse
                    // 		break;
                    // }
                    reject(err)
                },
                function complete() {
                    // Upload completed successfully, now we can get the download URL
                    // uploadTask.snapshot.ref.getDownloadURL().then(function (downloadURL) {
                    // 	console.log('File available at', downloadURL);
                    // });
                    resolve(uploadTask.snapshot)
                }
            );

        });
    }

    return (
        <section className="contact-area ptb-100 bg-fafafb">
            <div className="container">

                {isSubmitted
                    ? <>
                        <Element name="success-section" className="element">&nbsp;</Element>
                        <div className="row">
                            <div className="col-12">

                                <div className="p-5 bg-success text-white d-flex flex-column justify-content-center align-items-center">
                                    <h5>Your application have been submitted successfully.</h5>
                                    <h5>Thank you for your interest in joining our team! Someone will reach out to you if we think it's a good fit!</h5>
                                </div>
                            </div>
                        </div>

                    </>
                    : <>
                        <div className="section-title" style={{ maxWidth: '100%' }}>
                            <span className="sub-title">
                                <img src={starIcon} alt="contact" />
                                Job Application Form
                            </span>
                            <h2>Join The Lead Tech Industry</h2>
                            <p className='mx-auto' style={{ maxWidth: '80%' }}>Thank you for your interest in joining our team! Please complete the form below to apply for one of many great opportunities with Techna - and someone will reach out to you if we think it's a good fit!</p>
                        </div>

                        <div className="row">
                            <div className="col-12">

                                {/* <div className="card bg-info text-center">
                                    <div className="card-body py-5">
                                        <h2 className="text-white">Admissions Are Closed.</h2>
                                        <h2 className="text-white">New classes would be starting soon...</h2>
                                        <h2 className="text-white">Stay in touch with us on Facebook to keep yourself updated.</h2>
                                        <h2 className="text-white">Thanks!</h2>
                                    </div>
                                </div> */}


                                {/* Code below to be Uncomment to open registration */}
                                <div className="contact-form">
                                    <form id="contactForm">

                                        <div className="row">
                                            <div className="col">
                                                <h5>Enter your information</h5>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-6">
                                                <h6 className='mt-3'>Full Name*</h6>
                                                <div className="form-group">
                                                    <input type="text" name="fullName" value={formData.fullName} className="form-control" required placeholder="" onChange={handleFormData} />
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <h6 className='mt-3'>Email Address*</h6>
                                                <div className="form-group">
                                                    <input type="email" name="email" value={formData.email} className="form-control" required placeholder="" onChange={handleFormData} />
                                                </div>
                                            </div>
                                            <div className="col-md-12">
                                                <h6 className='mt-3'>Phone*</h6>
                                                <div className="form-group">
                                                    <input type="text" name="phoneNumber" value={formData.phoneNumber} className="form-control" required placeholder="" onChange={handleFormData} />
                                                    <small className='text-info'>🛈 Number including country code. e.g +92 300 1234567.  Enter a phone number which is connected to WhatsApp</small>
                                                </div>
                                            </div>

                                            <div className="col-md-12">
                                                <h6 className='mt-3'>Street Address*</h6>
                                                <div className="form-group">
                                                    <input type="text" name="address" value={formData.address} className="form-control" required placeholder="" onChange={handleFormData} />
                                                </div>
                                            </div>

                                            <div className="col-md-6">
                                                <h6 className='mt-3'>City*</h6>
                                                <div className="form-group">
                                                    <input type="text" name="city" value={formData.city} className="form-control" required placeholder="" onChange={handleFormData} />
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <h6 className='mt-3'>State*</h6>
                                                <div className="form-group">
                                                    <input type="text" name="state" value={formData.state} className="form-control" required placeholder="" onChange={handleFormData} />
                                                </div>
                                            </div>

                                            <div className="col-md-6">
                                                <h6 className='mt-3'>Zip/Postal Code*</h6>
                                                <div className="form-group">
                                                    <input type="text" name="zip" value={formData.zip} className="form-control" required placeholder="" onChange={handleFormData} />
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <h6 className='mt-3'>Country*</h6>
                                                <div className="form-group">
                                                    <input type="text" name="country" value={formData.country} className="form-control" required placeholder="" onChange={handleFormData} />
                                                </div>
                                            </div>


                                            <div className="col-md-12">
                                                <hr />
                                            </div>


                                            <div className="col-md-12">
                                                <h6 className='mt-3'>Which position are you interested in?*</h6>
                                                <div className="form-group">
                                                    <select name="jobPosition" defaultValue="" className="form-control" required onChange={handleFormData}>
                                                        <option value="">Select</option>

                                                        {jobs
                                                            .filter((job, i) => { return job.isAvailable })
                                                            .map((job, i) => {
                                                                return <option key={job.id} value={job.title}>{job.title}</option>
                                                            })}
                                                    </select>
                                                </div>
                                            </div>

                                            <div className="col-md-12">
                                                <h6 className='mt-3'>Highest level of education*</h6>
                                                <div className="form-group">
                                                    <select name="highestEducation" className="form-control" required onChange={handleFormData}>
                                                        <option value="">Select</option>
                                                        <option value="Matric">Matric</option>
                                                        <option value="O Levels">O Levels</option>
                                                        <option value="Intermediate">Intermediate</option>
                                                        <option value="A Levels">A Levels</option>
                                                        <option value="Undergraduate">Undergraduate</option>
                                                        <option value="Graduate">Graduate</option>
                                                        <option value="Post-Graduate">Post-Graduate</option>
                                                    </select>
                                                </div>
                                            </div>

                                            <div className="col-md-12">
                                                <hr />
                                            </div>

                                            <div className="col-md-12">
                                                <h6 className='mt-3'>How did you hear about this position?</h6>
                                                <div className="form-group">
                                                    <textarea className="form-control" name="referrer" id="" rows="3" onChange={handleFormData} style={{ resize: 'none' }} required>{formData.referrer}</textarea>
                                                </div>
                                            </div>

                                            <div className="col-md-12">
                                                <h6 className='mt-3'>If you were to work full-time for us, what monthly salary would you expect to be paid?</h6>
                                                <div className="form-group">
                                                    <input type="text" name="expectedSalary" value={formData.expectedSalary} className="form-control" required onChange={handleFormData} />
                                                </div>
                                            </div>

                                            <div className="col-md-12">
                                                <h6 className='mt-3'>How long were you at your previous job? Why did you leave?</h6>
                                                <div className="form-group">
                                                    <textarea className="form-control" name="previousJobDetails" id="" rows="3" onChange={handleFormData} style={{ resize: 'none' }} required>{formData.previousJobDetails}</textarea>
                                                </div>
                                            </div>
                                            <div className="col-md-12">
                                                <h6 className='mt-3'>Provide 3-5 links to samples of your work. (Your Portfolio) (*And tell us what you're BEST at.)</h6>
                                                <div className="form-group">
                                                    <textarea className="form-control" name="portfolioDetails" id="" rows="3" onChange={handleFormData} style={{ resize: 'none' }} required>{formData.portfolioDetails}</textarea>
                                                </div>
                                            </div>

                                            <div className="col-md-12">
                                                <h6 className='mt-3'>What part of this job are you most experienced with?</h6>
                                                <div className="form-group">
                                                    <input type="text" name="partOfJobExperienced" value={formData.partOfJobExperienced} className="form-control" required onChange={handleFormData} />
                                                </div>
                                            </div>

                                            <div className="col-md-12">
                                                <h6 className='mt-3'>What part of this job are you most excited about?</h6>
                                                <div className="form-group">
                                                    <input type="text" name="partOfJobExcited" value={formData.partOfJobExcited} className="form-control" required onChange={handleFormData} />
                                                </div>
                                            </div>



                                            <div className="col-md-12">
                                                <h6 className='mt-3'>Do you have any questions about the job?</h6>
                                                <div className="form-group">

                                                    <textarea className="form-control" name="questionsAboutJob" id="" rows="3" onChange={handleFormData} style={{ resize: 'none' }} required>{formData.questionsAboutJob}</textarea>
                                                </div>
                                            </div>

                                            <div className="col-md-12">
                                                <h6 className='mt-3'>Upload your Resume/CV*</h6>
                                                <div className="form-group border border-1 p-3" style={{ background: "#f5f5f5" }}>
                                                    <input type="file" name="resume_CV" className="" required onChange={onFileSelect} />
                                                </div>
                                            </div>

                                            <div className="col-md-12 ">

                                                <div className="text-right">
                                                    <button type="submit" className="default-btn" disabled={isLoading} onClick={handleSubmit}>

                                                        {!isLoading
                                                            ? <>
                                                                <i className="flaticon-right"></i>
                                                                Apply <span></span>
                                                            </>
                                                            : <>
                                                                <i className="flaticon-right"></i>
                                                                Processing... <span></span>
                                                            </>
                                                        }
                                                    </button>
                                                </div>

                                            </div>
                                        </div>
                                    </form>
                                </div>

                            </div>
                        </div>
                    </>
                }


            </div>
        </section >
    )
}

export default JobApplicationForm