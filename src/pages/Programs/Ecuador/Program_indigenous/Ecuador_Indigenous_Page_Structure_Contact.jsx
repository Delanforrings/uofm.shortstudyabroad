import React, { Component } from 'react';
import { Animation, MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse, MDBMask,
    MDBRow, MDBCol, MDBBtn, MDBView, MDBContainer, MDBFormInline, Footer, MDBBtnGroup, MDBIcon} from "mdbreact";
import { Jumbotron, Grid, Row, Col, Image, Button } from 'react-bootstrap';
import EcuadorBanner from './Ecuador4.jpg';
import '../Ecuador_Page_Structure.css';
import Navbar from '../NavBarUofM_US';
import UofMFooter from '../../../UofMFooter';
import { Helmet } from 'react-helmet';

import {BrowserView, MobileView} from "react-device-detect";
import Ecuador_Indigenous_Contact from "./Ecuador_Indigenous_Contact";

class Ecuador_Indigenous_Page_Structure_Contact extends React.Component {
    render () {
        return (
            <div id="Ecuador_Structure">
                <Helmet>
                    <title>Contact || Study Abroad in Quito, Ecuador || Learning Abroad Center</title>
                </Helmet>
                <MDBMask className="colorChange">
                    <Navbar/>
                </MDBMask>
                <BrowserView>
                    <MDBContainer style={{marginTop: "10vh"}}>
                        <MDBRow>
                            <MDBCol size="8" >
                                <Animation type="fadeIn">
                                    <Image src={EcuadorBanner} className="about-profile-pic sa_gradient"/>
                                </Animation>
                            </MDBCol>

                            <MDBCol size="2">
                                <div className="btn_adjust">
                                    <Animation type="fadeIn">
                                        <MDBBtnGroup size="sm" vertical>
                                            <MDBBtn color="amber" className="textChange" href="mailto:uofm@shortstudyabroad.com">
                                                Enquire
                                            </MDBBtn>
                                            <MDBBtn color="red" className="textChange" href="#!">
                                                Apply now
                                            </MDBBtn>


                                        </MDBBtnGroup>
                                    </Animation>
                                </div>
                            </MDBCol>

                        </MDBRow>


                        <div className="homeText">
                            <MDBRow around>
                                <MDBCol size="3">
                                    <div className="SideNavbar" style={{ display: "flex" }}>
                                        <ul style={{ listStyleType: "none", padding: 0 }}>
                                            <li>
                                                <a href="/AU_Programs/Ecuador_quito_indigenous" className="SidebarText">Snapshot</a>
                                            </li>
                                            <li>
                                                <a href="/AU_Programs/Ecuador_quito_indigenous/Media" className="SidebarText">Media</a>
                                            </li>
                                            <li>
                                                <a href="/AU_Programs/Ecuador_quito_indigenous/About" className="SidebarText">About</a>
                                            </li>
                                            <li>
                                                <a href="/AU_Programs/Ecuador_quito_indigenous/Academics" className="SidebarText">Academics</a>
                                            </li>
                                            <li>
                                                <a href="/AU_Programs/Ecuador_quito_indigenous/Dates" className="SidebarText">Dates</a>
                                            </li>
                                            <li>
                                                <a href="/AU_Programs/Ecuador_quito_indigenous/Fees" className="SidebarText">Fees</a>
                                            </li>
                                            <li>
                                                <a href="/AU_Programs/Ecuador_quito_indigenous/Apply" className="SidebarText">Apply</a>
                                            </li>
                                            <li>
                                                <a href="/AU_Programs/Ecuador_quito_indigenous/Contact" className="SidebarText">Contact</a>
                                            </li>
                                            <li>
                                                <a href="/AU_Programs/Ecuador_quito_indigenous/Contact_Alum" className="SidebarText">Contact Program Alum</a>
                                            </li>
                                            <li>
                                                <a href="#!" className="SideText"><MDBIcon icon="book" /> Previous Program Handbook</a>
                                            </li>
                                            <li>
                                                <a href="#!" className="SideText"><MDBIcon icon="film" /> Previous Program Orientation</a>
                                            </li>
                                        </ul>
                                    </div>
                                </MDBCol>
                                <MDBCol size="6">
                                    <div className="homeText">
                                        <Animation type="fadeIn">
                                            <Ecuador_Indigenous_Contact/>
                                        </Animation>
                                    </div>
                                </MDBCol>
                            </MDBRow>
                        </div>

                    </MDBContainer>
                </BrowserView>

                <br/>
                <UofMFooter/>
            </div>

        )
    }
}
export default Ecuador_Indigenous_Page_Structure_Contact;