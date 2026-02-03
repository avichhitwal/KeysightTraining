import React from "react";

let price = React.createContext();

function App() {
    return(
        <div>
            <price.Provider value={{p:4000,d:30}}>
                <Price />
                <Discount />
            </price.Provider>

        </div>
    )
}


function Price() {
    return(
        <div>
            <price.Consumer>
                {value => <div>Actual Price: {value.p}</div>}
            </price.Consumer>
        </div>
    )
}

function Discount() {
    return(
        <div>
            <price.Consumer>
                {value => <div>Discount: {value.d}</div>}
            </price.Consumer>
        </div>
    )
}

export default App;