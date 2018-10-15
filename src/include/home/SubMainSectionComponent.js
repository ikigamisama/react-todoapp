import React, {Component} from 'react';
import {
    Container,Row,Col
} from 'reactstrap';
import SubMainSectionIMG from '../../assets/img/main2-section.png'
export default class MainSectionComponent extends Component{
    render(){
        return(
            <section className="sub-main-section">
                <Container>
                    <Row>
                        <Col sm="12" md="12" lg="6">
                            <div className="left-sub-main-section-component">
                                <img src={SubMainSectionIMG} alt=""/>
                            </div>
                        </Col>
                        <Col sm="12" md="12" lg="6">
                            <div className="right-sub-main-section-component">
                                <h1 className="title">
                                    Never worry about forgetting things again
                                </h1>
                                <p>
                                Let Todoist remember it all for you. You can get tasks out of your head and onto your to-do list anytime, anywhere, on any device – even offline.
                                </p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        )
    }
}


