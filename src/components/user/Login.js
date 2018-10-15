import React, {Component} from 'react';
import { Redirect } from 'react-router-dom';
import VideoBGComponent from './VideoBGComponent';

class FormValidationLogin {
    constructor(){
        this.error = "";
    }
    setError = (error) => {
        this.error = error;
    }
    getError = () => {
        if(this.error){
            return this.error;
        }
        else{
            return "Nothing Error";
        }
    }

}


class Login extends Component{
    constructor(props){
        super(props);
        document.title = "Login - TodoList App";
        this.state = {
            username_login:"",
            password_login:"",
            error:"",
            errors:{
                error_find:"",
                error_blank_forms:""
            },
            isLoggedIn:false
        }
    }
    onChangeLogin = (evt) => {
        let target = evt.target,
            value = target.value,
            name = target.name;

        this.setState({
            [name]: value
        });
    }
    handleLoginValidation(username,password){
        let formValid = true;
        if(username === "" || password === ""){
            formValid = false;
            var errorLogin = new FormValidationLogin();
            errorLogin.setError("Please fill up the forms");
            this.setState({
                errors:{
                    error_blank_forms:errorLogin.getError()
                }
            })
        }


        return formValid;
    }   
    submitLogin = (evt) => {
        evt.preventDefault();
        if(this.handleLoginValidation(this.state.username_login,this.state.password_login)){
            window.axios.post('/login',{email:this.state.username_login,password:this.state.password_login})
            .then(response=>{
               
                if(response.data.status === "error"){
                    var errorLogin = new FormValidationLogin();
                    errorLogin.setError("User or Password Not Found");
                    this.setState({
                        errors:{
                            error_find:errorLogin.getError()
                        }
                    })
                }
                else{
                    this.setState({isLoggedIn:true})
                    localStorage.setItem('token',response.data.auth.access_token);
                    localStorage.setItem('id',response.data.user.id);
                    localStorage.setItem('name',response.data.user.name);
                    window.location.href = "/dashboard";

                }

            })
        }
        
    }
    errorOutput(){
        let hasErrors = false;
        if(this.state.errors.error_blank_forms){
            hasErrors = true;
            return this.state.errors.error_blank_forms;
        }
        else if(this.state.errors.error_find){
            hasErrors = true;
            return this.state.errors.error_find;
        }
        else{

        }

        return hasErrors;

    }
    componentDidMount() {
        if(window.token){
          this.setState({loggedIn:true});
        }
    }
    render(){
        if(this.state.loggedIn && window.token){
            return <Redirect to='/dashboard' />
        }

        return (
            <div className="container-app">
                <VideoBGComponent />
                <div className="container-form">
                    <div className="form-wrap">
                        <div className="form-logo-wrap">
                            <div className="form-logo-position">
                                <i className="fa fa-bars"></i>
                            </div>
                        </div>
                        <h2 className="text-center">LOG IN</h2>
                        <form onSubmit={this.submitLogin.bind(this)}>
                            <div className="form-input-group">
                                <input type="text" className="form-input" id="username_login" name="username_login" value={this.state.username_login} onChange={this.onChangeLogin.bind(this)}/>
                                <label htmlFor="username_login">Email</label>
                                <span className="form-inline-bottom"></span>
                            </div>
                            <div className="form-input-group">
                                <input type="password" className="form-input" id="password_login" name="password_login" value={this.state.password_login} onChange={this.onChangeLogin.bind(this)}/>
                                <label htmlFor="password_login">Password</label>
                                <span className="form-inline-bottom"></span>
                            </div>
                            <div className="form-input-group text-center">
                                <p className={this.errorOutput() ? 'form-error  has-error' : 'form-error'}>{this.errorOutput()}</p>
                                <button type="submit" className="form-submit-button" name="submit">SUBMIT</button>
                            </div>
                            <div className="form-input-group text-center">
                                    <a href="/register" className="form-link">Register Now</a>
                            </div>
                        </form>
                    </div>
                </div>          
            </div>
        )
    }
}

export default Login;
 