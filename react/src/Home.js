import React from "react";  
import {HashRouter,Route,NavLink} from "react-router-dom";
import './App.css';

function Home() {
    return(
        <>
        <div>
            <h2>Welcome to Shoppy page</h2> 
        </div>
        <br/> <br/>
        <div className="links">
            <NavLink to={`/home`}>Home</NavLink> 
            <NavLink to={`/home`}>About Us</NavLink> 
            <NavLink to={`/category/electronics`}>Electronics</NavLink>
            <NavLink to={`/category/clothing`}>Clothing</NavLink>
            <NavLink to={`/home`}>Contact</NavLink>
        </div>
        <br/> <br/>
        <div>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi. Proin porttitor, orci nec nonummy molestie, enim est eleifend mi, non fermentum diam nisl sit amet erat. Duis semper. Duis arcu massa, scelerisque vitae, consequat in, pretium a, enim. Pellentesque congue. Ut in risus volutpat libero pharetra tempor. Cras vestibulum bibendum augue. Praesent egestas leo in pede. Praesent blandit odio eu enim. Pellentesque sed dui ut augue blandit sodales. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Aliquam nibh. Mauris ac mauris sed pede pellentesque fermentum. Maecenas adipiscing ante non diam sodales hendrerit.Ut velit mauris, egestas sed, gravida nec, ornare ut, mi. Aenean ut orci vel massa suscipit pulvinar. Nulla sollicitudin. Fusce varius, ligula non tempus aliquam, nunc turpis ullamcorper nibh, in tempus sapien eros vitae ligula. Pellentesque rhoncus nunc et augue. Integer id felis. Curabitur aliquet pellentesque diam. Integer quis metus vitae elit lobortis egestas. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Morbi vel erat non mauris convallis vehicula.
            </p>
        </div>
        <br/> <br/>
        <div className="links">
            <h3>Categories</h3> <br/>
            <NavLink to="/category/electronics">Electronics</NavLink> <br/>
            <NavLink to="/category/clothing">Clothing</NavLink>
        </div> 
        </>
    )
}

export default Home;