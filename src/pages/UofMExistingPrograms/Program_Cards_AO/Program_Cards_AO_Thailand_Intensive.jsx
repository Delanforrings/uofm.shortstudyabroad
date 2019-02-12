import React, { Component } from 'react';
import { MDBCol, MDBRow } from 'mdbreact';
import { Image } from 'react-bootstrap';
import program_image from './nonu-thai-intensive.jpg';
import "../Program_Card.css";
import { BrowserView, MobileView } from 'react-device-detect';

class Program_Cards_AO_Thailand_Intensive extends Component {
    render() {
        return (

            <div id="AM_Cards">
                <MDBRow className="AO_background">
                    <MDBCol xl="7" md="7" className="">
                        <h3>
                            <a href="!#">Intensive Thai in Thailand</a>
                        </h3>
                        <h5>
                            Summer Session
                        </h5>
                        <p>
                            Study the Thai language while you explore Thailand, the only southeast Asian country never colonized by European powers and now a hub for manufacturing, agriculture, and tourism.
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

export default Program_Cards_AO_Thailand_Intensive;