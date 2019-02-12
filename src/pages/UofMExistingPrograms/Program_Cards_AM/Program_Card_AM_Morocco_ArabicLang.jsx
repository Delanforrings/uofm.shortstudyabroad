import React, { Component } from 'react';
import { MDBCol, MDBRow } from 'mdbreact';
import { Image } from 'react-bootstrap';
import program_image from './nonu-morocco-opt.jpg';
import "../Program_Card.css";
import { BrowserView, MobileView } from 'react-device-detect';

class Program_Card_AM_Morocco_ArabicLang extends Component {
    render() {
        return (

            <div id="AM_Cards">
                <MDBRow className="AM_background">
                    <MDBCol xl="7" md="7" className="">
                        <h3>
                            <a href="!#">Arabic Language & Culture in Morocco</a>
                        </h3>
                        <h5>
                            Fall Semester, Spring Semester, Summer Session, Academic Year
                        </h5>
                        <p>
                            Learn Modern Standard Arabic in the classroom and Darija on the labyrinthine streets of Fez. Enroll in courses that provide insights into Moroccan life and culture.
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

export default Program_Card_AM_Morocco_ArabicLang;