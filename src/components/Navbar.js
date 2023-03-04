import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../Images/Logo.png'

export const Navbar = ({ user }) => {
    return (

        <div className='navbar'>
            <div className='left-side'>
                <div className='logo'>
                    <img src={Logo} width="70px" height="70px" alt="logo" />
                </div>
            </div>
            <div className='right-side nav-item nav justify-content-start pe-[24px]'>

                {!user && <>
                    <Link className='nav-link' to="signup">Sign Up</Link>
                    <Link className='nav-link' to="login">Log In</Link>
                </>
                }

                {user && <>
                    <div><Link className='nav-link' to="/">{user}</Link></div>
                    <div className='cart-menu-btn'>
                        <Link className='nav-link' to="/cart">
                            {/* <Icon icon={sho}/> */}
                        </Link>
                        {/* <span className='cart-indicator'>{totalQty}</span> */}
                    </div>
                    {/* <div className='btn btn-danger btn-md' onClick={handleLogout}>
                        LOGOUT
                    </div> */}
                </>}

            </div>
        </div>
    )
}
