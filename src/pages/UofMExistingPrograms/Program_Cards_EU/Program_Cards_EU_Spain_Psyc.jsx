import React, { Component } from 'react';
import { MDBCol, MDBRow } from 'mdbreact';
import { Image } from 'react-bootstrap';
import program_image from './nonu-madrid02.jpg';
import "../Program_Card.css";
import { BrowserView, MobileView } from 'react-device-detect';


class Program_Cards_EU_Spain_Psyc extends Component {
    render() {
        return (

            <div id="AM_Cards">
                <MDBRow className="EU_background">
                    <MDBCol xl="7" md="7" className="">
                        <h3>
                            <a href="!#">
                                Psychology & Research in Madrid
                            </a>
                        </h3>
                        <h5>
                            Summer Session, Fall Semester, Spring Semester
                        </h5>
                        <p>
                            Study psychology, gain hands-on research experience, and work toward fulfilling your psychology BA/BS requirements on this program based in Madrid.
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

export default Program_Cards_EU_Spain_Psyc;