import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../Images/Logo.png'
import { Icon } from 'react-icons-kit'
import { shoppingCart } from 'react-icons-kit/feather/shoppingCart'
import { auth } from '../Config/Config'
import { useNavigate } from 'react-router-dom'

export const Navbar = ({ user }) => {

    const navigate = useNavigate();

    const handleLogout = () => {
        auth.signOut.then(() => {
            navigate.push('/login')
        })
    }
    return (

        <div className='navbar'>
            <div className='left-side'>
                <div className='logo'>
                    <img src={Logo} width="70px" height="70px" alt="logo" />
                </div>
            </div>
            <div className='right-side nav-item nav justify-content-start pe-4'>

                {!user && <>
                    <Link className='nav-link' to="signup">Sign Up</Link>
                    <Link className='nav-link' to="login">Log In</Link>
                </>
                }

                {user && <>
                    <div><Link className='nav-link p-2' to="/">{user}</Link></div>
                    <div className='cart-menu-btn '>
                        <Link className='nav-link pe-4' to="/cart">
                            <Icon icon={shoppingCart} size={20} />
                        </Link>
                        {/* <span className='cart-indicator'>{totalQty}</span> */}
                    </div>
                    <div className='btn btn-danger btn-md' onClick={handleLogout}>
                        LOGOUT
                    </div>
                </>}
            </div>
        </div>
    )
}
