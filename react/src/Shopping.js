import React from "react";

function ShoppingComp(props)  { 
    return(
        <div>
            <h2>Shopping Component</h2>
            <Product name="W1" price="3500" brand="brand1" mname="MW1" mprice="2500" mbrand="brand2"/> 
        </div>
    )
}

function Product(props)  { 
    return(
        <div>
            <h2>List of Products</h2>
            <Watch name={props.name} price={props.price} brand={props.brand}/>
            <Microwave name={props.mname} price={props.mprice} brand={props.mbrand}/>
        </div>
    )
}

function Watch(props)  {
    return(
        <div>
            <h3>Watch Details</h3>
            <p>Product Name: {props.name}</p>
            <p>Product Price: {props.price}</p>
            <p>Product Brand: {props.brand}</p>
        </div>
    )
}
function Microwave(props)  {
    return(
        <div>
            <h3>Microwave Details</h3>
            <p>Product Name: {props.name}</p>
            <p>Product Price: {props.price}</p>
            <p>Product Brand: {props.brand}</p>
        </div>
    )
}

export default ShoppingComp;

// class ShoppingComp extends React.Component { 
//     render() {
//         return(
//             <div>
//                 <h2>Shopping Component</h2>
//                 <Product name="W1" price="3500" brand="brand1" mname="MW1" mprice="2500" mbrand="brand2"/> 
//             </div>
//         )
//     }
// }

// class Product extends React.Component { 
//     render() {
//         return(
//             <div>
//                 <h2>List of Products</h2>
//                 <Watch name={this.props.name} price={this.props.price} brand={this.props.brand}/>
//                 <Microwave name={this.props.mname} price={this.props.mprice} brand={this.props.mbrand}/>
//                 {/* <Laptop name={this.props.name} price={this.props.price} brand={this.props.brand}/> */}
//                 {/* <p>Product Name: {this.props.name}</p>
//                 <p>Product Price: {this.props.price}</p>
//                 <p>Product Brand: {this.props.brand}</p> */}
//             </div>
//         )
//     }
// }

// class Watch extends React.Component {
//     render() {
//         return(
//             <div>
//                 <h3>Watch Details</h3>
//                 <p>Product Name: {this.props.name}</p>
//                 <p>Product Price: {this.props.price}</p>
//                 <p>Product Brand: {this.props.brand}</p>
//             </div>
//         )
//     }
// }
// class Microwave extends React.Component {
//     render() {
//         return(
//             <div>
//                 <h3>Microwave Details</h3>
//                 <p>Product Name: {this.props.name}</p>
//                 <p>Product Price: {this.props.price}</p>
//                 <p>Product Brand: {this.props.brand}</p>
//             </div>
//         )
//     }
// } 

// class Laptop extends React.Component {
//     render() {
//         return(
//             <div>
//                 <p>Product Name: {this.props.name}</p>
//                 <p>Product Price: {this.props.price}</p>
//                 <p>Product Brand: {this.props.brand}</p>
//             </div>
//         )
//     }
// }