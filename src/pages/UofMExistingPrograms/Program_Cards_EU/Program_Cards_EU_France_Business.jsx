import React, { Component } from 'react';
import { MDBCol, MDBRow } from 'mdbreact';
import { Image } from 'react-bootstrap';
import program_image from './nonu-biz-fr-opt.jpeg';
import "../Program_Card.css";
import { BrowserView, MobileView } from 'react-device-detect';


class Program_Cards_EU_France_Business extends Component {
    render() {
        return (

            <div id="AM_Cards">
                <MDBRow className="EU_background">
                    <MDBCol xl="7" md="7" className="">
                        <h3>
                            <a href="!#">Business in France</a>
                        </h3>
                        <h5>
                            Fall Semester, Spring Semester
                        </h5>
                        <p>
                            Enroll in business courses in English and/or French alongside French students at the University of Montpellier and enjoy the city’s arts, culture, recreation, and intellectual pursuits.
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

export default Program_Cards_EU_France_Business;