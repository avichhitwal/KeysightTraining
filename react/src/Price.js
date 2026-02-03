import React from "react";

class PriceComp extends React.Component { 

    constructor(props) {
        super(props);
        this.state = {
            price: 3500,
            discount: 10
        }
    }

    // changePrice() { 
    //     this.setState({price: 4000,discount: 15});
    // }

    render() {

        setTimeout( () => { 
            this.setState({price:4000,discount:15})
        }, 5000 );

        return(
            <div>
                <p>Price: {this.state.price}</p>
                <p>Discount: {this.state.discount}</p>
                {/* <button onClick={ () => this.changePrice() }>Change Price</button> */}
            </div>
        )
    }
}

export default PriceComp;