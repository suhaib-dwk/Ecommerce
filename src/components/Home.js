import React, { useState, useEffect } from 'react'
import { auth, fs } from '../Config/Config';
import { Navbar } from './Navbar'
import { Products } from './Products'

export const Home = (props) => {

    //gettin current user uid 

    const [uid, setUid] = useState(null);
    useEffect(() => {
        auth.onAuthStateChanged(user => {
            if (user) {
                setUid(user.uid);
            }
        })
    }, [])

    console.log(uid);

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

    // state of products
    const [products, setProducts] = useState([]);

    const getProducts = async () => {
        const products = await fs.collection('products').get();
        const productsArray = [];
        for (var snap of products.docs) {
            var data = snap.data();
            data.ID = snap.id;
            productsArray.push({
                ...data
            })
            if (productsArray.length === products.docs.length) {
                setProducts(productsArray);
            }
        }
    }

    useEffect(() => {
        getProducts();
    }, [])

    const addToCart = (products) => {
        if (!uid == null) {
            console.log(`cons${products}`)
        } else {
            props.navigate.push('/login');
        }
    }

    return (
        <>
            <Navbar user={user} />
            <br />
            {products.length > 0 && (
                <div className='container-fluid'>
                    <h1 className='text-center'>products</h1>
                    <div className='products-box'>
                        <Products products={products} addToCart={addToCart} />
                    </div>
                </div>
            )}
            {products.length < 1 && (
                <div className='container-fluid'>
                    please wait .....
                </div>
            )}
        </>
    )
}
