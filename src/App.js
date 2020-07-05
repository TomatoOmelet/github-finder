import React, {Component, Fragment} from 'react';
import {BrowserRouter, Route, Switch} from "react-router-dom"
import NavBar from "./component/layout/Navbar"
import Users from "./component/users/Users"
import User from "./component/users/User"
import Search from "./component/users/Search"
import Alert from "./component/layout/Alert"
import About from "./component/pages/About"
import {searchUsersFromGithub, getUserAndReposFromGithub} from "./component/GithubInfoGetter" 
import './App.css';

//import axios from "axios"
class App extends Component{
  state = {
    user : [],
    users: {},
    loading : false,
    alert : null
  }

  // async componentDidMount()
  // {
  //   this.setState({loading:true})
  //   const res = await axios.get("https://api.github.com/users", {headers:{'Authorization': process.env.REACT_APP_GITHUB_TOKEN }})
  //   console.log(res.data.items)
  //   this.setState({user:res.data, loading:false})
  // }

  render()
  {
    return (
      <BrowserRouter>
        <div className="App">
          <NavBar/>
          <Alert alert = {this.state.alert}/>
          <Switch>
            <Route exact path = "/" render = {(props) =>(
              <Fragment>
                <Search searchUsers = {this.searchUsers} clearUsers ={this.clearUsers} 
                        showClear = {this.state.user.length > 0} showAlert = {this.showAlert}/>
                <div className="container">
                  <Users loading={this.state.loading} users = {this.state.user}/>
                </div>
              </Fragment>)}/>
            <Route exact path="/About" component={About}/>
            <Route exact path="/User:login" render={props=>(
              <User {...props} getUserInfo={this.getUserInfo} user = {this.state.users} loading = {this.state.loading}/>
            )}/>
          </Switch>
        </div>
      </BrowserRouter>
    );
  }

  searchUsers = async (text)=>{
    this.setState({loading:true})
    const res = await searchUsersFromGithub(text);
    this.setState({user:res, loading:false})
  }

  getUserInfo = async (userName)=>{
    this.setState({loading:true})
    const res = await getUserAndReposFromGithub(userName);
    this.setState({users:res.user, loading:false})
  }

  clearUsers = ()=> {
    this.setState({user:[], loading:false})
  }

  showAlert = (message, type)=>{
    this.setState({alert : {message:message, type:type}})

    setTimeout(() => {this.setState({alert : null})}, 5000)
  }
}



export default App;
