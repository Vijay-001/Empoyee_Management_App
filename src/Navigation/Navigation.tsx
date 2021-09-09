import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import AdminLogin from '../containers/AdminLogin/AdminLogin';
import ViewEmployee from '../containers/View_Employee/ViewEmployee';

const Navigation = () => (
  <Router>
    <Switch>
      <Route exact path="/viewemployee" component={ViewEmployee} />
      <Route exact path="/adminlogin" component={AdminLogin} />
      <Route path="*" component={AdminLogin} />
    </Switch>
  </Router>
);

export default Navigation;
