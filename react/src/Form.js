import React from "react";

class Form extends React.Component{

    constructor(){
        super();
        this.state = {
            roll_no : null,
            participate : ''
        }
    }

    changeHandler = (event, a) => {
        let name = event.target.name;
        let val = event.target.value;

        if(name === "roll_no") {
            if(!Number(val)) {
                alert("not a number");
            }
            this.setState({[name] : val});
        }
    }

    render() {
        return(
            <form>
                <h2>Hello {this.state.participate}</h2>
                <p>Register name:</p>
                <input type="text" name="participate" onChange={this.changeHandler} />

                <p>Register roll no:</p>
                <input type="text" name="roll_no" onChange={this.changeHandler} />
                <h2>Your roll no: {this.state.roll_no}</h2>
            </form>
        )
    }
}

export default Form;