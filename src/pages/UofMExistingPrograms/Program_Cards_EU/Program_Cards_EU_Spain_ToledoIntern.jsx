import React, { Component } from 'react';
import { MDBCol, MDBRow } from 'mdbreact';
import { Image } from 'react-bootstrap';
import program_image from './nonu-spain-opt.jpg';
import "../Program_Card.css";
import { BrowserView, MobileView } from 'react-device-detect';


class Program_Cards_EU_Spain_ToledoIntern extends Component {
    render() {
        return (

            <div id="AM_Cards">
                <MDBRow className="EU_background">
                    <MDBCol xl="7" md="7" className="">
                        <h3>
                            <a href="!#">
                                Study & Intern in Toledo
                            </a>
                        </h3>
                        <h5>

                            Fall Semester, Spring Semester, May Term, Summer Session, Academic Year
                        </h5>
                        <p>
                            Head back in time in Toledo, a charming Medieval walled city. Strengthen your language skills, choose from a variety of program courses, and immerse yourself in an internship.</p>
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

export default Program_Cards_EU_Spain_ToledoIntern;