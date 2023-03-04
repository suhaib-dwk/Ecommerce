import React, { useState, useEffect } from 'react'
import { auth, fs } from '../Config/Config';
import { Navbar } from './Navbar'
import { Products } from './Products'

export const Home = () => {

    // Getting current user function
    function GetCurrentUser() {
        const [user, setUser] = useState(null);
        useEffect(() => {
            auth.onAuthStateChanged((user) => {
                if (user) {
                    fs.collection('users').doc(user.uid).get().then((snapshot) => {
                        setUser(snapshot.data().FullName)
                    })
                }
                else {
                    setUser(null);
                }
            })

        }, [])
        return user;
    }

    const user = GetCurrentUser();
    return (
        <>
            <Navbar user={user} />
            <Products />
        </>
    )
}
