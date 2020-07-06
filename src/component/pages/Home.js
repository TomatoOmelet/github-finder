import React, {Fragment} from 'react'
import Search from "../users/Search"
import Users from "../users/Users"

const Home = () => {
    return (
        <Fragment>
            <Search/>
            <div className="container">
                <Users/>
            </div>
        </Fragment>
    )
}

export default Home
