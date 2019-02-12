import React, { Component } from 'react';
import { MDBCol, MDBRow } from 'mdbreact';
import { Image } from 'react-bootstrap';
import program_image from './nonu-gs-opt.jpg';
import "../Program_Card.css";
import { BrowserView, MobileView } from 'react-device-detect';


class Program_Cards_VC_GlobalSeminars extends Component {
    render() {
        return (

            <div id="AM_Cards">
                <MDBRow className="VC_background">
                    <MDBCol xl="7" md="7" className="">
                        <h3>
                            <a href="!#">Global Seminarss</a>
                        </h3>
                        <h5>

                        </h5>
                        <p>

                            Global Seminars are experiential short-term, small-group programs led by University of Minnesota faculty and staff. They are taught in English, have no prerequisites, and are open to all undergraduate students.
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

export default Program_Cards_VC_GlobalSeminars;