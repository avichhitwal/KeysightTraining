import React, {useState, useEffect, useMemo} from "react";

function Product(){

    const[price] = useState(1000);
    const[discount] = useState(20);
    const[quantity,setQuantity] = useState(1);

    const finalPrice = useMemo( () => { // this will memorize the value unless price or discount changes
        console.log("Calculating Final Price");
        return price - (price*discount/100);
    },[price,discount])

    return(
        <div>
            <h2>Product price: {price}</h2>
            <h2>Discount: {discount}</h2>
            <h2>Final price: {finalPrice}</h2>
            <h2>Quantity: {quantity}</h2>
            <button onClick={() => setQuantity(quantity+1)}>Add</button>
        </div>
    )
}

export default Product;

// function CountApp() {

//     const[count,setCount] = useState(0) // useState hook
//     const[name,setName] = useState({FirstName: "a",surname: "b"})
//     const[title] = useState("c")

//     useEffect( () => {
//         // document.title = `Count is ${count}`
//         const timer = setTimeout( () => {
//             setName({FirstName: "p", surname: "q"})
//         },2000)
//         return () => {clearTimeout(timer)}
//         // setName({FirstName: "x", surname: "y"})
//     },[]);

//     return(
//         <div>
//             {count}
//             <button onClick={ () => setCount(count + 1)}>+</button>
//             <h3>title : {title}</h3>
//             <h3>FirstName : {name.FirstName}</h3>
//             <h3>surname : {name.surname}</h3>
//         </div>
//     )
// }

// export default CountApp;