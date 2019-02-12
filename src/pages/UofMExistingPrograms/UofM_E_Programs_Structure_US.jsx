import React, { Component } from 'react';
import { Animation, MDBCollapse, MDBMask, MDBRow, MDBCol, MDBBtn, MDBView, MDBContainer, MDBFormInline, Footer, MDBBtnGroup, MDBIcon} from "mdbreact";
import { Jumbotron, Grid, Row, Col, Image, Button } from 'react-bootstrap';
import E_ProgramBanner from '.././Home/Ireland3.jpg';
import './UofM_E_Programs_Structure.css';
import Navbar from '../NavBarUofM_Home';
import UofMFooter from '../UofMFooter';
import Program_Cards_US_Argentina_Buenos from './Program_Cards_US/Program_Cards_US_Argentina_Buenos';
import Program_Cards_US_Ecuador_MSID from './Program_Cards_US/Program_Cards_US_Ecuador_MSID';
import Program_Cards_US_Ecuador_Spanish from './Program_Cards_US/Program_Cards_US_Ecuador_Spanish';
import Program_Cards_US_Mexico_Abroad from './Program_Cards_US/Program_Cards_US_Mexico_Abroad';
import Program_Cards_US_Panama_Internship from './Program_Cards_US/Program_Cards_US_Panama_Internship';
import { Helmet } from 'react-helmet';
import { BrowserView, MobileView } from 'react-device-detect';


class UofM_E_Programs_Structure_US extends React.Component {
    render () {
        return (
            <div id="E_Program_Structure">
                <Helmet>
                    <title>America Programs</title>
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
                                    <h1 className="colorChange">Americas</h1>
                                    <br/>
                                    <h2 className="colorChange">Argentina</h2>
                                    <ul style={{ listStyleType: "none", padding: 0 }}>
                                        <li>
                                            <Program_Cards_US_Argentina_Buenos/>
                                        </li>
                                    </ul>
                                    <br/>
                                    <h2 className="colorChange">Ecuador</h2>
                                    <ul style={{ listStyleType: "none", padding: 0 }}>
                                        <li>
                                            <Program_Cards_US_Ecuador_MSID/>
                                        </li>
                                        <br/>
                                        <li>
                                            <Program_Cards_US_Ecuador_Spanish/>
                                        </li>
                                    </ul>
                                    <br/>
                                    <h2 className="colorChange">Mexico</h2>
                                    <ul style={{ listStyleType: "none", padding: 0 }}>
                                        <li>
                                            <Program_Cards_US_Mexico_Abroad/>
                                        </li>
                                    </ul>
                                    <br/>
                                    <h2 className="colorChange">Panama</h2>
                                    <ul style={{ listStyleType: "none", padding: 0 }}>
                                        <li>
                                            <Program_Cards_US_Panama_Internship/>
                                        </li>
                                    </ul>
                                </MDBCol>
                                <br/>
                            </MDBRow>
                        </div>
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
                                    <h1 className="colorChange">Americas</h1>
                                    <br/>
                                    <h2 className="colorChange">Argentina</h2>
                                    <ul style={{ listStyleType: "none", padding: 0 }}>
                                        <li>
                                            <Program_Cards_US_Argentina_Buenos/>
                                        </li>
                                    </ul>
                                    <br/>
                                    <h2 className="colorChange">Ecuador</h2>
                                    <ul style={{ listStyleType: "none", padding: 0 }}>
                                        <li>
                                            <Program_Cards_US_Ecuador_MSID/>
                                        </li>
                                        <br/>
                                        <li>
                                            <Program_Cards_US_Ecuador_Spanish/>
                                        </li>
                                    </ul>
                                    <br/>
                                    <h2 className="colorChange">Mexico</h2>
                                    <ul style={{ listStyleType: "none", padding: 0 }}>
                                        <li>
                                            <Program_Cards_US_Mexico_Abroad/>
                                        </li>
                                    </ul>
                                    <br/>
                                    <h2 className="colorChange">Panama</h2>
                                    <ul style={{ listStyleType: "none", padding: 0 }}>
                                        <li>
                                            <Program_Cards_US_Panama_Internship/>
                                        </li>
                                    </ul>
                                </MDBCol>
                                <br/>
                            </MDBRow>
                        </div>
                    </MDBContainer>
                </MobileView>
                <UofMFooter/>
            </div>

        )
    }
}
export default UofM_E_Programs_Structure_US;