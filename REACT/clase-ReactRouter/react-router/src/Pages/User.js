import React from 'react'
import { useParams } from "react-router-dom";
function User() {
    let { user } = useParams()
    console.log(user);
    return (
    <div>User {user}</div>
  )
}

export default User