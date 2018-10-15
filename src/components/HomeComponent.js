import React, {Component} from 'react';
import Header from '../include/home/Header';
import MainSectionComponent from '../include/home/MainSectionComponent';
import SubMainSectionComponent from '../include/home/SubMainSectionComponent';
import LastSectionComponent from '../include/home/LastSectionComponent';
import Footer from '../include/home/Footer';


class HomeComponent extends Component{
    constructor(props){
        super(props);
        document.title = "TodoList - The best Todo List Application";
    }
    render(){
        return (
            <React.Fragment>
                <Header />
                <MainSectionComponent  />
                <SubMainSectionComponent  />
                <LastSectionComponent />
                <Footer />
            </React.Fragment>
        );
    }
}

export default HomeComponent;