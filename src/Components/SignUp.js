import React,{useState} from 'react';
import './Styling.css'
import {authService} from '../Services/AuthenticateService.js'

const handleSubmit = (obj,event,props) => {
    
    event.preventDefault();
    if(obj["password"].length >=0 || obj["confirmPassword"].length >=0 || obj["username"] >=0){
        if (obj["password"] === obj["confirmPassword"]){
            authService.createUser(obj)
            .then(data => {
                if(data.id){
                    alert ("User created successfully")
                    props.history.push('/Home')
                }
                else{
                    alert(data.message)
                }  
            })
        }
    }
    else{
        alert("Please fill in all the fields");
    }
}

const SignUp = (props) => {

    const [stateObject,setstateObject] = useState({username:'',password:'',confirmPassword:''})

    return(
        <div className="Main-Content">
            <div className="Main-Text">
            <h2>Welcome to SignUp Page</h2>

            <form onSubmit={(event)=>handleSubmit(stateObject,event,props)}>

                <label>Username  </label>
                <input name="username" placeholder="username" onChange={(event)=>{setstateObject({...stateObject,[event.target.name]:event.target.value})}} value={stateObject['username']}/><br/><br/>

                <label>Set Password  </label>
                <input name="password" type="password" placeholder="password" onChange={(event)=>{setstateObject({...stateObject,[event.target.name]:event.target.value})}} value={stateObject['password']} /><br/><br/>

                <label>Confirm Password  </label>
                <input name="confirmPassword" type="password" placeholder="password" onChange={(event)=>{setstateObject({...stateObject,[event.target.name]:event.target.value})}} value={stateObject['confirPassword']} /><br/><br/>

                <button type="submit">SignUp</button><br/><br/>

            </form>

        </div>
        </div>
    );
}

export default SignUp;