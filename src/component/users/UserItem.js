import React from 'react'
import PropTypes from 'prop-types'
import {Link} from "react-router-dom"

const UserItem = (props) => {
    const {login, avatar_url} = props.user;
    return (
        <div className="card text-center">
            <img src={avatar_url} className="round-img" style={{width:"60px"}} alt="Profile"></img>
            <h3>{login}</h3>
            <div>
                <Link to={`/User:${login}`} className = "btn btn-dark btn-sm my-1">More</Link>
            </div>
        </div>
    )
}

UserItem.propTpyes={
    user:PropTypes.object.isRequired
}

export default UserItem
