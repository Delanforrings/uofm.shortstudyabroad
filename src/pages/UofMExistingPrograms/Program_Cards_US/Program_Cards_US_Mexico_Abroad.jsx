import React, { Component } from 'react';
import { MDBCol, MDBRow } from 'mdbreact';
import { Image } from 'react-bootstrap';
import program_image from './nonu-mex-opt.jpg';
import "../Program_Card.css";
import { BrowserView, MobileView } from 'react-device-detect';


class Program_Cards_US_Mexico_Abroad extends Component {
    render() {
        return (

            <div id="AM_Cards">
                <MDBRow className="US_background">
                    <MDBCol xl="7" md="7" className="">
                        <h3>
                            <a href="!#">Study Abroad in Mexico</a>
                        </h3>
                        <h5>

                            Winter Break, May Term, Summer Session
                        </h5>
                        <p>
                            Improve your Spanish by living with a host family and taking classes taught by attentive instructors in the ever-temperate “City of Eternal Spring.”
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

export default Program_Cards_US_Mexico_Abroad;