import React from 'react'
import { Link } from 'react-router-dom'

export const Navbar = () => {
    return (
        <div>
            <Link to="Signup">Signup</Link>
            <Link to="login">Login</Link>
        </div>
    )
}
