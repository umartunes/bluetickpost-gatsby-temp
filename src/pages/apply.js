import React, { useEffect } from 'react'
import Layout from "../components/App/Layout"
import NavbarTwo from "../components/App/NavbarTwo";
// import Footer from "../components/App/Footer"
// import RegisterForm from '../components/Register/RegisterForm'

// import starIcon from '../assets/images/star-icon.png'

const Contact = () => {

    useEffect(() => {

        document.body.style.overflowY = 'hidden'
        
        return () => {
            document.body.style.overflowY = 'auto'
        };

    }, []);

    return (
        <Layout>
            <NavbarTwo />
            {/* <RegisterForm /> */}
            {/* <section className="contact-area" style={{ backgroundColor: '#eeeeee' }}>
                <div className="container-fluid">
                    <div className="section-title mb-0 pb-0">
                        <span className="sub-title">
                            <img src={starIcon} alt="contact" />
                            Application Form
                        </span>
                        <h2>Join The Lead Tech Industry</h2>
                        <p>Please fill in the form below to apply for a course. All fields are required.</p>
                    </div>

                    <div style={{ minHeight: 500 }} className="d-flex justify-content-center align-items-center">
                        <div className="container" style={{ padding: 0 }}>
                            <div className="demo-iframe-container mt-0" style={{ height: '100vh', paddingTop: '100vh' }}>
                                <iframe title="" loading="lazy" src="https://techna.web.app/apply"></iframe>
                            </div>
                        </div>
                    </div> 

                </div>
            </section> */}

            {/* URL for quick website update */}
            <iframe style={{
                display: 'block',
                background: "#000",
                border: "none",         
                height: "calc( 100vh - 110px )",  
                width: "100%",
                maxWidth: '100vw'
            }} title="" loading="lazy" src={`https://techna.web.app/apply?random=${Math.random().toString(36).slice(2)}`}></iframe>

            {/* <Footer /> */}
        </Layout>
    );
}

export default Contact