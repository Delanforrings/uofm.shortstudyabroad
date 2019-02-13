import React, {Component} from 'react';
import {MDBContainer, MDBRow, MDBCol, MDBView} from 'mdbreact';
import Structure from './Ecuador_Indigenous_Page_Structure_Snapshot';
import "../UofMEcuador.css";

class Ecuador_Indigenours_Snapshot extends React.Component {
    render() {
        return (
            <div id="programEcuador">
                <MDBContainer>
                    <MDBRow>
                        <MDBCol>
                            <h1 className="colorChange">Indigenous Healing & Public Health in Ecuador — Snapshot</h1>
                            <h2 className="colorChange">Program Details</h2>
                            <p>
                                Ecuador consists of 14 nationalities and 18 indigenous groups, turning it into a multiethnic and multicultural country.
                            </p>
                            <br/>

                            <div>
                                <table className="v_table">
                                    <tbody >
                                    <tr>
                                        <th className="textColor v_line">Location</th>
                                        <td className="textSize "> Quito, Ecuador</td>
                                    </tr>
                                    <hr width="200%" className="hr_color"/>
                                    <tr>
                                        <th className="textSize textColor v_line">Term</th>
                                        <td className="textSize"> 19th January – 9th February, 2020</td>
                                    </tr>
                                    <hr width="200%" className="hr_color"/>
                                    <tr>
                                        <th className="textSize textColor v_line">Housing</th>
                                        <td className="textSize"> Apartment</td>
                                    </tr>
                                    <hr width="200%" className="hr_color"/>
                                    <tr>
                                        <th className="textSize textColor v_line">Credit Type</th>
                                        <td className="textSize"> 3 Credits</td>
                                    </tr>
                                    <hr width="200%" className="hr_color"/>
                                    </tbody>
                                </table>
                            </div>
                            <br/>
                            <h2 className="colorChange">Program Eligibility</h2>
                            <br/>
                            <table className="v_table">
                                <tbody>
                                <tr>
                                    <th className="textSize textColor v_line">GPA</th>
                                    <td className="textSize"> 2.5</td>
                                </tr>
                                <hr width="200%" className="hr_color"/>
                                <tr>
                                    <th className="textSize textColor v_line">Student Type</th>
                                    <td className="textSize"> UofM Students, Non UofM Students</td>
                                </tr>
                                <hr width="200%" className="hr_color"/>
                                <tr>
                                    <th className="textSize textColor v_line">Student Year</th>
                                    <td className="textSize"> Freshmen, Sophomores, Juniors, Seniors</td>
                                </tr>
                                <hr width="200%" className="hr_color"/>
                                <tr>
                                    <th className="textSize textColor v_line">Language</th>
                                    <td className="textSize"> No language prerequisite</td>
                                </tr>
                                <hr width="200%" className="hr_color"/>
                                </tbody>
                            </table>
                        </MDBCol>
                    </MDBRow>
                </MDBContainer>


            </div>
        )
    }
}

export default Ecuador_Indigenours_Snapshot;