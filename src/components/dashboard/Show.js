import React, { Component } from 'react';
import Header from '../../include/dashboard/Header';
import {
    Container,Card,CardHeader, CardBody, Button
} from 'reactstrap';

class Show extends Component {
    constructor(props){
        super(props);
        document.title = "Show Todo";
        console.log(this.props.match.params.id);
    }
    render() {
        return (
            <React.Fragment>
                 <Header />
                <section className="show-todo">
                    <Container>
                        <Card>
                            <CardHeader className="card-not-ondate-todo">
                                Todo
                            </CardHeader>
                            <CardBody>
                                <h1>Wilmer Bradtke</h1>
                                <p>Temporibus ducimus pariatur illo et deserunt eum et. Recusandae labore et sapiente ullam aperiam. Sit illum vel nostrum possimus omnis tempore. Eum nihil eum quasi placeat omnis aspernatur.</p>
                                <small>Written on 2018-10-10 02:26:05 by Franz Monzales</small>
                                
                            </CardBody>
                        </Card>
                        <Card  >
                            <CardHeader className="card-header-section">
                                Options
                            </CardHeader>
                            <CardBody>
                                <div className="form-check">
                                  <input className="form-check-input" type="checkbox" value="" id="if_checked_todo" />
                                  <label className="form-check-label" htmlFor="if_checked_todo">
                                    Already Done
                                  </label>
                                </div>
                                <p className="show-dashboard-button-list">
                                    <Button color="info">Edit</Button>
                                    <Button color="danger" className="float-right">Delete</Button>
                                </p>
                            </CardBody>
                        </Card>
                    </Container>
                </section>
            </React.Fragment>
        )
    }
}


export default Show;