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

class BuggyCounter extends React.Component{
    constructor(props)
    {
    super(props)
 
    this.state = {
        greeting : "Welcome"
    }
    }
    componentDidMount(){
        throw new Error("An error occured in Buggy counter")
    }
    render(){
        return(
            <div>
                <h2> {this.state.greeting}</h2>
            </div>
        )
    }
}

class NotBuggy extends React.Component{
    constructor(props)
    {
    super(props)
 
    this.state = {
        greeting : "Welcome"
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

function App(){
    return(
        <div>
            <MyErrorBoundary>
                <BuggyCounter />
             </MyErrorBoundary>
 
               <MyErrorBoundary>
                <NotBuggy />
             </MyErrorBoundary>
        </div>
    )
}

export default App;