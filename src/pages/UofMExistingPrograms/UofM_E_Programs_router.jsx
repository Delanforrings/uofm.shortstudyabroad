import React, { Component } from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import UofM_E_ProgramsHomePage from './UofM_E_Programs_Structure';
import UofM_E_Programs_US from './UofM_E_Programs_Structure_US';
import UofM_E_Programs_AO from './UofM_E_Programs_Structure_AO';
import UofM_E_Programs_EU from './UofM_E_Programs_Structure_EU';
import UofM_E_Programs_VC from './UofM_E_Programs_Structure_VC';
import UofM_E_Programs_Big10CIC from './UofM_E_Programs_Structure_Big10CIC';

class UofM_E_Programs_router extends React.Component {
    render (){
        return (
            <div>
                <Route exact path={this.props.match.path} component={UofM_E_ProgramsHomePage} />
                <Route path={`${this.props.match.path}/America`} component={UofM_E_Programs_US} />
                <Route path={`${this.props.match.path}/Asia&Oceania`} component={UofM_E_Programs_AO} />
                <Route path={`${this.props.match.path}/Europe`} component={UofM_E_Programs_EU} />
                <Route path={`${this.props.match.path}/VariousCountries`} component={UofM_E_Programs_VC} />
                <Route path={`${this.props.match.path}/Open_Big10_CIC`} component={UofM_E_Programs_Big10CIC} />
            </div>
        )
    }
}

export default UofM_E_Programs_router;


