import React from "react";  
import { NavLink } from "react-router-dom";

const Cart = ({cart}) => {
    const totalPrice = cart.reduce((total, item) => {
        return total + item.price * item.quantity;
    }, 0);
    return(
        <div className="cart-container">
            <h2>Cart</h2>
            {cart.map((item) => (
                <div className="cart-item" key={item.id}>
                    <img src={item.image} alt="" width="80" />
                    <p>{item.title}</p>
                    <p>Qty: {item.quantity}</p>
                    <p>INR {item.price}</p>
                </div>
            ))}
            <h3>Total: INR {totalPrice.toFixed(2)}</h3>
            <NavLink to="/category/electronics">Purchase More</NavLink>
        </div>
    )
}

export default Cart;