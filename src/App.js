import React, {Fragment, useState} from 'react';
import {BrowserRouter, Route, Switch} from "react-router-dom"
import NavBar from "./component/layout/Navbar"
import Users from "./component/users/Users"
import User from "./component/users/User"
import Search from "./component/users/Search"
import Alert from "./component/layout/Alert"
import About from "./component/pages/About"
import {searchUsersFromGithub, getUserAndReposFromGithub} from "./component/GithubInfoGetter" 

import GithubState from "./context/github/GithubState"
import './App.css';

//import axios from "axios"
const App = () =>{
  const [user, setUser] = useState([])
  const [users, setUsers] = useState({})
  const [userRepos, setUserRepos] = useState([])
  const [loading, setLoading] = useState(false)
  const [alert, setAlert] = useState(null)

  // async componentDidMount()
  // {
  //   this.setState({loading:true})
  //   const res = await axios.get("https://api.github.com/users", {headers:{'Authorization': process.env.REACT_APP_GITHUB_TOKEN }})
  //   console.log(res.data.items)
  //   this.setState({user:res.data, loading:false})
  // }

  const searchUsers = async (text)=>{
    setLoading(true);
    const res = await searchUsersFromGithub(text);
    setLoading(false);
    setUser(res);
  }

  const getUserInfo = async (userName)=>{
    setLoading(true);
    const res = await getUserAndReposFromGithub(userName);
    setLoading(false);
    setUsers(res.user);
    setUserRepos(res.repos);
  }

  const clearUsers = ()=> {
    setLoading(false);
    setUser([]);
  }

  const showAlert = (message, type)=>{
    setAlert({message:message, type:type})

    setTimeout(() => {setAlert(null)}, 5000)
  }

  return (
    <GithubState>
    <BrowserRouter>
      <div className="App">
        <NavBar/>
        <Alert alert = {alert}/>
        <Switch>
          <Route exact path = "/" render = {(props) =>(
            <Fragment>
              <Search searchUsers = {searchUsers} clearUsers ={clearUsers} 
                      showClear = {user.length > 0} showAlert = {showAlert}/>
              <div className="container">
                <Users loading={loading} users = {user}/>
              </div>
            </Fragment>)}/>
          <Route exact path="/About" component={About}/>
          <Route exact path="/User:login" render={props=>(
            <User {...props} getUserInfo={getUserInfo} user = {users} 
                    repos={userRepos} loading = {loading}/>
          )}/>
        </Switch>
      </div>
    </BrowserRouter>
    </GithubState>
  );
}



export default App;
