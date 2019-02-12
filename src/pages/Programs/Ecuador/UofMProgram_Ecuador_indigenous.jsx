import React from 'react';
import { MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBCardHeader, MDBCardFooter, MDBBtn, MDBContainer, MDBJumbotron, MDBMask } from
        "mdbreact";
import "../UofM_Program_Card.css";
import {BrowserView, MobileView} from "react-device-detect";

class UofMProgram_Ecuador_indigenous extends React.Component {
    render() {
        return (
            <div>
                <BrowserView>
                    <MDBContainer id="UofMProgram" className="textChange">
                        <MDBCard style={{ width: "45em", height:"32em",marginTop: "0rem"  }} className="text-center">
                            <MDBMask className="sa_color white-text textSize_li">
                                <MDBCardHeader>Featured</MDBCardHeader>
                            </MDBMask>

                            <MDBCardBody>
                                <MDBJumbotron style={{ height:"26em",marginTop: "0em"}}>
                                    <h1 className="h1-responsive textChange textSize_h">Indigenous Healing & Public Health in Ecuador</h1>
                                    <p className="lead">
                                        Learn about ancestral medicine and western health care systems from an intercultural perspective in Ecuador, a leader in the search for new development alternatives based on human and environmental rights.
                                    </p>
                                    <hr className="my-2" />
                                    <ul className="text-left textChange" style={{ listStyleType: "dot", padding: 0 }}>
                                        <li >
                                            <h6 className="textSize_li">
                                                Location: Ecuador
                                            </h6>
                                        </li>
                                        <li>
                                            <h6 className="textSize_li">
                                                Term: 19th Jan - 9th Feb, 2020 (TBC)
                                            </h6>
                                        </li>
                                        <li>
                                            <h6 className="textSize_li">
                                                Period: 3 weeks
                                            </h6>
                                        </li>
                                        <li>
                                            <h6 className="textSize_li">
                                                Fees: TBC
                                            </h6>
                                        </li>
                                    </ul>
                                    <MDBBtn color="red darken-4" size="sm" className="textFont_P" href="/UofM/Program/Ecuador">
                                        Learn more
                                    </MDBBtn>
                                </MDBJumbotron>
                            </MDBCardBody>
                        </MDBCard>
                    </MDBContainer>
                </BrowserView>
                <MobileView>
                    <MDBContainer id="UofMProgram" className="textChange">
                        <MDBCard style={{ width: "35em", marginTop: "0rem" }} className="text-center">
                            <MDBMask className="sa_color white-text textSize_li">
                                <MDBCardHeader>Featured</MDBCardHeader>
                            </MDBMask>

                            <MDBCardBody>
                                <MDBJumbotron>
                                    <h1 className="h1-responsive textChange textSize_h">Indigenous Healing & Public Health in Ecuador</h1>
                                    <p className="lead">
                                        Learn about ancestral medicine and western health care systems from an intercultural perspective in Ecuador, a leader in the search for new development alternatives based on human and environmental rights.
                                    </p>
                                    <hr className="my-2" />
                                    <ul className="text-left textChange" style={{ listStyleType: "dot", padding: 0 }}>
                                        <li >
                                            <h6 className="textSize_li">
                                                Location: Ecuador
                                            </h6>
                                        </li>
                                        <li>
                                            <h6 className="textSize_li">
                                                Term: 19th Jan - 9th Feb, 2020 (TBC)
                                            </h6>
                                        </li>
                                        <li>
                                            <h6 className="textSize_li">
                                                Period: 3 weeks
                                            </h6>
                                        </li>
                                        <li>
                                            <h6 className="textSize_li">
                                                Fees: TBC
                                            </h6>
                                        </li>
                                    </ul>
                                    <MDBBtn color="red darken-4" size="sm" className="textFont_P" href="/UofM/Program/Ecuador">
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

export default UofMProgram_Ecuador_indigenous;