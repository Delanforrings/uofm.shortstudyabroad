import React, { Component } from 'react';
import { MDBCol, MDBRow } from 'mdbreact';
import { Image } from 'react-bootstrap';
import program_image from './nonu_dublin_bachelorsWalk.jpg';
import "../Program_Card.css";
import { BrowserView, MobileView } from 'react-device-detect';


class Program_Cards_EU_Ireland_Business extends Component {
    render() {
        return (

            <div id="AM_Cards">
                <MDBRow className="EU_background">
                    <MDBCol xl="7" md="7" className="">
                        <h3>
                            <a href="!#">
                                Business in Dublin
                            </a>
                        </h3>
                        <h5>
                            Fall Semester, Spring Semester
                        </h5>
                        <p>
                            Offered in partnership with the Carlson School of Management, this program gives you the chance to explore business through an Irish lens and take classes from local experts.
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

export default Program_Cards_EU_Ireland_Business;