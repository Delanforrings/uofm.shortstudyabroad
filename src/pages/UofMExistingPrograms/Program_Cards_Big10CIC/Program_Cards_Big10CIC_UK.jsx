import React, { Component } from 'react';
import { MDBCol, MDBRow } from 'mdbreact';
import { Image } from 'react-bootstrap';
import program_image from './nonu-uk-opt.jpg';
import "../Program_Card.css";

class Program_Cards_Big10CIC_UK extends Component {
    render() {
        return (

            <div id="AM_Cards">
                <MDBRow className="AO_background">
                    <MDBCol xl="7" md="7" className="">
                        <h3>
                            <a href="!#">Study & Intern in London</a>
                        </h3>
                        <h5>

                            Fall Semester, Spring Semester, Summer Session
                        </h5>
                        <p>
                            Deepen your understanding of British culture, study and participate in an internship in nearly any field, and live in historical, multicultural London, Europe’s largest city.
                        </p>
                    </MDBCol>
                    <MDBCol xl="4" md="4" className="text-md-rights">
                        <Image src={program_image} className="card_img"/>
                    </MDBCol>

                </MDBRow>

            </div>

        )
    }
}

export default Program_Cards_Big10CIC_UK;