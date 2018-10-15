import React, { Component } from 'react';
import Header from '../../include/dashboard/Header';
import { Button, Form, FormGroup, Label, Input, Container,Card,CardHeader, CardBody, Row, Col, Alert} from 'reactstrap';


const AlertCreated = (props) => (
	<Alert color="success" className={props.onDisplayAlert}>
		Todo Success Created
	</Alert>
)

class Create extends Component {
    constructor(props){
        super(props);
		document.title = "Create Todo List";
		this.state = {
            title_todo_app:"",
			todo_app_description:"",
			date_todoapp:"",
			time_todoapp:"",
			isCreated:false,
			alertPop:"d-none"
        }
    }
    createTodoApp = (evt) => {
		evt.preventDefault();
		let dataPost = {
			todo_name:this.state.title_todo_app,
			todo_description:this.state.title_todo_app,
			user_id:window.app.id,
			todo_date:this.state.date_todoapp,
			todo_time:this.state.time_todoapp,
			is_already_todo:"false"
		};
		window.axios.post('/todo',dataPost)
		.then(response => {
			if(response.statusText === "Created"){
				this.setState({
					isCreated:true,
					alertPop:"d-block"
				})
			}
		})
	}
	createTodoAppOnChange = (evt) => {
		let target = evt.target,
		value = target.value,
		name = target.name;

		this.setState({
			[name] : value
		});

	}
    render() {
        return (
          <React.Fragment>
          	<Header />
          	<section className="form-section">
          		<Container>
					<AlertCreated successCreate={this.state.isCreated} onDisplayAlert={this.state.alertPop}/>
          			<Card>
          				<CardHeader  className="card-header-section">Create Todo</CardHeader>
          				<CardBody>
          					<Form method="post" onSubmit={this.createTodoApp.bind(this)}>
			          			<FormGroup>
						          <Label for="title_todo_app">Title</Label>
						          <Input type="text" name="title_todo_app" id="title_todo_app" placeholder="Title" value={this.state.title_todo_app} onChange={this.createTodoAppOnChange.bind(this)}/>
						        </FormGroup>
						        <FormGroup>
						          <Label for="todo_app_description">Description</Label>
						          <Input type="textarea" name="todo_app_description" id="todo_app_description" className="form-textarea" value={this.state.todo_app_description} onChange={this.createTodoAppOnChange.bind(this)}/>
						        </FormGroup>
						        <Row form>	
						        	<Col sm="12" md="12" lg="6">
						        		 <FormGroup>
								          	<Label for="date_todoapp">Date</Label>
								          	<Input type="date" name="date_todoapp" id="date_todoapp" value={this.state.date_todoapp} onChange={this.createTodoAppOnChange.bind(this)} />
								        </FormGroup>
						        	</Col>
						        	<Col sm="12" md="12" lg="6">
						        		<FormGroup>
								          	<Label for="time_todoapp">Time</Label>
								          	<Input type="time" name="time_todoapp" id="time_todoapp"  value={this.state.time_todoapp} onChange={this.createTodoAppOnChange.bind(this)}/>
								        </FormGroup>
						        	</Col>
						        </Row>	
						        <FormGroup>
						        	<Button color="primary">SUBMIT</Button>
						        </FormGroup>
			          		</Form>
          				</CardBody>
          			</Card>
          		</Container>
          	</section>	
          </React.Fragment>
        );
    }
}

export default Create;