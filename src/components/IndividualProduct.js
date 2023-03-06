import React from 'react'

const IndividualProduct = ({ individualProduct, addToCart }) => {
    console.log(`individualProduct${individualProduct}`)
    const handleAddCart = () => {
        addToCart(individualProduct);
    }

    return (
        <div className='product'>
            <div className='product-img'>
                <img src={individualProduct.image} alt='product-img' />
            </div>
            <div className='product-text title'>{individualProduct.title}</div>
            <div className='product-text title'>{individualProduct.description}</div>
            <div className='product-text price'>{individualProduct.price}</div>
            <div className='btn btn-danger btn-md cart-btn' onClick={handleAddCart}>ADD TO CART</div>
        </div>
    )
}

export default IndividualProduct