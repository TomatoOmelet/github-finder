import React, {Component} from 'react';
import NavBar from "./component/layout/Navbar"
import Users from "./component/users/Users"
import './App.css';

class App extends Component{
  render()
  {
    return (
      <div className="App">
        <NavBar/>
        <div className="container">
          <Users/>
        </div>
      </div>
    );
  }
}

export default App;
