import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../Images/Logo.png'

export const Navbar = () => {
    return (
        <div className='navbar navbar-light bg-light'>
            <div className='navbar-brand'>
                <img src={Logo} width="100" height="100" alt="logo" />
            </div>
            <div className='right-side'>
                <div><Link className='nav-link' to="signup">Sign Up</Link></div>
                <div><Link className='nav-link' to="login">Log In</Link></div>
            </div>
            <ul class="nav justify-content-end">
                <li class="nav-item">
                    <Link className='nav-link' to="signup">Sign Up</Link>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Link</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Link</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link disabled" href="#">Disabled</a>
                </li>
            </ul>
        </div>
    )
}
