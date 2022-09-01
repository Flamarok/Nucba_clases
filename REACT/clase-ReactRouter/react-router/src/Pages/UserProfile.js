import React from 'react'
import { NavLink } from 'react-router-dom'

const UserProfile = () => {
    return (
        <div>
            <h4>UserProfile</h4>
            <NavLink to="/" style={({ isActive }) => ({ color: isActive ? '' : '' })}>Home</NavLink>

        </div>
    )
}

export default UserProfile