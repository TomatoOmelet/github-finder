import React, { Component } from 'react'

class Search extends Component {
    state={
        text:""
    };

    onSubmit = (e) =>{
        e.preventDefault()
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
            </div>
        )
    }
}

export default Search
