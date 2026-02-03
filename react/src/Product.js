import React, { useState, useEffect } from "react";
import { NavLink, useParams } from "react-router-dom";
import axios from "axios";
import './App.css';
 
const categoryMap = {
    electronics: "electronics",
    clothing: "women's clothing",
};

const Product = () => {
  const { id } = useParams();
 
  const [data, setData] = useState(null);
 
  useEffect(() => {
    fetchProduct();
  }, [id]);
 
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
 
      <div>
        <h1>{data.category}</h1>
        <h3>{data.title}</h3>
        <p>{data.description}</p>
        <p>
          <strong>Price: INR {data.price}</strong>
        </p>
      </div>
 
      <div className="back">
        <NavLink to={`/category/${categoryMap[data.category]}`}>(Back)</NavLink>
      </div>
    </div>
  );
};
 
export default Product;