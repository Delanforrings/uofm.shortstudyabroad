import React, {Component} from 'react';
import {MDBContainer, MDBRow, MDBCol, MDBView, Animation } from 'mdbreact';
import NavbarPage from "../NavBarUofM_Home";
import UofMFooter from "../UofMFooter";
import {Helmet} from 'react-helmet';
import Banner from './Senegal4.jpg';
import "../Home/UofM_Home.css";
import Tab from 'react-bootstrap/Tab';
import Nav from 'react-bootstrap/Nav';
import UofMProgram_France from "./France/Program_Sports/UofMProgram_France_Card";
import UofMProgram_Ecuador_biodiversity from "./Ecuador/UofMProgram_Ecuador_biodiversity";
import UofMProgram_Ecuador_indigenous from "./Ecuador/UofMProgram_Ecuador_indigenous";
import Program_Card_AM_Kenya_MSID from "../UofMExistingPrograms/Program_Cards_AM/Program_Card_AM_Kenya_MSID";
import Program_Cards_AO_Thailand_Intensive from "../UofMExistingPrograms/Program_Cards_AO/Program_Cards_AO_Thailand_Intensive";
import Program_Cards_EU_France_Business from "../UofMExistingPrograms/Program_Cards_EU/Program_Cards_EU_France_Business";
import Program_Cards_US_Ecuador_MSID from "../UofMExistingPrograms/Program_Cards_US/Program_Cards_US_Ecuador_MSID";
import UofM_Argentina from "./Argentina/UofM_Argentina";
import UofMProgram_Argentina from "./Argentina/UofMProgram_Argentina";

class Program_Landing_Page extends React.Component {
    render() {
        return (
            <div id="UofMHome">
                <NavbarPage/>
                <Helmet>
                    <title>Welcome. Bienvenue. Haykuykuy. Karibu.</title>
                </Helmet>

                <MDBContainer style={{marginTop: "10vh"}}>
                    <MDBRow>
                        <MDBCol size="8">
                            <Animation type="fadeIn">
                                <img src={Banner} className="about-profile-pic program_gradient"/>
                            </Animation>
                        </MDBCol>
                    </MDBRow>
                </MDBContainer>
                <MDBContainer style={{marginTop:"5em"}}>
                    <MDBRow>
                        <MDBCol>
                            <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                                <MDBRow>
                                    <MDBCol size="3">
                                        <Nav variant="pills" className="flex-column">
                                            <Nav.Item>
                                                <Nav.Link eventKey="first">Especially for Australian students</Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item>
                                                <Nav.Link eventKey="second">UofM Current Programs</Nav.Link>
                                            </Nav.Item>
                                        </Nav>
                                    </MDBCol>
                                    <MDBCol size="9">
                                        <Tab.Content>
                                            <Tab.Pane eventKey="first">
                                                <MDBContainer>
                                                    <MDBRow>
                                                        <MDBCol>
                                                            <h1 className="colorChange">Customised programs to suit the Australian calender</h1>
                                                            <hr/>
                                                        </MDBCol>
                                                    </MDBRow>
                                                    <MDBRow>
                                                        <MDBCol size="9">
                                                            <br/>
                                                            <UofMProgram_France/>
                                                            <br/>
                                                            <UofMProgram_Ecuador_biodiversity/>
                                                            <br/>
                                                            <UofMProgram_Ecuador_indigenous/>
                                                            <br/>
                                                            <UofMProgram_Argentina/>
                                                            <br/>
                                                        </MDBCol>
                                                    </MDBRow>
                                                    <MDBRow>
                                                        <MDBCol>
                                                            <a href="/AU_Programs" className="text_underline text_bold textSize">Learn more</a>
                                                            <br/>
                                                        </MDBCol>
                                                    </MDBRow>
                                                </MDBContainer>
                                            </Tab.Pane>
                                            <Tab.Pane eventKey="second">
                                                <MDBContainer>
                                                    <MDBRow>
                                                        <MDBCol>
                                                            <h1 className="colorChange">Current programs</h1>
                                                            <hr/>
                                                        </MDBCol>
                                                    </MDBRow>
                                                    <MDBRow>
                                                        <MDBCol size="9">
                                                            <br/>
                                                            <Program_Card_AM_Kenya_MSID/>
                                                            <br/>
                                                            <Program_Cards_AO_Thailand_Intensive/>
                                                            <br/>
                                                            <Program_Cards_EU_France_Business/>
                                                            <br/>
                                                            <Program_Cards_US_Ecuador_MSID/>
                                                            <br/>
                                                        </MDBCol>
                                                    </MDBRow>
                                                    <MDBRow>
                                                        <MDBCol>
                                                            <a href="/UofM_UofM_Existing_Programs" className="text_underline text_bold textSize">Learn more</a>
                                                            <br/>
                                                        </MDBCol>
                                                    </MDBRow>
                                                </MDBContainer>
                                            </Tab.Pane>
                                        </Tab.Content>
                                    </MDBCol>
                                </MDBRow>
                            </Tab.Container>
                        </MDBCol>
                    </MDBRow>
                </MDBContainer>
                <UofMFooter/>
            </div>
        )
    }
}

export default Program_Landing_Page;