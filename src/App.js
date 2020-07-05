import React, {Component} from 'react';
import NavBar from "./component/layout/Navbar"
import Users from "./component/users/Users"
import Search from "./component/users/Search"
import Alert from "./component/layout/Alert"
import {searchUsersFromGithub} from "./component/GithubInfoGetter" 
import './App.css';

//import axios from "axios"
class App extends Component{
  state = {
    user : [],
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
      <div className="App">
        <NavBar/>
        <Alert alert = {this.state.alert}/>
        <Search searchUsers = {this.searchUsers} clearUsers ={this.clearUsers} 
                showClear = {this.state.user.length > 0} showAlert = {this.showAlert}/>
        <div className="container">
          <Users loading={this.state.loading} users = {this.state.user}/>
        </div>
      </div>
    );
  }

  searchUsers = async (text)=>{
    this.setState({loading:true})
    const res = await searchUsersFromGithub(text);
    this.setState({user:res, loading:false})
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
