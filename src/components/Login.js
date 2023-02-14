import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export const Login = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [errorMsg, setErrorMsg] = useState('');
    const [successMsg, setSuccessMsg] = useState('');

    const handleSignup = (e) => {
        e.preventDefault()
        console.log(email, password)
    }

    return (
        <div className='container'>
            <br />
            <br />
            <h1>Log In</h1>
            <hr />
            <form className='form-group' autoComplete='off' onSubmit={handleSignup}>
                <label>Email</label>
                <input type="email" className='form-control' required
                    onChange={(e) => setEmail(e.target.value)} value={email}></input>
                <br />
                <label>Password</label>
                <input type="password" className='form-control' required
                    onChange={(e) => setPassword(e.target.value)} value={password}></input>
                <br />
                <div className='btn-box'>
                    <span>Don't have an account Sign up
                        <Link to="/signup" className='link ms-2'>Here</Link>
                        <button type='submit' className='btn btn-success btn-md ms-5'>Log In</button>
                    </span>
                </div>
            </form>
        </div>
    )
}
