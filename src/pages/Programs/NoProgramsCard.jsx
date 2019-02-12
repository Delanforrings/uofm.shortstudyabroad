import React from 'react';
import { MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBCardHeader, MDBCardFooter, MDBBtn, MDBContainer, MDBJumbotron, MDBMask } from
        "mdbreact";
import "./UofM_Program_Card.css";

import {BrowserView, MobileView} from "react-device-detect";



class NoProgramsCard extends React.Component {

    render() {
        return (
            <div>
                <BrowserView>
                    <MDBContainer id="UofMProgram" className="textFont_P">
                        <MDBCard style={{ width: "45em", height:"21em",marginTop: "0rem" }} className="text-center">
                            <MDBMask className="noProgarms_color">
                                <MDBCardHeader className="textColor textSize_li">Not Available Yet</MDBCardHeader>
                            </MDBMask>
                            <MDBCardBody>
                                <MDBJumbotron style={{  height:"15em",marginTop: "0em" }}>
                                    <h1 className="h1-responsive textChange textSize_h">Please find more exciting programs in other places</h1>
                                    <p className="lead">
                                       The exciting programs in this region are coming soon!
                                    </p>
                                    <hr className="my-2" />
                                    <MDBBtn color="red darken-4" size="sm" className="textFont_P" href="/UofM/Programs">
                                        Go find other programs
                                    </MDBBtn>
                                </MDBJumbotron>
                            </MDBCardBody>
                        </MDBCard>
                    </MDBContainer>
                </BrowserView>

                <MobileView>
                    <MDBContainer id="UofMProgram" className="textFont_P">
                        <MDBCard style={{ width: "35em", marginTop: "0rem" }} className="text-center">
                            <MDBMask className="noProgarms_color">
                                <MDBCardHeader className="textColor textSize_li">Not Available Yet</MDBCardHeader>
                            </MDBMask>
                            <MDBCardBody>
                                <MDBJumbotron>
                                    <h1 className="h1-responsive textChange textSize_h">Please find more exciting programs in other places</h1>
                                    <p className="lead">
                                        The exciting programs in this region are coming soon!
                                    </p>
                                    <hr className="my-2" />
                                    <MDBBtn color="red darken-4" size="lg" className="textFont_P" href="/UofM/Programs/France_montpellier-sports">
                                        Go find other programs
                                    </MDBBtn>
                                </MDBJumbotron>
                            </MDBCardBody>
                            <MDBMask className="noProgarms_color textColor textSize_li">
                                <MDBCardFooter></MDBCardFooter>
                            </MDBMask>

                        </MDBCard>
                    </MDBContainer>
                </MobileView>

            </div>

        );
    }
}

export default NoProgramsCard;