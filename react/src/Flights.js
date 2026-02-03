import React from "react";

class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            AirlineName: "ABC",
            AirlineCode: "123",
            Seats: "100",
            SourceCity: "X",
            DestinationCity: "Y",
            TicketPrice: "5000"
        }
    }

    render() {
        return (
            <div>
                <FlightInfo
                    AirlineName={this.state.AirlineName}
                    AirlineCode={this.state.AirlineCode}
                    Seats={this.state.Seats} 
                    SourceCity={this.state.SourceCity}
                    DestinationCity={this.state.DestinationCity}
                    TicketPrice={this.state.TicketPrice}/>
            </div>
        )
    }
}

class FlightInfo extends React.Component {
    render() {
        return (
            <div>
                <h3>Flight Info</h3>
                <p>Airline Name: {this.props.AirlineName}</p>
                <p>Airline Code: {this.props.AirlineCode}</p>
                <p>Seats: {this.props.Seats}</p>
                <RouteInfo
                    SourceCity={this.props.SourceCity}
                    DestinationCity={this.props.DestinationCity} />
                <PriceInfo TicketPrice={this.props.TicketPrice} />
            </div>
        )
    }
}

class RouteInfo extends React.Component {
    render() {
        return (
            <div>
                <h3>Route Info</h3>
                <p>Source City: {this.props.SourceCity}</p>
                <p>Destination City: {this.props.DestinationCity}</p>
            </div>
        )
    }
}

class PriceInfo extends React.Component {
    render() {
        return (
            <div>
                <h3>Price Info</h3>
                <p>Ticket Price: {this.props.TicketPrice}</p>
            </div>
        )
    }
}

export default App;