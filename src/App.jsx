import React, { Component } from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import './App.css';
import Program_Landing_Page from "./pages/Programs/Program_Landing_Page";
import UofM_Home from "./pages/Home/UofM_Home";
import UofM_About from "./pages/About/UofMAbout";
import UofM_Contact from "./pages/Contact/UofM_Contact";
import UofM_E_Programs_router from "./pages/UofMExistingPrograms/UofM_E_Programs_router";
import Policies_Router from "./pages/Policies/Policies_Router";
import UofM_Funding from "./pages/Funding/Funding";
import Reg_Credit from "./pages/Reg&Credit/Reg_Credit";
import UofM_StuStatus from "./pages/StudentStatus/Student_Status";
import UofM_Resources from "./pages/Resources/Resources";
import ProgramsSideBarRouter from "./pages/Programs/ProgramsSideBarRouter";

class App extends Component {
  render() {
    return (
        <Router>
            <div>

                <Route exact path="/" component={Program_Landing_Page} />
                <Route path="/UofM_Home" component={UofM_Home} />
                <Route path="/UofM_About" component={UofM_About}/>
                <Route path="/UofM_Contact" component={UofM_Contact}/>
                <Route path="/UofM_Programs" component={Program_Landing_Page}/>
                <Route path="/AU_Programs" component={ProgramsSideBarRouter}/>
                <Route path="/UofM_UofM_Existing_Programs" component={UofM_E_Programs_router}/>
                <Route path="/UofM_Policies" component={Policies_Router}/>
                <Route path="/UofM_Funding" component={UofM_Funding}/>
                <Route path="/UofM_R&C" component={Reg_Credit}/>
                <Route path="/UofM_StuStatus" component={UofM_StuStatus}/>
                <Route path="/UofM_Resources" component={UofM_Resources}/>

            </div>
        </Router>
    );
  }
}

export default App;
