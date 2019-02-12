import React, { Component } from 'react';
import { Animation, MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse, MDBMask,
    MDBRow, MDBCol, MDBBtn, MDBView, MDBContainer, MDBFormInline, Footer, MDBBtnGroup, MDBIcon} from "mdbreact";
import { Jumbotron, Grid, Row, Col, Image } from 'react-bootstrap';
import './UofM_Contact.css';
import AboutBanner from './Denmark3.jpg';
import NavBar from '../NavBarUofM_Home';
import UofMFooter from '../UofMFooter';

import {BrowserView, MobileView} from "react-device-detect";
import { Helmet } from 'react-helmet';

class UofM_Contact extends React.Component {
    render (){
        return(
            <div id="UofMContact">
                <Helmet>
                    <title>Contact UofM Learning Abroad Center</title>
                </Helmet>
                <NavBar/>
                <BrowserView>
                    <MDBContainer style={{marginTop: "10vh"}}>
                        <MDBRow>
                            <MDBCol size="8">
                                <Animation type="fadeIn">
                                    <Image src={AboutBanner} className="about-profile-pic program_gradient"/>
                                </Animation>
                            </MDBCol>
                        </MDBRow>
                        <MDBRow>
                            <MDBCol size="8" className="offset-md-2">
                                <div className="homeText">
                                    <Animation type="fadeIn">
                                        <h1 className="colorChange">After-Hours</h1>
                                        <p>
                                            In case of emergency, contact the Learning Abroad Center at 612.626.9000 at any time. After business hours, a message at that number provides instructions for contacting our staff.
                                        </p>
                                        <br/>
                                        <p>
                                            We are in contact with our study abroad sites around the world. The Learning Abroad Center has someone on call to deal with emergencies and can contact on-site staff if needed.
                                        </p>
                                        <br/>
                                        <h1 className="colorChange">Address, Phone, Fax, & Email</h1>
                                        <br/>
                                        <h3>University of Minnesota Contact Details</h3>
                                        <div >
                                            <p className="fontChange">
                                                Learning Abroad Center <a href="http://onestop.umn.edu/Maps/HellerHall/index.html">(map)</a>
                                            </p>
                                            <p className="fontChange">
                                                University of Minnesota
                                            </p>
                                            <p className="fontChange">
                                                230 Heller Hall
                                            </p>
                                            <p className="fontChange">
                                                271 19th Ave South
                                            </p>
                                            <p className="fontChange">
                                                Minneapolis, MN 55455-0430
                                            </p>
                                            <br/>
                                            <p className="fontChange">
                                                Phone: 612.626.9000
                                            </p>
                                            <p className="fontChange">
                                                Toll-Free: 888.700.UOFM (8636)
                                            </p>
                                            <p className="fontChange">
                                                Fax: 612.626.8009
                                            </p>
                                            <br/>
                                            <p className="fontChange">
                                                Email: <a href="mailto:UMabroad@umn.edu">UMabroad@umn.edu</a>
                                            </p>
                                        </div>
                                        <br/>
                                        <h3>Australian Office Contact Details</h3>
                                        <div >
                                            <p className="fontChange">
                                                55 Flemington Road, North Melbourne, Victoria 3051, Australia
                                            </p>
                                            <p className="fontChange">
                                                Phone:
                                            </p>
                                            <p className="fontChange">
                                                Email:
                                            </p>
                                            <br/>
                                        </div>
                                        <div className="btn_adjust">
                                            <MDBBtnGroup size="md">
                                                <MDBBtn color="amber" className="textChange" href="mailto:someone@someweb.com">
                                                    Enquire
                                                </MDBBtn>
                                                <MDBBtn color="red" className="textChange" href="http://web-app.gps.umn.edu/externalApplicant/">
                                                    Apply now
                                                </MDBBtn>

                                            </MDBBtnGroup>
                                        </div>
                                    </Animation>
                                </div>
                            </MDBCol>


                        </MDBRow>


                    </MDBContainer>
                </BrowserView>
                <MobileView>
                    <MDBContainer style={{marginTop: "10vh"}}>
                        <MDBRow>
                            <MDBCol size="10">
                                <Animation type="fadeIn">
                                    <Image src={AboutBanner} className="about-profile-pic program_gradient"/>
                                </Animation>
                            </MDBCol>
                        </MDBRow>
                        <MDBRow>
                            <MDBCol size="10" className="offset-md-2">
                                <div className="homeText">
                                    <Animation type="fadeIn">
                                        <h1 className="colorChange">After-Hours</h1>
                                        <p>
                                            In case of emergency, contact the Learning Abroad Center at 612.626.9000 at any time. After business hours, a message at that number provides instructions for contacting our staff.
                                        </p>
                                        <br/>
                                        <p>
                                            We are in contact with our study abroad sites around the world. The Learning Abroad Center has someone on call to deal with emergencies and can contact on-site staff if needed.
                                        </p>
                                        <br/>
                                        <h1 className="colorChange">Address, Phone, Fax, & Email</h1>
                                        <br/>
                                        <h3>University of Minnesota Contact Details</h3>
                                        <div >
                                            <p className="fontChange">
                                                Learning Abroad Center <a href="http://onestop.umn.edu/Maps/HellerHall/index.html">(map)</a>
                                            </p>
                                            <p className="fontChange">
                                                University of Minnesota
                                            </p>
                                            <p className="fontChange">
                                                230 Heller Hall
                                            </p>
                                            <p className="fontChange">
                                                271 19th Ave South
                                            </p>
                                            <p className="fontChange">
                                                Minneapolis, MN 55455-0430
                                            </p>
                                            <br/>
                                            <p className="fontChange">
                                                Phone: 612.626.9000
                                            </p>
                                            <p className="fontChange">
                                                Toll-Free: 888.700.UOFM (8636)
                                            </p>
                                            <p className="fontChange">
                                                Fax: 612.626.8009
                                            </p>
                                            <br/>
                                            <p className="fontChange">
                                                Email: <a href="mailto:UMabroad@umn.edu">UMabroad@umn.edu</a>
                                            </p>
                                        </div>
                                        <br/>
                                        <h3>Australian Office Contact Details</h3>
                                        <div >
                                            <p className="fontChange">
                                                55 Flemington Road, North Melbourne, Victoria 3051, Australia
                                            </p>
                                            <p className="fontChange">
                                                Phone:
                                            </p>
                                            <p className="fontChange">
                                                Email:
                                            </p>
                                            <br/>
                                        </div>
                                        <div className="btn_adjust">
                                            <MDBBtnGroup size="sm">
                                                <MDBBtn color="amber" className="textChange" href="mailto:someone@someweb.com">
                                                    Enquire
                                                </MDBBtn>
                                                <MDBBtn color="red" className="textChange" href="http://web-app.gps.umn.edu/externalApplicant/">
                                                    Apply now
                                                </MDBBtn>

                                            </MDBBtnGroup>
                                        </div>
                                    </Animation>
                                </div>
                            </MDBCol>


                        </MDBRow>


                    </MDBContainer>
                </MobileView>
                <UofMFooter/>
            </div>
        )
    }
}

export default UofM_Contact;