import React, { Component } from 'react';
import { MDBCol, MDBRow } from 'mdbreact';
import { Image } from 'react-bootstrap';
import program_image from './nonu-sen-opt.jpg';
import "../Program_Card.css";
import { BrowserView, MobileView } from 'react-device-detect';


class Program_Cards_AM_Senegal_French extends Component {
    render() {
        return (

            <div id="AM_Cards">
                <MDBRow className="AM_background">
                    <MDBCol xl="7" md="7" className="">
                        <h3>
                            <a href="!#">Intensive French in Senegal</a>
                        </h3>
                        <h5>
                            Winter Break, Summer Session
                        </h5>
                        <p>
                            Rapidly improve your French skills in less than four weeks in an advanced language course, through conversations with your host family, and by interacting daily with local Senegalese.
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

export default Program_Cards_AM_Senegal_French;