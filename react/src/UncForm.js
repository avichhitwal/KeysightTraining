import React,{useRef} from "react";

function UncForm() {
    const nameRef = useRef(null);

    const handleSubmit = (event) => {
        event.preventDefault();
        alert(`name: ${nameRef.current.value}`)
    }

    return(
        <form onSubmit={handleSubmit}>
            <label>
                Name: 
                <input type="text" ref={nameRef} />
            </label> <br/> <br/>
            <button type="submit">Submit</button>
        </form>
    )
}

export default UncForm;