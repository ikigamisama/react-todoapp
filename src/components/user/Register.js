import React, {Component} from 'react';
import { Redirect } from 'react-router-dom';
import VideoBGComponent from './VideoBGComponent';


class FormValidationRegister {
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


class Register extends Component{
    constructor(props){
        super(props);
        document.title = "Register - TodoList App";
        this.state = {
            name_register:"",
            email_register:"",
            password_register:"",
            password2_register:"",
            error:false,
            errors:{
                error_blank_forms:"",
                error_email_already_exists:"",
                error_password_not_same:""
            },
            registered:false
        }

    }
    
    handleRegisterValidation = () => {
        let formIsValid = true;

        var errorRegister = new FormValidationRegister();

        if(this.state.name_register === "" || this.state.email_register === "" || this.state.password_register === "" || this.state.password2_register === ""){
            formIsValid = false;
            errorRegister.setError("Please fill up the forms");
            this.setState({
                errors:{
                    error_blank_forms:errorRegister.getError()
                }
            })
        }


        if(this.state.password_register !== this.state.password2_register){
            formIsValid = false;
            errorRegister.setError("Password not same");
            this.setState({
                errors:{
                    error_password_not_same:errorRegister.getError()
                }
            })
        }

        return formIsValid;
    }
    errorOutput(){
        let hasErrors = false;
        if(this.state.errors.error_blank_forms){
            hasErrors = true;
            return this.state.errors.error_blank_forms;
        }
        else if(this.state.errors.error_email_already_exists){
            hasErrors = true;
            return this.state.errors.error_email_already_exists;
        }
        else if(this.state.errors.error_password_not_same){
            hasErrors = true;
            return this.state.errors.error_password_not_same;
        }
        else{

        }

        return hasErrors;

    }
    submitRegister = (evt) => {
        evt.preventDefault();

        if(this.handleRegisterValidation()){
            window.axios.post('/register',{name:this.state.name_register,email:this.state.email_register,password:this.state.password_register})
            .then(response => {
                this.setState({isLoggedIn:true})
                localStorage.setItem('token',response.data.auth.access_token);
                localStorage.setItem('id',response.data.user.id);
                localStorage.setItem('name',response.data.user.name);
                window.location.href = "/dashboard";
            })
        }


    }
    onChangeRegister = (evt) => {
        let target = evt.target,
            value = target.value,
            name = target.name;

        this.setState({
            [name]: value
        });

       
    }
    componentDidMount() {
        if(window.token){
          this.setState({registered:true});
        }
    }
    render(){
        if(this.state.registered && window.token){
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
                        <h2 className="text-center">REGISTER</h2>
                        <form onSubmit={this.submitRegister.bind(this)}>
                            <div className="form-input-group">
                                <input type="text" className="form-input" id="name_register" name="name_register" value={this.state.name_register} onChange={this.onChangeRegister.bind(this)}/>
                                <label htmlFor="name_register">Name</label>
                                <span className="form-inline-bottom"></span>
                            </div>
                            <div className="form-input-group">
                                <input type="text" className="form-input" id="email_register" name="email_register" value={this.state.email_register} onChange={this.onChangeRegister.bind(this)}/>
                                <label htmlFor="email_register">Email</label>
                                <span className="form-inline-bottom"></span>
                            </div>
                            <div className="form-input-group">
                                <input type="password" className="form-input" id="password_register" name="password_register" value={this.state.password_register} onChange={this.onChangeRegister.bind(this)}/>
                                <label htmlFor="password_register">Password</label>
                                <span className={this.state.errors.error_password_not_same === "" ? 'form-inline-bottom' : 'form-inline-bottom error'}></span>
                            </div>
                            <div className="form-input-group">
                                <input type="password" className="form-input" id="password2_register" name="password2_register" value={this.state.password2_register} onChange={this.onChangeRegister.bind(this)}/>
                                <label htmlFor="password2_register">Confirm Password</label>
                                <span className={this.state.errors.error_password_not_same === "" ? 'form-inline-bottom' : 'form-inline-bottom error'}></span>
                            </div>
                            <div className="form-input-group text-center">
                                <p className={this.errorOutput() ? 'form-error  has-error' : 'form-error'}>{this.errorOutput()}</p>
                                <button type="submit" className="form-submit-button" name="submit">REGISTER</button>
                            </div>
                            <div className="form-input-group text-center">
                                <a href="/login" className="form-link">Already have account? Sign In</a>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default Register;

