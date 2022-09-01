import React from 'react'
import { Navigate } from 'react-router-dom'

const NotFound = () => {
    return (
        <div>
            NotFound
            <Navigate to="/about" replace={false} />
        </div>
    )
}

export default NotFound