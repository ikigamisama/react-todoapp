import React, { Component } from 'react';
import Header from '../../include/dashboard/Header';
import { Button, Form, FormGroup, Label, Input, Container,Card,CardHeader, CardBody, Row, Col, Alert} from 'reactstrap';



const ChangeStatusTodoApp = (props) => (
	<Alert color="success" className={props.onDisplayAlert}>
		Todo Success Edited
	</Alert>
)
class Create extends Component {
    constructor(props){
        super(props);
		document.title = "Create Todo List";
		this.state = {
            todo_id:"",
			edit_title_todo_app:"",
			edit_todo_app_description:"",
			edit_date_todoapp:"",
			edit_time_todoapp:'',
			edit_todo_status:"",
			alertPop:"d-none"
        }
	}
	componentDidMount(){
		window.axios.get('/todo/'+this.props.match.params.id)
		.then(response => {
			this.setState({
                todo_id:response.data.data.id,
				edit_title_todo_app:response.data.data.todo,
				edit_todo_app_description:response.data.data.description,
				edit_date_todoapp:response.data.data.date,
				edit_time_todoapp:response.data.data.time,
				edit_todo_status:response.data.data.status
			})
		})
		
	}
    editTodoApp = (evt) => {
		evt.preventDefault();
		let isChecked = this.state.edit_todo_status;

		let dataPost = {
			todo_name:this.state.edit_title_todo_app,
			todo_description:this.state.edit_todo_app_description,
			user_id:window.app.id,
			todo_date:this.state.edit_date_todoapp,
			todo_time:this.state.edit_time_todoapp,
			is_already_todo:isChecked
		};
		window.axios.patch('/todo/'+this.props.match.params.id,dataPost)
		.then(response => {
			if(response.data.message === "Successful Update"){
				this.setState({
					alertPop:"d-block"
				})
			}
		})
	}
	editTodoAppOnChange = (evt) => {
		let target = evt.target,
		value = target.value,
		name = target.name;

		this.setState({
			[name] : value
		});
		
	}
	editCheckedAlreadyTodo = (evt) => {
		let target = evt.target,
			value =  target.checked;
		
		this.setState({
			edit_todo_status : value.toString()
		});

	}
    render() {
        return (
          <React.Fragment>
          	<Header />
          	<section className="form-section">
          		<Container>
          			<Card>
          				<CardHeader  className="card-header-section">Edit Todo</CardHeader>
          				<CardBody>
						  	<ChangeStatusTodoApp onDisplayAlert={this.state.alertPop}/>
          					<Form onSubmit={this.editTodoApp.bind(this)}>
			          			<FormGroup>
						          <Label for="edit_title_todo_app">Title</Label>
						          <Input type="text" name="edit_title_todo_app" id="edit_title_todo_app" placeholder="Title" value={this.state.edit_title_todo_app} onChange={this.editTodoAppOnChange.bind(this)}/>
						        </FormGroup>
						        <FormGroup>
						          <Label for="edit_todo_app_description">Description</Label>
						          <Input type="textarea" name="edit_todo_app_description" id="edit_todo_app_description" className="form-textarea" value={this.state.edit_todo_app_description}  onChange={this.editTodoAppOnChange.bind(this)}/>
						        </FormGroup>
						        <Row form>	
						        	<Col sm="12" md="12" lg="6">
						        		 <FormGroup>
								          	<Label for="edit_date_todoapp">Date</Label>
								          	<Input type="date" name="edit_date_todoapp" id="date_todoapp" value={this.state.edit_date_todoapp}  onChange={this.editTodoAppOnChange.bind(this)}/>
								        </FormGroup>
						        	</Col>
						        	<Col sm="12" md="12" lg="6">
						        		<FormGroup>
								          	<Label for="edit_time_todoapp">Time</Label>
								          	<Input type="time" name="edit_time_todoapp" id="time_todoapp" value={this.state.edit_time_todoapp}  onChange={this.editTodoAppOnChange.bind(this)}/>
								        </FormGroup>
						        	</Col>
						        </Row>	
								<FormGroup check>
									<Label check>
										<input type="checkbox" name="edit_todo_status" checked={this.state.edit_todo_status === "true" ? true : false} onChange={this.editCheckedAlreadyTodo.bind(this)}/>
										Already Done
									</Label>
								</FormGroup>
						        <FormGroup>
						        	<Button color="primary" style={{marginTop:"25px"}}>SUBMIT</Button>
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