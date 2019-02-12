import React, { Component } from 'react';
import { MDBCol, MDBRow } from 'mdbreact';
import { Image } from 'react-bootstrap';
import program_image from './nonu-arg-opt.jpg';
import "../Program_Card.css";
import { BrowserView, MobileView } from 'react-device-detect';


class Program_Cards_US_Argentina_Buenos extends Component {
    render() {
        return (

            <div id="AM_Cards">
                <MDBRow className="US_background">
                    <MDBCol xl="7" md="7" className="">
                        <h3>
                            <a href="!#">Study Abroad in Buenos Aires</a>
                        </h3>
                        <h5>
                            Fall Semester, Spring Semester, Summer Session, Academic Year, Winter Break
                        </h5>
                        <p>
                            Study intensive Spanish, business, global studies, or psychology and learn about Argentine culture in the urban landscape of Buenos Aires, a city of 15.5 million.
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

export default Program_Cards_US_Argentina_Buenos;