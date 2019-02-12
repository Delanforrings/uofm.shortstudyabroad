import React, { Component } from 'react';
import { MDBCol, MDBRow } from 'mdbreact';
import { Image } from 'react-bootstrap';
import program_image from './nonu-sen2-opt.jpg';
import "../Program_Card.css";
import { BrowserView, MobileView } from 'react-device-detect';

class Program_Card_AM_Senegal_MSID extends Component {
    render() {
        return (

            <div id="AM_Cards">
                <MDBRow className="AM_background">
                    <MDBCol xl="7" md="7" className="">
                        <h3>
                            <a href="!#">MSID—International Development in Senegal</a>
                        </h3>
                        <h5>
                            Fall Semester, Spring Semester, Academic Year
                        </h5>
                        <p>
                            Immerse yourself in classes, an internship with a grassroots agency, and research addressing the social and economic realities of captivating Senegal.
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

export default Program_Card_AM_Senegal_MSID;