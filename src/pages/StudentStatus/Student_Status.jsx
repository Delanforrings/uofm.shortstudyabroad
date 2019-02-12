import React, { Component } from 'react';
import { Animation, MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse, MDBMask,
    MDBRow, MDBCol, MDBBtn, MDBView, MDBContainer, MDBFormInline, Footer, MDBBtnGroup, MDBIcon} from "mdbreact";
import { Jumbotron, Grid, Row, Col, Image } from 'react-bootstrap';
import './Student_Status.css';

import HomeBanner from './Ireland3.jpg';
import Navbar from '../NavBarUofM_Home';
import UofMFooter from '../UofMFooter';

import {BrowserView, MobileView, isBrowser, isMobile} from "react-device-detect";
import { Helmet } from 'react-helmet';

class UofM_StuStatus extends React.Component {
    render() {
        return (
            <div id="UofM_R_C">
                <Helmet>
                    <title>Student Status || Non UofM Students || Learning Abroad Center</title>
                </Helmet>
                <Navbar/>
                <BrowserView>
                    <MDBContainer style={{marginTop: "10vh"}}>
                        <MDBRow>
                            <MDBCol size="8">
                                <Animation type="fadeIn">
                                    <Image src={HomeBanner} className="about-profile-pic program_gradient"/>
                                </Animation>
                            </MDBCol>
                        </MDBRow>
                        <MDBRow>
                            <MDBCol size="8" className="homeText offset-md-2">
                                <Animation type="fadeIn">
                                    <h3 className="colorChange">University of Minnesota Student Status</h3>
                                    <br/>
                                    <p>
                                        As a Non-University of Minnesota student participating on a study abroad program through the Learning Abroad Center, you are admitted to the University of Minnesota as a non-degree seeking student during the term(s) that you are abroad. You are required to activate a University of Minnesota student account to receive billing notifications and email communication from the Learning Abroad Center and University of Minnesota. </p>
                                    <br/>
                                    <p>
                                        After submitting the online application for students from institutions other than the University of Minnesota, you will receive a University of Minnesota Internet account. You will receive an email within 2–3 business days with details on how to set up this account and access your online application. You must then complete your application checklist by submitting additional required paperwork before your application will be considered.
                                    </p>
                                    <br/>
                                    <h3 className="colorChange">Access to University of Minnesota Services</h3>
                                    <br/>
                                    <p>
                                        After you set up your account, following the instructions provided to you by the Learning Abroad Center, you will use your unique Internet ID and password to log into the Learning Abroad Center's online application, your University of Minnesota student account, UM Pay (the University's online billing and payment system), and your University assigned email account.
                                    </p>
                                    <br/>
                                    <h3 className="colorChange">Email Access</h3>
                                    <br/>
                                    <p>
                                        Access your University of Minnesota email account through <a className="text_underline"> Gophermail</a>. Your University student email is the official and ONLY method of billing notification and communication. All program communication, to include your notification of acceptance, as well as pre-departure arrangements, are sent to this email address. Check this email account frequently beginning now and throughout your study abroad term.
                                    </p>
                                    <br/>
                                    <h3 className="colorChange">Email Account Optionss</h3>
                                    <br/>
                                    <p>
                                        Access your <a className="text_underline">email account options</a> to change your password, or forward your email account messages. If you choose to forward your University of Minnesota email account to an account which you more frequently access, you are responsible for ensuring that your email is being forwarded appropriately.
                                    </p>
                                    <br/>
                                    <h3 className="colorChange">University of Minnesota Directory Information</h3>
                                    <br/>
                                    <p>
                                        The University of Minnesota may publish, without consent, directory information such as a student's name, address, telephone number, email address, college and term of enrollment in accordance with the guidelines of the <a className="text_underline">Family Education Rights and Privacy Act (FERPA)</a>. You can <a className="text_underline">choose to suppress</a> some or all of this information. From this page you must click "student suppression" if you wish to suppress all information.
                                    </p>
                                    <br/>
                                    <h3 className="colorChange">Power of Attorney Forms</h3>
                                    <br/>
                                    <p>
                                        University staff, to include Learning Abroad Center staff, cannot discuss your student account records or program details with anyone other than you (according to <a className="text_underline">federal law</a>) unless you have completed the appropriate documentation. If you plan to involve your parents, or another trusted individual, in any way while you are studying on a Learning Abroad Center program, complete notarized <a className="text_underline">Power of Attorney (POA) paperwork </a> and submit a copy to both One Stop Student Services and the Learning Abroad Center.
                                    </p>
                                    <br/>
                                    <h3 className="colorChange">Cancellation Information</h3>
                                    <br/>
                                    <p>
                                        If you wish to cancel your participation in a program, notify the Learning Abroad Center by email from your official University of Minnesota email account.  You will be assessed a portion of the program fees if you cancel your Learning Abroad Center program at any time after you have made your confirmation deposit. Please refer to the <a>Cancellation Policy</a>.
                                    </p>
                                    <br/>
                                    <p>
                                        If you have questions about your internet account, or any of the information outlined above, email the Learning Abroad Center.
                                    </p>

                                </Animation>
                            </MDBCol>
                        </MDBRow>
                    </MDBContainer>
                </BrowserView>
                <MobileView>
                    <MDBContainer style={{marginTop: "10vh"}}>
                        <MDBRow>
                            <MDBCol size="10">
                                <Animation type="fadeIn">
                                    <Image src={HomeBanner} className="about-profile-pic program_gradient"/>
                                </Animation>
                            </MDBCol>
                        </MDBRow>
                        <MDBRow>
                            <MDBCol size="10" className="homeText offset-md-2">
                                <Animation type="fadeIn">
                                    <h3 className="colorChange">University of Minnesota Student Status</h3>
                                    <br/>
                                    <p>
                                        As a Non-University of Minnesota student participating on a study abroad program through the Learning Abroad Center, you are admitted to the University of Minnesota as a non-degree seeking student during the term(s) that you are abroad. You are required to activate a University of Minnesota student account to receive billing notifications and email communication from the Learning Abroad Center and University of Minnesota. </p>
                                    <br/>
                                    <p>
                                        After submitting the online application for students from institutions other than the University of Minnesota, you will receive a University of Minnesota Internet account. You will receive an email within 2–3 business days with details on how to set up this account and access your online application. You must then complete your application checklist by submitting additional required paperwork before your application will be considered.
                                    </p>
                                    <br/>
                                    <h3 className="colorChange">Access to University of Minnesota Services</h3>
                                    <br/>
                                    <p>
                                        After you set up your account, following the instructions provided to you by the Learning Abroad Center, you will use your unique Internet ID and password to log into the Learning Abroad Center's online application, your University of Minnesota student account, UM Pay (the University's online billing and payment system), and your University assigned email account.
                                    </p>
                                    <br/>
                                    <h3 className="colorChange">Email Access</h3>
                                    <br/>
                                    <p>
                                        Access your University of Minnesota email account through <a className="text_underline"> Gophermail</a>. Your University student email is the official and ONLY method of billing notification and communication. All program communication, to include your notification of acceptance, as well as pre-departure arrangements, are sent to this email address. Check this email account frequently beginning now and throughout your study abroad term.
                                    </p>
                                    <br/>
                                    <h3 className="colorChange">Email Account Optionss</h3>
                                    <br/>
                                    <p>
                                        Access your <a className="text_underline">email account options</a> to change your password, or forward your email account messages. If you choose to forward your University of Minnesota email account to an account which you more frequently access, you are responsible for ensuring that your email is being forwarded appropriately.
                                    </p>
                                    <br/>
                                    <h3 className="colorChange">University of Minnesota Directory Information</h3>
                                    <br/>
                                    <p>
                                        The University of Minnesota may publish, without consent, directory information such as a student's name, address, telephone number, email address, college and term of enrollment in accordance with the guidelines of the <a className="text_underline">Family Education Rights and Privacy Act (FERPA)</a>. You can <a className="text_underline">choose to suppress</a> some or all of this information. From this page you must click "student suppression" if you wish to suppress all information.
                                    </p>
                                    <br/>
                                    <h3 className="colorChange">Power of Attorney Forms</h3>
                                    <br/>
                                    <p>
                                        University staff, to include Learning Abroad Center staff, cannot discuss your student account records or program details with anyone other than you (according to <a className="text_underline">federal law</a>) unless you have completed the appropriate documentation. If you plan to involve your parents, or another trusted individual, in any way while you are studying on a Learning Abroad Center program, complete notarized <a className="text_underline">Power of Attorney (POA) paperwork </a> and submit a copy to both One Stop Student Services and the Learning Abroad Center.
                                    </p>
                                    <br/>
                                    <h3 className="colorChange">Cancellation Information</h3>
                                    <br/>
                                    <p>
                                        If you wish to cancel your participation in a program, notify the Learning Abroad Center by email from your official University of Minnesota email account.  You will be assessed a portion of the program fees if you cancel your Learning Abroad Center program at any time after you have made your confirmation deposit. Please refer to the <a>Cancellation Policy</a>.
                                    </p>
                                    <br/>
                                    <p>
                                        If you have questions about your internet account, or any of the information outlined above, email the Learning Abroad Center.
                                    </p>

                                </Animation>
                            </MDBCol>
                        </MDBRow>
                    </MDBContainer>
                </MobileView>
                <UofMFooter/>
            </div>

        )

    }
}

export default UofM_StuStatus;