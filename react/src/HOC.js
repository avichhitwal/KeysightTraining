import React from 'react';

const Hello = ({name}) => <h1> Welcome {name} </h1> // function comp

function simpleHOC(WrappedComponent) { //returns a new comp
    
    return class extends React.Component{ //anonymous class comp
        render() {
            return <WrappedComponent {...this.props} />;
        }
    }
}

let NewComp = simpleHOC(Hello);

const App = () => 
    <div>
        <NewComp name="abc" />
    </div>
    
export default App;