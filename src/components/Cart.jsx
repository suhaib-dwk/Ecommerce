import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { addCart, deleteCart } from '../redux/action';
import Skeleton from 'react-loading-skeleton';


const Cart = () => {
    const cartItems = useSelector(state => state.handleCart);
    const dispatch = useDispatch();
    const [product, setProduct] = useState([]);
    const [loading, setLoading] = useState(false);


    useEffect(() => {
        const getProduct = async () => {
            setLoading(true);
            const response = await fetch(`https://fakestoreapi.com/products`);
            setProduct(await response.json());
            setLoading(false)
        }
        getProduct();
    }, []);

    const Loading = () => {
        return (
            <>
                <div className='col-md-4'>
                    <Skeleton height={400} />
                </div>
            </>
        )
    }


    const handleAddToCart = (product) => {
        dispatch(addCart(product));
    };

    const handleRemoveFromCart = (product) => {
        dispatch(deleteCart(product));
    };

    const ShowProduct = () => {
        return (
            <>
                {cartItems.map((product) => (
                    <div className="row py-4">
                        <div className="col-md-4" key={product.id}>
                            <img
                                src={product.image}
                                alt={product.title}
                                height="200px"
                                width="180px"
                            />
                        </div>
                        <div className="col-md-4">
                            <h3>{product.title}</h3>
                            <h1 className="display-5">{product.title}</h1>
                            <p className="lead fw-bold">
                                {product.qty} X ${product.price} = ${product.qty * product.price}
                            </p>
                            <button
                                className="btn btn-outline-dark me-4"
                                onClick={() => handleRemoveFromCart(product, -1)}
                            >
                                <i className="fa fa-minus"></i>
                            </button>
                            <button
                                className="btn btn-dark ms-2 px-3 py-2"
                                onClick={() => handleAddToCart(product, 1)}
                            >
                                <i className="fa fa-plus"></i>
                            </button>
                        </div>
                        <br />
                    </div>
                    
                ))}
                
            </>
        );
    };
    return (
        <div>
            <div className='container py-5'>
                <div className='row py-5'>
                    {
                        loading ? <Loading /> : <ShowProduct />
                    }
                </div>
                
            </div>
        </div>
    )
}

export default Cart