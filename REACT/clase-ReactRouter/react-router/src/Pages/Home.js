import React from 'react'
import { Link } from 'react-router-dom'
import HomeComponent from '../Components/HomeComponent'

const Home = () => {
    return (
        <>
            <h1>Muestro la Home</h1>
            <Link to="/about">About</Link>
            <Link to="/users/*">Users</Link>
            <HomeComponent />
        </>
    )
}

export default Home