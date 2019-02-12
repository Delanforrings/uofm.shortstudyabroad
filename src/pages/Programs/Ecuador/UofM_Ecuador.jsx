import React, { Component } from 'react';
import './UofMEcuador.css';

class UofMEcuador extends React.Component {
    render() {
        return (
            <div id="programEcuador">
                <h1 className="colorChange">Ecuador</h1>
                <h2 className="colorChange">Program Details</h2>
                <p>
                    Study international development in Ecuador—a blend of indigenous and Spanish colonial—while improving your Spanish language skills. You’ll also contribute through an internship or research project with a nonprofit organization while you are there. Explore the complexities created by issues such as the environment, globalization, public health, and social justice.
                </p>
                <br/>

                <div>
                    <table className="v_table">
                        <tbody >
                        <tr>
                            <th className="textSize textColor v_line">Location</th>
                            <td className="textSize "> Quito and other locations, Ecuador</td>
                        </tr>
                        <hr width="400%"/>
                        <tr>
                            <th className="textSize textColor v_line">Term</th>
                            <td className="textSize"> Fall Semester, Spring Semester, Summer Session, Academic Year</td>
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
                        <td className="textSize"> Juniors, Seniors</td>
                    </tr>
                    <hr width="400%"/>
                    <tr>
                        <th className="textSize textColor v_line">Language</th>
                        <td className="textSize"> Minimum 4 semesters college-level Spanish</td>
                    </tr>
                    <hr width="400%"/>
                    </tbody>
                </table>

            </div>



        )
    }
}

export default UofMEcuador;