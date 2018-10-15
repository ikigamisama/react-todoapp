import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

export default class Logout extends Component{
    componentDidMount(){
        localStorage.removeItem('token');
        localStorage.removeItem('id');
        localStorage.removeItem('name');
        window.token = "";
        window.app.id = "";
        window.app.user = "";
    }
    render(){
        return <Redirect to='/login' />;
    }
}