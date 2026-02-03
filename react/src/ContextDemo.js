import React,{useContext} from "react";

let Price = React.createContext(2000); // create context with default value
let Plan = React.createContext('Basic');

function App() {
    return(
        <div>
            <Price.Provider value={{val1:3500, discount:10}}>
                <Cart />
                <Dashboard />
            </Price.Provider>

            <Plan.Provider value="Gold">
                <Cart />
            </Plan.Provider>

            <Product />
        </div>
    )
}

function Cart() {
    const value = useContext(Price);
    return(
        <div>
            Cart price: {value.val1} and Discount: {value.discount}
            {/* <Price.Consumer>
                {value => <div>Cart price: {value.val1}</div>}
            </Price.Consumer>
            <Price.Consumer>
                {value => <div>Cart discount: {value.discount}</div>}
            </Price.Consumer>

            <Plan.Consumer>
                {value => <div>Cart plan: {value}</div>}
            </Plan.Consumer> */}
        </div>
    )
}

function Dashboard() {

    const value = useContext(Price);

    return(
        <div>
            Dashboard price: {value.val1}
            {/* <Price.Consumer>
                {value => <div>Dashboard price: {value.val1}</div>}
            </Price.Consumer>

            <Plan.Consumer>
                {value => <div>Dashboard plan: {value}</div>}
            </Plan.Consumer> */}
        </div>
    )
}

function Product() {
    return(
        <div>
            <Price.Consumer>
                {value => <div>Product price: {value}</div>}
            </Price.Consumer>

            <Plan.Consumer>
                {value => <div>Product plan: {value}</div>}
            </Plan.Consumer>
        </div>
    )
}

// let NumberContext = React.createContext(); //context object

// function App() { //Provider
//     return(
//         <NumberContext.Provider value={45}>
//             <Display/>
//         </NumberContext.Provider>
//     )
// }

// function Display() { //Consumer
//     return(
//         <NumberContext.Consumer>
//             { value => <div>Value from parent comp: {value}</div>}
//         </NumberContext.Consumer>
//     )
// }

export default App;