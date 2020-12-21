import React from 'react';
import './Styling.css'
import {authService} from '../Services/AuthenticateService.js'

class Login extends React.Component{

    constructor(props){
        super(props)
        this.state = {username:'',password:''}

        if(localStorage.getItem('token')){
            this.props.history.push('/Home')
        }
    }

    handleSubmit = (event) => {
        event.preventDefault();
        // debugger;

//Call made to auth service
        authService.login(this.state.username,this.state.password)
        .then(data => {
            // debugger;
            if(data.id){
                this.props.history.push('/Home')
            }
        })

    }

    handleChange = (event) => {
        let fieldName = event.target.name
        let fieldValue = event.target.value
        
        this.setState(prevState => {return {...prevState, [fieldName]: fieldValue}})
    }

    render(){
        return(
            <div className="Main-Content">
                {localStorage.getItem('token') ? <span></span> :
                    <div className="Main-Text">
                        <br/><h2>Welcome to Login Page</h2><br/>
                        <form onSubmit={this.handleSubmit}>

                            <label>Username  </label>
                            <input name="username" placeholder="username" onChange={this.handleChange}/><br/><br/>

                            <label>Password  </label>
                            <input name="password" type="password" placeholder="password" onChange={this.handleChange}/><br/><br/>

                            <button type="submit">Login</button><br/><br/>

                        </form>

                    </div>
                }
                
            </div>
        );
    }
}

export default Login;

