import './App.css';
import React,{useContext} from 'react';
import Home from './Components/Home.js';
import Login from './Components/Login.js';
import SignUp from './Components/SignUp.js';
import {Route, Switch, Link, Redirect} from 'react-router-dom';
import {UserContext} from './UserContext.js';


const handleLogout = (setLogin) =>{
    // debugger;
    localStorage.removeItem('ActiveUser');
    localStorage.removeItem('token');
    <Redirect push to = "/Login" />
    setLogin(false);
}

function App(props) {

  const [LoggedIn, setLogin] = useContext(UserContext);

  return (
    <div className="App">
    {/* <UserProvider> */}
    <div className="App-Bar">
      <span>
      <Link to='/Home'>Home</Link></span>
      {(localStorage.getItem('token') || LoggedIn )? 
        <span>
          {/* {setUser(true)} */}
          <a href="/#" onClick={()=>handleLogout(setLogin)} className="Nav-right" >Logout</a>
        </span>
      : 
        <span>
          <Link to = '/Login' className="Nav-right" >Login</Link>
          <Link to = '/SignUp' className="Nav-right" >SignUp</Link>
        </span>}
      
    </div>
      <Switch>
        <Route exact path = "/Home" component={Home} />
        <Route exact path = "/SignUp" component={SignUp} />
        {/* <Route  path = "/" component={Login} /> */}
        <Route  path = "/" render={(props) => (<Login {...props} status={[LoggedIn, setLogin]} /> )}/>
      </Switch>

    {/* </UserProvider> */}
    </div>
  );
}

export default App;
