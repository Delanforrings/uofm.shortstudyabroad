import React, { Component } from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import ProgramsSnapshot from './France_Page_Structure_Snapshot';
import ProgramMedia from './France_Page_Structure_Media';
import ProgramAbout from './France_Page_Structure_About';
import ProgramAcademics from './France_Page_Structure_Academics';
import ProgramDates from './France_Page_Structure_Dates';
import ProgramFees from './France_Page_Structure_Fees';
import ProgramApply from './France_Page_Structure_Apply';
import ProgramContact from './France_Page_Structure_Contact';
import ProgramContactAlum from './France_Page_Structure_Contact_Alum';


class ProgramsRouter extends React.Component {
    render (){
        return (
            <div>
                <Route exact path={this.props.match.path} component={ProgramsSnapshot} />
                <Route path={`${this.props.match.path}/Media`} component={ProgramMedia} />
                <Route path={`${this.props.match.path}/About`} component={ProgramAbout} />
                <Route path={`${this.props.match.path}/Academics`} component={ProgramAcademics} />
                <Route path={`${this.props.match.path}/Dates`} component={ProgramDates} />
                <Route path={`${this.props.match.path}/Fees`} component={ProgramFees} />
                <Route path={`${this.props.match.path}/Apply`} component={ProgramApply} />
                <Route path={`${this.props.match.path}/Contact`} component={ProgramContact} />
                <Route path={`${this.props.match.path}/Contact_Alum`} component={ProgramContactAlum} />
            </div>
        )
    }
}

export default ProgramsRouter;


