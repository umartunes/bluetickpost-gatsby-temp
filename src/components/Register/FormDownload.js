import React, { useState, useEffect } from 'react'
import { Link, } from 'gatsby'

import { firebase, firestore } from '../../utils/firebase'
import { useToasts } from 'react-toast-notifications'

import { PDFViewer, PDFDownloadLink } from '@react-pdf/renderer';
import PDFApplication from './PDF_QR'
import PDFOnline from './PDF_Online'

import QRCode from 'qrcode.react'

import { isMobile } from 'react-device-detect'

import { courses } from '../../data/courses'

const FormDownload = () => {

    const { addToast } = useToasts()
    const [isLoading, setIsLoading] = useState(true)

    // if window.courseApplication is set in RegisterForm Component then use that application otherwise it wouldn't have any data, and we would find this data below
    const [userApplication, setUserApplication] = useState({ id: false, rollNumber: false })
    const [qrImage, setQrImage] = useState('')

    const [formData, setFormData] = useState({
        CNIC: '',
        course: '',
        batch: '',
    })

    const notify = (message, type = "success") => { addToast(message, { appearance: type, autoDismiss: true }) }

    const handleFormData = e => {
        e.persist() // hack to be used on gatsby, I saw it first time
        setFormData((s) => ({ ...s, [e.target.name]: e.target.value }))
    }

    // Check if form application data available in url, and user is coming from register page then set form data automatically
    useEffect(() => {

        // Ref: https://stackoverflow.com/questions/901115/how-can-i-get-query-string-values-in-javascript

        const urlParams = new Proxy(new URLSearchParams(window.location.search), {
            get: (searchParams, prop) => searchParams.get(prop),
        });

        // // Get the value of "some_key" in eg "https://example.com/?some_key=some_value"
        // let value = urlParams.some_key; // "some_value"

        let urlData = {}
        if (urlParams.CNIC)
            urlData.CNIC = urlParams.CNIC.trim()

        if (urlParams.course)
            urlData.course = urlParams.course.trim()

        if (urlParams.batch)
            urlData.batch = urlParams.batch.trim()

        if (urlParams.CNIC) {
            getApplicationData(urlData)
        } else {
            setIsLoading(false)
        }

    }, [])

    const handleSubmit = e => {

        e.preventDefault();

        let { CNIC, course, batch } = formData

        CNIC = CNIC.trim()
        course = course.trim()
        batch = batch.trim()

        if (CNIC.length !== 13) {
            notify('Please enter your CNIC / B-Form # correctly without hyphens', 'error')
            return;
        }

        let queryData = { CNIC, course, batch }

        setIsLoading(true)

        getApplicationData(queryData)

    }

    const getApplicationData = (query) => {

        console.log(query)

        let docRef = firestore.collection("CourseApplications")

        if (query.CNIC && query.CNIC.length)
            docRef = docRef.where("CNIC", "==", query.CNIC)

        if (query.course && query.course.length)
            docRef = docRef.where("course", "==", query.course)

        if (query.batch && query.batch.length)
            docRef = docRef.where("batch", "==", query.batch)

        docRef
            .orderBy("dateCreated", "desc")
            .limit(1)
            .get().then((querySnapshot) => {

                let applications = []

                querySnapshot.forEach((doc) => {
                    // doc.data() is never undefined for query doc snapshots
                    // console.log(doc.id, " => ", doc.data());

                    let application = doc.data()
                    applications.push(application)

                });

                if (applications.length) {

                    setUserApplication(applications[0])
                    notify("Please download the application form, and follow the instructions written on it.", 'success')
                } else {
                    // It seems you didn't apply for this course yet
                    notify("It seems you didn't apply for this course yet", 'error')
                }

            }).catch(function (error) {
                notify("Failed to connect to server", 'error')
                console.log("Error getting documents: ", error);
            }).finally(() => {
                setIsLoading(false)
            });;

    }

    const qrToImage = () => {

        // Source: https://medium.com/@zaran.56/how-to-generate-and-download-a-qr-code-image-in-react-a3e924a672f5

        // Hack: Once the QR Image Component is generated successfully then convert it to image to be used in PDf
        setTimeout(() => {

            const canvas = document.getElementById("qrComponent");
            const pngUrl = canvas.toDataURL("image/png")

            // console.log(pngUrl)
            setTimeout(() => {
                setQrImage(pngUrl)
            }, 1000)

        }, 500)

    }

    const LoadingSection = () => {
        return <section className="contact-area ptb-70 bg-fafafb">
            <div className="container">
                <div className="row">
                    <div className="col-12 ">
                        <div className="contact-form">
                            <div className="d-flex justify-content-center align-items-center flex-column">

                                <div className="spinner-grow text-success" role="status">
                                    <span className="sr-only">Loading...</span>
                                </div>
                                <h3 className='mt-3'>Loading...</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    }

    if (isLoading) {
        return <LoadingSection />
    }

    if (!userApplication.rollNumber)
        return (
            <section className="contact-area ptb-70 bg-fafafb">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="contact-form">
                                <form id="contactForm" onSubmit={handleSubmit}>
                                    <div className="row mb-4">
                                        <div className="col">
                                            <h4 className='text-center'>Enter your CNIC number to download your card</h4>
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="col-12 col-md-8 offset-md-2">

                                            {/* <div className="form-group">
                                                <input type="CNIC" name="CNIC" value={formData.CNIC} className="form-control" required placeholder="Enter your CNIC number here" onChange={handleFormData} />
                                                <small className='text-info'>🛈 CNIC or B-Form Number (Only numbers without hyphens).</small>
                                            </div> */}

                                            <div className="input-group rounded-right">
                                                <input type="text" name="CNIC" value={formData.CNIC} className="form-control" required placeholder='Enter your CNIC number here' onChange={handleFormData} />
                                               
                                                <div className="input-group-append rounded-right" style={{maxWidth: '175px'}}>

                                                    <select name="course" defaultValue="" className="form-control pr-3 bg-dark text-white rounded-0 rounded-right w-100" onChange={handleFormData}>

                                                        <option selected value="">Select course</option>
                                                        {courses
                                                            .filter((course, i) => { return course.isAvailable })
                                                            .map((course, i) => {
                                                                return <option key={course.id} value={course.slug}>{course.name}</option>
                                                            })}
                                                    </select>

                                                </div>
                                            </div>
                                            <small className='text-info'>🛈 CNIC or B-Form Number (Only numbers without hyphens).</small>


                                        </div>
                                    </div>
                                    <div className="row mt-3">
                                        <div className="col-12 col-md-8 offset-md-2">
                                            <button type="button" className="default-btn btn-block px-4" disabled={isLoading} onClick={handleSubmit}>
                                                {!isLoading ? <>Show Application Form <span></span> </> : <>Checking... <span></span></>}
                                            </button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>

                </div>
            </section>
        )

    if (qrImage === '') {
        //encrypt roll number for qrCode
        let encryptedRollNumber = window.btoa(userApplication.rollNumber)
        return <>
            <LoadingSection />
            <QRCode id="qrComponent" value={encryptedRollNumber} size={160} level={"H"} style={{ visibility: 'hidden' }} />
            {/* <QRCode id="qrComponent" value={encryptedRollNumber} size={160} level={"H"} /> */}
            {qrToImage()}
        </>
    }

    let PDFDocument;

    if (userApplication.classMode === "Online") {

        PDFDocument = <PDFOnline application={userApplication} qrImage={qrImage} courses={courses} />

    } else {

        PDFDocument = <PDFApplication application={userApplication} qrImage={qrImage} courses={courses} />

    }

    return <section className="contact-area ptb-70 bg-fafafb">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="row">
                        <div className="col-12">

                            <div className="p-4 bg-info text-white">
                                <h5 className='m-0 text-center'>Your application was submitted successfully. To confirm your seat; Download PDF by clicking the button below and follow the instructions carefully written on it.</h5>
                            </div>

                        </div>
                    </div>

                    <div className="row mt-5">

                        <div className="col-12 col-md-4 offset-md-8">
                            {/* <button className="btn light-green margin0 marginTop" onClick={() => { this.printDocument() }}>Download</button> */}
                            <PDFDownloadLink document={PDFDocument} fileName={`Admission Form - ${userApplication.fullName}.pdf`}>
                                {({ blob, url, loading, error }) => {

                                    // {/* Download Form Automatically after 5 seconds */ }
                                    // let autoDownload = loading ? "" : setTimeout(function () { document.getElementById("formDownloadButton").click() }, 500)

                                    return <button id="formDownloadButton" className="default-btn px-4 btn-block" disabled={loading} >
                                        {loading ? <>Loading...<span></span></> : <>Download Form <span></span></>}
                                    </button>
                                }}
                            </PDFDownloadLink>

                        </div>
                    </div>

                    {
                        isMobile
                            ? ""
                            : <div className="row mt-2">
                                <div className="col-12">
                                    <div className="card">
                                        <div className="card-body">
                                            <PDFViewer width="100%" height="1250">
                                                {PDFDocument}
                                            </PDFViewer>
                                        </div>
                                    </div>
                                </div>
                            </div>
                    }



                </div>
            </div>
        </div>
    </section>


}

export default FormDownload