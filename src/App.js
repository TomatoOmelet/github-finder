import React, {Component} from 'react';
import NavBar from "./component/layout/Navbar"
import Users from "./component/users/Users"
import Search from "./component/users/Search"
import {searchUsersFromGithub} from "./component/GithubInfoGetter" 
import './App.css';

//import axios from "axios"
class App extends Component{
  state = {
    user : [],
    loading : false
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
        <Search searchUsers = {this.searchUsers} clearUsers ={this.clearUsers} showClear = {this.state.user.length > 0}/>
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
}



export default App;
