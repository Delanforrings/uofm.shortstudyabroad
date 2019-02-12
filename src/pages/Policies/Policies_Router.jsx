import React, { Component } from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import Policies_Home from './Policies';



class ProgramsRouter extends React.Component {
    render (){
        return (
            <div>
                <Route exact path={this.props.match.path} component={Policies_Home} />
                {/*<Route path={`${this.props.match.path}/Media`} component={ProgramMedia} />*/}

            </div>
        )
    }
}

export default ProgramsRouter;


