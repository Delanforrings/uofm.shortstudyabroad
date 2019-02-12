import React, { Component } from 'react';
import { Animation, MDBCollapse, MDBMask, MDBRow, MDBCol, MDBBtn, MDBView, MDBContainer, MDBFormInline, Footer, MDBBtnGroup, MDBIcon} from "mdbreact";
import { Jumbotron, Grid, Row, Col, Image, Button } from 'react-bootstrap';
import E_ProgramBanner from '.././Home/Ireland3.jpg';
import './UofM_E_Programs_Structure.css';
import Navbar from '../NavBarUofM_Home';
import UofMFooter from '../UofMFooter';
import Program_Cards_EU_France_Montpellier from './Program_Cards_EU/Program_Cards_EU_France_Montpellier';

import { Helmet } from 'react-helmet';
import Program_Cards_EU_France_Business from "./Program_Cards_EU/Program_Cards_EU_France_Business";
import Program_Cards_EU_France_Engineering from "./Program_Cards_EU/Program_Cards_EU_France_Engineering";
import Program_Cards_EU_France_Sports from "./Program_Cards_EU/Program_Cards_EU_France_Sports";
import Program_Cards_EU_France_Teaching from "./Program_Cards_EU/Program_Cards_EU_France_Teaching";
import Program_Cards_EU_Ireland_StudyAbroad from "./Program_Cards_EU/Program_Cards_EU_Ireland_StudyAbroad";
import Program_Cards_EU_Ireland_Business from "./Program_Cards_EU/Program_Cards_EU_Ireland_Business";
import Program_Cards_EU_Italy_Intern from "./Program_Cards_EU/Program_Cards_EU_Italy_FlorIntern";
import Program_Cards_EU_Italy_RomeIntern from "./Program_Cards_EU/Program_Cards_EU_Italy_RomeIntern";
import Program_Cards_EU_Spain_Psyc from "./Program_Cards_EU/Program_Cards_EU_Spain_Psyc";
import Program_Cards_EU_Spain_MadridIntern from "./Program_Cards_EU/Program_Cards_EU_Spain_MadridIntern";
import Program_Cards_EU_Spain_ToledoIntern from "./Program_Cards_EU/Program_Cards_EU_Spain_ToledoIntern";

import { BrowserView, MobileView } from 'react-device-detect';


class UofM_E_Programs_Structure_EU extends React.Component {
    render () {
        return (
            <div id="E_Program_Structure">
                <Helmet>
                    <title>Europe Programs</title>
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
                                    <h1 className="colorChange">Europe</h1>
                                    <br/>
                                    <h2 className="colorChange">France</h2>
                                    <ul style={{ listStyleType: "none", padding: 0 }}>
                                        <li>
                                            <Program_Cards_EU_France_Montpellier/>
                                        </li>
                                        <br/>
                                        <li>
                                            <Program_Cards_EU_France_Business/>
                                        </li>
                                        <br/>
                                        <li>
                                            <Program_Cards_EU_France_Engineering/>
                                        </li>
                                        <br/>
                                        <li>
                                            <Program_Cards_EU_France_Sports/>
                                        </li>
                                        <br/>
                                        <li>
                                            <Program_Cards_EU_France_Teaching/>
                                        </li>
                                    </ul>
                                    <br/>
                                    <h2 className="colorChange">Ireland</h2>
                                    <ul style={{ listStyleType: "none", padding: 0 }}>
                                        <li>
                                            <Program_Cards_EU_Ireland_StudyAbroad/>
                                        </li>
                                        <br/>
                                        <li>
                                            <Program_Cards_EU_Ireland_Business/>
                                        </li>
                                    </ul>
                                    <br/>
                                    <h2 className="colorChange">Italy</h2>
                                    <ul style={{ listStyleType: "none", padding: 0 }}>
                                        <li>
                                            <Program_Cards_EU_Italy_Intern/>
                                        </li>
                                        <br/>
                                        <li>
                                            <Program_Cards_EU_Italy_RomeIntern/>
                                        </li>
                                    </ul>
                                    <br/>
                                    <h2 className="colorChange">Spain</h2>
                                    <ul style={{ listStyleType: "none", padding: 0 }}>
                                        <li>
                                            <Program_Cards_EU_Spain_Psyc/>
                                        </li>
                                        <br/>
                                        <li>
                                            <Program_Cards_EU_Spain_MadridIntern/>
                                        </li>
                                        <br/>
                                        <li>
                                            <Program_Cards_EU_Spain_ToledoIntern/>
                                        </li>
                                    </ul>
                                    <br/>
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
                                    <h1 className="colorChange">Europe</h1>
                                    <br/>
                                    <h2 className="colorChange">France</h2>
                                    <ul style={{ listStyleType: "none", padding: 0 }}>
                                        <li>
                                            <Program_Cards_EU_France_Montpellier/>
                                        </li>
                                        <br/>
                                        <li>
                                            <Program_Cards_EU_France_Business/>
                                        </li>
                                        <br/>
                                        <li>
                                            <Program_Cards_EU_France_Engineering/>
                                        </li>
                                        <br/>
                                        <li>
                                            <Program_Cards_EU_France_Sports/>
                                        </li>
                                        <br/>
                                        <li>
                                            <Program_Cards_EU_France_Teaching/>
                                        </li>
                                    </ul>
                                    <br/>
                                    <h2 className="colorChange">Ireland</h2>
                                    <ul style={{ listStyleType: "none", padding: 0 }}>
                                        <li>
                                            <Program_Cards_EU_Ireland_StudyAbroad/>
                                        </li>
                                        <br/>
                                        <li>
                                            <Program_Cards_EU_Ireland_Business/>
                                        </li>
                                    </ul>
                                    <br/>
                                    <h2 className="colorChange">Italy</h2>
                                    <ul style={{ listStyleType: "none", padding: 0 }}>
                                        <li>
                                            <Program_Cards_EU_Italy_Intern/>
                                        </li>
                                        <br/>
                                        <li>
                                            <Program_Cards_EU_Italy_RomeIntern/>
                                        </li>
                                    </ul>
                                    <br/>
                                    <h2 className="colorChange">Spain</h2>
                                    <ul style={{ listStyleType: "none", padding: 0 }}>
                                        <li>
                                            <Program_Cards_EU_Spain_Psyc/>
                                        </li>
                                        <br/>
                                        <li>
                                            <Program_Cards_EU_Spain_MadridIntern/>
                                        </li>
                                        <br/>
                                        <li>
                                            <Program_Cards_EU_Spain_ToledoIntern/>
                                        </li>
                                    </ul>
                                    <br/>
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
export default UofM_E_Programs_Structure_EU;