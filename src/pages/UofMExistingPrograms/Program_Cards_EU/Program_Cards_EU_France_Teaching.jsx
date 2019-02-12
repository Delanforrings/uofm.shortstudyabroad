import React, { Component } from 'react';
import { MDBCol, MDBRow } from 'mdbreact';
import { Image } from 'react-bootstrap';
import program_image from './nonu-teaching-fr-opt.jpg';
import "../Program_Card.css";
import { BrowserView, MobileView } from 'react-device-detect';

class Program_Cards_EU_France_Teaching extends Component {
    render() {
        return (

            <div id="AM_Cards">
                <MDBRow className="EU_background">
                    <MDBCol xl="7" md="7" className="">
                        <h3>
                            <a href="!#">
                                Teaching Practicum in France
                            </a>
                        </h3>
                        <h5>
                            Fall Semester, Spring Semester
                        </h5>
                        <p>
                            Study in this cultured university city with a centuries-old history of intellectual advances and social tolerance and complete your teaching practicum in a French school.
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

export default Program_Cards_EU_France_Teaching;