import React, { useState, useEffect } from "react";
import { NavLink, useParams } from "react-router-dom";
import axios from "axios";
import './App.css';
 
const categoryMap = {
    electronics: "electronics",
    clothing: "women's clothing",
};

const Product = ({cart,setCart}) => {
  const { id } = useParams();
 
  const [data, setData] = useState(null);

  const addToCart = () => {
    const exists = cart.find((item) => item.id === data.id);
        if(exists){
            setCart(
            cart.map((item) =>
            item.id === data.id ? {...item,quantity: item.quantity + 1} : item
            )
        );
    } else setCart([...cart, {...data, quantity: 1}]);
  }

  useEffect(() => {
    fetchProduct();
  });
 
  const fetchProduct = () => {
    axios
      .get(`https://fakestoreapi.com/products/${id}`)
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => console.log(err));
  };
 
  if (!data) return <div>Loading...</div>;
 
  return (
    <div>
      <div>
        <img src={data.image} alt="" className="prod-image" />
      </div>
 
      <div className="product-container">
        <h1>{data.category}</h1>
        <h3>{data.title}</h3>
        <p>{data.description}</p>
        <p>
          <strong>Price: INR {data.price}</strong>
        </p>
      </div>
      <br /><br />
      <button className="add-cart-btn" onClick={() => addToCart(data)}>Add to Cart</button>
      <br/><br />
      <NavLink className="add-cart-btn" to="/cart">Go to Cart</NavLink>
      <div className="back">
        <NavLink to={`/category/${categoryMap[data.category]}`}>(Back)</NavLink>
      </div>
    </div>
  );
};
 
export default Product;