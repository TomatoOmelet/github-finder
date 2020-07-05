import React, { Component } from 'react'

export class User extends Component {
    componentDidMount()
    {
        this.props.getUserInfo(this.props.match.params.login.substring(1))
    }

    render() {
        const {user, loading} = this.props
        const {login, avatar_url, followers, following, location, bio, blog, public_repos, public_gists, html_url,
            hireable, name} = user
        console.log(user)
        return (
            <div>
                {name}
            </div>
        )
    }
}

export default User
