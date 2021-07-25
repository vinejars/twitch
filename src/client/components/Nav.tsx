import * as React from 'react'
import {Link} from 'react-router-dom'


export default function Nav() {
    return (
        <div id='navcontain'>
        <Link to='/login'><h2> Login </h2></Link>
        <Link to='/signup'><h2> Signup </h2></Link>

        <h3> Test Two </h3>
        <h4> Test Three </h4>
        </div>
    )
}
