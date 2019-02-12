import React, { Component } from 'react';
import { MDBCol, MDBRow } from 'mdbreact';
import { Image } from 'react-bootstrap';
import program_image from './nonu-ecua2-opt.jpg';
import "../Program_Card.css";
import { BrowserView, MobileView } from 'react-device-detect';


class Program_Cards_US_Ecuador_MSID extends Component {
    render() {
        return (

            <div id="AM_Cards">
                <MDBRow className="US_background">
                    <MDBCol xl="7" md="7" className="">
                        <h3>
                            <a href="!#">MSID—International Development in Ecuador</a>
                        </h3>
                        <h5>

                            Fall Semester, Spring Semester, Academic Year
                        </h5>
                        <p>
                            Experience contemporary Ecuadorian culture—a blend of indigenous and Spanish colonial—while examining the country's social and economic realities.
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

export default Program_Cards_US_Ecuador_MSID;