import React, { Component } from 'react';
import { Animation, MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse, MDBMask,
    MDBRow, MDBCol, MDBBtn, MDBView, MDBContainer, MDBFormInline, Footer, MDBBtnGroup, MDBIcon} from "mdbreact";
import { Jumbotron, Grid, Row, Col, Image } from 'react-bootstrap';
import './Policies.css';

import HomeBanner from './Ireland3.jpg';
import Navbar from '../NavBarUofM_Home';
import UofMFooter from '../UofMFooter';

import {BrowserView, MobileView, isBrowser, isMobile} from "react-device-detect";
import { Helmet } from 'react-helmet';

class UofM_Polices extends React.Component {
    render() {
        return (
            <div id="UofM_Policies">
                <Helmet>
                    <title>Policies || Non UofM Students || Learning Abroad Center</title>
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
                                    <p>
                                        Policies of the University of Minnesota and the Learning Abroad Center exist primarily for the protection and safety of Learning Abroad Center study abroad participants. The Learning Abroad Center expects all participants to read, understand, and adhere to the University of Minnesota and Learning Abroad Center policies, guidelines, and contractual documents.
                                    </p>
                                    <br/>
                                    <p>
                                        For general questions and further information, contact <a className="text_underline"  href="mailto:marthaj@umn.edu">Martha Johnson</a> at 612.625.8333.
                                    </p>
                                    <br/>

                                    <h3 className="colorChange">Academic Policies</h3>
                                    <br/>
                                    <p>
                                        Use the <a className="text_underline" >Academic Policy Search</a> to learn about Learning Abroad Center academic policies.
                                    </p>
                                    <br/>

                                    <h3 className="colorChange">Eligibility Policies</h3>
                                    <br/>
                                    <p>
                                        Learn more about general <a className="text_underline" >eligibility policies</a> related to probation status, student status, class standing, and program-specific eligibility.</p>
                                    <br/>

                                    <h3 className="colorChange">Finance & Cancellation Policies</h3>
                                    <br/>

                                    <h4 className="colorChange">What It Means</h4>
                                    <br/>
                                    <p>
                                        In these policies, learn about appointing a Power of Attorney and the process necessary for cancellation of a program.
                                    </p>
                                    <br/>

                                    <h4 className="colorChange">Who Should Read It</h4>
                                    <br/>
                                    <p>
                                        All students who consider applying for a program
                                    </p>
                                    <br/>

                                    <h4 className="colorChange">What Next</h4>
                                    <br/>
                                    <p>
                                        Read and understand the <a className="text_underline" >Finance & Cancellation Policies</a>
                                    </p>
                                    <br/>

                                    <h4 className="colorChange">Contact</h4>
                                    <br/>
                                    <p>
                                        For questions and further information regarding Finance and Cancellation Policies, contact <a className="text_underline"  href="mailto:peter329@umn.edu">Missy Peterson</a> at 612.624.3950.
                                    </p>
                                    <br/>

                                    <h3 className="colorChange">Health & Safety Policies</h3>
                                    <br/>

                                    <h4 className="colorChange">What It Means</h4>
                                    <br/>
                                    <p>
                                        The well-being of students studying abroad is of utmost importance. Learn what the Learning Abroad Center is doing and what you can do to maintain good health and stay safe abroad.
                                    </p>
                                    <br/>

                                    <h4 className="colorChange">Who Should Read It</h4>
                                    <br/>
                                    <p>
                                        All students who consider applying for a program
                                    </p>
                                    <br/>

                                    <h4 className="colorChange">What Next</h4>
                                    <br/>
                                    <p>
                                        Read and understand the <a className="text_underline" >Health & Safety Policies</a>
                                    </p>
                                    <br/>

                                    <h4 className="colorChange">Contact</h4>
                                    <br/>
                                    <p>
                                        For questions and further information regarding Health and Safety Policies, contact <a className="text_underline"  href="malito:dauer001@umn.edu">Kevin Dostal Dauer </a>at 612.625.5107.
                                    </p>
                                    <br/>

                                    <h3 className="colorChange">Student Rights & Responsibilitiess</h3>
                                    <br/>

                                    <h4 className="colorChange">What It Means</h4>
                                    <br/>
                                    <p>
                                        Along with the opportunities provided by the Learning Abroad Center come certain responsibilities. Find out what is entitled to and expected of those who take advantage of these opportunities.
                                    </p>
                                    <br/>

                                    <h4 className="colorChange">Who Should Read It</h4>
                                    <br/>
                                    <p>
                                        All students
                                    </p>
                                    <br/>

                                    <h4 className="colorChange">What Next</h4>
                                    <br/>
                                    <p>
                                        Read and understand <a className="text_underline" >Student Rights & Responsibilities</a>
                                    </p>
                                    <br/>

                                    <h4 className="colorChange">Contact</h4>
                                    <br/>
                                    <p>
                                        For questions and further information regarding Health and Safety Policies, contact <a className="text_underline"  href="malito:dauer001@umn.edu">Kevin Dostal Dauer </a>at 612.625.5107.
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
                                    <p>
                                        Policies of the University of Minnesota and the Learning Abroad Center exist primarily for the protection and safety of Learning Abroad Center study abroad participants. The Learning Abroad Center expects all participants to read, understand, and adhere to the University of Minnesota and Learning Abroad Center policies, guidelines, and contractual documents.
                                    </p>
                                    <br/>
                                    <p>
                                        For general questions and further information, contact <a className="text_underline"  href="mailto:marthaj@umn.edu">Martha Johnson</a> at 612.625.8333.
                                    </p>
                                    <br/>

                                    <h3 className="colorChange">Academic Policies</h3>
                                    <br/>
                                    <p>
                                        Use the <a className="text_underline" >Academic Policy Search</a> to learn about Learning Abroad Center academic policies.
                                    </p>
                                    <br/>

                                    <h3 className="colorChange">Eligibility Policies</h3>
                                    <br/>
                                    <p>
                                        Learn more about general <a className="text_underline" >eligibility policies</a> related to probation status, student status, class standing, and program-specific eligibility.</p>
                                    <br/>

                                    <h3 className="colorChange">Finance & Cancellation Policies</h3>
                                    <br/>

                                    <h4 className="colorChange">What It Means</h4>
                                    <br/>
                                    <p>
                                        In these policies, learn about appointing a Power of Attorney and the process necessary for cancellation of a program.
                                    </p>
                                    <br/>

                                    <h4 className="colorChange">Who Should Read It</h4>
                                    <br/>
                                    <p>
                                        All students who consider applying for a program
                                    </p>
                                    <br/>

                                    <h4 className="colorChange">What Next</h4>
                                    <br/>
                                    <p>
                                        Read and understand the <a className="text_underline" >Finance & Cancellation Policies</a>
                                    </p>
                                    <br/>

                                    <h4 className="colorChange">Contact</h4>
                                    <br/>
                                    <p>
                                        For questions and further information regarding Finance and Cancellation Policies, contact <a className="text_underline"  href="mailto:peter329@umn.edu">Missy Peterson</a> at 612.624.3950.
                                    </p>
                                    <br/>

                                    <h3 className="colorChange">Health & Safety Policies</h3>
                                    <br/>

                                    <h4 className="colorChange">What It Means</h4>
                                    <br/>
                                    <p>
                                        The well-being of students studying abroad is of utmost importance. Learn what the Learning Abroad Center is doing and what you can do to maintain good health and stay safe abroad.
                                    </p>
                                    <br/>

                                    <h4 className="colorChange">Who Should Read It</h4>
                                    <br/>
                                    <p>
                                        All students who consider applying for a program
                                    </p>
                                    <br/>

                                    <h4 className="colorChange">What Next</h4>
                                    <br/>
                                    <p>
                                        Read and understand the <a className="text_underline" >Health & Safety Policies</a>
                                    </p>
                                    <br/>

                                    <h4 className="colorChange">Contact</h4>
                                    <br/>
                                    <p>
                                        For questions and further information regarding Health and Safety Policies, contact <a className="text_underline"  href="malito:dauer001@umn.edu">Kevin Dostal Dauer </a>at 612.625.5107.
                                    </p>
                                    <br/>

                                    <h3 className="colorChange">Student Rights & Responsibilitiess</h3>
                                    <br/>

                                    <h4 className="colorChange">What It Means</h4>
                                    <br/>
                                    <p>
                                        Along with the opportunities provided by the Learning Abroad Center come certain responsibilities. Find out what is entitled to and expected of those who take advantage of these opportunities.
                                    </p>
                                    <br/>

                                    <h4 className="colorChange">Who Should Read It</h4>
                                    <br/>
                                    <p>
                                        All students
                                    </p>
                                    <br/>

                                    <h4 className="colorChange">What Next</h4>
                                    <br/>
                                    <p>
                                        Read and understand <a className="text_underline" >Student Rights & Responsibilities</a>
                                    </p>
                                    <br/>

                                    <h4 className="colorChange">Contact</h4>
                                    <br/>
                                    <p>
                                        For questions and further information regarding Health and Safety Policies, contact <a className="text_underline" href="malito:dauer001@umn.edu">Kevin Dostal Dauer </a>at 612.625.5107.
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

export default UofM_Polices;