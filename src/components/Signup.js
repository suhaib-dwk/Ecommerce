import React, { useState } from 'react'
import { auth, fs } from '../Config/Config';
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

export const Signup = () => {

    const navigate = useNavigate()

    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [errorMsg, setErrorMsg] = useState('');
    const [successMsg, setSuccessMsg] = useState('');

    const handleSignup = (e) => {
        e.preventDefault()
        // console.log(fullName, email, password)
        auth.createUserWithEmailAndPassword(email, password).then((credentials) => {
            console.log(credentials);
            fs.collection('users').doc(credentials.user.uid).set({
                FullName: fullName,
                Email: email,
                password: password
            }).then(() => {
                setSuccessMsg('Signup successfull. You will now get automatically redirected to Login');
                setFullName('');
                setEmail('');
                setPassword('');
                setErrorMsg('');
                setTimeout(() => {
                    setSuccessMsg('');
                    navigate('/login')
                }, 3000)
            }).catch(error => setErrorMsg(error.message));
        }).catch((error) => {
            setErrorMsg(error.message);
        })
    }

    return (
        <div className='container'>
            <br />
            <br />
            <h1>Sign Up</h1>
            <hr />
            {successMsg && <>
                <div className='alert alert-success'>{successMsg}</div>
                <br />
            </>
            }
            <form className='form-group' autoComplete='off' onSubmit={handleSignup}>
                <label>Full Name</label>
                <input type="text" className='form-control' required
                    onChange={(e) => setFullName(e.target.value)} value={fullName}></input>
                <br />
                <label>Email</label>
                <input type="email" className='form-control' required
                    onChange={(e) => setEmail(e.target.value)} value={email}></input>
                <br />
                <label>Password</label>
                <input type="password" className='form-control' required
                    onChange={(e) => setPassword(e.target.value)} value={password}></input>
                <br />
                <div className='btn-box'>
                    <span>Already have an account login
                        <Link to="/login" className='link ms-2'>Here</Link>
                        <button type='submit' className='btn btn-success btn-md ms-5'>Sign Up</button>
                    </span>
                </div>
            </form>
            {errorMsg && <>
                <br />
                <div className='alert alert-warning'>{errorMsg}</div>
            </>
            }
        </div>
    )
}
