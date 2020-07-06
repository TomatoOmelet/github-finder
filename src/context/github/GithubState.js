import React, {useReducer} from "react"
import axios from "axios"
import {searchUsersFromGithub, getUserAndReposFromGithub} from "../../component/GithubInfoGetter"
import GithubContext from "./githubContext"
import GithubReducer from "./githubReducer"
import {SEARCH_USERS, SET_LOADING, CLEAR_USERS, GET_USER, GET_REPOS} from "../types"

const GithubState = props =>{
    const initialState={
        users:[],
        user:{},
        repos:[],
        loading:false
    }

    const [state, dispatch] = useReducer(GithubReducer, initialState);

    //Search Users
    const searchUsers = async (text)=>{
        setLoading();
        const res = await searchUsersFromGithub(text);
        //setLoading(false);
        dispatch({type:SEARCH_USERS,
                payload:res})
    }

    const setLoading = ()=> dispatch({type: SET_LOADING})
    //Get User

    //Get Repos

    //Clear Users

    //Set Loading

    return <GithubContext.Provider value ={{
        users: state.users,
        user: state.user,
        repos: state.repos,
        loading:state.repos,
        searchUsers
    }}
    >
    {props.children}
    </GithubContext.Provider>
}

export default GithubState;