import React, { Component } from 'react';
import { Animation, MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse, MDBMask,
    MDBRow, MDBCol, MDBBtn, MDBView, MDBContainer, MDBFormInline, Footer, MDBBtnGroup, MDBIcon} from "mdbreact";
import { Jumbotron, Grid, Row, Col, Image } from 'react-bootstrap';
import './UofM_Home.css';

import HomeBanner from './Ireland3.jpg';
import Navbar from '../NavBarUofM_Home';
import UofMFooter from '../UofMFooter';

import {BrowserView, MobileView, isBrowser, isMobile} from "react-device-detect";
import { Helmet } from 'react-helmet';

class UofM_Home extends React.Component {
    render() {
        return (
            <div id="UofMHome">
                <Helmet>
                    <title>UofM Home: Welcome. Bienvenue. Haykuykuy. Karibu.</title>
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
                                        Welcome. Bienvenue. Haykuykuy. Karibu. We are thrilled you are considering one of our programs. Our study abroad programs attract students from large public universities and small private colleges all over the US.  And now we are opening them up to Australian universities, as well as creating some customised short programs timed and designed especially for Australian university students.
                                    </p>
                                    <br/>
                                    <p>
                                        Students from many different academic disciplines go on our programs. No matter if you're interested in agronomy, communications, economics, languages, psychology, public health or social work, we have a program for you.
                                    </p>
                                    <br/>
                                    <p>
                                        Our current customised offerings include Mental Health, Biodiversity, Indigenous Health and Healing, and Sports Science.
                                    </p>
                                    <br/>
                                    <h1 className="colorChange">Getting Started !</h1>

                                    <h3 className="colorChange">Steps to Partcipate on a Learning Abroad Center Program</h3>
                                    <br/>

                                    <ol className="colorChange ">
                                        <li >
                                            <h4 className="colorChange">Explore Programs</h4>
                                            <p className="textChange_li_p">
                                                Programs and opportunities offered by the Learning Abroad Center include a wide variety of enrollment options and types of programs. These programs are open to students from other institutions.
                                            </p>

                                        </li>
                                        <li >
                                            <h4 className="colorChange">Look at the Catalog</h4>
                                            <p className="textChange_li_p">
                                                Check out the <a className="text_underline" href="https://umabroad.umn.edu/assets/files/PDFs/catalogs/OEC16_Student_217_web.pdf">Open Enrollment Catalog</a> (PDF).
                                            </p>

                                        </li>
                                        <li>
                                            <h4 className="colorChange">Talk to an Adviser</h4>
                                            <p className="textChange_li_p">
                                                Visit your home institution's study abroad office as you plan your experience abroad
                                            </p>

                                        </li>
                                        <li>
                                            <h4 className="colorChange">Apply Early</h4>
                                            <p className="textChange_li_p">/*insert link to customised UofM application system*/</p>

                                        </li>
                                        <li>
                                            <h4 className="colorChange">Finance Your Journey</h4>

                                        </li>
                                    </ol>
                                    <br/>
                                    <h1 className="colorChange">Advantages of University of Minnesota Programs</h1>
                                    <p>
                                        Each year, students from other colleges and universities earn University of Minnesota credit by studying abroad. The Learning Abroad Center offers students from Australian universities a full range of advising and support services, focusing on such issues as program selection, academic planning, registration, credit, cultural adjustment, on-site support, and re-entry.
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
                                    <p>
                                        Welcome. Bienvenue. Haykuykuy. Karibu. We are thrilled you are considering one of our programs. Our study abroad programs attract students from large public universities and small private colleges all over the US.  And now we are opening them up to Australian universities, as well as creating some customised short programs timed and designed especially for Australian university students.
                                    </p>
                                    <br/>
                                    <p>
                                        Students from many different academic disciplines go on our programs. No matter if you're interested in agronomy, communications, economics, languages, psychology, public health or social work, we have a program for you.
                                    </p>
                                    <br/>
                                    <p>
                                        Our current customised offerings include Mental Health, Biodiversity, Indigenous Health and Healing, and Sports Science.
                                    </p>
                                    <br/>
                                    <h1 className="colorChange">Getting Started !</h1>

                                    <h3 className="colorChange">Steps to Partcipate on a Learning Abroad Center Program</h3>
                                    <br/>

                                    <ol className="colorChange textChange">
                                        <li >
                                            <h4 className="colorChange">Explore Programs</h4>
                                            <p className="textChange_li_p">
                                                Programs and opportunities offered by the Learning Abroad Center include a wide variety of enrollment options and types of programs. These programs are open to students from other institutions.
                                            </p>

                                        </li>
                                        <li >
                                            <h4 className="colorChange">Look at the Catalog</h4>
                                            <p className="textChange_li_p">
                                                Check out the <a className="text_underline" href="https://umabroad.umn.edu/assets/files/PDFs/catalogs/OEC16_Student_217_web.pdf">Open Enrollment Catalog</a> (PDF).
                                            </p>

                                        </li>
                                        <li>
                                            <h4 className="colorChange">Talk to an Adviser</h4>
                                            <p className="textChange_li_p">
                                                Visit your home institution's study abroad office as you plan your experience abroad
                                            </p>

                                        </li>
                                        <li>
                                            <h4 className="colorChange">Apply Early</h4>
                                            <p className="textChange_li_p">/*insert link to customised UofM application system*/</p>

                                        </li>
                                        <li>
                                            <h4 className="colorChange">Finance Your Journey</h4>

                                        </li>
                                    </ol>
                                    <br/>
                                    <h1 className="colorChange">Advantages of University of Minnesota Programs</h1>
                                    <p>
                                        Each year, students from other colleges and universities earn University of Minnesota credit by studying abroad. The Learning Abroad Center offers students from Australian universities a full range of advising and support services, focusing on such issues as program selection, academic planning, registration, credit, cultural adjustment, on-site support, and re-entry.
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

export default UofM_Home;