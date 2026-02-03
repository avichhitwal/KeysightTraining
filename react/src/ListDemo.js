import React from "react";
import ReactDOM from "react-dom";

function Students(props) {

    const op = students.map((student) => 
        <div key={student.studid}>
            <h2>Student Name: {student.studname}</h2>
            <h3>Age: {student.age}</h3>
            <p>City: {student.city}</p>
        </div>
    )

    return(
        <div>{op}</div>
    )
}

const students = [
    {
        studid:1,
        studname:"A",
        age:20,
        city:"p"
    },
    {
        studid:2,
        studname:"B",
        age:21,
        city:"q"
    },
    {
        studid:3,
        studname:"C",
        age:22,
        city:"r"
    },
    {
        studid:4,
        studname:"D",
        age:23,
        city:"s"
    }
]

// function ProductLists(){
 
//     const products = [
//         {id:1, name:'Watch'},
//         {id:2, name:'TV'}
//     ]
 
//     return(
//         <>
//           {products.map(product =>(
//             <React.Fragment key={product.id}>
//               <h3> {product.name} </h3>
//               <h2> {product.id} </h2>
//               <hr />
//             </React.Fragment>
//           ))}
//         </>
//     )
   
// }

ReactDOM.render(<Students students={students}/>, document.getElementById('root'))

export default Students;

// function Books(props) {

//     const left = (
//         <ul>
//             {books.map((book) => 
//                 <li key={book.id}>
//                     {book.title}
//                 </li>
//             )}
//         </ul>
//     )

//     const right = books.map((book) => 
//         <div key={book.id}>
//             <h2> {book.title}</h2>
//             <p>{book.content}</p>
//         </div>
//     )

//     return(
//         <div>
//             <div>{left}</div> <br/>
//             <div>{right}</div>
//         </div>
//     )
// }

// const books = [
//     {
//         id:1,
//         title:"A",
//         content:"a"
//     },
//     {
//         id:2,
//         title:"B",
//         content:"b"
//     },
//     {
//         id:3,
//         title:"C",
//         content:"c"
//     }
// ]

// ReactDOM.render(<Books books = {books}/>,document.getElementById('root'))

// // function ListItem(props) {  
    
// //     // const item = props.item //array item

// //     return (
// //         <li>{props.item}</li>
// //     )
// // }

// // function NameList(props) {
// //     // const myLists = props.myLists; //array

// //     const listItems = props.myLists.map((name, index) => (
// //         <ListItem key={name + index} item={name} />
// //     ));
// //     return (
// //         <div>
// //             <h2>Name List</h2>
// //             <ol>{listItems}</ol>
// //         </div>
// //     )
// // }

// // const myLists = ['Angular', 'React', 'Vue', 'Svelte'];

// // ReactDOM.render(<NameList myLists={myLists}/>, document.getElementById('root'));

// export default Books;