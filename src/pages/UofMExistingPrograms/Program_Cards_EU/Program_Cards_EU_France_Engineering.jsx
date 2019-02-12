import React, { Component } from 'react';
import { MDBCol, MDBRow } from 'mdbreact';
import { Image } from 'react-bootstrap';
import program_image from './nonu-engineering-fr-opt.jpg';
import "../Program_Card.css";

class Program_Cards_EU_France_Engineering extends Component {
    render() {
        return (

            <div id="AM_Cards">
                <MDBRow className="EU_background">
                    <MDBCol xl="7" md="7" className="">
                        <h3>
                            <a href="!#">Engineering in France</a>
                        </h3>
                        <h5>
                            Fall Semester, Spring Semester
                        </h5>
                        <p>
                            Take classes in English or French in a variety of engineering and science fields at the prestigious University of Montpellier. Experience the exciting hub of modern technological industries alongside historic traditions.
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

export default Program_Cards_EU_France_Engineering;