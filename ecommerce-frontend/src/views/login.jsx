import { Link } from "react-router-dom"
import { useStateContext } from "../Contexts/ContextProvider";
import axiosClient from "../axiosClient";
import { useRef } from "react";

const Login = () => {

    const emailRef = useRef();
    const passwordRef = useRef();

    const {setUser, setToken} = useStateContext();

    const Submit =  (ev) =>{
        ev.preventDefault();
        const payload = {
            email: emailRef.current.value,
            password: passwordRef.current.value,
        }
        axiosClient.post("/login",payload).then(({data})=>{
            setUser(data.user);
            setToken(data.token);
    }).catch(err => {
        const response = err.response;
        if(response && response.status === 422){
            console.log(response.data.errors);
        }
    });
    }
  return (
    <div className="login-signup-form animated fadeinDown">
            <div className="form">
                <h1 className="title">
                    Login To Your Account
                </h1>
                <form onSubmit={Submit}>
                <input ref={emailRef} type="email" placeholder="Email" required />
                    <input ref={passwordRef} type="password" placeholder="Password" required/>
                    <button className="btn btn-block">Login</button>
                    <p className="message">
                        Dont Have An Account? <Link to= '/register'>Create account</Link>
                    </p>
                </form>
            </div>
        </div>
  )
}

export default Login
