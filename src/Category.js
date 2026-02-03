import React,{useState,useEffect} from "react";
import { NavLink, useParams } from "react-router-dom";
import axios from "axios";
import './App.css';

const categoryMap = {
    electronics: "electronics",
    clothing: "men's clothing",
};

const Category = () => {
    const { categoryName } = useParams();
    const[products,setProducts] = useState([]); 

    useEffect(() => {
        fetchProducts();    
    })

    const fetchProducts = () => { 
        axios.get(`https://fakestoreapi.com/products/category/${categoryMap[categoryName]}`)
        .then((res) => {
            setProducts(res.data);
        })
        .catch((err) => {
            console.log(err);
        })
    }

    return(
            <div>
                <div className="back">
                    <NavLink to={`/home`}>(Home)</NavLink>
                </div>
                <div><h2> {categoryName} </h2> </div>
                <div className="item-container">
                    {products.map((product) => (
                        <div className="item-card" key={product.id}>
                            <img src={product.image} alt="" />
                            <h3>{product.title}</h3>
                            <p>INR. {product.price}</p>
                            <NavLink to={`/product/${product.id}`}>View</NavLink>
                        </div>
                    ))}
                </div>
            </div>
        )
}

export default Category;