import React, { useState , useContext} from 'react';
import PropTypes from "prop-types";
import GithubContext from "../../context/github/githubContext"

const Search = () =>{
    const githubContext = useContext(GithubContext)
    const [text, setText] = useState("")
  
    const onSubmit = (e) =>{
        e.preventDefault()
        if(text.length > 0)
        {
            githubContext.searchUsers(text)
            setText("")
        }else{
            githubContext.showAlert("Please input something to search.", "light")
        }

    }

    const onChange = (e) =>
    {
        setText(e.target.value)
    }

    return (
        <div>
            <form onSubmit={onSubmit} className="form">
                <input type="text" name="text" value={text} placeholder="Search Users...."
                        onChange = {onChange}></input>
                <input type="submit" value="Search" className="btn btn-dark btn-block"></input>
            </form>
            {githubContext.users.length > 0 &&
            <button className="btn btn-light btn-block" onClick={githubContext.clearUsers}>Clear</button>}
        </div>
    )
    
}

export default Search
