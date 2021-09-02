
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import AdminLogin from '../containers/AdminLogin/AdminLogin';
import SignUp from '../containers/Signup/SignUp';
import ViewEmployeeDetails from '../containers/View_Employee/ViewEmployee';





const Navigation: React.FC<{}> = props => {

    return (
        <Router>
            <Switch>
                <Route exact path="/viewemployeedetails" component={ViewEmployeeDetails} />
                <Route exact path="/adminlogin" component={AdminLogin} />
                <Route exact path="/signup" component={SignUp} />
                <Route path='*' component={AdminLogin} />
            </Switch>
        </Router>

    )

}


export default Navigation;