import React,{useState,useEffect} from "react";

function Marksheet() {

    const[name] = useState("abc");
    const[age] = useState(21);
    const[math,setMath] = useState(50);
    const[chem,setChem] = useState(60);
    const[phy,setPhy] = useState(70);
    const[total,setTotal] = useState(0);
    const[update,setUpdate] = useState(false);

    useEffect(() => {
        if(update) {
            setMath(math + 10);
            setChem(chem + 10);
            setPhy(phy + 10);
            setUpdate(false);
        }
    })
    

    return(
        <div>
            <h2> Marksheet </h2>
            <h3> Name: {name} </h3>
            <h3> Age: {age} </h3>
            <h3> Total: {math + chem + phy}</h3>
            <h3> Math: {math} </h3>
            <h3> Chemistry: {chem} </h3>
            <h3> Physics: {phy} </h3>
            <button onClick={() => setUpdate(true)}>Update</button>
        </div>
    )
}
export default Marksheet;