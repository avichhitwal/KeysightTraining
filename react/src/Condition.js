import React, {useState} from "react";

function LoginStatus(){

    const[isLoggedIn,setIsLoggedIn] = useState(false)

    return(
        <>
        <h2>User Auth</h2>

        {
            isLoggedIn ? (
                <>
                <p>Welcome</p>
                <button onClick={ () => setIsLoggedIn(false)}>Logout</button>
                </>
            ) : (
                <>
                <p>Login</p>
                <button onClick={ () => setIsLoggedIn(true)}>Login</button>
                </>
            )
        }

        </>
    )
}

export default LoginStatus;