import React, { Component } from 'react';
import PropTypes from "prop-types";

class Search extends Component {
    state={
        text:""
    };

    static propTypes = {
        searchUsers: PropTypes.func.isRequired,
        clearUsers: PropTypes.func.isRequired,
        showClear: PropTypes.bool.isRequired,
        showAlert: PropTypes.func.isRequired,
    }
  

    onSubmit = (e) =>{
        e.preventDefault()
        if(this.state.text.length > 0)
        {
            this.props.searchUsers(this.state.text)
            this.setState({text: ""})
        }else{
            this.props.showAlert("Please input something to search.", "light")
        }

    }

    onChange = (e) =>
    {
        this.setState({[e.target.name]: e.target.value})
    }

    render() {

        return (
            <div>
                <form onSubmit={this.onSubmit} className="form">
                    <input type="text" name="text" value={this.state.text} placeholder="Search Users...."
                            onChange = {this.onChange}></input>
                    <input type="submit" value="Search" className="btn btn-dark btn-block"></input>
                </form>
                {this.props.showClear &&
                <button className="btn btn-light btn-block" onClick={this.props.clearUsers}>Clear</button>}
            </div>
        )
    }
}

export default Search
