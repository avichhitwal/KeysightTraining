import { HashRouter, Route } from "react-router-dom";
import React, { useState } from "react";
import Home from "./Home";
import Category from "./Category";
import Product from "./Product";
import Cart from "./Cart";

function App() {
    const[cart,setCart] = useState([]);
    
    return(
        <div>
            <HashRouter>
                <div>
                    <Route path="/home" component={Home} />
                    <Route path="/category/:categoryName" component={Category} />
                    {/* <Route path="/product/:id" component={Product} /> */}
                    <Route path="/product/:id" component={() => (
                        <Product cart={cart} setCart={setCart} />
                    )}/>
                    <Route path="/cart" component={() => <Cart cart={cart} />}/>
                </div>
            </HashRouter>
        </div>
    )
}

export default App;