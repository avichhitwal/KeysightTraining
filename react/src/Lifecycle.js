import React from "react";

//UNMOUNTING

class ComponentWillUnmount extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            show: true
        }
    }

    render() {
        return(
            <div>
                <p>{this.state.show ? <Child/> : null}</p>
                <button onClick={ () => {
                    this.setState({show: !this.state.show})
                }}>
                    Toggle
                </button>
            </div>
        ) 
    }
}

class Child extends React.Component {
    componentWillUnmount() { 
        alert("Component is unmounting");
    }

    render() {
        return(
            <h2>Child Component</h2>
        )
    }
}

export default ComponentWillUnmount;

// //UPDATING

// class Music extends React.Component { 
//     // mounting -> updating
//     constructor(props) {
//         super(props);
//         this.state = {
//             instrument: "Guitar"
//         }
//     }

//     shouldComponentUpdate() { // component enabled/disabled to update
//         return true;
//     }

//     change = () => {
//         this.setState({instrument: "Piano"})
//     }

//     getSnapshotBeforeUpdate(prevProps, prevState) { // captures some info before update
//         document.getElementById("div1").innerHTML = "Before Update : " + prevState.instrument;
//     }

//     componentDidUpdate() {
//         document.getElementById("div2").innerHTML = "After Update : " + this.state.instrument;
//     } 

//     render() { 
//         return(
//             <div>
//                 <h2>{this.state.instrument}</h2>
//                 <button type="button" onClick={this.change}>Change</button>
//                 <div id="div1"></div>
//                 <div id="div2"></div>
//             </div>
//         )
//     }
// }




// //MOUNTING

// class Music extends React.Component { 
//     constructor(props) { //1st method
//         super(props);
//         this.state = {
//             instrument: "Guitar"
//         }
//     }

//     static getDerivedStateFromProps(props, state) { //2nd method
//         return { instrument: props.New }
//     }   

//     componentDidMount() { //3rd method
//         setTimeout(() => {
//             this.setState({instrument: "Piano"})
//         }, 3000)
//     }

//     // componentDidMount and getDerivedStateFromProps cannot be used together

//     render() { //4th method
//         return(
//             <div>
//                 <h2>{this.state.instrument}</h2>
//             </div>
//         )
//     }
// }

// export default Music;