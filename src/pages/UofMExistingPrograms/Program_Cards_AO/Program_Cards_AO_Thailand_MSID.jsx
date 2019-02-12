import React, { Component } from 'react';
import { MDBCol, MDBRow } from 'mdbreact';
import { Image } from 'react-bootstrap';
import program_image from './nonu-thai-msid.jpg';
import "../Program_Card.css";
import { BrowserView, MobileView } from 'react-device-detect';


class Program_Cards_AO_Thailand_MSID extends Component {
    render() {
        return (

            <div id="AM_Cards">
                <MDBRow className="AO_background">
                    <MDBCol xl="7" md="7" className="">
                        <h3>
                            <a href="!#">MSID—International Development in Thailand</a>
                        </h3>
                        <h5>
                            Fall Semester, Spring Semester, Academic Year
                        </h5>
                        <p>
                            Investigate the complexities of development issues in Thailand while living in Chiang Mai, a blend of urban bustle and ancient charm.
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

export default Program_Cards_AO_Thailand_MSID;