// import logo from './logo.svg';
import Navbar from "./component/Navbar"
import Addnewblog from "./component/Addnewblog"
import Home from "./component/Home"
import Login from "./component/Login"
import Signin from "./component/Signin"
import Editpage from "./component/Editpage"
import Blogstate  from "./context/Blogstate"

import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import './App.css';

function App() {
  document.title="Switch";
  return (
    <div>
    <Blogstate>
    <Router>    
      <div>
      <Navbar/>
      <Switch>
          <Route exact path="/">
            <Home/>
          </Route>
          <Route exact path="/createnewblog">
            <Addnewblog/>
          </Route>
          <Route exact path="/editpage">
            <Editpage/>
          </Route>
          <Route path="/login">
            <Login/>
           </Route>
          <Route path="/signin">
            <Signin/>
           </Route>
        </Switch>
    </div>
    </Router>
    </Blogstate>
    </div>

  );
}
<script src="https://unpkg.com/boxicons@2.1.4/dist/boxicons.js"></script>
export default App;
