import { HashRouter, Route, Routes } from "react-router-dom";
import Home from "./Home";
import Category from "./Category";
import Product from "./Product";

function App() {
    return(
        <div>
            <HashRouter>
                <div>
                    <Route path="/home" component={Home} />
                    <Route path="/category/:categoryName" component={Category} />
                    <Route path="/product/:id" component={Product} />
                </div>
            </HashRouter>
        </div>
    )
}

export default App;