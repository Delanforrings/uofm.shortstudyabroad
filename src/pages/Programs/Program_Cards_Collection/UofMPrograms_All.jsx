import React, { Component } from 'react';
import { Animation, MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse, MDBMask,
    MDBRow, MDBCol, MDBBtn, MDBView, MDBContainer, MDBFormInline, Footer, MDBBtnGroup, MDBIcon, MDBBadge} from "mdbreact";
import { Jumbotron, Grid, Row, Col, Image } from 'react-bootstrap';
import Programs_France_Sports from '../France/Program_Sports/France_Sports_Snapshot';

import UofMProgram_France from '../France/Program_Sports/UofMProgram_France_Card';
import UofMProgram_Ecuador from '../Ecuador/UofMProgram_Ecuador_indigenous';
import UofMProgram_Argentina from '../Argentina/UofMProgram_Argentina';
import UofMFooter from '../../UofMFooter';
import Navbar from '../../NavBarUofM_Home';
import ProgramBanner from '../Senegal4.jpg';
import '../UofMPrograms.css';
import {BrowserView, MobileView} from "react-device-detect";
import { Helmet } from 'react-helmet';
import UofMProgram_Ecuador_biodiversity from "../Ecuador/UofMProgram_Ecuador_biodiversity";
import UofMProgram_Ecuador_indigenous from "../Ecuador/UofMProgram_Ecuador_indigenous";


class UofMPrograms_All extends React.Component{
    render (){
        return (
            <div id="UofM_Programs">
                <Helmet>
                    <title>All Customised Programs in UofM</title>
                </Helmet>
                <Navbar/>
                <BrowserView>
                    <MDBContainer style={{marginTop: "10vh"}}>
                        <MDBRow>
                            <MDBCol size="8">
                                <Animation type="fadeIn">
                                    <Image src={ProgramBanner} className="about-profile-pic program_gradient"/>
                                </Animation>
                            </MDBCol>
                        </MDBRow>

                        <MDBRow>
                            <MDBCol size="4">
                                <div className="SideNavbar" style={{ display: "flex" }}>
                                    <ul style={{ listStyleType: "none", padding: 0 }}>
                                        <li>
                                            <a href="/AU_Programs" className="SidebarText">All Programs</a>
                                        </li>
                                        <li>
                                            <a href="/AU_Programs/Featured" className="SidebarText">Featured Programs  <MDBBadge color="danger">New!</MDBBadge></a>
                                        </li>
                                        <li>
                                            <a href="/AU_Programs/Africa_MidEast" className="SidebarText_SA">Africa & Middle East</a>
                                        </li>
                                        <li>
                                            <a href="/AU_Programs/America" className="SidebarText_US">Americas</a>
                                        </li>
                                        <li>
                                            <a href="/AU_Programs/Asia_Oceania" className="SidebarText_AO">Asia & Oceania</a>
                                        </li>
                                        <li>
                                            <a href="/AU_Programs/Europe" className="SidebarText_EU">Europe</a>
                                        </li>
                                        <li>
                                            <a href="/AU_Programs/VariousCountries" className="SidebarText_VC">Various Countries</a>
                                        </li>
                                    </ul>
                                </div>
                            </MDBCol>
                            <MDBCol size="5">
                                <div className="homeText">
                                    <Animation type="slideInUp">
                                        <UofMProgram_France/>
                                        <hr className="my-5"/>
                                        <Animation type="slideInUp">
                                            <UofMProgram_Ecuador_biodiversity/>
                                        </Animation>
                                        <hr className="my-5"/>
                                        <Animation type="slideInUp">
                                            <UofMProgram_Ecuador_indigenous/>
                                        </Animation>

                                        <hr className="my-5"/>
                                        <Animation type="slideInUp">
                                            <UofMProgram_Argentina/>
                                        </Animation>

                                        <hr className="my-5"/>
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
                                    <Image src={ProgramBanner} className="about-profile-pic program_gradient"/>
                                </Animation>
                            </MDBCol>
                        </MDBRow>

                        <MDBRow>
                            <MDBCol size="6" className="">
                                <div className="m_homeText">
                                    <Animation type="slideInUp">
                                        <UofMProgram_France/>
                                        <hr className="my-5"/>
                                        <Animation type="slideInUp">
                                            <UofMProgram_Ecuador/>
                                        </Animation>
                                        <hr className="my-5"/>
                                        <Animation type="slideInUp">
                                            <UofMProgram_Ecuador/>
                                        </Animation>

                                        <hr className="my-5"/>
                                        <Animation type="slideInUp">
                                            <UofMProgram_Argentina/>
                                        </Animation>

                                        <hr className="my-5"/>
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

export default UofMPrograms_All;