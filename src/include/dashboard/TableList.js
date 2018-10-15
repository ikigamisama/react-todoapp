import React, {Component} from 'react';
import {
    Table,Button, Alert
} from 'reactstrap';

const DeleteAlert = (props) => (
    <Alert color="danger" className={props.onDisplayAlert}>
        Todo Success Delete
    </Alert>
) 
const UpdateAlert = (props) => (
    <Alert color="success" className={props.onDisplayAlert}>
        Todo Success Update
    </Alert>
) 

export default class TableList extends Component{
    constructor(props){
        super(props);
        this.state = {
            todo_data:[],
            isDeleteAlert:"d-none",
            ifEditTodoSuccess:"d-none",
            toFetchData:true,
            ifAlreadyUpdate:false
        }
    }
    componentWillMount(){
       if(this.state.toFetchData === true){
            window.axios.get('/todo')
            .then(response =>{
                this.setState({
                    todo_data:response.data.data,
                    toFetchData:false
                })
            })
       }

   
    }
    onUpdateTodoStatus = () => {
        if(this.state.toFetchData === true){
            window.axios.get('/todo')
            .then(response =>{
                this.setState({
                    todo_data:response.data.data,
                    toFetchData:false
                })
            })

            this.props.dataStatTodo(this.state.toFetchData);

       }
    }
    onDeleteTodo = (evt) => {
        let delete_id = evt.target.attributes.data_id.nodeValue;
        window.axios.delete('/todo/'+delete_id)
        .then(response => {
            this.setState({
                isDeleteAlert:"d-block",
                toFetchData:true
            })

           
            this.onUpdateTodoStatus();
        })


    }

    onChangeTodoUpdate = (evt) => {
        let target = evt.target,
            value =  target.checked,
            todo_id = evt.target.getAttribute('data-todo-id');

            
		let dataPost = {
            is_already_todo:value.toString()
        };

        window.axios.patch('/todo/'+todo_id,dataPost)
		.then(response => {
			if(response.data.message === "Successful Update"){
				this.setState({
                    ifEditTodoSuccess:"d-block",
                    toFetchData:true
                })
                this.onUpdateTodoStatus();
               
            }
            
        })
       
    }
    render(){
        return (
            <React.Fragment>
                <DeleteAlert  onDisplayAlert={this.state.isDeleteAlert}/>
                <UpdateAlert  onDisplayAlert={this.state.ifEditTodoSuccess}/>
                <Table>
                    <thead>
                        <tr>
                            <th>Todo</th>
                            <th>Date</th>
                            <th>Time</th>
                            <th></th>
                            <th></th>
                            <th>Done</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                           this.state.todo_data.map(todo => 
                              <tr key={todo.id}>
                                <td>
                                    <a href={"dashboard/show/" + todo.id}>{todo.todo}</a>
                                </td>
                                <td>
                                    {todo.date}
                                </td>
                                <td>
                                    {todo.time}
                                </td>
                                <td>
                                    <a href={"dashboard/edit/" + todo.id} className="btn btn-success">Edit</a>
                                </td>
                                <td>
                                    <Button data_id={todo.id} color="danger" onClick={this.onDeleteTodo.bind(this)}>Delete</Button>
                                </td>
                                <td>
                                    <input type="checkbox" data-todo-id={todo.id} name="checkedTodo" defaultChecked={todo.status === "true" ? 1 : 0}  className="check-done" onChange={this.onChangeTodoUpdate.bind(this)}/>
                                </td>
                              </tr>
                           )
                        }
                    </tbody>
                </Table>
            </React.Fragment>
        );
    }
}
