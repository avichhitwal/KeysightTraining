import React from "react";

class CounterComp extends React.Component { 

    constructor(props) {
        super(props);
        this.state = {
            c: 0
        }
    }

    Add() { 
        this.setState({c: this.state.c + 1});
    }

    Sub() { 
        this.setState({c: this.state.c - 1});
    }

    Reset() { 
        this.setState({c: 0});
    }

    render() {

        return(
            <div>
                <h3> Counter : {this.state.c} </h3> <br/>
                <button onClick={ () => this.Add() }> + (Add)</button> <br/> <br/>
                <button onClick={ () => this.Sub() }> - (Subtract)</button> <br/> <br/>
                <button onClick={ () => this.Reset() }> reset = 0</button>
            </div>
        )
    }
}

export default CounterComp;