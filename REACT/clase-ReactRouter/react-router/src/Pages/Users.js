import React from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import UserProfile from './UserProfile'
import User from './User'

const Users = () => {
    return (
        <div>
            <h2>User Profile</h2>
            <nav>
                <Link to='me'>My Profile </Link>
            </nav>
            <Routes>
                <Route path='me' element={<UserProfile />} /> // retornara mi perfil
                <Route path=':user' element={<User />} /> // retornara el perfil de user (ver componente user) ruta dinamica
                <Route path='' element /> // no tiene nada
            </Routes>
        </div>
    )
}

export default Users