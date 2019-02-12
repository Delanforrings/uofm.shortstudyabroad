import React, { Component } from 'react';
import { MDBCol, MDBRow } from 'mdbreact';
import { Image } from 'react-bootstrap';
import program_image from './nonu-mont-resize.jpg';
import "../Program_Card.css";
import { BrowserView, MobileView } from 'react-device-detect';


class Program_Cards_EU_France_Montpellier extends Component {
    render() {
        return (

            <div id="AM_Cards">
                <MDBRow className="EU_background">
                    <MDBCol xl="7" md="7" className="">
                        <h3>
                            <a href="!#">Study Abroad in Montpellier</a>
                        </h3>
                        <h5>
                            Fall & Spring Semester, Summer Session, Academic Year
                        </h5>
                        <p>
                            Integrate into French culture in Montpellier, a vibrant city located just miles from the Mediterranean. Take classes in a variety of subjects alongside at Paul Valéry University, one of Europe’s oldest universities.
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

export default Program_Cards_EU_France_Montpellier;