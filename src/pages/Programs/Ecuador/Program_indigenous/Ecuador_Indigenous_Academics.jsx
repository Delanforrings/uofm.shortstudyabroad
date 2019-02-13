import React, { Component } from 'react';
import '../UofMEcuador.css';
import { Table, TableBody, TableHead  } from 'mdbreact';
import Pdf from './Ecuador_schedule.pdf';

class Ecuador_Indigenous_Academics extends React.Component {
    render() {
        return (
            <div id="programEcuador">
                <h1 className="colorChange">Indigenous Healing & Public Health in Ecuador — Academics</h1>
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
                    This program provides students a perspective about ancestral medicine and western health care system from an intercultural perspective in Ecuador. The students will learn about traditional Andean medical practices, indigenous worldview and the organization of the western health systems in Ecuador. The students will participate in field observations of public and private hospitals, indigenous ancestral medical practices and discuss the limitations, possibilities and challenges of the integration of western and ancestral medical practices. The students will learn the relationship between social determinants and health disparities, through a holistic, interdisciplinary and intercultural approach. Ecuador provides a great case study, due to its environmental, social, cultural diversity, and because they are leading the search for new development alternatives based on human and environmental rights.
                </p>
                <br/>
                <p>
                    See the DRAFT <a className="a_li_link" href={Pdf} target="_blank">schedule</a> for an example of the program and activities involved.
                </p>
                <br/>
                <h2 className="colorChange">Coursework</h2>
                <br/>
                <Table>
                    <TableHead>
                        <tr>
                            <th className="a_link table_color">Indigenous Healing & Public Health in Ecuador</th>
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
                <a className="a_link" href="#!">Syllabus for Indigenous Healing & Public Health in Ecuador (PDF)</a>
                <br/>


            </div>



        )
    }
}

export default Ecuador_Indigenous_Academics;