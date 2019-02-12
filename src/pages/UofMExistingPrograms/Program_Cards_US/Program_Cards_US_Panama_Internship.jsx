import React, { Component } from 'react';
import { MDBCol, MDBRow } from 'mdbreact';
import { Image } from 'react-bootstrap';
import program_image from './nonu-panama-opt.jpg';
import "../Program_Card.css";
import { BrowserView, MobileView } from 'react-device-detect';


class Program_Cards_US_Panama_Internship extends Component {
    render() {
        return (

            <div id="AM_Cards">
                <MDBRow className="US_background">
                    <MDBCol xl="7" md="7" className="">
                        <h3>
                            <a href="!#">Summer Internships in Panama</a>
                        </h3>
                        <h5>
                            Summer Session
                        </h5>
                        <p>
                            Earn credits toward your degree and gain career experience while exploring the beautiful islands in the Bocas del Toro province of Panama.
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

export default Program_Cards_US_Panama_Internship;