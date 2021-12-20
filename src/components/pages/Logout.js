import React from 'react'
import { Link } from 'react-router-dom'

function Logout() {
    return (
        <div className="text-center m-5 p-5">
            <h1>You have been logged out!!!</h1>
            <Link to="/signin" ><button className="btn btn-warning">Logout</button></Link>
        </div>
    )
}

export default Logout
