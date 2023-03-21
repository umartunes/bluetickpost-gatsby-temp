import React, { useState } from 'react'
import { Link, } from 'gatsby'

// import starIcon from '../../assets/images/star-icon.png'
import displayPhoto from '../../assets/images/dp.jpg'

import { firebase, firestore } from '../../utils/firebase'
import { useToasts } from 'react-toast-notifications'

import { courses } from '../../data/courses'

const RegisterForm = () => {

    const { addToast } = useToasts()
    const [isLoading, setIsLoading] = useState(false)
    const [isSubmitted, setIsSubmitted] = useState(false)

    const [userPhoto, setUserPhoto] = useState({ src: displayPhoto, file: false })

    const [formData, setFormData] = useState({

        course: '',
        classMode: 'Online',
        learningMode: 'Normal',

        fullName: '',
        fatherName: '',
        email: '',
        CNIC: '',
        mobileNumber: '',
        DOB: '',
        gender: '',
        qualification: '',
        address: '',
        city: '',
        country: '',
        referrer: '',

    })

    const handleFormData = e => {
        e.persist() // hack to be used on gatsby, I saw it first time
        setFormData((s) => ({ ...s, [e.target.name]: e.target.value }))
    }

    const isDate = (date) => { return (new Date(date) !== "Invalid Date") && !isNaN(new Date(date)); }
    const notify = (message, type = "success") => { addToast(message, { appearance: type, autoDismiss: true }) }

    const saveApplicantDataToFirebase = applicantData => {

        let selectedCourseData = courses.find((c) => {
            return c.slug === applicantData.course && c.isAvailable === true
        })

        if (!selectedCourseData.id) {
            notify("Please select a course to proceed", 'error')
            setIsLoading(false)
            return;
        }

        applicantData.id = Math.random().toString(36).slice(2)
        applicantData.dateCreated = firebase.firestore.Timestamp.fromDate(new Date())
        applicantData.dateModified = firebase.firestore.Timestamp.fromDate(new Date())
        applicantData.status = "active"

        applicantData.section = selectedCourseData.upcomingBatchSection
        applicantData.batch = selectedCourseData.upcomingBatchNumber
        applicantData.lastDateOfFormSubmission = selectedCourseData.lastDateOfFormSubmission

        applicantData.isOneTimeFee = selectedCourseData.isOneTimeFee

        if (applicantData.learningMode === "Normal")
            applicantData.courseFee = selectedCourseData.courseFeeNormalClasses
        else if (applicantData.learningMode === "Group")
            applicantData.courseFee = selectedCourseData.courseFeeGroupClasses
        else if (applicantData.learningMode === "Personal")
            applicantData.courseFee = selectedCourseData.courseFeePersonalClasses


        firestore.collection("CourseApplications")
            .where("CNIC", "==", applicantData.CNIC)
            .where("course", "==", applicantData.course)
            .where("batch", "==", applicantData.batch)
            .orderBy("dateCreated", "desc")
            .limit(2)
            .get().then((querySnapshot) => {

                let applications = []

                querySnapshot.forEach((doc) => {
                    // doc.data() is never undefined for query doc snapshots
                    // console.log(doc.id, " => ", doc.data());

                    let application = doc.data()
                    applications.push(application)

                });

                // Application already available, so don't add more like this
                if (applications.length) {

                    console.log(applications[0])

                    window.courseApplication = applications[0]
                    window.location.href = `/form-download`

                    notify("You've already applied for this course. Download the PDF and follow the instructions carefully", 'success')

                    setIsLoading(false)
                    setIsSubmitted(true)

                } else {

                    let generalSettingsDoc = firestore.collection("Settings").doc("general");

                    generalSettingsDoc.get().then((doc) => {

                        if (doc.exists) {

                            console.log("Yes we can save document:", doc.data());

                            let generalSettings = doc.data()

                            applicantData.rollNumber = generalSettings.lastRollNumber + 1

                            let generalSettingsData = {}
                            generalSettingsData[`lastRollNumber`] = firebase.firestore.FieldValue.increment(1)

                            // Get a new firestore batch
                            var batch = firestore.batch();

                            let CourseApplicationsDoc = firestore.collection("CourseApplications").doc(applicantData.id)
                            let generalSettingsDoc = firestore.collection("Settings").doc("general");

                            batch.set(CourseApplicationsDoc, applicantData);
                            batch.set(generalSettingsDoc, generalSettingsData, { merge: true });

                            batch.commit()
                                .then((docRef) => {

                                    // this.props.history.push('/form-download')
                                    // this.props.dispatch(setOptions({ application: applicantData }))

                                    console.log(applicantData)

                                    notify("Your application have been submitted successfully", 'success')

                                    window.courseApplication = applicantData
                                    window.location.href = `/form-download`
                                    setIsSubmitted(true)
                                    setIsLoading(false)
                                })
                                .catch((error) => {
                                    showServerError(error)
                                })

                        } else {
                            // doc.data() will be undefined in this case
                            showServerError("No Settings found.")
                        }

                    }).catch((error) => {
                        showServerError(error)
                    });


                }

            }).catch(function (error) {
                showServerError(error)
            });

    }

    const showServerError = error => {

        notify("Failed to connect to server", 'error')
        console.log("Error getting documents: ", error);

        setIsLoading(false)

    }

    const handleSubmit = e => {

        e.preventDefault();

        let { fullName, fatherName, email, CNIC, mobileNumber, DOB, gender, qualification, address, city, country, course, classMode, learningMode, referrer } = formData

        fullName = fullName.trim()
        fatherName = fatherName.trim()
        email = email.trim()
        CNIC = CNIC.trim()
        mobileNumber = mobileNumber.trim()
        DOB = DOB.trim()
        gender = gender.trim()

        qualification = qualification.trim()
        address = address.trim()
        city = city.trim()
        country = country.trim()

        course = course.trim()
        classMode = classMode.trim()
        learningMode = learningMode.trim()

        referrer = referrer.trim()

        if (fullName.length < 3) {
            notify('Please enter your name correctly', 'error')
            return;
        }

        if (fatherName.length < 3) {
            notify('Please enter your father name correctly', 'error')
            return;
        }

        if (!(/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/.test(email))) {
            notify('Please enter a valid email address', 'error')
            return;
        }

        if (mobileNumber.length < 10) {
            notify('Please enter your valid phone number', 'error')
            return;
        }

        if (!isDate(DOB)) {
            notify('Please select your DOB carefully', 'error')
            return;
        }

        if (CNIC.length !== 13) {
            notify('Please enter your CNIC / B-Form # correctly without hyphens', 'error')
            return;
        }

        if (['male', 'female'].indexOf(gender) === -1) {
            notify('Please select your gender', 'error')
            return;
        }

        if (qualification.length < 3) {
            notify('Select your highest Qualification', 'error')
            return;
        }

        if (address.length < 10) {
            notify('Address must be at least 10 characters long', 'error')
            return;
        }

        if (city.length < 2) {
            notify('Please enter the name of your city', 'error')
            return;
        }

        if (country.length < 2) {
            notify('Please enter the name of your country', 'error')
            return;
        }


        if (!userPhoto.file) {
            notify('Please upload your recent passport size photo file', 'error')
            return;
        }

        if (!course.length) {
            notify("Please select a course you're willing to join", 'error')
            return;
        }

        if (!classMode.length) {
            notify("Please select whether you want to learn online or attend the classes physically.", 'error')
            return;
        }

        let applicantData = { fullName, fatherName, email, CNIC, mobileNumber, DOB, gender, qualification, address, city, country, course, classMode, learningMode, referrer }

        setIsLoading(true)

        applicantData.photo = userPhoto.src

        saveApplicantDataToFirebase(applicantData)

    }

    const onPhotoSelect = e => {

        const files = e.target.files;

        if (!files.length) {
            return;
        }

        const width = 140;
        const height = 187;
        const file = files[0]
        const fileName = file.name;

        // if file isn't an image then don't add it
        if (!file.type.match('image.*')) {
            return;
        }

        const reader = new FileReader();

        reader.readAsDataURL(file);

        reader.onload = event => {

            const img = new Image();
            img.src = event.target.result;
            img.onload = () => {
                const elem = document.createElement('canvas');
                elem.width = width;
                elem.height = height;
                const ctx = elem.getContext('2d');
                // img.width and img.height will contain the original dimensions
                ctx.drawImage(img, 0, 0, width, height);
                ctx.canvas.toBlob((blob) => {

                    const newFile = new File([blob], fileName, {
                        type: 'image/jpeg',
                        lastModified: Date.now()
                    });

                    setFileToState(newFile)


                }, 'image/jpeg', 1);
            }

            reader.onerror = error => console.log(error);

        };
    }

    const setFileToState = file => {

        var reader = new FileReader();

        reader.onload = event => {

            // const {photos} = this.state
            let photo = { file: file, src: event.target.result }

            console.log(photo)

            // if( photos.indexOf( photo ) === -1 )
            setUserPhoto(photo)

        }

        reader.readAsDataURL(file);
    }

    return (
        <section className="contact-area ptb-100 bg-fafafb">
            <div className="container">


                {isSubmitted
                    ? <>
                        <div className="row">
                            <div className="col-12">

                                <div className="p-5 bg-success text-white d-flex flex-column justify-content-center align-items-center">
                                    <h3>Success!</h3>
                                    <h5>Your application have been submitted successfully.</h5>
                                    <Link to="/form-download" className='btn btn-white btn-block'>Click Here to download your application form.</Link>
                                </div>

                            </div>
                        </div>
                    </>
                    : <>

                        <div className="section-title mb-4" style={{ maxWidth: '100%' }}>
                            <h2>Admission Form</h2>
                            <p className='mx-auto' style={{ maxWidth: '80%' }}>Please fill in the form below to apply for a course. All fields are required.</p>
                        </div>

                        <div className="row mb-4">
                            <div className="col">
                                <Link to="/form-download" className='btn btn-warning btn-lg btn-block'>Already Applied? Click Here</Link>
                            </div>
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
                                <div className="contact-form ml-0">
                                    <form id="contactForm">

                                        <div className="row">
                                            <div className="col">
                                                <h4 className='text-center'>Enter your information</h4>
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
                                                <h6 className='mt-3'>Father Name*</h6>
                                                <div className="form-group">
                                                    <input type="text" name="fatherName" value={formData.fatherName} className="form-control" required placeholder="" onChange={handleFormData} />
                                                </div>
                                            </div>

                                            <div className="col-md-6">
                                                <h6 className='mt-3'>Email Address*</h6>
                                                <div className="form-group">
                                                    <input type="email" name="email" value={formData.email} className="form-control" required placeholder="" onChange={handleFormData} />
                                                </div>
                                            </div>

                                            <div className="col-md-6">
                                                <h6 className='mt-3'>Phone*</h6>
                                                <div className="form-group">
                                                    <input type="text" name="mobileNumber" value={formData.mobileNumber} className="form-control" required placeholder="" onChange={handleFormData} />
                                                    <small className='text-info'>🛈 Enter a phone number which is connected to WhatsApp (03xxxxxxxxx)</small>
                                                </div>
                                            </div>

                                            <div className="col-md-6">
                                                <h6 className='mt-3'>Date of Birth*</h6>
                                                <div className="form-group">
                                                    <input type="date" name="DOB" value={formData.DOB} className="form-control pr-3" required placeholder="" onChange={handleFormData} />
                                                </div>
                                            </div>

                                            <div className="col-md-6">
                                                <h6 className='mt-3'>CNIC or B-Form Number*</h6>
                                                <div className="form-group">
                                                    <input type="CNIC" name="CNIC" value={formData.CNIC} className="form-control" required placeholder="" onChange={handleFormData} />
                                                    <small className='text-info'>🛈 CNIC or B-Form Number (Only numbers without hyphens), we will verify it.</small>
                                                </div>
                                            </div>


                                            <div className="col-md-6">
                                                <h6 className='mt-3'>Gender</h6>
                                                <div className="form-group">
                                                    <select name="gender" className="form-control" required onChange={handleFormData}>
                                                        <option value="">Select Your Gender</option>
                                                        <option value="male">Male</option>
                                                        <option value="female">Female</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <h6 className='mt-3'>Highest level of education*</h6>
                                                <div className="form-group">
                                                    <select name="qualification" className="form-control" required onChange={handleFormData}>
                                                        <option value="">Select highest level of education</option>
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
                                                <h6 className='mt-3'>Address*</h6>
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
                                                <h6 className='mt-3'>Country*</h6>
                                                <div className="form-group">
                                                    <input type="text" name="country" value={formData.country} className="form-control" required placeholder="" onChange={handleFormData} />
                                                </div>
                                            </div>

                                            <div className="col-md-12">

                                                <h6 className='mt-3'>Upload Your Photo*</h6>


                                                <div className="d-flex p-3 flex-column align-items-center justify-content-center" style={{ background: "#f5f5f5" }} onClick={() => {
                                                    document.getElementById("userPhotoInput").click();
                                                }}>

                                                    <div className="previewOuter" style={{
                                                        border: `2px solid #eee`,
                                                        width: `95px`,
                                                        height: `120px`,
                                                        padding: `8px`,
                                                        boxSizing: `border-box`,
                                                        margin: `0 auto`,
                                                    }}>
                                                        <div className="preview" style={{
                                                            backgroundImage: `url("${userPhoto.src}")`,
                                                            width: "75px",
                                                            height: "100px",
                                                            overflow: "hidden",
                                                            backgroundSize: "cover",
                                                            backgroundPosition: "50%",
                                                        }}>

                                                        </div>
                                                    </div>
                                                    <button type="button" class="btn btn-info btn-sm my-1 px-5">Select Photo</button>

                                                    <small className='text-info '>🛈 Upload your recent passport size photo with blue or white background. Your Face should be clearly visible, no side pose.</small>

                                                    <div className="form-group border border-1 mb-0 d-none">
                                                        <input id="userPhotoInput" type="file" name="photo" accept="image/*" className="form-control pl-0" onChange={onPhotoSelect} style={{ height: `50px` }} />
                                                    </div>

                                                </div>

                                            </div>

                                            <div className="col-md-12">
                                                <hr />
                                            </div>

                                            <div className="col-12">
                                                <h4 className='text-center mt-4 mb-2'>Course Information</h4>
                                            </div>

                                            <div className="col-md-12">
                                                <h6 className='mt-3'>Course</h6>
                                                <div className="form-group">
                                                    <select name="course" defaultValue="" className="form-control" onChange={handleFormData}>
                                                        <option value="">Select course</option>

                                                        {courses
                                                            .filter((course, i) => { return course.isAvailable })
                                                            .map((course, i) => {
                                                                return <option key={course.id} value={course.slug}>{course.name}</option>
                                                            })}
                                                    </select>
                                                </div>
                                            </div>

                                            {/* <div className="col-md-12">
                                                <h6 className='mt-3'>Class Mode</h6>
                                                <div className="form-group">
                                                    <select name="classMode" defaultValue="" className="form-control" onChange={handleFormData}>
                                                        <option value="Onsite">Onsite ( Physical )</option>
                                                        <option value="Online">Online ( VIA Zoom )</option>
                                                    </select>
                                                </div>
                                            </div> */}

                                            <div className="col-md-12">
                                                <h6 className='mt-3'>Learning Mode</h6>
                                                <div className="form-group">
                                                    <select name="learningMode" defaultValue="" className="form-control" onChange={handleFormData}>
                                                        <option value="Normal">Normal Classes</option>
                                                        {/* <option value="Group">Group ( 6 students )</option> */}
                                                        <option value="Personal">Personal / Private ( 1:1 Instructor )</option>
                                                    </select>
                                                    <small className='text-info'>🛈 For more details about Learning Mode, and Course Fee please see <u><Link className='font-weight-bold text-info text-underline' to="/courses/fee">Details by Clicking Here.</Link></u></small>
                                                </div>
                                            </div>

                                            <div className="col-md-12">
                                                <hr />
                                            </div>

                                            {/* <div className="col-md-12">
                                                <h6>Where from you heard about Techna?</h6>
                                                <div className="form-group">
                                                    <select name="referrer" className="form-control" onChange={handleFormData}>
                                                        <option value="">Select</option>
                                                        <option value="Social Media">Social Media</option>
                                                        <option value="Printing Media">Printing Media</option>
                                                        <option value="Friends/Family">Friends/Family</option>
                                                        <option value="Colleagues">Colleagues</option>
                                                    </select>
                                                </div>
                                            </div> */}

                                            <div className="col-md-12 ">

                                                <div className="text-right">
                                                    <button type="submit" className="default-btn" disabled={isLoading} onClick={handleSubmit}>

                                                        {!isLoading
                                                            ? <>
                                                                <i className="flaticon-tick"></i>
                                                                Apply Now <span></span>
                                                            </>
                                                            : <>
                                                                <i className="flaticon-tick"></i>
                                                                Processing... <span></span>
                                                            </>
                                                        }
                                                    </button>
                                                </div>
                                                {/* <p><small><i className="flaticon-right"></i> By Registering I acknowledge that I agree to the <a href="https://techna.pk/terms-of-service" target="_blank">Terms &amp; Conditions</a>.</small></p> */}
                                                <p className='mb-2'><small className='text-danger'> 🛈 By Clicking <strong>'Apply Now'</strong> button, I confirm that all the information provided above is valid, truthful and belongs to me and <strong>Techna Institute</strong> reserve the right to take necessary action for incorrect or misleading information.</small></p>
                                                <p><small className='text-info'> 🛈 Use Chrome or Firefox for better experience..</small></p>
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

export default RegisterForm