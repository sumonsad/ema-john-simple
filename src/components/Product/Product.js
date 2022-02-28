import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Product.css';

const Product = (props) => {
    //console.log(props);
    const {img, name,seller, price, stock} = props.product;
    return (
        <div className = "product">
            <div className="product-img">
                <img src={img} alt="" />
            </div>
            <div className="product-detail">
            <h4 className="product-name">{name}</h4>
            <p><small>by: {seller}</small></p>
            <p>${price}</p>
            <p>only {stock} left in stock -order soon</p>
            <button onClick = {() =>props.handleAddProduct(props.product)}className='add-button'> <FontAwesomeIcon icon={faShoppingCart} /> Add to Cart</button>
            </div>
            
        </div>
    );
};

export default Product;   