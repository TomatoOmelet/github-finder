import React, { Component, Fragment } from 'react'
import Spinner from "../layout/Spinner"
import PropTypes from "prop-types"
import {Link} from "react-router-dom"
import Repo from "../repo/Repo"

export class User extends Component {
    componentDidMount()
    {
        this.props.getUserInfo(this.props.match.params.login.substring(1))
    }

    static propTypes = {
        loading: PropTypes.bool.isRequired,
        user: PropTypes.object.isRequired,
        getUserInfo: PropTypes.func.isRequired,
        repos: PropTypes.array.isRequired
    }

    render() {
        const {user, loading, repos} = this.props
        const {login, avatar_url, followers, following, location, bio, blog, public_repos, public_gists, html_url,
            hireable, name, company} = user

        if(loading)
            return <Spinner/>
        
        return (
            <div style={{margin:"0px 100px"}}>
                <Link to="/" className="btn btn-light">Back To Search</Link>
                Hireable: {hireable?<i className="fas fa-check text-success"/>: <i className="fas fa-times-circle text-danger"/>}
                <div className="card grid-2">
                    {/*left upper section*/}
                    <div className="all_center">
                        <img src={avatar_url} alt="avatar" className="round-img" style={{width:"150px"}}/>
                        <h1>{name}</h1>
                        {location&&<p>Location: {location}</p>}
                    </div>
                    {/*right upper section*/}
                    <div>
                        <h3>Bio:</h3>
                        {bio?<p>{bio}</p>:<p>This user does not have a bio.</p>}
                        <a href={html_url} className="btn btn-dark my-1">Github Profile Page</a>
                        <ul>
                            {login&&<li>UserName: {login}</li>}
                            {blog&&<li>Website: <a href = {blog}>{blog}</a></li>}
                            {company&&<li>Company: {company}</li>}
                        </ul>
                    </div>
                </div>
                {/*lower section*/}
                <div className="card text-center">
                    <div className="badge badge-primary">Followers:{followers}</div>
                    <div className="badge badge-success">Following:{following}</div>
                    <div className="badge badge-light">Public Repos:{public_repos}</div>
                    <div className="badge badge-dark">Public Gists:{public_gists}</div>
                </div>

                <Repo repos={this.props.repos}/>
            </div>
        )
    }
}

export default User
