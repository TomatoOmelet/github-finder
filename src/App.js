import React, {Component} from 'react';
import NavBar from "./component/layout/Navbar"
import Users from "./component/users/Users"
import './App.css';
import axios from "axios"

class App extends Component{
  state = {
    user : [],
    loading : true
  }

  async componentDidMount()
  {
    this.setState({loading:true})
    const res = await axios.get("https://api.github.com/users")
    this.setState({user:res.data, loading:false})
  }

  render()
  {
    return (
      <div className="App">
        <NavBar/>
        <div className="container">
          <Users loading={this.state.loading} users = {this.state.user}/>
        </div>
      </div>
    );
  }
}

export default App;
