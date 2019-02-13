import React, { Component } from 'react';
import '../UofMEcuador.css';
import { Table, TableBody, TableHead  } from 'mdbreact';

class Ecuador_biodiversity_Dates extends React.Component {
    render() {
        return (
            <div id="programEcuador">
                <h1 className="colorChange">Biodiversity in Ecuador Program — Dates</h1>
                <br/>
                <h2 className="colorChange">Dates & Deadlines</h2>
                <br/>
                <p>
                    Submit the online application and Complete the assigned application checklist according to the appropriate deadline.
                </p>
                <br/>
                <br/>
                <div>
                    <Table borderless>
                        <TableHead>
                            <tr>
                                <th className="textSize table_color">Term</th>
                                <th className="textSize table_color">App Open Date</th>
                                <th className="textSize table_color">Application Deadline</th>
                            </tr>
                        </TableHead>
                        <TableBody >
                            <tr>
                                <td className="textSize textColor">January 2020</td>
                                <td className="textSize textColor"> TBC</td>
                                <td className="textSize textColor"> TBC</td>
                            </tr>
                            <tr>
                                <td className="textSize">Depart Australia/Arrive in Ecuador</td>
                                <td className="textSize"> </td>
                                <td className="textSize">TBC</td>
                            </tr>

                            <tr>
                                <td className="textSize">free weekend
                                    (no scheduled activities)</td>
                                <td className="textSize"> </td>
                                <td className="textSize"> TBC</td>
                            </tr>
                            <tr>
                                <td className="textSize">Program Ends</td>
                                <td className="textSize"> </td>
                                <td className="textSize"> TBC</td>
                            </tr>
                            <tr>
                                <td className="textSize">Departure</td>
                                <td className="textSize"> </td>
                                <td className="textSize"> TBC</td>
                            </tr>
                        </TableBody>
                    </Table>
                </div>
                <br/>

                <h2 className="colorChange">Orientation Dates & Locations</h2>
                <br/>
                <p>
                    Orientation will be conducted in 2 parts: an online orientation, which is mandatory for all students, and an in-person, program-specific session. You will receive more information about the online orientation via email. Failure to complete the online orientation will impact your ability to go abroad.
                </p>
                <br/>
                <p>
                    See below for tentative dates and times for your in-person session. You will be notified of the official date and time via email. Participants will receive applicable orientation materials via email approximately 1 week prior to the in-person session.
                </p>
                <br/>
                <Table borderless>
                    <TableHead>
                        <tr>
                            <th className="textSize table_color">Term</th>
                            <th className="textSize table_color">Date/Time</th>
                            <th className="textSize table_color">Location</th>
                        </tr>
                    </TableHead>
                    <TableBody >
                        <tr>
                            <td className="textSize">January 2020</td>
                            <td className="textSize">TBD</td>
                            <td className="textSize">TBD</td>
                        </tr>
                    </TableBody>
                </Table>

            </div>



        )
    }
}

export default Ecuador_biodiversity_Dates;