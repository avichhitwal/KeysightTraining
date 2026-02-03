import React from "react";  

class MyErrorBoundary extends React.Component{

    state={
        errorMessage: ""
    };

    static getDerivedStateFromError(error) { //1st method
        return{
            errorMessage : error.toString()
        }
    }

    componentDidCatch(error,info) { //2nd method
        this.logErrorToServices(error.toString(),info.componentStack)
    }

    logErrorToServices = console.log

    render() {
        if(this.state.errorMessage) {
            return <p>{this.state.errorMessage}</p>
        }
        return this.props.children;
    }
}

class ErrComp1 extends React.Component{
    constructor(props){
        super(props)
    
        this.state = {
            greeting : ""
        }
    }
    componentDidMount(){
        throw new Error("from first component1")
    }
    render(){
        return(
            <div>
                <h2> {this.state.greeting}</h2>
            </div>
        )
    }
}

class Comp2 extends React.Component{
    constructor(props)
    {
    super(props)
 
    this.state = {
        greeting : "you are doing well!!"
    }
    }
    componentDidMount(){}
 
    render(){
        return(
            <div>
                <h2> {this.state.greeting}</h2>
            </div>
        )
    }
}

class ErrComp3 extends React.Component{
    constructor(props){
        super(props)
    
        this.state = {
            greeting : ""
        }
    }
    componentDidMount(){
        throw new Error("from third component3")
    }
    render(){
        return(
            <div>
                <h2> {this.state.greeting}</h2>
            </div>
        )
    }
}

function App(){
    return(
        <div>
            <MyErrorBoundary>
                <ErrComp1 />
            </MyErrorBoundary>
 
            <MyErrorBoundary>
                <Comp2 />
            </MyErrorBoundary>

            <MyErrorBoundary>
                <ErrComp3 />
            </MyErrorBoundary>
        </div>
    )
}

export default App;