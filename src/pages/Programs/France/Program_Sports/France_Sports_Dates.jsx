import React, { Component } from 'react';
import '../UofMFrance.css';
import { Table, TableBody, TableHead  } from 'mdbreact';

class UofMFrance_Dates extends React.Component {
    render() {
        return (
            <div id="programFrance">
                <h1 className="colorChange">Sports & Culture in France: La vie sportive — Dates</h1>
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
                                <td className="textSize textColor">January Session 2019</td>
                                <td className="textSize textColor"> TBC</td>
                                <td className="textSize textColor"> TBC</td>
                            </tr>
                            <tr>
                                <td className="textSize">Depart U.S./Arrive in Montpellier</td>
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
                <p className="text_note">
                    *Applications after this deadline may be considered. Contact Maria Mantey at mant0023@umn.edu to inquire.
                </p>
                <p className="text_note">
                    **If the deadline falls on a weekend, submit your materials on the following business day.
                </p>
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
                            <td className="textSize">May Session 2019</td>
                            <td className="textSize">TBD</td>
                            <td className="textSize">TBD</td>
                        </tr>
                    </TableBody>
                </Table>

            </div>



        )
    }
}

export default UofMFrance_Dates;