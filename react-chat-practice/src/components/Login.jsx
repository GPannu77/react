import { useState } from "react";


function Login() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    return(<>
    <input value={email} type="text" 
           placeholder="Email" onChange={(e) => setEmail(e.target.value)}></input>
    <input value={password} type="password" 
           placeholder="Password" onChange={(e) => setPassword(e.target.value)}></input>
    <button onClick={() => console.log("sign up clicked")}>Sign Up</button>
    <button onClick={() => console.log("login button clicked")}>Log In</button>
    </>);
}

export default Login;