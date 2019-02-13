import React, { Component } from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import Ecuador_Indigenours_Snapshot from "./Ecuador_Indigenous_Snapshot";
import Ecuador_Indigenous_Page_Structure_Snapshot from "./Ecuador_Indigenous_Page_Structure_Snapshot";
import Ecuador_Indigenous_Page_Structure_Media from "./Ecuador_Indigenous_Page_Structure_Media";
import Ecuador_Indigenous_Page_Structure_About from "./Ecuador_Indigenous_Page_Structure_About";
import Ecuador_Indigenous_Page_Structure_Academics from "./Ecuador_Indigenous_Page_Structure_Academics";
import Ecuador_Indigenous_Page_Structure_Dates from "./Ecuador_Indigenous_Page_Structure_Dates";
import Ecuador_Indigenous_Page_Structure_Fees from "./Ecuador_Indigenous_Page_Structure_Fees";
import Ecuador_Indigenous_Page_Structure_Contact from "./Ecuador_Indigenous_Page_Structure_Contact";
import Ecuador_Indigenous_Page_Structure_Apply from "./Ecuador_Indigenous_Page_Structure_Apply";
import Ecuador_Indigenous_Page_Structure_Contact_Alum from "./Ecuador_Indigenous_Page_Structure_Contact_Alum";



class Ecuador_Indigenous_SideBarRouter extends React.Component {
    render (){
        return (
            <div>
                <Route exact path={this.props.match.path} component={Ecuador_Indigenous_Page_Structure_Snapshot} />
                <Route path={`${this.props.match.path}/Media`} component={Ecuador_Indigenous_Page_Structure_Media} />
                <Route path={`${this.props.match.path}/About`} component={Ecuador_Indigenous_Page_Structure_About} />
                <Route path={`${this.props.match.path}/Academics`} component={Ecuador_Indigenous_Page_Structure_Academics} />
                <Route path={`${this.props.match.path}/Dates`} component={Ecuador_Indigenous_Page_Structure_Dates} />
                <Route path={`${this.props.match.path}/Fees`} component={Ecuador_Indigenous_Page_Structure_Fees} />
                <Route path={`${this.props.match.path}/Apply`} component={Ecuador_Indigenous_Page_Structure_Apply} />
                <Route path={`${this.props.match.path}/Contact`} component={Ecuador_Indigenous_Page_Structure_Contact} />
                <Route path={`${this.props.match.path}/Contact_Alum`} component={Ecuador_Indigenous_Page_Structure_Contact_Alum} />
            </div>
        )
    }
}

export default Ecuador_Indigenous_SideBarRouter;


