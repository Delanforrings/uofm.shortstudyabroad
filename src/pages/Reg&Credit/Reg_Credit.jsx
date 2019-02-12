import React, { Component } from 'react';
import { Animation, MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse, MDBMask,
    MDBRow, MDBCol, MDBBtn, MDBView, MDBContainer, MDBFormInline, Footer, MDBBtnGroup, MDBIcon} from "mdbreact";
import { Jumbotron, Grid, Row, Col, Image } from 'react-bootstrap';
import './Reg_Credit.css';

import HomeBanner from './Ireland3.jpg';
import Navbar from '../NavBarUofM_Home';
import UofMFooter from '../UofMFooter';

import {BrowserView, MobileView, isBrowser, isMobile} from "react-device-detect";
import { Helmet } from 'react-helmet';

class UofM_Funding extends React.Component {
    render() {
        return (
            <div id="UofM_R_C">
                <Helmet>
                    <title>Registration & Credit || Non UofM Students || Learning Abroad Center</title>
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
                                    <h3 className="colorChange">Study Abroad Credit</h3>
                                    <br/>
                                    <p>
                                        All Non-University of Minnesota participants receive University of Minnesota resident credit for their program courses. Courses are recorded on an official University of Minnesota transcript unless your home institution has requested an exception.
                                    </p>
                                    <br/>
                                    <h3 className="colorChange">Proof of Enrollment</h3>
                                    <br/>
                                    <p>
                                        If a proof of enrollment statement is required from the University of Minnesota, request it via mail. Include your name, program, term, reason for the statement, and person or office to which the statement should be sent.
                                    </p>
                                    <br/>
                                    <h3 className="colorChange">Official Transcripts</h3>
                                    <br/>
                                    <p>
                                        The University of Minnesota provides one official transcript per student upon completion of a study abroad program. All Non-University of Minnesota participants must complete a Transcript Request Form, to indicate the official office at their home institution to which the transcript should be sent. You will not receive a personal copy of your transcript.
                                    </p>
                                    <br/>
                                    <p>
                                        To request additional transcripts for a fee, see <a className="text_underline">One Stop—Transcripts</a>.
                                    </p>
                                    <br/>
                                    <p>
                                        If you are requesting additional transcripts shortly after completion of your program, verify that your courses and grades were processed at the University of Minnesota before requesting the transcripts. To do this, by review your unofficial transcript on the University's <a className="text_underline">One Stop</a> student services website.
                                    </p>
                                    <br/>
                                    <h3 className="colorChange">Timeframe</h3>
                                    <br/>
                                    <p>
                                        Grade processing and issuing an official transcript for completed coursework occurs within 4-8 weeks of the Learning Abroad Center receiving grades from the on-site program staff. It may take several weeks for on-site staff to process and submit grades to the Learning Abroad Center after the program has concluded.
                                    </p>
                                    <br/>
                                    <p>
                                        A transcript will not be released if you have financial or other obligations to the University of Minnesota, Learning Abroad Center or on-site program staff.
                                    </p>
                                    <br/>
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
                                    <h3 className="colorChange">Study Abroad Credit</h3>
                                    <br/>
                                    <p>
                                        All Non-University of Minnesota participants receive University of Minnesota resident credit for their program courses. Courses are recorded on an official University of Minnesota transcript unless your home institution has requested an exception.
                                    </p>
                                    <br/>
                                    <h3 className="colorChange">Proof of Enrollment</h3>
                                    <br/>
                                    <p>
                                        If a proof of enrollment statement is required from the University of Minnesota, request it via mail. Include your name, program, term, reason for the statement, and person or office to which the statement should be sent.
                                    </p>
                                    <br/>
                                    <h3 className="colorChange">Official Transcripts</h3>
                                    <br/>
                                    <p>
                                        The University of Minnesota provides one official transcript per student upon completion of a study abroad program. All Non-University of Minnesota participants must complete a Transcript Request Form, to indicate the official office at their home institution to which the transcript should be sent. You will not receive a personal copy of your transcript.
                                    </p>
                                    <br/>
                                    <p>
                                        To request additional transcripts for a fee, see <a className="text_underline">One Stop—Transcripts</a>.
                                    </p>
                                    <br/>
                                    <p>
                                        If you are requesting additional transcripts shortly after completion of your program, verify that your courses and grades were processed at the University of Minnesota before requesting the transcripts. To do this, by review your unofficial transcript on the University's <a className="text_underline">One Stop</a> student services website.
                                    </p>
                                    <br/>
                                    <h3 className="colorChange">Timeframe</h3>
                                    <br/>
                                    <p>
                                        Grade processing and issuing an official transcript for completed coursework occurs within 4-8 weeks of the Learning Abroad Center receiving grades from the on-site program staff. It may take several weeks for on-site staff to process and submit grades to the Learning Abroad Center after the program has concluded.
                                    </p>
                                    <br/>
                                    <p>
                                        A transcript will not be released if you have financial or other obligations to the University of Minnesota, Learning Abroad Center or on-site program staff.
                                    </p>
                                    <br/>
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

export default UofM_Funding;