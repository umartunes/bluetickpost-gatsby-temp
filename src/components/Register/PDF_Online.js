import React from 'react';
// import styled from '@react-pdf/styled-components';
import { Page, Text, Image, View, Document, StyleSheet } from '@react-pdf/renderer';

import logo from '../../assets/images/logo-pdf.png'
import logoSDP from '../../assets/images/logo-sdp.png'

// import JazzCashQR from '../../assets/images/jazzCash_qr.jpeg'

// Create styles
const styles = StyleSheet.create({
    page: {
        flexDirection: 'column',
        backgroundColor: '#fff',
    },
    pageLogo: {
        justifyContent: 'space-between',
        marginBottom: 2,
        marginTop: 5,
        padding: 10,
        flexDirection: 'row',
    },
    pageLogoImage: {
        width: '250px',
    },
    cardsGroup: {
        flexDirection: 'row',
    },
    card: {
        margin: 10,
        padding: 5,
        flexGrow: 1,
        flexDirection: 'column',
        border: 0.7
    },
    cardHeader: {
        flexDirection: 'row',
    },
    cardHeaderLeft: {
        flexGrow: 1,
        flexDirection: 'column',
        paddingRight: 5
    },
    logoSection: {
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 10
    },
    logo: {
        width: '150px',
    },
    cardType: {
        backgroundColor: '#eee',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 3,
        fontSize: 10,
        marginBottom: 10
    },
    qrImageOuter: {
        padding: 4,
        border: 0.5,
        // alignSelf: 'flex-start'
    },
    qrImage: {
        width: 45,
        height: 45
    },
    cardMain: {
        flexDirection: 'row',
    },
    cardData: {
        flexGrow: 1,
        flexDirection: 'column',
        fontSize: 10,
    },
    cardDataRow: {
        flexDirection: 'row',
        marginBottom: 10
    },
    cardDataSecondColumn: {
        flexGrow: '1',
        borderBottom: 0.5,
        marginRight: 5,
        marginLeft: 5,
        fontSize: 9,
        maxWidth: 125,
        paddingBottom: 0
    },
    cardPhotoOuter: {
        padding: 4,
        border: 0.5,
        alignSelf: 'flex-start'
    },
    cardPhoto: {
        width: 80,
        height: 106
    },
    descriptions: {
        margin: `10px 10px 0`,
        padding: 0,
        flexGrow: 1
    },
    heading: {
        fontSize: 13,
        color: '#598627',
        textDecoration: 'underline',
        marginTop: 12
    },
    paragraphsGroup: {
        margin: `10px 10px 8px`,
        fontSize: 10,
        color: '#555555'
    },
    textPara: {
        marginBottom: 5
    },
    studentDetailsLine: {
        marginBottom: 15,
        fontSize: 11,
        flexDirection: 'row',

    },
    studentDetailsRow: {
        flexDirection: 'row',
        flexGrow: 1
    },
    signatureLine: {
        marginTop: 15,
        marginBottom: 15,
        fontSize: 11,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },

    signatureLineRow: {
        flexDirection: 'row',
    },
    borderBottom: {
        borderBottom: 0.5
    },
    bold: {
        fontSize: 12,
        letterSpacing: 1,
        color: '#222222'
    },
    strongUnderline: {
        fontWeight: 'bold',
        textDecoration: 'underline'
    },
    note: {
        fontSize: 10.5,
        letterSpacing: 1.1,
        lineHeight: 1.8,
        color: '#0c5460',
        backgroundColor: '#d1ecf1',
        padding: "7px 10px",
        margin: "8px 0 0",
        textAlign: "center"
    },
    blankLine: {
        fontSize: 1,
        backgroundColor: '#555555',
        margin: "8px 0",
    },

    boldHeading: {
        fontSize: 20,
        fontWeight: 'bold',
        letterSpacing: 1.1,
        color: "#ffffff",
        backgroundColor: '#333333',
        margin: "5px 0 0",
        padding: "7px 10px",
        textAlign: "center"
    },

    smallText: {
        fontSize: 9,
    },
});

export default class PDFOnline extends React.Component {

    getCourseName = courseSlug => {

        let course = this.props.courses.find((course) => {
            return courseSlug === course.slug
        })
        return course.name
    }

    card = (cardName, rollNo) => {
        const { application } = this.props

        return <View style={styles.card}>

            <View style={styles.cardHeader}>
                <View style={styles.cardHeaderLeft}>
                    <View style={styles.logoSection}>
                        <Image style={styles.logo} src={logo} />
                    </View>
                    <View style={styles.cardType}>
                        <Text>{cardName}</Text>
                    </View>
                </View>
                <View style={styles.cardHeaderRight}>
                    <View style={styles.qrImageOuter}>
                        <Image style={styles.qrImage} src={this.props.qrImage} />
                    </View>
                </View>
            </View>

            <View style={styles.cardMain}>
                <View style={styles.cardData}>

                    <View style={styles.cardDataRow}>
                        <View style={styles.cardDataColumn}>
                            <Text style={styles.textPara}>Roll No: </Text>
                        </View>
                        <View style={styles.cardDataSecondColumn}>
                            <Text style={styles.textPara}> {rollNo}</Text>
                        </View>
                    </View>
                    <View style={styles.cardDataRow}>
                        <View style={styles.cardDataColumn}>
                            <Text style={styles.textPara}>Name:   </Text>
                        </View>
                        <View style={styles.cardDataSecondColumn}>
                            <Text style={styles.textPara}> {application.fullName}</Text>
                        </View>
                    </View>
                    <View style={styles.cardDataRow}>
                        <View style={styles.cardDataColumn}>
                            <Text style={styles.textPara}>Course: </Text>
                        </View>
                        <View style={styles.cardDataSecondColumn}>
                            <Text style={[styles.textPara, { fontSize: 8 }]}> {this.getCourseName(application.course)}</Text>
                        </View>
                    </View>
                    <View style={styles.cardDataRow}>
                        <View style={styles.cardDataColumn}>
                            <Text style={styles.textPara}>Batch:   </Text>
                        </View>
                        <View style={styles.cardDataSecondColumn}>
                            <Text style={styles.textPara}> {application.batch}</Text>
                        </View>
                    </View>
                    <View style={styles.cardDataRow}>
                        <View style={styles.cardDataColumn}>
                            <Text style={styles.textPara}>Authorized Sign: </Text>
                        </View>
                        <View style={styles.cardDataSecondColumn}>
                            <Text style={styles.textPara}></Text>
                        </View>
                    </View>

                </View>
                <View style={styles.cardPhotoOuter}>
                    {/* <Image src="https://www.gravatar.com/avatar/d50c83cc0c6523b4d3f6085295c953e0" /> */}
                    <Image style={styles.cardPhoto} src={application.photo} />
                </View>
            </View>

        </View>
    }
    render = () => {
        const { application } = this.props
        // console.log(application.dateCreated)
        // const date = new Date(application.createdAt)

        // Firestore Timestamp method to convert
        const date = new Date(application.dateCreated.seconds * 1000);
        const dateToPrint = date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate()

        let rollNo = `${application.course.toUpperCase()}-BA${application.batch}-${application.rollNumber}`

        return (
            <Document>
                <Page size="A4" style={styles.page}>
                    <View style={styles.pageLogo}>
                        <Image style={styles.pageLogoImage} src={logoSDP} />
                        <View>
                            <Text style={[styles.heading, { color: '#333', fontSize: 20, textDecoration: 'none' }]}>Admission Form</Text>

                            <View style={[styles.smallText, styles.borderBottom, styles.signatureLineRow, { marginTop: 10 }]}>
                                <Text>Serial #: </Text>
                                <Text >{rollNo}</Text>
                            </View>
                            <View style={[styles.smallText, styles.borderBottom, styles.signatureLineRow, { marginTop: 10 }]}>
                                <Text>Application Date: </Text>
                                <Text >{dateToPrint}</Text>
                            </View>
                        </View>
                    </View>

                    <Text style={styles.blankLine}>&nbsp;</Text>

                    <View style={styles.cardsGroup}>
                        {this.card("Admit Card", rollNo)}
                        {this.card("Identity Card", rollNo)}
                    </View>

                    {/* <Text style={styles.blankLine}>&nbsp;</Text> */}

                    <Text style={styles.boldHeading}>Instructions</Text>

                    <View style={styles.descriptions}>

                        <Text style={{ fontSize: 12, fontWeight: 'bold', color: "#222222", marginTop: 5, textAlign: 'center', textDecoration: 'underline' }}>To Confirm Your Seat; You Have To Follow The Instructions Carefully.</Text>

                        <Text style={styles.heading}>Step 1: Submit Your Fee</Text>
                        <Text style={{ fontSize: 11, color: "#222222", marginTop: 5 }}>Please submit your fee of <Text style={styles.strongUnderline}>{application.courseFee}/-</Text> to JazzCash Account # <Text style={styles.strongUnderline}>0324 667 8889</Text></Text>

                        <Text style={styles.heading}>Step 2: Submit Your Documents</Text>
                        <Text style={{ fontSize: 11, color: "#222222", marginTop: 5 }}>Please submit your documents and fee submission receipt to our WhatsApp # <Text style={styles.strongUnderline}>0345 779 0453</Text> to confirm your seat.</Text>

                        <View style={styles.paragraphsGroup}>
                            <Text style={styles.textPara}>1) Send the picture or PDF of this document for attestation from <Text style={styles.bold}>Techna</Text> Office. </Text>
                            <Text style={styles.textPara}>2) Send the picture of your original CNIC or B-Form</Text>
                            <Text style={styles.textPara}>3) Send the picture of your original mark sheet, certificate or degree of your highest qualification, which you've mentioned in the application form.</Text>
                            <Text style={styles.textPara}>4) Send the receipt of fee submission</Text>
                        </View>

                        <Text style={{ fontSize: 9 }}>*) The last date of documents and fee receipt submission is <Text style={styles.strongUnderline}>{application.lastDateOfFormSubmission}</Text>. Submission Hours: <Text style={styles.strongUnderline}>Monday to Saturday 09:00 AM to 08:00 PM</Text></Text>
                        {
                            application.isOneTimeFee && application.learningMode === "Normal"
                                ? <Text style={{ fontSize: 9 }}>*) There is no monthly or tuition fee for this course. One time course enrollment fee is {application.courseFee}/- only; which would be submitted at the time of attestation and submission of this form.</Text>
                                : <Text style={{ fontSize: 9 }}>*) The monthly fee for this course is {application.courseFee}/- only; which would be submitted at the time of submission of this form.</Text>

                        }
                        <Text style={{ fontSize: 9, marginBottom: 1 }}>*) I acknowledge that I've read all the rules and policies at the time of filling this form online. </Text>
                        {/* <Text style={{ fontSize: 9 }}>*) For further information or queries please contact us using one of the method provided above.</Text> */}

                        {/* <Text style={styles.heading}>Fee Submission Instructions:</Text>
                        <View style={styles.paragraphsGroup}>
                            <Text style={styles.textPara}>1) To submit your fee using <Text style={styles.bold}>JazzCash App</Text>, scan QR Code via <Text style={styles.bold}>Scan QR option</Text> on JazzCash App. After submission of your fee contact us using one of the method provided above.</Text>
                            <Text style={styles.textPara}>2) To submit your fee via <Text style={styles.bold}>EasyPaisa</Text> or <Text style={styles.bold}>UBL Bank Transfer</Text>, Contact us using one of the contact method provided above.</Text>
                            <Text style={styles.textPara}>3) To submit your fee by <Text style={styles.bold}>Hand</Text>, Visit our office address provided above along with this Application Form between 9am - 4pm.</Text>
                        </View>

                        <View style={{ justifyContent: 'center', alignItems: 'center', flexDirection: 'row' }}>
                            <Text style={{ marginTop: 0, marginBottom: 15 }}>_______________________________________________</Text>
                        </View>

                        <View style={{ justifyContent: 'center', alignItems: 'center', flexDirection: 'row' }}>
                            <Image src={JazzCashQR} style={{ height: 170, width: 'auto' }} />
                        </View> */}
                    </View>
                    
                    <Text style={styles.boldHeading}>Contact Information</Text>
                    <View style={styles.descriptions}>
                        <View style={styles.paragraphsGroup}>
                            <Text style={styles.textPara}><Text style={styles.bold}>Office Address:   </Text> P-949 Block G, Gulistan Colony # 1, Akbar Chowk, Faisalabad.</Text>
                            <Text style={styles.textPara}><Text style={styles.bold}>Contact Number: </Text> 0345 779 0453 </Text>
                            <Text style={styles.textPara}><Text style={styles.bold}>Contact Number: </Text> 0324 667 8889</Text>
                            <Text style={styles.textPara}><Text style={styles.bold}>Website:             </Text> www.techna.pk</Text>
                            <Text style={styles.textPara}><Text style={styles.bold}>Facebook Page:  </Text> www.facebook.com/TechnaPK</Text>
                            <Text style={styles.textPara}><Text style={styles.bold}>Facebook Group: </Text> www.facebook.com/groups/TechnaPK</Text>
                        </View>
                    </View>

                    {/* <View style={styles.cardsGroup}>
                        {this.card("Admit Card")}
                        {this.card("Identity Card")}
                    </View> */}

                </Page>
            </Document >
        )
    }
}

