import { useState } from "react";
import { auth } from "../firebase";
import { createUserWithEmailAndPassword} from 'firebase/auth';

function Login() {
       async function handleSignUp() {
              try{
                     await createUserWithEmailAndPassword(auth, email, password);
              } catch (error) {
                     console.log(error.message);
              }
       }
       
       const [email, setEmail] = useState("");
       const [password, setPassword] = useState("");

       return(<>
       <input value={email} type="text" 
              placeholder="Email" onChange={(e) => setEmail(e.target.value)} required></input>
       <input value={password} type="password"
              placeholder="Password" onChange={(e) => setPassword(e.target.value)} required></input>
       <button onClick={handleSignUp}>Sign Up</button>
       <button onClick={() => console.log("login button clicked")}>Log In</button>
       </>);
}

export default Login;