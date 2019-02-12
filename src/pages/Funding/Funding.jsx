import React, { Component } from 'react';
import { Animation, MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse, MDBMask,
    MDBRow, MDBCol, MDBBtn, MDBView, MDBContainer, MDBFormInline, Footer, MDBBtnGroup, MDBIcon} from "mdbreact";
import { Jumbotron, Grid, Row, Col, Image } from 'react-bootstrap';
import './Funding.css';

import HomeBanner from './Ireland3.jpg';
import Navbar from '../NavBarUofM_Home';
import UofMFooter from '../UofMFooter';

import {BrowserView, MobileView, isBrowser, isMobile} from "react-device-detect";
import { Helmet } from 'react-helmet';

class UofM_Funding extends React.Component {
    render() {
        return (
            <div id="UofM_Funding">
                <Helmet>
                    <title>Funding || Non UofM Students || Learning Abroad Center</title>
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
                                        While on study abroad through the University of Minnesota, you are temporarily admitted as a non-degree seeking student.
                                    </p>
                                    <br/>

                                    <h3 className="colorChange">Financial Aid Eligibility</h3>
                                    <br/>
                                    <p className="text_bold">
                                        Non-University of Minnesota students admitted for study abroad are not eligible for any financial aid from the University of Minnesota.
                                    </p>
                                    <br/>
                                    <p>
                                        If you are a degree-seeking student at another institution, check with your home school's study abroad and financial aid office for details on if you are eligible for financial aid from your home school for your University of Minnesota Learning Abroad Center study abroad program.
                                    </p>
                                    <br/>
                                    <ul>
                                        <li>
                                            <p>
                                                Complete necessary steps to maintain your degree-seeking status and get your UofM study abroad program approved.
                                            </p>
                                        </li>
                                        <li>
                                            <p>
                                                Complete a consortium agreement if required, which you should obtain from your home school and send to the Learning Abroad Center for a signature.
                                            </p>
                                        </li>
                                    </ul>
                                    <br/>

                                    <h3 className="colorChange">Financial Aid Limits</h3>
                                    <br/>
                                    <br/>

                                    <h4 className="colorChange">Semester/Year Financial Aid Considerations</h4>
                                    <br/>
                                    <ul>
                                        <li>
                                            <p>
                                                Additional financial aid will likely be awarded in the form of loans
                                            </p>
                                        </li>
                                        <li>
                                            <p>
                                                Financial aid award may not cover entire cost of study abroad experience
                                            </p>
                                        </li>
                                    </ul>
                                    <br/>
                                    <h4 className="colorChange">May/Summer Financial Aid Considerations</h4>
                                    <br/>
                                    <ul>
                                        <li>
                                            <p>
                                                Minimum of six credits required to access financial aid
                                            </p>
                                        </li>
                                        <li>
                                            <p>
                                                Only available to students who have not already used their financial aid during fall and/or spring semester
                                            </p>
                                        </li>
                                        <li>
                                            <p>
                                                Terms of summer financial aid may be less favorable (e.g. higher interest rates, required co-signers, loans awarded instead of grants)
                                            </p>
                                        </li>
                                        <li>
                                            <p>
                                                Financial aid award may not cover entire cost of study abroad experience
                                            </p>
                                        </li>
                                    </ul>
                                    <br/>
                                    <h3 className="colorChange">Other Sources of Funding</h3>
                                    <br/>
                                    <h4 className="colorChange">Private Loans</h4>
                                    <br/>
                                    <ul>
                                        <li>
                                            <p>
                                                The University of Minnesota <a className="text_underline">One Stop—Loans</a> page has information about private loans that you may be eligible for as a non-degree seeking student.
                                            </p>
                                        </li>
                                        <li>
                                            <p>
                                                You can also seek information about private loans through your home school's study abroad office or financial aid office.
                                            </p>
                                        </li>
                                    </ul>
                                    <br/>
                                    <h4 className="colorChange">Scholarships</h4>
                                    <br/>
                                    <ul>
                                        <li>
                                            <p>
                                                Apply for a <a className="text_underline">Scholarship for Non UofM Students</a>.
                                            </p>
                                        </li>
                                        <li>
                                            <p>
                                                Check with your home university to find out if you are eligible for their scholarships.
                                            </p>
                                        </li>
                                        <li>
                                            <p>
                                                Use the <a className="text_underline">University of Minnesota Study Abroad Scholarship Search</a>.
                                            </p>
                                        </li>
                                    </ul>
                                    <br/>
                                    <h4 className="colorChange">Thing to Consider </h4>
                                    <br/>
                                    <ul>
                                        <li>
                                            <p>
                                                <a className="text_underline">Strategies to Compare Costs</a>
                                            </p>
                                        </li>

                                    </ul>
                                    <br/>
                                    <h3 className="colorChange">How Canceling may Effect Your Financial Aid</h3>
                                    <br/>
                                    <ul>
                                        <li>
                                            <p>
                                                Read the <a className="text_underline">Cancellation Policy</a> prior to making any decisions to withdraw from your program.
                                            </p>
                                        </li>
                                        <li>
                                            <p>
                                                Your financial aid will not cover cancellation fees or non-recoverable costs.
                                            </p>
                                        </li>
                                        <li>
                                            <p>
                                                A "W" on your transcript may affect future financial aid eligibility.
                                            </p>

                                        </li>
                                    </ul>

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
                                        While on study abroad through the University of Minnesota, you are temporarily admitted as a non-degree seeking student.
                                    </p>
                                    <br/>

                                    <h3 className="colorChange">Financial Aid Eligibility</h3>
                                    <br/>
                                    <p className="text_bold">
                                        Non-University of Minnesota students admitted for study abroad are not eligible for any financial aid from the University of Minnesota.
                                    </p>
                                    <br/>
                                    <p>
                                        If you are a degree-seeking student at another institution, check with your home school's study abroad and financial aid office for details on if you are eligible for financial aid from your home school for your University of Minnesota Learning Abroad Center study abroad program.
                                    </p>
                                    <br/>
                                    <ul>
                                        <li>
                                            <p>
                                                Complete necessary steps to maintain your degree-seeking status and get your UofM study abroad program approved.
                                            </p>
                                        </li>
                                        <li>
                                            <p>
                                                Complete a consortium agreement if required, which you should obtain from your home school and send to the Learning Abroad Center for a signature.
                                            </p>
                                        </li>
                                    </ul>
                                    <br/>

                                    <h3 className="colorChange">Financial Aid Limits</h3>
                                    <br/>
                                    <br/>

                                    <h4 className="colorChange">Semester/Year Financial Aid Considerations</h4>
                                    <br/>
                                    <ul>
                                        <li>
                                            <p>
                                                Additional financial aid will likely be awarded in the form of loans
                                            </p>
                                        </li>
                                        <li>
                                            <p>
                                                Financial aid award may not cover entire cost of study abroad experience
                                            </p>
                                        </li>
                                    </ul>
                                    <br/>
                                    <h4 className="colorChange">May/Summer Financial Aid Considerations</h4>
                                    <br/>
                                    <ul>
                                        <li>
                                            <p>
                                                Minimum of six credits required to access financial aid
                                            </p>
                                        </li>
                                        <li>
                                            <p>
                                                Only available to students who have not already used their financial aid during fall and/or spring semester
                                            </p>
                                        </li>
                                        <li>
                                            <p>
                                                Terms of summer financial aid may be less favorable (e.g. higher interest rates, required co-signers, loans awarded instead of grants)
                                            </p>
                                        </li>
                                        <li>
                                            <p>
                                                Financial aid award may not cover entire cost of study abroad experience
                                            </p>
                                        </li>
                                    </ul>
                                    <br/>
                                    <h3 className="colorChange">Other Sources of Funding</h3>
                                    <br/>
                                    <h4 className="colorChange">Private Loans</h4>
                                    <br/>
                                    <ul>
                                        <li>
                                            <p>
                                                The University of Minnesota <a className="text_underline">One Stop—Loans</a> page has information about private loans that you may be eligible for as a non-degree seeking student.
                                            </p>
                                        </li>
                                        <li>
                                            <p>
                                                You can also seek information about private loans through your home school's study abroad office or financial aid office.
                                            </p>
                                        </li>
                                    </ul>
                                    <br/>
                                    <h4 className="colorChange">Scholarships</h4>
                                    <br/>
                                    <ul>
                                        <li>
                                            <p>
                                                Apply for a <a className="text_underline">Scholarship for Non UofM Students</a>.
                                            </p>
                                        </li>
                                        <li>
                                            <p>
                                                Check with your home university to find out if you are eligible for their scholarships.
                                            </p>
                                        </li>
                                        <li>
                                            <p>
                                                Use the <a className="text_underline">University of Minnesota Study Abroad Scholarship Search</a>.
                                            </p>
                                        </li>
                                    </ul>
                                    <br/>
                                    <h4 className="colorChange">Thing to Consider </h4>
                                    <br/>
                                    <ul>
                                        <li>
                                            <p>
                                                <a className="text_underline">Strategies to Compare Costs</a>
                                            </p>
                                        </li>

                                    </ul>
                                    <br/>
                                    <h3 className="colorChange">How Canceling may Effect Your Financial Aid</h3>
                                    <br/>
                                    <ul>
                                        <li>
                                            <p>
                                                Read the <a className="text_underline">Cancellation Policy</a> prior to making any decisions to withdraw from your program.
                                            </p>
                                        </li>
                                        <li>
                                            <p>
                                                Your financial aid will not cover cancellation fees or non-recoverable costs.
                                            </p>
                                        </li>
                                        <li>
                                            <p>
                                                A "W" on your transcript may affect future financial aid eligibility.
                                            </p>

                                        </li>
                                    </ul>

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