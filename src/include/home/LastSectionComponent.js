import React, {Component} from 'react';
import {
    Container,Button
} from 'reactstrap';

export default class MainSectionComponent extends Component{
    render(){
        return(
            <section className="last-main-section">
                <Container>
                    <div className="last-main-component text-center">
                        <h1>Unclutter your mind with Todolist</h1>
                        <Button className="button">
                            Get Started - It's Free
                        </Button>
                    </div>
                </Container>
            </section>
        )
    }
}