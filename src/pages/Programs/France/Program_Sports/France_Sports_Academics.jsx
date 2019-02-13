import React, { Component } from 'react';
import '../UofMFrance.css';
import { Table, TableBody, TableHead  } from 'mdbreact';

class UofMFrance_Academics extends React.Component {
    render() {
        return (
            <div id="programFrance">
                <h1 className="colorChange">Sports & Culture in France: La vie sportive — Academics</h1>
                <br/>
                <h2 className="colorChange">Program Structure</h2>
                <br/>
                <div>
                    <table className="v_table">
                        <tbody >
                        <tr>
                            <th className="textSize textColor v_line">Program Type</th>
                            <td className="textSize "> Instruction in English by French faculty</td>
                        </tr>
                        <hr width="200%" className="hr_color"/>
                        <tr>
                            <th className="textSize textColor v_line">Program Level</th>
                            <td className="textSize"> 3000 level courses</td>
                        </tr>
                        <hr width="200%" className="hr_color"/>
                        <tr>
                            <th className="textSize textColor v_line">Courseload</th>
                            <td className="textSize"> One 3-credit subject, 45 contact hours</td>
                        </tr>
                        </tbody>
                    </table>
                </div>
                <br/>
                <p>
                    This program focuses on the study of sports and sports culture from a French perspective. Course topics include: sports tourism, sports psychology and sports pedagogy. Afternoons are spent engaging in sports activities, often with a professional sports player, such as indoor soccer, lasertag, basketball, handball, rugby, trampolining. A multi-day trip to Paris is also offered.
                </p>
                <br/>
                <p>
                    See the previous example <a className="a_li_link" href="https://umabroad.umn.edu/assets/files/Syllabi/Montpellier/Sports2018%20%20program%C2%A0.pdf">schedule</a> for an overview of the program and activities involved.
                </p>
                <br/>
                <h2 className="colorChange">Coursework</h2>
                <br/>
                <Table>
                    <TableHead>
                        <tr>
                            <th className="a_link table_color">Sports & Culture in France</th>
                            <th className="a_link table_color">MONT 3701</th>
                        </tr>
                    </TableHead>
                    <TableBody>
                        <tr>
                            <td className="table_text textSize">January Session</td>
                            <td className="table_text textSize">3 Credits</td>
                        </tr>
                    </TableBody>
                </Table>
                <br/>
                <p>
                    Spend your morning examining sports, sports psychology and the nature of professional sports in France and then engage in a variety of sport activities in the afternoon. Classes are taught by University of Minnesota experts in the field.
                </p>
                <br/>
                <a className="a_link" href="#!">Syllabus for Sports & Culture in France (PDF)</a>
                <br/>


            </div>



        )
    }
}

export default UofMFrance_Academics;