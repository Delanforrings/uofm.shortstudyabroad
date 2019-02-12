import React, { Component } from 'react';
import { MDBCol, MDBRow } from 'mdbreact';
import { Image } from 'react-bootstrap';
import program_image from './nonu-mont-sports-opt.jpg';
import "../Program_Card.css";
import { BrowserView, MobileView } from 'react-device-detect';

class Program_Cards_EU_France_Sports extends Component {
    render() {
        return (

            <div id="AM_Cards">
                <MDBRow className="EU_background">
                    <MDBCol xl="7" md="7" className="">
                        <h3>
                            <a href="/UofM/Programs/France_montpellier-sports">Sports & Culture in France: La vie sportive
                            </a>
                        </h3>
                        <h5>
                            May Session
                        </h5>
                        <p>
                            Study French sports culture—including tourism, psychology, and pedagogy—in Montpellier, one of France’s sportiest cities.
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

export default Program_Cards_EU_France_Sports;