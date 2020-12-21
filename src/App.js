import './App.css';
import React,{useState} from 'react';
import Home from './Components/Home.js';
import Login from './Components/Login.js';
import SignUp from './Components/SignUp.js';
import {Route, Switch, Link, Redirect} from 'react-router-dom'


const handleLogout = () =>{
    // debugger;
    localStorage.removeItem('ActiveUser');
    localStorage.removeItem('token');
    <Redirect push to = "/Login" />

}

function App(props) {

  // const {userIn,setUser} = useState(false);

  return (
    <div className="App">
    <div className="App-Bar">
      <Link to='/Home'>  Home  </Link>
      {localStorage.getItem('token') ? 
        <span>
          {/* {setUser(true)} */}
          <a onClick={()=>handleLogout()}>Logout</a>
        </span>

      : 
        <span>
          <Link to = '/Login' >  Login  </Link>
          <Link to = '/SignUp' >  SignUp  </Link>
        </span>}
      
    </div>
      <Switch>
        <Route exact path = "/Home" component={Home} />
        <Route exact path = "/SignUp" component={SignUp} />
        <Route  path = "/" component={Login} />
      </Switch>

    </div>
  );
}

export default App;
