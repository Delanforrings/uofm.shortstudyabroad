import React, { Component } from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import ProgramsHome from './Program_Cards_Collection/UofMPrograms_All';
import Programs_Featured from './Program_Cards_Collection/UofMPrograms_Featured';
import Programs_AM from './Program_Cards_Collection/UofMPrograms_AM';
import UofMPrograms_US from "./Program_Cards_Collection/UofMPrograms_US";

import Programs_SideBar_France from "./France/Program_Sports/SideBarRouter";
import UofMPrograms_AO from "./Program_Cards_Collection/UofMPrograms_AO";
import UofMPrograms_EU from "./Program_Cards_Collection/UofMPrograms_EU";
import UofMPrograms_VC from "./Program_Cards_Collection/UofMPrograms_VC";
import Ecuador_Indigenous_SideBarRouter from "./Ecuador/Program_indigenous/Ecuador_Indigenous_SideBarRouter";
import Ecuador_biodiversity_SideBarRouter from "./Ecuador/Program_biodiversity/Ecuador_biodiversity_SideBarRouter";





class ProgramsSideBarRouter extends React.Component {
    render (){
        return (
            <div>
                {/*Side bar routing*/}
                <Route exact path={this.props.match.path} component={ProgramsHome} />
                <Route path={`${this.props.match.path}/Featured`} component={Programs_Featured} />
                <Route path={`${this.props.match.path}/Africa_MidEast`} component={Programs_AM} />
                <Route path={`${this.props.match.path}/America`} component={UofMPrograms_US} />
                <Route path={`${this.props.match.path}/Asia_Oceania`} component={UofMPrograms_AO} />
                <Route path={`${this.props.match.path}/Europe`} component={UofMPrograms_EU} />
                <Route path={`${this.props.match.path}/VariousCountries`} component={UofMPrograms_VC} />


                {/*Programs routing*/}
                <Route path={`${this.props.match.path}/France_montpellier-sports`} component={Programs_SideBar_France} />
                <Route path={`${this.props.match.path}/Ecuador_quito_indigenous`} component={Ecuador_Indigenous_SideBarRouter} />
                <Route path={`${this.props.match.path}/Ecuador_quito_biodiversity`} component={Ecuador_biodiversity_SideBarRouter} />


            </div>
        )
    }
}

export default ProgramsSideBarRouter;


