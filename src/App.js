import React, {Fragment} from 'react';
import {BrowserRouter, Route, Switch} from "react-router-dom"
import NavBar from "./component/layout/Navbar"
import Users from "./component/users/Users"
import User from "./component/users/User"
import Search from "./component/users/Search"
import Alert from "./component/layout/Alert"
import About from "./component/pages/About"


import GithubState from "./context/github/GithubState"
import AlertState from "./context/alert/AlertState"
import './App.css';

//import axios from "axios"
const App = () =>{
  // async componentDidMount()
  // {
  //   this.setState({loading:true})
  //   const res = await axios.get("https://api.github.com/users", {headers:{'Authorization': process.env.REACT_APP_GITHUB_TOKEN }})
  //   console.log(res.data.items)
  //   this.setState({user:res.data, loading:false})
  // }

  return (
    <GithubState>
    <AlertState>
    <BrowserRouter>
      <div className="App">
        <NavBar/>
        <Alert/>
        <Switch>
          <Route exact path = "/" render = {(props) =>(
            <Fragment>
              <Search/>
              <div className="container">
                <Users/>
              </div>
            </Fragment>)}/>
          <Route exact path="/About" component={About}/>
          <Route exact path="/User:login" render={props=>(
            <User {...props}/>
          )}/>
        </Switch>
      </div>
    </BrowserRouter>
    </AlertState>
    </GithubState>
  );
}



export default App;
