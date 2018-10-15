import React, { Component } from 'react';
import { Route as AuthenticateLinks, BrowserRouter as Router, Switch, Redirect } from 'react-router-dom';
import Index from './dashboard/Index';
import Show from './dashboard/Show';
import Create from './dashboard/Create';
import Edit from './dashboard/Edit';
import NotFoundComponent from "./NotFoundComponent";

class DashboardComponent extends Component {


    render() {
        if(!window.token && localStorage.getItem('name') !== "" && localStorage.getItem('id') !== ""){
            return <Redirect to='/login' />;
        }  
        return (
            <Router basename="/dashboard">
                <Switch>
                    <AuthenticateLinks exact path="/" component={Index} /> 
                    <AuthenticateLinks path="/show/:id" component={Show} />
                    <AuthenticateLinks path="/create" component={Create} />
                    <AuthenticateLinks path="/edit/:id" component={Edit} />
                    <AuthenticateLinks path="*" component={NotFoundComponent} />
                </Switch>
            </Router>
        );
    }
}
export default DashboardComponent;