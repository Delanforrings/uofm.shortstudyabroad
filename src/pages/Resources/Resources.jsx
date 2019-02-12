import React, { Component } from 'react';
import { Animation, MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse, MDBMask,
    MDBRow, MDBCol, MDBBtn, MDBView, MDBContainer, MDBFormInline, Footer, MDBBtnGroup, MDBIcon} from "mdbreact";
import { Jumbotron, Grid, Row, Col, Image } from 'react-bootstrap';
import './Resources.css';

import HomeBanner from './Ireland3.jpg';
import Navbar from '../NavBarUofM_Home';
import UofMFooter from '../UofMFooter';

import {BrowserView, MobileView, isBrowser, isMobile} from "react-device-detect";
import { Helmet } from 'react-helmet';

class UofM_Resources extends React.Component {
    render() {
        return (
            <div id="UofM_Resources">
                <Helmet>
                    <title>Resources || Non UofM Students || Learning Abroad Center</title>
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
                                    <h3 className="colorChange">Travel Documents</h3>
                                    <br/>
                                    <p>
                                        <a className="text_underline">Passports & Visas</a>. Ensure that your travel documents are in order.
                                    </p>
                                    <br/>
                                    <h3 className="colorChange">Consortium Agreement between Your School & the University of Minnesota
                                    </h3>
                                    <br/>
                                    <p>
                                        Check with your home school's study abroad and financial aid office for details on process and eligibility requirements. You are not eligible for funding from the University of Minnesota. To access financial aid from your home institution, you will likely need to complete a consortium agreement, which you may obtain from your home university.
                                    </p>
                                    <br/>
                                    <h3 className="colorChange">Study Abroad Blog</h3>
                                    <br/>
                                    <p>
                                        Our <a className="text_underline">Global Crossroads blog</a> features blog posts from current students who are studying abroad.
                                    </p>
                                    <br/>
                                    <h3 className="colorChange">Current Events Abroad</h3>
                                    <br/>
                                    <p>
                                        <a className="text_underline" href="http://www.emulateme.com/">Country Reports</a>: Country information from around the world. Regularly updated information and maps, including lots of statistics.
                                    </p>
                                    <br/>
                                    <p>
                                        <a className="text_underline" href="http://www.oneworld.net/">OneWorld.net</a>: A British site with links to current news from and above the "two-thirds world."
                                    </p>
                                    <br/>

                                    <h3 className="colorChange">Health & Safety</h3>
                                    <br/>
                                    <p>
                                        <a className="text_underline" href="http://www.culturalinsurance.com/">CISI International Travel, Health, and Security Resources</a>
                                    </p>
                                    <br/>
                                    <p>
                                        <a className="text_underline" href="http://www.cdc.gov/travel">Centers for Disease Control</a>: Travel and prophylactic health information by country.</p>
                                    <br/>
                                    <p>
                                        <a className="text_underline" href="http://www.tripprep.com/">Travel Health Online</a>: A useful travel health site.
                                    </p>
                                    <br/>
                                    <p>
                                        <a className="text_underline" href="https://travel.state.gov/content/passports/en/go/health.html">US State Department's Your Health Abroad</a>: Find doctors and hospitals abroad.
                                    </p>
                                    <br/>
                                    <p>
                                        <a className="text_underline" href="http://www.who.int/countries/en/">Health Information by Country</a>: Information distributed by the World Health Organization.
                                    </p>
                                    <br/>
                                    <p>
                                        <a className="text_underline" href="http://www.globaled.us/peacecorps/">SAFETI/Peace Corps</a>: Peace Corps materials adapted to study abroad.
                                    </p>
                                    <br/>
                                    <p>
                                        <a className="text_underline" href="http://travel.state.gov/content/passports/en/go/checklist.html">US State Department Travel Information</a>: Travel adviseries and Consular Information Sheets for US citizens traveling abroad.
                                    </p>
                                    <br/>
                                    <p>
                                        <a className="text_underline" href="http://www.nafsa.org/Professional_Resources/Browse_by_Interest/Education_Abroad/Network_Resources/Education_Abroad/Resources_for_Health_and_Safety_in_Education_Abroad/">NAFSA's Resources for Health and Safety in Education Abroad</a>: includes links to British, Canadian, and Australian counterparts to the State Department site.</p>
                                    <br/>
                                    <p>
                                        <a className="text_underline" href="http://usembassy.state.gov/">US Embassies</a>: Websites of US Embassies, Consulates, and Diplomatic Missions abroad.
                                    </p>
                                    <br/>
                                    <h3 className="colorChange">Experiences Abroad</h3>
                                    <br/>
                                    <p>
                                        <a className="text_underline" href="http://www.northwestern.edu/studyabroad/resources/online-guide/identity-and-diversity/gender-abroad.html">Gender Abroad</a>: Northwestern University site providing web links and bibliography of print pieces on gender issues in study abroad.
                                    </p>
                                    <br/>
                                    <p>
                                        <a className="text_underline" href="https://umabroad.umn.edu/students/identity/multicultural">Multicultural Students Abroad</a>: Learning Abroad Center page designed for multicultural students studying abroad.
                                    </p>
                                    <br/>
                                    <p>
                                        <a className="text_underline" href="http://www.indiana.edu/~overseas/living/glbt.shtml">GLBT Students and Study Abroad</a>: Indiana University site containing travel/study abroad information and links for GLBT students.
                                    </p>
                                    <br/>
                                    <p>
                                        <a className="text_underline" href="http://www.miusa.org/">Mobility International USA</a>: For international travelers with disabilities.
                                    </p>
                                    <br/>

                                    <h3 className="colorChange">Foreign Currency</h3>
                                    <br/>
                                    <p>
                                        <a className="text_underline" href="http://www.oanda.com/convert/classic">Foreign Currency Converter</a>: Check the exchange rate between currencies of any two countries.
                                    </p>
                                    <br/>
                                    <p>
                                        <a className="text_underline" href="https://usa.visa.com/support/consumer/surcharge-free-atms.html">VISA ATM Locator </a>and <a className="text_underline" href="http://www.mastercard.com/us/personal/en/cardholderservices/atmlocations/index.html">MasterCard ATM Locator</a>: Find a convenient place to access an ATM while abroad.
                                    </p>
                                    <br/>
                                    <h3 className="colorChange">Communication Abroad</h3>
                                    <br/>
                                    <p>
                                        <a className="text_underline" href="http://www.countrycodes.com/?gclid=CJeMsobDtoICFSaISAodbzHyBQ">Country Codes</a>: Gives country codes and explains how to dial out of one country to another.
                                    </p>
                                    <br/>
                                    <p>
                                        <a className="text_underline" href="http://cybercaptive.com/">Cybercafes Abroad</a>: Easy-to-use search engine for cybercafes.
                                    </p>
                                    <br/>

                                    <p>
                                        <a className="text_underline" href="http://www.timeanddate.com/">Time Zones</a>: Convert time in one country to time in another (helpful when calling home).
                                    </p>
                                    <br/>

                                    <p>
                                        <a className="text_underline" href="http://world.altavista.com/">Web Translator</a>: Translates blocks of text and webpages.
                                    </p>
                                    <br/>

                                    <p>
                                        <a className="text_underline" href="http://www.travlang.com/languages/">Translating Dictionaries</a>: Offers basic phrases in multiple languages, including less-commonly-taught languages (such as Amharic and Basque).
                                    </p>
                                    <br/>

                                    <h3 className="colorChange">Global Climate</h3>
                                    <br/>

                                    <p>
                                        <a className="text_underline" href="http://www.worldclimate.com/">World Climate</a>: Climatic data on thousands of cities throughout the world.
                                    </p>
                                    <br/>

                                    <p>
                                        <a className="text_underline" href="http://wwwa.accuweather.com/world-city-list2.asp?partner=accuweather&myadc=0">By City/Country</a>: Covers most cities in each country, and lists current and near future conditions.
                                    </p>
                                    <br/>

                                    <p>
                                        <a className="text_underline" href="http://news.bbc.co.uk/weather/">Through BBC</a>: Five-day forecasts, excellent for European weather conditions.
                                    </p>
                                    <br/>

                                    <h3 className="colorChange">International Development</h3>
                                    <br/>

                                    <p>
                                        <a className="text_underline" href="http://www.eldis.org/">Eldis</a>: British/Scandinavian gateway site to a wide variety of information about development, including 15,000 online documents and 4,500 organizations.
                                    </p>
                                    <br/>
                                    <p>
                                        <a className="text_underline" href="http://impact.sp2.upenn.edu/restes/praxis.html">Praxi</a>: Resources for Social and Economic Development: Another gateway site to many development resources. Maintained by a University of Pennsylvania professor.
                                    </p>
                                    <br/>

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
                                    <h3 className="colorChange">University of Minnesota Student Status</h3>
                                    <br/>
                                    <p>
                                        As a Non-University of Minnesota student participating on a study abroad program through the Learning Abroad Center, you are admitted to the University of Minnesota as a non-degree seeking student during the term(s) that you are abroad. You are required to activate a University of Minnesota student account to receive billing notifications and email communication from the Learning Abroad Center and University of Minnesota. </p>
                                    <br/>
                                    <p>
                                        After submitting the online application for students from institutions other than the University of Minnesota, you will receive a University of Minnesota Internet account. You will receive an email within 2–3 business days with details on how to set up this account and access your online application. You must then complete your application checklist by submitting additional required paperwork before your application will be considered.
                                    </p>
                                    <br/>
                                    <h3 className="colorChange">Access to University of Minnesota Services</h3>
                                    <br/>
                                    <p>
                                        After you set up your account, following the instructions provided to you by the Learning Abroad Center, you will use your unique Internet ID and password to log into the Learning Abroad Center's online application, your University of Minnesota student account, UM Pay (the University's online billing and payment system), and your University assigned email account.
                                    </p>
                                    <br/>
                                    <h3 className="colorChange">Email Access</h3>
                                    <br/>
                                    <p>
                                        Access your University of Minnesota email account through <a className="text_underline"> Gophermail</a>. Your University student email is the official and ONLY method of billing notification and communication. All program communication, to include your notification of acceptance, as well as pre-departure arrangements, are sent to this email address. Check this email account frequently beginning now and throughout your study abroad term.
                                    </p>
                                    <br/>
                                    <h3 className="colorChange">Email Account Optionss</h3>
                                    <br/>
                                    <p>
                                        Access your <a className="text_underline">email account options</a> to change your password, or forward your email account messages. If you choose to forward your University of Minnesota email account to an account which you more frequently access, you are responsible for ensuring that your email is being forwarded appropriately.
                                    </p>
                                    <br/>
                                    <h3 className="colorChange">University of Minnesota Directory Information</h3>
                                    <br/>
                                    <p>
                                        The University of Minnesota may publish, without consent, directory information such as a student's name, address, telephone number, email address, college and term of enrollment in accordance with the guidelines of the <a className="text_underline">Family Education Rights and Privacy Act (FERPA)</a>. You can <a className="text_underline">choose to suppress</a> some or all of this information. From this page you must click "student suppression" if you wish to suppress all information.
                                    </p>
                                    <br/>
                                    <h3 className="colorChange">Power of Attorney Forms</h3>
                                    <br/>
                                    <p>
                                        University staff, to include Learning Abroad Center staff, cannot discuss your student account records or program details with anyone other than you (according to <a className="text_underline">federal law</a>) unless you have completed the appropriate documentation. If you plan to involve your parents, or another trusted individual, in any way while you are studying on a Learning Abroad Center program, complete notarized <a className="text_underline">Power of Attorney (POA) paperwork </a> and submit a copy to both One Stop Student Services and the Learning Abroad Center.
                                    </p>
                                    <br/>
                                    <h3 className="colorChange">Cancellation Information</h3>
                                    <br/>
                                    <p>
                                        If you wish to cancel your participation in a program, notify the Learning Abroad Center by email from your official University of Minnesota email account.  You will be assessed a portion of the program fees if you cancel your Learning Abroad Center program at any time after you have made your confirmation deposit. Please refer to the <a>Cancellation Policy</a>.
                                    </p>
                                    <br/>
                                    <p>
                                        If you have questions about your internet account, or any of the information outlined above, email the Learning Abroad Center.
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

export default UofM_Resources;