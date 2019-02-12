import React from 'react';
import { MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBCardHeader, MDBCardFooter, MDBBtn, MDBContainer, MDBJumbotron, MDBMask } from
        "mdbreact";
import "../../UofM_Program_Card.css";
import Current_rate from "../../CurrencyConverter";

import {BrowserView, MobileView} from "react-device-detect";



class UofMProgram_France extends React.Component {
    constructor(props) {
        super(props);
        this.sport_price = Current_rate.constructor.cur_rate;

    }

    render() {
        return (
            <div>
                <BrowserView>
                    <MDBContainer id="UofMProgram" className="textFont_P">
                        <MDBCard style={{ width: "45em", height:"30em",marginTop: "0rem" }} className="text-center">
                            <MDBMask className="e_Color">
                                <MDBCardHeader className="textColor textSize_li">Featured</MDBCardHeader>
                            </MDBMask>
                            <MDBCardBody>
                                <MDBJumbotron style={{  height:"24em",marginTop: "0em" }}>
                                    <h1 className="h1-responsive textChange textSize_h">Sports & Culture in France: La vie sportive</h1>
                                    <p className="lead">
                                        Study French sports culture—including tourism, psychology, and pedagogy—in Montpellier, one of France’s sportiest cities.</p>
                                    <hr className="my-2" />
                                    <ul className="text-left textFont_P" style={{ listStyleType: "dot", padding: 0 }}>
                                        <li >
                                            <h6 className="textSize_li">
                                                Location: Montpellier, France
                                            </h6>
                                        </li>
                                        <li>
                                            <h6 className="textSize_li">
                                                Term: 15th Jan - 9th Feb, 2020 (TBC)
                                            </h6>
                                        </li>
                                        <li>
                                            <h6 className="textSize_li">
                                                Duration: 3 weeks
                                            </h6>
                                        </li>
                                        <li>
                                            <h6 className="textSize_li">
                                                {/*USD: 4000 (approx. AUD: <Current_rate/>)*/}
                                                Fees: TBC
                                            </h6>
                                        </li>
                                    </ul>
                                    <MDBBtn color="red darken-4" size="sm" className="textFont_P" href="/AU_Programs/France_montpellier-sports">
                                        Learn more
                                    </MDBBtn>
                                </MDBJumbotron>
                            </MDBCardBody>
                        </MDBCard>
                    </MDBContainer>
                </BrowserView>

                <MobileView>
                    <MDBContainer id="UofMProgram" className="textFont_P">
                        <MDBCard style={{ width: "25em", height:"20em",marginTop: "0rem" }} className="text-center">
                            <MDBMask className="e_Color">
                                <MDBCardHeader className="textColor textSize_li">Featured</MDBCardHeader>
                            </MDBMask>
                            <MDBCardBody>
                                <MDBJumbotron style={{height:"19em",marginTop: "0rem" }}>
                                    <h1 className="h1-responsive textChange textSize_h">Sports & Culture in France: La vie sportive</h1>
                                    <p className="lead">
                                        Study French sports culture—including tourism, psychology, and pedagogy—in Montpellier, one of France’s sportiest cities.</p>
                                    <hr className="my-2" />
                                    <ul className="text-left textFont_P" style={{ listStyleType: "dot", padding: 0 }}>
                                        <li >
                                            <h6 className="textSize_li">
                                                Location: Montpellier, France
                                            </h6>
                                        </li>
                                        <li>
                                            <h6 className="textSize_li">
                                                Term: 15th Jan - 9th Feb, 2020 (TBC)
                                            </h6>
                                        </li>
                                        <li>
                                            <h6 className="textSize_li">
                                                Duration: 3 weeks
                                            </h6>
                                        </li>
                                        <li>
                                            <h6 className="textSize_li">
                                                {/*USD: 4000 (approx. AUD: <Current_rate/>)*/}
                                                Fees: TBC
                                            </h6>
                                        </li>
                                    </ul>
                                    <MDBBtn color="red darken-4" size="lg" className="textFont_P" href="/AU_Programs/France_montpellier-sports">
                                        Learn more
                                    </MDBBtn>
                                </MDBJumbotron>
                            </MDBCardBody>
                        </MDBCard>
                    </MDBContainer>
                </MobileView>

            </div>

        );
    }
}

export default UofMProgram_France;