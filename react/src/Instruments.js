import React,{useEffect, useState} from "react";

function Instruments() {

    const[oldInstrument] = useState("Drums");
    const[Instrument,setInstrument] = useState();
    const[show,setShow] = useState(false);

    useEffect(() => {
        if(show) setInstrument("Violin");
    })

    return(
        <div>
            <h3>Old Instrument: {oldInstrument}</h3>
            <h3>New Instrument: {Instrument}</h3>
            <button onClick={() => setShow(true)}>Show</button>
        </div>
    )
}

export default Instruments;