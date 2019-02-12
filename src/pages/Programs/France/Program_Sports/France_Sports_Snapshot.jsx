import React, { Component } from 'react';
import '../UofMFrance.css';
import { MDBContainer } from 'mdbreact';

class UofMFrance extends React.Component {
    render() {
        return (
            <div id="programFrance">
                <MDBContainer>
                    <h1 className="colorChange">Sports & Culture in France: La vie sportive — Snapshot</h1>
                    <h2 className="colorChange">Program Details</h2>
                    <p>
                        Long known as one of France’s most sporty cities, Montpellier is a great place to learn about French sports culture. This course will cover such topics as sports tourism, sports psychology, and sports pedagogy.</p>
                    <br/>

                    <div>
                        <table className="v_table">
                            <tbody >
                            <tr>
                                <th className="textColor v_line">Location</th>
                                <td className="textSize "> Montpellier, France</td>
                            </tr>
                            <hr width="200%" className="hr_color"/>
                            <tr>
                                <th className="textSize textColor v_line">Term</th>
                                <td className="textSize"> Jan 17 to Feb 9 2020</td>
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

                </MDBContainer>
            </div>



    )
    }
}

export default UofMFrance;