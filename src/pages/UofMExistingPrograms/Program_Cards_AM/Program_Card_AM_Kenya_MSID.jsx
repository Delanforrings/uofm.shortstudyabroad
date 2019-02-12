import React, { Component } from 'react';
import { MDBCol, MDBRow, MDBContainer } from 'mdbreact';
import { Image } from 'react-bootstrap';
import kenya_MSID from './nonu-kenya2-opt.jpg';
import { Helmet } from 'react-helmet';
import { BrowserView, MobileView } from 'react-device-detect';
import "../Program_Card.css";

class Program_Card_AM_Kenya_MSID extends Component {
    render() {
        return (

            <div id="AM_Cards" className="Card_Shadow">
                <MDBRow className="AM_background">
                    <MDBCol xl="7" md="7" className="">
                        <h3>
                            <a href="!#">MSID—International Development in Kenya</a>
                        </h3>
                        <h5>
                            Fall Semester, Spring Semester, Academic Year
                        </h5>
                        <p>
                            Delve into hands-on learning in Kenya, a country of abundant wildlife, dramatic landscapes, and a highly diverse culture.
                        </p>
                    </MDBCol>

                    <MDBCol xl="4" md="4" className="text-md-rights">
                        <BrowserView>
                            <Image src={kenya_MSID} className="card_img"/>
                        </BrowserView>
                        <MobileView>
                            <Image src={kenya_MSID} className="m_card_img"/>
                        </MobileView>

                    </MDBCol>

                </MDBRow>




            </div>

        )
    }
}

export default Program_Card_AM_Kenya_MSID;