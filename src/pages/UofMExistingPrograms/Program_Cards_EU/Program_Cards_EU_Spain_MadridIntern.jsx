import React, { Component } from 'react';
import { MDBCol, MDBRow } from 'mdbreact';
import { Image } from 'react-bootstrap';
import program_image from './nonu-madrid-opt.jpg';
import "../Program_Card.css";
import { BrowserView, MobileView } from 'react-device-detect';


class Program_Cards_EU_Spain_MadridIntern extends Component {
    render() {
        return (

            <div id="AM_Cards">
                <MDBRow className="EU_background">
                    <MDBCol xl="7" md="7" className="">
                        <h3>
                            <a href="!#">Study & Intern in Madrid</a>
                        </h3>
                        <h5>

                            Fall Semester, Spring Semester, Summer Session
                        </h5>
                        <p>
                            Improve your Spanish language skills and participate in an internship in Spain's lively capital. Enroll in English-taught courses in business, finance, marketing, communications, religion, and more.
                        </p>
                    </MDBCol>
                    <MDBCol xl="4" md="4" className="text-md-rights">
                        <BrowserView>
                            <Image src={program_image} className="card_img"/>
                        </BrowserView>
                        <MobileView>
                            <Image src={program_image} className="m_card_img"/>
                        </MobileView>
                    </MDBCol>

                </MDBRow>

            </div>

        )
    }
}

export default Program_Cards_EU_Spain_MadridIntern;