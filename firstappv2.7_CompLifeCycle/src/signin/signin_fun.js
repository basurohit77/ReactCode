import { createRef, useEffect, useState } from "react";
import { SignInService } from "./signin.service";

export function SignIn_Fun() {


    let lgref = createRef();
    let pwref = createRef();
    let [msg, setMsg] = useState('');

    //Call when rendered
    useEffect(() => {
        console.log('signIn_Fun mounted.....')
    }, [])

    //Call when Updated
    useEffect(() => {
        console.log('signIn_Fun updated...' + msg)
    }, [msg])

    //Call when go to diffrent page
    useEffect(() => {
        return () => {
            console.log('signIn_Fun umounted.....')
        }
    }, [])

    function doLogin() {
        let ss = new SignInService();
        if (ss.checkLogin(lgref.current.value, pwref.current.value))
            setMsg('Welcome!!');
        else
            setMsg('Invalid login/password..');

    }
    return (
        <div>
            <h4>SignIn (Fun)</h4>
            <div>
                <label>Login</label>
                <input type='text' name='login' ref={lgref}></input><span className="err">*</span>
            </div>
            <div>
                <label>Password</label>
                <input type='password' name='password' ref={pwref}></input><span className="err">*</span>
            </div>
            <div>
                <p>{msg}</p>
            </div>
            <div>
                <button onClick={doLogin}>Next</button>
            </div>
        </div>
    )
}