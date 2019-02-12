import React, { Component } from 'react';
import { Animation, MDBCollapse, MDBMask, MDBRow, MDBCol, MDBBtn, MDBView, MDBContainer, MDBFormInline, Footer, MDBBtnGroup, MDBIcon} from "mdbreact";
import { Jumbotron, Grid, Row, Col, Image, Button } from 'react-bootstrap';
import E_ProgramBanner from '.././Home/Ireland3.jpg';
import './UofM_E_Programs_Structure.css';
import Navbar from '../NavBarUofM_Home';
import UofMFooter from '../UofMFooter';
import Program_Cards_AM_Kenya_MSID from './Program_Cards_AM/Program_Card_AM_Kenya_MSID';
import Program_Cards_AM_Kenya_Swahili from './Program_Cards_AM/Program_Card_AM_Kenya_Swahili';
import Program_Cards_AM_Morocco_ArabicLang from './Program_Cards_AM/Program_Card_AM_Morocco_ArabicLang';
import Program_Cards_AM_Senegal_MSID from './Program_Cards_AM/Program_Card_AM_Senegal_MSID';
import Program_Cards_AM_Senegal_French from './Program_Cards_AM/Program_Cards_AM_Senegal_French';

import { BrowserView, MobileView } from 'react-device-detect';
import { Helmet } from 'react-helmet';

class UofM_E_Programs_Structure extends React.Component {
    render () {
        return (
            <div id="E_Program_Structure">
                <Helmet>
                    <title>Existing Programs for Non-UofM</title>
                </Helmet>
                <MDBMask className="colorChange">
                    <Navbar/>
                </MDBMask>
                <BrowserView>
                    <MDBContainer style={{marginTop: "10vh"}}>
                        <MDBRow>
                            <MDBCol size="8">
                                <Animation type="fadeIn">
                                    <Image src={E_ProgramBanner} className="about-profile-pic program_gradient"/>
                                </Animation>
                            </MDBCol>
                        </MDBRow>
                        <Animation type="fadeIn">
                            <div className="homeText">
                                <MDBRow around>
                                    <MDBCol size="3">
                                        <div className="SideNavbar" style={{ display: "flex" }}>
                                            <ul style={{ listStyleType: "none", padding: 0 }}>
                                                <li>
                                                    <a href="/UofM_UofM_Existing_Programs" className="SidebarText_SA">Africa & Middle East</a>
                                                </li>
                                                <li>
                                                    <a href="/UofM_UofM_Existing_Programs/America" className="SidebarText_US">Americas</a>
                                                </li>
                                                <li>
                                                    <a href="/UofM_UofM_Existing_Programs/Asia&Oceania" className="SidebarText_AO">Asia & Oceania</a>
                                                </li>
                                                <li>
                                                    <a href="/UofM_UofM_Existing_Programs/Europe" className="SidebarText_EU">Europe</a>
                                                </li>
                                                <li>
                                                    <a href="/UofM_UofM_Existing_Programs/VariousCountries" className="SidebarText_VC">Various Countries</a>
                                                </li>
                                            </ul>
                                        </div>
                                    </MDBCol>
                                    <MDBCol size="6">
                                        <h1 className="colorChange">Africa & Middle East</h1>

                                        <h2 className="colorChange">Kenya</h2>
                                        <ul style={{ listStyleType: "none", padding: 0 }}>
                                            <li>
                                                <Program_Cards_AM_Kenya_MSID/>

                                            </li>
                                            <br/>
                                            <li >
                                                <Program_Cards_AM_Kenya_Swahili/>
                                            </li>
                                        </ul>
                                        <br/>
                                        <h2 className="colorChange">Morocco</h2>
                                        <ul style={{ listStyleType: "none", padding: 0 }}>
                                            <li>
                                                <Program_Cards_AM_Morocco_ArabicLang/>
                                            </li>
                                        </ul>
                                        <br/>
                                        <h2 className="colorChange">Senegal</h2>
                                        <ul style={{ listStyleType: "none", padding: 0 }}>
                                            <li>
                                                <Program_Cards_AM_Senegal_MSID/>
                                            </li>
                                            <br/>
                                            <li>
                                                <Program_Cards_AM_Senegal_French/>
                                            </li>
                                        </ul>
                                    </MDBCol>
                                    <br/>
                                </MDBRow>
                            </div>
                        </Animation>

                    </MDBContainer>
                </BrowserView>

                <MobileView>
                    <MDBContainer style={{marginTop: "10vh"}}>
                        <MDBRow>
                            <MDBCol size="10">
                                <Animation type="fadeIn">
                                    <Image src={E_ProgramBanner} className="about-profile-pic program_gradient"/>
                                </Animation>
                            </MDBCol>
                        </MDBRow>
                        <Animation type="fadeIn">
                            <div className="homeText">
                                <MDBRow around>
                                    <MDBCol size="4">
                                        <div className="m_SideNavbar" style={{ display: "flex" }}>
                                            <ul style={{ listStyleType: "none", padding: 0 }}>
                                                <li>
                                                    <a href="/UofM_UofM_Existing_Programs" className="SidebarText_SA">Africa & Middle East</a>
                                                </li>
                                                <li>
                                                    <a href="/UofM_UofM_Existing_Programs/America" className="SidebarText_US">Americas</a>
                                                </li>
                                                <li>
                                                    <a href="/UofM_UofM_Existing_Programs/Asia&Oceania" className="SidebarText_AO">Asia & Oceania</a>
                                                </li>
                                                <li>
                                                    <a href="/UofM_UofM_Existing_Programs/Europe" className="SidebarText_EU">Europe</a>
                                                </li>
                                                <li>
                                                    <a href="/UofM_UofM_Existing_Programs/VariousCountries" className="SidebarText_VC">Various Countries</a>
                                                </li>
                                            </ul>
                                        </div>
                                    </MDBCol>
                                    <MDBCol size="6">
                                        <h1 className="colorChange">Africa & Middle East</h1>
                                        <br/>
                                        <h2 className="colorChange">Kenya</h2>
                                        <ul style={{ listStyleType: "none", padding: 0 }}>
                                            <li>
                                                <Program_Cards_AM_Kenya_MSID/>

                                            </li>
                                            <br/>
                                            <li >
                                                <Program_Cards_AM_Kenya_Swahili/>
                                            </li>
                                        </ul>
                                        <br/>
                                        <h2 className="colorChange">Morocco</h2>
                                        <ul style={{ listStyleType: "none", padding: 0 }}>
                                            <li>
                                                <Program_Cards_AM_Morocco_ArabicLang/>
                                            </li>
                                        </ul>
                                        <br/>
                                        <h2 className="colorChange">Senegal</h2>
                                        <ul style={{ listStyleType: "none", padding: 0 }}>
                                            <li>
                                                <Program_Cards_AM_Senegal_MSID/>
                                            </li>
                                            <br/>
                                            <li>
                                                <Program_Cards_AM_Senegal_French/>
                                            </li>
                                        </ul>
                                    </MDBCol>
                                    <br/>
                                </MDBRow>
                            </div>
                        </Animation>

                    </MDBContainer>
                </MobileView>
                <UofMFooter/>
            </div>

        )
    }
}
export default UofM_E_Programs_Structure;