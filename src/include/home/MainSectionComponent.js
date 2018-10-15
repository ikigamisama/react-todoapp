import React, {Component} from 'react';
import {
    Container,Row,Col,Button
} from 'reactstrap';
import MainSectionIMG from '../../assets/img/main-section.png'


export default class MainSectionComponent extends Component{
    render(){
        return(
            <section className="main-section">
                <Container>
                    <Row>
                        <Col sm="12" md="12" lg="6">
                            <div className="left-main-section-component">
                                <h1 className="title">
                                    Organized life
                                    <span>
                                        Then go enjoy it…
                                    </span>
                                </h1>
                                <p>
                                    Life can feel overwhelming, but it doesn’t have to. Todoist lets you keep track of everything in one place, so you can get it all done and enjoy more peace of mind along the way.
                                </p>
                                <Button className="button">
                                    Get Started - It's Free
                                </Button>
                            </div>
                        </Col>
                        <Col sm="12" md="12" lg="6">
                            <div className="right-main-section-component">
                                <img src={MainSectionIMG} alt="" />
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        )
    }
}


