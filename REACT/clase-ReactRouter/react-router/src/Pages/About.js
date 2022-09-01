import React from 'react'
import { NavLink } from 'react-router-dom'
import AboutComponent from '../Components/AboutComponent'

const About = () => {
    return (
        <>
            <h1>Muestro el About</h1>
            <NavLink to="/" style={({ isActive }) => ({ color: isActive ? '' : '' })}>Home</NavLink>
            <AboutComponent />

        </>
    )
}

export default About