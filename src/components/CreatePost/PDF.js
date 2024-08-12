import React from 'react';
// import styled from '@react-pdf/styled-components';
import { Page, Text, Image, View, Document, StyleSheet } from '@react-pdf/renderer';

import logo from '../../assets/images/logo-pdf.png'
import logoSlogan from '../../assets/images/logo-slogan.png'

// Create styles
const styles = StyleSheet.create({
    page: {
        flexDirection: 'column',
        backgroundColor: '#fff',
    },
    pageLogo: {
        justifyContent: 'space-between',
        marginBottom: 5,
        marginTop: 10,
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
        margin: 10,
        flexGrow: 1
    },
    heading: {
        fontSize: 15,
        color: '#96ca3e',
        textDecoration: 'underline'
    },
    paragraphsGroup: {
        margin: 15,
        fontSize: 10,
        color: '#666666'
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
    smallText: {
        fontSize: 9,
    },
});

export default class PDFApplication extends React.Component {

    getCourseName = courseSlug => {
   
        let course = this.props.courses.find((course) => {
            return courseSlug === course.slug
        })
        return course.name
    }

    card = cardName => {
        const { application } = this.props

        return <View style={styles.card}>
            <View style={styles.logoSection}>
                <Image style={styles.logo} src={logo} />
            </View>
            <View style={styles.cardType}>
                <Text>{cardName}</Text>
            </View>
            <View style={styles.cardMain}>
                <View style={styles.cardData}>

                    <View style={styles.cardDataRow}>
                        <View style={styles.cardDataColumn}>
                            <Text style={styles.textPara}>Roll No: </Text>
                        </View>
                        <View style={styles.cardDataSecondColumn}>
                            <Text style={styles.textPara}> {application.aId}</Text>
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
                            <Text style={[styles.textPara, { fontSize: 9 }]}> {this.getCourseName(application.course)}</Text>
                        </View>
                    </View>
                    <View style={styles.cardDataRow}>
                        <View style={styles.cardDataColumn}>
                            <Text style={styles.textPara}>Batch:   </Text>
                        </View>
                        <View style={styles.cardDataSecondColumn}>
                            <Text style={styles.textPara}> {'0' + application.batch}</Text>
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
        const date = new Date( application.createdAt )
        const dateToPrint = date.getFullYear() + '-' + ( date.getMonth() + 1 ) + '-' + date.getDate()
        return (
            <Document>
                <Page size="A4" style={styles.page}>
                    <View style={styles.pageLogo}>
                        <Image style={styles.pageLogoImage} src={logoSlogan} />
                        <View>
                            <Text style={[styles.heading, { color: '#333', fontSize: 20, textDecoration: 'none' }]}>Application Form</Text>

                            <View style={[styles.smallText, styles.borderBottom, styles.signatureLineRow, { marginTop: 10 }]}>
                                <Text>Serial #: </Text>
                                <Text >{application.aId}</Text>
                            </View>
                            <View style={[styles.smallText, styles.borderBottom, styles.signatureLineRow, { marginTop: 10 }]}>
                                <Text>Application Date: </Text>
                                <Text >{dateToPrint}</Text>
                            </View>
                        </View>
                    </View>

                    <View style={styles.descriptions}>

                        <View style={styles.studentDetailsLine}>
                            <View style={styles.studentDetailsRow}>
                                <Text>Full Name: </Text>
                                <Text style={styles.borderBottom}>{application.fullName}</Text>
                            </View>
                            <View style={styles.studentDetailsRow}>
                                <Text >CNIC / B-Form: </Text>
                                <Text style={styles.borderBottom}>{application.CNIC}</Text>
                            </View>

                            <View style={styles.studentDetailsRow}>
                                <Text >Date Of Birth: </Text>
                                <Text style={styles.borderBottom}>{application.DOB}</Text>
                            </View>


                        </View>

                        <View style={styles.studentDetailsLine}>

                            <View style={styles.studentDetailsRow}>
                                <Text >Father Name: </Text>
                                <Text style={styles.borderBottom}>{application.fatherName}</Text>
                            </View>

                            <View style={styles.studentDetailsRow}>
                                <Text >Mobile Number: </Text>
                                <Text style={styles.borderBottom}>{application.mobileNumber}</Text>
                            </View>

                            <View style={styles.studentDetailsRow}>
                                <Text >Qualification: </Text>
                                <Text style={styles.borderBottom}>{application.qualification}</Text>
                            </View>
                        </View>
                        <View style={styles.studentDetailsLine}>

                            <View style={styles.studentDetailsRow}>
                                <Text >Address: </Text>
                                <Text style={styles.borderBottom}>{application.address}</Text>
                            </View>
                        </View>

                        <Text style={styles.heading}>Course Details:</Text>
                        <View style={styles.paragraphsGroup}>
                            <Text style={styles.textPara}><Text style={styles.bold}>Course Name:</Text> {this.getCourseName(application.course)} </Text>
                            <Text style={styles.textPara}><Text style={styles.bold}>Duration:</Text> 6 months ( 2 days a week )  </Text>
                        </View>

                        <Text style={styles.heading}>Instructions:</Text>
                        <View style={styles.paragraphsGroup}>
                            <Text style={styles.textPara}>1) Color Print this PDF for attestation of Registration Card and Identity Card from <Text style={styles.bold}>BlueTickPost</Text> Office.</Text>
                            <Text style={styles.textPara}>2) Bring Original CNIC/B-Form &amp; Last Qualification Mark sheet/Certificate to the below given office address, along with course enrollment fee of PKR {application.courseFee}/- </Text>
                        </View>

                        <Text style={{ fontSize: 9 }}>*) I acknowledge that I've read all the rules and policies at the time of filling this form online. </Text>
                        <Text style={{ fontSize: 9 }}>*) There is no monthly or tuition fee for this course. One time course enrollment fee is PKR {application.courseFee}/- only; which would be submitted at the time of attestation and submission of this form.</Text>

                        <View style={styles.signatureLine}>
                            <View style={styles.signatureLineRow}>
                                <Text >Date:</Text>
                                <Text>_____________</Text>
                            </View>

                            <View style={styles.signatureLineRow}>
                                <Text >Student Signature:</Text>
                                <Text>_____________</Text>
                            </View>

                            <View style={styles.signatureLineRow}>
                                <Text >Guardian Signature:</Text>
                                <Text>_____________</Text>
                            </View>
                        </View>

                        <Text style={styles.heading}>Contact Info:</Text>
                        <View style={styles.paragraphsGroup}>
                            <Text style={styles.textPara}><Text style={styles.bold}>Office Address:   </Text> P-949 Block G, Gulistan Colony # 1, Akbar Chowk near MC Boys High School, Faisalabad.</Text>
                            <Text style={styles.textPara}><Text style={styles.bold}>Contact Number: </Text> 0345-7790453</Text>
                            <Text style={styles.textPara}><Text style={styles.bold}>Contact Number: </Text> 0335-6609060</Text>
                            <Text style={styles.textPara}><Text style={styles.bold}>Facebook Group: </Text> www.facebook.com/groups/TechnaPK</Text>
                            <Text style={styles.textPara}><Text style={styles.bold}>Facebook Page:  </Text> www.facebook.com/TechnaPK</Text>
                            <Text style={styles.textPara}><Text style={styles.bold}>Website:             </Text> www.bluetickpost.com</Text>
                        </View>

                    </View>



                    <View style={styles.cardsGroup}>
                        {this.card("Registration Card")}
                        {this.card("Identity Card")}
                    </View>

                </Page>
            </Document >
        )
    }
}

