import React, { Component } from 'react';
import { Route as AuthenticateLinks, Switch } from 'react-router-dom';
import HomeComponent from '../components/HomeComponent';
import DashboardComponent from '../components/DashboardComponent';
import Login from '../components/user/Login';
import Register from '../components/user/Register';
import Logout from '../components/user/Logout';
import NotFoundComponent from '../components/NotFoundComponent';
import '../assets/css/dashboard.css';
import '../assets/css/main.css';
import '../assets/css/user.css';
import '../assets/css/notfound.css';


class MainRoute extends Component {
    render() {
        return (
            <React.Fragment>
                <Switch>
                    <AuthenticateLinks exact path="/" component={HomeComponent} />
                    <AuthenticateLinks path="/login" component={Login} />
                    <AuthenticateLinks path="/register" component={Register} />
                    <AuthenticateLinks path="/dashboard" component={DashboardComponent} />
                    <AuthenticateLinks path="/logout" component={Logout} />
                    <AuthenticateLinks path="*" component={NotFoundComponent} />
                </Switch>
            </React.Fragment>
        );
    }
}
export default MainRoute;