import React, { Component } from 'react';
import { Animation, MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse, MDBMask,
    MDBRow, MDBCol, MDBBtn, MDBView, MDBContainer, MDBFormInline, Footer, MDBBtnGroup, MDBIcon} from "mdbreact";
import { Jumbotron, Grid, Row, Col, Image, Button } from 'react-bootstrap';
import FranceBanner from './Sports_banner.jpg';
import UofMProgramFrance_Sports_Media from './France_Sports_Media';
import '../France_Page_Structure.css';
import Navbar from '../../NavBarUofM_Europe';
import UofMFooter from '../../../UofMFooter';
import { Helmet } from 'react-helmet';
import {BrowserView, MobileView} from "react-device-detect";


class France_Page_Structure_Media extends React.Component {
    render () {
        return (
            <div id="France_Structure">
                <Helmet>
                    <title>Media || Study Abroad in Montpellier, France || Learning Abroad Center</title>
                </Helmet>
                <MDBMask className="colorChange">
                    <Navbar/>
                </MDBMask>
                <BrowserView>
                    <MDBContainer style={{marginTop: "10vh"}}>
                        <MDBRow>
                            <MDBCol size="8">
                                <Animation type="fadeIn">
                                    <Image src={FranceBanner} className="about-profile-pic e_gradient"/>
                                </Animation>
                            </MDBCol>

                            <MDBCol size="2">
                                <div className="btn_adjust">
                                    <Animation type="fadeIn">
                                        <MDBBtnGroup size="sm" vertical>
                                            <MDBBtn color="amber" className="textChange" href="mailto:uofm@shortstudyabroad.com">
                                                Enquire
                                            </MDBBtn>
                                            <MDBBtn color="red" className="textChange" href="http://web-app.gps.umn.edu/externalApplicant/">
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
                                                <a href="/AU_Programs/France_montpellier-sports" className="SidebarText">Snapshot</a>
                                            </li>
                                            <li>
                                                <a href="/AU_Programs/France_montpellier-sports/Media" className="SidebarText">Media</a>
                                            </li>
                                            <li>
                                                <a href="/AU_Programs/France_montpellier-sports/About" className="SidebarText">About</a>
                                            </li>
                                            <li>
                                                <a href="/AU_Programs/France_montpellier-sports/Academics" className="SidebarText">Academics</a>
                                            </li>
                                            <li>
                                                <a href="/AU_Programs/France_montpellier-sports/Dates" className="SidebarText">Dates</a>
                                            </li>
                                            <li>
                                                <a href="/AU_Programs/France_montpellier-sports/Fees" className="SidebarText">Fees</a>
                                            </li>
                                            <li>
                                                <a href="/AU_Programs/France_montpellier-sports/Apply" className="SidebarText">Apply</a>
                                            </li>
                                            <li>
                                                <a href="/AU_Programs/France_montpellier-sports/Contact" className="SidebarText">Contact</a>
                                            </li>
                                            <li>
                                                <a href="/AU_Programs/France_montpellier-sports/Contact_Alum" className="SidebarText">Contact Program Alum</a>
                                            </li>
                                            <li>
                                                <a href="https://umabroad.umn.edu/assets/files/PDFs/handbooks/Europe/france-sports/SportsCultureFrance_Handbook.pdf" className="SideText"><MDBIcon icon="book" /> Previous Program Handbook</a>
                                            </li>
                                            <li>
                                                <a href="https://umabroad.umn.edu/assets/files/PDFs/onlineorientation/Sports-Culture-in-France.La-vie-sportive-Pre-departure-Orientation.pdf" className="SideText"><MDBIcon icon="film" /> Previous Program Orientation</a>
                                            </li>
                                        </ul>
                                    </div>
                                </MDBCol>
                                <MDBCol size="6">
                                    <div className="homeText">
                                        <Animation type="fadeIn">
                                            <UofMProgramFrance_Sports_Media/>
                                        </Animation>
                                    </div>
                                </MDBCol>
                            </MDBRow>
                        </div>

                    </MDBContainer>
                </BrowserView>

                <MobileView>
                    <MDBContainer style={{marginTop: "10vh"}}>
                        <MDBRow>
                            <MDBCol size="10">
                                <Animation type="fadeIn" delay="1s">
                                    <Image src={FranceBanner} className="about-profile-pic e_gradient"/>
                                </Animation>
                            </MDBCol>

                            <MDBCol size="6">
                                <div className="m_btn_adjust">
                                    <Animation type="fadeIn" delay="1s">
                                        <MDBBtnGroup size="sm">
                                            <MDBBtn color="amber" className="textChange" href="mailto:uofm@shortstudyabroad.com">
                                                Enquire
                                            </MDBBtn>
                                            <MDBBtn color="red" className="textChange" href="http://web-app.gps.umn.edu/externalApplicant/">
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
                                    <div className="m_SideNavbar" style={{ display: "flex" }}>
                                        <ul style={{ listStyleType: "none", padding: 0 }}>
                                            <li>
                                                <a href="/AU_Programs/France_montpellier-sports" className="SidebarText">Snapshot</a>
                                            </li>
                                            <li>
                                                <a href="/AU_Programs/France_montpellier-sports/Media" className="SidebarText">Media</a>
                                            </li>
                                            <li>
                                                <a href="/AU_Programs/France_montpellier-sports/About" className="SidebarText">About</a>
                                            </li>
                                            <li>
                                                <a href="/AU_Programs/France_montpellier-sports/Academics" className="SidebarText">Academics</a>
                                            </li>
                                            <li>
                                                <a href="/AU_Programs/France_montpellier-sports/Dates" className="SidebarText">Dates</a>
                                            </li>
                                            <li>
                                                <a href="/AU_Programs/France_montpellier-sports/Fees" className="SidebarText">Fees</a>
                                            </li>
                                            <li>
                                                <a href="/AU_Programs/France_montpellier-sports/Apply" className="SidebarText">Apply</a>
                                            </li>
                                            <li>
                                                <a href="/AU_Programs/France_montpellier-sports/Contact" className="SidebarText">Contact</a>
                                            </li>
                                            <li>
                                                <a href="/AU_Programs/France_montpellier-sports/Contact_Alum" className="SidebarText">Contact Program Alum</a>
                                            </li>
                                            <li>
                                                <a href="https://umabroad.umn.edu/assets/files/PDFs/handbooks/Europe/france-sports/SportsCultureFrance_Handbook.pdf" className="SideText"><MDBIcon icon="book" /> Previous Program Handbook</a>
                                            </li>
                                            <li>
                                                <a href="https://umabroad.umn.edu/assets/files/PDFs/onlineorientation/Sports-Culture-in-France.La-vie-sportive-Pre-departure-Orientation.pdf" className="SideText"><MDBIcon icon="film" /> Previous Program Orientation</a>
                                            </li>
                                        </ul>
                                    </div>
                                </MDBCol>
                                <MDBCol size="8">
                                    <div className="m_homeText">
                                        <Animation type="fadeIn">
                                            <UofMProgramFrance_Sports_Media/>
                                        </Animation>
                                    </div>
                                </MDBCol>
                            </MDBRow>
                        </div>

                    </MDBContainer>
                </MobileView>



                <UofMFooter/>
            </div>

        )
    }
}
export default France_Page_Structure_Media;