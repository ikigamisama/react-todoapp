import React, {Component} from 'react';
import { BrowserRouter as Router, } from 'react-router-dom';
import MainRoute from '../router/MainRoute';

class MainComponent extends Component{
    render(){
        return (
            <Router basename="/">
               <MainRoute />
            </Router>
        )
    }
}

export default MainComponent; 