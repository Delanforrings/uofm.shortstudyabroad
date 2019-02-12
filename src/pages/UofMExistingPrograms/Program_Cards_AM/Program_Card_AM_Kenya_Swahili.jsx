import React, { Component } from 'react';
import { MDBCol, MDBRow } from 'mdbreact';
import { Image } from 'react-bootstrap';
import kenya_Swahili from './nonu-kenya-opt.jpg';
import { Helmet } from 'react-helmet';
import "../Program_Card.css";
import { BrowserView, MobileView } from 'react-device-detect';

class Program_Card_AM_Kenya_Swahili extends Component {
    render() {
        return (

            <div id="AM_Cards">
                <MDBRow className="AM_background">
                    <MDBCol xl="7" md="7" className="">
                        <h3>
                            <a href="!#">Intensive Swahili in Kenya</a>
                        </h3>
                        <h5>
                            Summer Session
                        </h5>
                        <p>
                            Immerse yourself in the Swahili language while learning about the country’s more than 40 ethnic groups and living with your Kenyan host family.
                        </p>
                    </MDBCol>
                    <MDBCol xl="4" md="4" className="text-md-rights">
                        <BrowserView>
                            <Image src={kenya_Swahili} className="card_img"/>
                        </BrowserView>
                        <MobileView>
                            <Image src={kenya_Swahili} className="m_card_img"/>
                        </MobileView>

                    </MDBCol>

                </MDBRow>

            </div>

        )
    }
}

export default Program_Card_AM_Kenya_Swahili;