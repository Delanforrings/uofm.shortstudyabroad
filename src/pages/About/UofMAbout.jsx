import React, { Component } from 'react';
import { Animation, MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse, MDBMask,
    MDBRow, MDBCol, MDBBtn, MDBView, MDBContainer, MDBFormInline, Footer, MDBBtnGroup, MDBIcon} from "mdbreact";
import { Jumbotron, Grid, Row, Col, Image } from 'react-bootstrap';
import './UofM_About.css';
import AboutBanner from './Denmark3.jpg';
import Navbar from '../NavBarUofM_Home';
import UofMFooter from '../UofMFooter';
import { Helmet } from 'react-helmet';
import {BrowserView, MobileView} from "react-device-detect";


class UofM_About extends React.Component {
    render() {
        return (
            <div id="UofMAbout">
                <Helmet>
                    <title>About UofM Learning Abroad Center</title>
                </Helmet>
                <Navbar/>
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
                                        <h1 className="colorChange">Learning Abroad Center</h1>
                                        <h3>University of Minnesota Contact Details</h3>
                                        <p>
                                            <strong>230 Heller Hall <a href="https://campusmaps.umn.edu/walter-w-heller-hall">(Map)</a></strong>
                                            <br/>
                                            <strong>271 19th Avenue S</strong>
                                            <br/>
                                            <strong>Minneapolis, MN 55455</strong>
                                            <br/>

                                            <strong>612.626.9000</strong>
                                            <br/>
                                            <strong>888.700.UOFM</strong>
                                            <br/>
                                            <strong>UMabroad@umn.edu</strong>
                                            <br/>
                                        </p>
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
                                        <h1 className="colorChange">Learning Abroad Center Mission Statement</h1>
                                        <p>
                                            The Learning Abroad Center creates meaningful educational opportunities abroad for students through ethical and innovative engagement within the University of Minnesota and the greater education abroad community.
                                        </p>

                                        <br/>
                                        <h1 className="colorChange">Learning Abroad Center Diversity Mission Statement</h1>
                                        <p>
                                            The Learning Abroad Center creates a learning climate that respects and celebrates diversity. We are committed to and accountable for strategically addressing barriers affecting marginalized groups by providing inclusive advising, program and curriculum design, global faculty and staff recruitment and training, and campus stakeholder engagement.
                                        </p>

                                        <br/>
                                        <h1 className="colorChange">About the Learning Abroad Center</h1>
                                        <p>
                                            The Learning Abroad Center in the <a href="http://global.umn.edu/">Global Programs and Strategy Alliance</a> is the <a href="http://www.umn.edu/">University of Minnesota</a>'s comprehensive resource for study, intern, community engagement, research, and volunteer experiences worldwide.
                                        </p>
                                        <br/>
                                        <p>
                                            The Learning Abroad Center is a leader in providing innovative international learning experiences that expand and redefine the world for a diverse population of students, colleagues and staff. The Learning Abroad Center staff and University of Minnesota faculty and staff participate in numerous leadership opportunities and serve on the advisory boards of organizations who provide and/or support education abroad programs. Through collaboration and individual attention, the Learning Abroad Center continues to promote empowerment, development, understanding, and responsibility in the global community.
                                        </p>
                                        <br/>
                                        <p>
                                            The Learning Abroad Center offers a full range of advising and support services to students, including program selection, academic planning, financial planning, registration, credit, cultural adjustment, travel planning, travel products, and reentry.
                                        </p>
                                        <br/>
                                        <p>
                                            A variety of program options—250 programs in over 70 countries—have been developed to address the diverse needs of students. Programs vary in length, level, academic focus, teaching format, language requirements, cost, and degree of independence demanded of the participant. Visit our <a href="http://umabroad.com/">Global Crossroads study abroad blog</a>, which features blog posts from current students studying abroad.
                                        </p>
                                        <br/>
                                        <p>
                                            The Learning Abroad Center works with many departments, administrative offices and other units within the University to determine appropriate study abroad options for each major and minor, and to help students earn credit toward their degree through study abroad. With planning, students in any undergraduate major can study abroad and fulfill degree requirements.
                                        </p>
                                        <br/>
                                        <p>
                                            You can help make the Learning Abroad experience possible with a gift to support scholarships. Your support is essential to enable students to expand their view of the world as they study in their chosen academic fields. <a href="http://global.umn.edu/about/support_us.html">Make a gift through the Global Programs and Strategy Alliance</a>.
                                        </p>

                                        <br/>

                                        <h1 className="colorChange">Learning Abroad Center Academic and Oversight Committees</h1>
                                        <p>
                                            These <a href="https://umabroad.umn.edu/professionals/program-oversight-committees/">Committees</a> constitute the primary oversight mechanisms in place for programs and their associated academic issues.
                                        </p>

                                        <br/>

                                        <h1 className="colorChange">Images Used in Learning Abroad Center Materials</h1>
                                        <p>The Learning Abroad Center staff has long and thoughtful discussions about which images we use on our website and in our printed materials. We are thrilled by the generosity of study abroad alumni and Learning Abroad Center staff who are willing to share their photos and talent. Many of their photos resonate with our primary audience, undergraduate students. We strive to balance images that portray positive yet honest representations of the education abroad experiences, children and cultures. We pride ourselves on an ethical portrayal of study abroad experiences and cultural interactions US students will have abroad.</p>
                                        <br/>
                                        <p>
                                            Past focus-groups have demonstrated that undergraduate students enjoy seeing active and experiential learning of past participants, internships and community engagement experiences at schools, orphanages, community engagement projects, etc. We have not received permission from the parents of the children included in our photos. We have sought out and received legal permission from the photographer to use their photograph. We are and will continue to be meticulous, thoughtful, and deliberate about which photos to use.
                                        </p>

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
                                        <h1 className="colorChange">Learning Abroad Center</h1>
                                        <h3>University of Minnesota Contact Details</h3>
                                        <p>
                                            230 Heller Hall <a href="https://campusmaps.umn.edu/walter-w-heller-hall">(Map)</a>
                                            271 19th Avenue S
                                            Minneapolis, MN 55455

                                            612.626.9000
                                            888.700.UOFM
                                            UMabroad@umn.edu
                                        </p>
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
                                        <h1 className="colorChange">Learning Abroad Center Mission Statement</h1>
                                        <p>
                                            The Learning Abroad Center creates meaningful educational opportunities abroad for students through ethical and innovative engagement within the University of Minnesota and the greater education abroad community.
                                        </p>

                                        <br/>
                                        <h1 className="colorChange">Learning Abroad Center Diversity Mission Statement</h1>
                                        <p>
                                            The Learning Abroad Center creates a learning climate that respects and celebrates diversity. We are committed to and accountable for strategically addressing barriers affecting marginalized groups by providing inclusive advising, program and curriculum design, global faculty and staff recruitment and training, and campus stakeholder engagement.
                                        </p>

                                        <br/>
                                        <h1 className="colorChange">About the Learning Abroad Center</h1>
                                        <p>
                                            The Learning Abroad Center in the <a href="http://global.umn.edu/">Global Programs and Strategy Alliance</a> is the <a href="http://www.umn.edu/">University of Minnesota</a>'s comprehensive resource for study, intern, community engagement, research, and volunteer experiences worldwide.
                                        </p>
                                        <br/>
                                        <p>
                                            The Learning Abroad Center is a leader in providing innovative international learning experiences that expand and redefine the world for a diverse population of students, colleagues and staff. The Learning Abroad Center staff and University of Minnesota faculty and staff participate in numerous leadership opportunities and serve on the advisory boards of organizations who provide and/or support education abroad programs. Through collaboration and individual attention, the Learning Abroad Center continues to promote empowerment, development, understanding, and responsibility in the global community.
                                        </p>
                                        <br/>
                                        <p>
                                            The Learning Abroad Center offers a full range of advising and support services to students, including program selection, academic planning, financial planning, registration, credit, cultural adjustment, travel planning, travel products, and reentry.
                                        </p>
                                        <br/>
                                        <p>
                                            A variety of program options—250 programs in over 70 countries—have been developed to address the diverse needs of students. Programs vary in length, level, academic focus, teaching format, language requirements, cost, and degree of independence demanded of the participant. Visit our <a href="http://umabroad.com/">Global Crossroads study abroad blog</a>, which features blog posts from current students studying abroad.
                                        </p>
                                        <br/>
                                        <p>
                                            The Learning Abroad Center works with many departments, administrative offices and other units within the University to determine appropriate study abroad options for each major and minor, and to help students earn credit toward their degree through study abroad. With planning, students in any undergraduate major can study abroad and fulfill degree requirements.
                                        </p>
                                        <br/>
                                        <p>
                                            You can help make the Learning Abroad experience possible with a gift to support scholarships. Your support is essential to enable students to expand their view of the world as they study in their chosen academic fields. <a href="http://global.umn.edu/about/support_us.html">Make a gift through the Global Programs and Strategy Alliance</a>.
                                        </p>

                                        <br/>

                                        <h1 className="colorChange">Learning Abroad Center Academic and Oversight Committees</h1>
                                        <p>
                                            These <a href="https://umabroad.umn.edu/professionals/program-oversight-committees/">Committees</a> constitute the primary oversight mechanisms in place for programs and their associated academic issues.
                                        </p>

                                        <br/>

                                        <h1 className="colorChange">Images Used in Learning Abroad Center Materials</h1>
                                        <p>The Learning Abroad Center staff has long and thoughtful discussions about which images we use on our website and in our printed materials. We are thrilled by the generosity of study abroad alumni and Learning Abroad Center staff who are willing to share their photos and talent. Many of their photos resonate with our primary audience, undergraduate students. We strive to balance images that portray positive yet honest representations of the education abroad experiences, children and cultures. We pride ourselves on an ethical portrayal of study abroad experiences and cultural interactions US students will have abroad.</p>
                                        <br/>
                                        <p>
                                            Past focus-groups have demonstrated that undergraduate students enjoy seeing active and experiential learning of past participants, internships and community engagement experiences at schools, orphanages, community engagement projects, etc. We have not received permission from the parents of the children included in our photos. We have sought out and received legal permission from the photographer to use their photograph. We are and will continue to be meticulous, thoughtful, and deliberate about which photos to use.
                                        </p>

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

export default UofM_About;