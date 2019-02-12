import React, { Component } from 'react';
import './UofMArgentina.css';

class UofM_Argentina extends React.Component {
    render() {
        return (
            <div id="programArgentina">

                <h1 className="colorChange">Argentina</h1>
                <h2 className="colorChange">Program Details</h2>
                <p>
                    Explore the vibrant, cosmopolitan atmosphere of Buenos Aires, a city of 15.5 million porteños. Focus on intensive Spanish, business, global studies, psychology, or more to expand your Argentine knowledge beyond tango and fútbol.
                </p>
                <br/>

                <div>
                    <table className="v_table">
                        <tbody >
                        <tr>
                            <th className="textSize textColor v_line">Location</th>
                            <td className="textSize "> Buenos Aires, Argentina</td>
                        </tr>
                        <hr width="400%"/>
                        <tr>
                            <th className="textSize textColor v_line">Term</th>
                            <td className="textSize"> Fall Semester, Spring Semester, Winter Break, Summer Session, Academic Year, May Session</td>
                        </tr>
                        <hr width="400%"/>
                        <tr>
                            <th className="textSize textColor v_line">Housing</th>
                            <td className="textSize"> Homestay</td>
                        </tr>
                        <hr width="400%"/>
                        <tr>
                            <th className="textSize textColor v_line">Credit Type</th>
                            <td className="textSize"> Resident Credit</td>
                        </tr>
                        <hr width="400%"/>
                        <tr>
                            <th className="textSize textColor v_line">Sponsor</th>
                            <td className="textSize"> Learning Abroad Center</td>
                        </tr>
                        <hr width="400%"/>
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
                    <hr width="400%"/>
                    <tr>
                        <th className="textSize textColor v_line">Student Type</th>
                        <td className="textSize"> UofM Students, Non UofM Students</td>
                    </tr>
                    <hr width="400%"/>
                    <tr>
                        <th className="textSize textColor v_line">Student Year</th>
                        <td className="textSize"> Freshmen, Sophomores, Juniors, Seniors</td>
                    </tr>
                    <hr width="400%"/>
                    <tr>
                        <th className="textSize textColor v_line">Language</th>
                        <td className="textSize"> No language pre-requisite for semester or summer terms, 2 semesters of college-level Spanish required for winter break</td>
                    </tr>
                    <hr width="400%"/>
                    </tbody>
                </table>

            </div>



        )
    }
}

export default UofM_Argentina;