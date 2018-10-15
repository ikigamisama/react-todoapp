import React, {Component} from 'react';
import {
    Container,Card,CardHeader, CardBody,Row,Col
} from 'reactstrap';
import TableList from './TableList';



export default class Main extends Component{
    constructor(){
        super();
        this.state = {
            all_todo_this_date:0,
            all_todo_check:0,
            all_todo_post:0,
            updateStat:false
        }
    }
    componentDidMount(){
        window.axios.get('/todo/charts')
        .then(response => {
            this.setState({
                all_todo_this_date:response.data.all_todo_this_date,
                all_todo_check:response.data.all_todo_check,
                all_todo_post:response.data.all_todo_post,
            })

        })
    }
    onUpdateStats = (data) => {
        this.setState({
            updateStat:data
        })

        if(this.state.updateStat === true){
            window.axios.get('/todo/charts')
            .then(response => {
                this.setState({
                    all_todo_this_date:response.data.all_todo_this_date,
                    all_todo_check:response.data.all_todo_check,
                    all_todo_post:response.data.all_todo_post,
                })
    
            })
        }
    }


    render(){
        return (
            <React.Fragment>
                <section className="main-dashboard-section">
                    <Container>
                        <Card>
                            <CardHeader className="card-header-section">Dashboard</CardHeader>
                            <CardBody>
                                <h1 className="text-center title-dashboard-card">Your Schedule for Today</h1>
                                <Row>
                                    <Col sm="12" md="12" lg="4">
                                        <Card body inverse color="primary" className="card-dashboard">
                                            <h5>On This Day</h5>
                                            <h1>{this.state.all_todo_this_date}</h1>
                                        </Card>
                                    </Col>
                                    <Col sm="12" md="12" lg="4">
                                        <Card body inverse color="info" className="card-dashboard">
                                            <h5>Checked</h5>
                                            <h1>{this.state.all_todo_check}</h1>
                                        </Card>
                                    </Col>
                                    <Col sm="12" md="12" lg="4">
                                        <Card body inverse color="danger" className="card-dashboard">
                                            <h5>Todo All Post</h5>
                                            <h1>{this.state.all_todo_post}</h1>
                                        </Card>
                                    </Col>
                                </Row>
                            </CardBody>
                        </Card>
                    </Container>
                </section>
                <section className="list-component-section">
                    <Container>
                        <Card>
                            <CardHeader className="card-header-section">Todo List</CardHeader>
                            <CardBody>
                                <div className="table-container">
                                    <TableList dataStatTodo={this.onUpdateStats}/>
                                </div>
                            </CardBody>
                        </Card>
                    </Container>
                </section>
                
            </React.Fragment>
        );
    }
}
