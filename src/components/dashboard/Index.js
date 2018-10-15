import React, { Component } from 'react';
import Header from '../../include/dashboard/Header';
import Main from '../../include/dashboard/Main';;

export default class Index extends Component {
    constructor(){
        super();
        document.title = "Dashboard";
    }
    render() {
        return (
            <React.Fragment>
                <Header />
                <Main />
            </React.Fragment>
        )
    }
}