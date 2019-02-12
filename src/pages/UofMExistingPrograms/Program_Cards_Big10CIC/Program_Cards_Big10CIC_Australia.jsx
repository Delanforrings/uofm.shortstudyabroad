import React, { Component } from 'react';
import { MDBCol, MDBRow } from 'mdbreact';
import { Image } from 'react-bootstrap';
import program_image from './nonu-aus-opt.jpg';
import "../Program_Card.css";

class Program_Cards_Big10CIC_Australia extends Component {
    render() {
        return (

            <div id="AM_Cards">
                <MDBRow className="AO_background">
                    <MDBCol xl="7" md="7" className="">
                        <h3>
                            <a href="!#">Study & Intern in Sydney</a>
                        </h3>
                        <h5>
                            Fall Semester, Spring Semester, Summer Session
                        </h5>
                        <p>
                            Experience the energetic city of Sydney through a professional internship and courses that deepen your understanding of Australian culture.</p>
                    </MDBCol>
                    <MDBCol xl="4" md="4" className="text-md-rights">
                        <Image src={program_image} className="card_img"/>
                    </MDBCol>

                </MDBRow>

            </div>

        )
    }
}

export default Program_Cards_Big10CIC_Australia;