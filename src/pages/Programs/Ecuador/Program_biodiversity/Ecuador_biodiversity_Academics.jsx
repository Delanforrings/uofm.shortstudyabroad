import React, { Component } from 'react';
import '../UofMEcuador.css';
import { Table, TableBody, TableHead  } from 'mdbreact';
import Pdf_1 from './schedule_with_g.pdf';
import Pdf_2 from './schedule_without_g.pdf';

class Ecuador_biodiversity_Academics extends React.Component {
    render() {
        return (
            <div id="programEcuador">
                <h1 className="colorChange">Biodiversity in Ecuador — Academics</h1>
                <br/>
                <h2 className="colorChange">Program Structure</h2>
                <br/>
                <div>
                    <table className="v_table">
                        <tbody >
                        <tr>
                            <th className="textSize textColor v_line">Program Type</th>
                            <td className="textSize "> TBC</td>
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
                    This program promotes that students have an experience in contact with nature,
                    understanding it as an active subject that interacts and manifests itself in different ways in
                    their lifes. The program makes a theoretical review of basic concepts of forest ecology and
                    agroecology; starting from a practical approach that allows students to understand the
                    dynamics of the ecosystem under study. And learn about the importance of Ecuador's
                    biological and cultural mega-diversity.
                </p>
                <br/>
                <p>
                    See the DRAFT <a className="a_li_link" href={Pdf_1} target="_blank">schedule</a> with Galapagos and <a className="a_li_link" href={Pdf_2} target="_blank">schedule</a> without Galapagos for the examples of the program and activities involved.
                </p>
                <br/>
                <h2 className="colorChange">Coursework</h2>
                <br/>
                <Table>
                    <TableHead>
                        <tr>
                            <th className="a_link table_color">Biodiversity in Ecuador</th>
                            <th className="a_link table_color">TBC</th>
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
                {/*<p>*/}
                    {/*Spend your morning examining sports, sports psychology and the nature of professional sports in France and then engage in a variety of sport activities in the afternoon. Classes are taught by University of Minnesota experts in the field.*/}
                {/*</p>*/}
                <br/>
                <a className="a_link" href="#!">Syllabus for Biodiversity in Ecuador (PDF)</a>
                <br/>


            </div>



        )
    }
}

export default Ecuador_biodiversity_Academics;