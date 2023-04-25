import { createRef, useState } from "react";
import { SignInService } from "./signinservice";

export function SignInFun() {


    let lgref = createRef();
    let pwref = createRef();
    let [msg, setMsg] = useState('');


    function doLogin() {
        let ss = new SignInService();
        if (ss.checkLogin(lgref.current.value, pwref.current.value))
            setMsg('Welcome!!');
        else
            setMsg('Invalid login/password..');

    }
    return (
        <div>
            <h4>SignIn (Function)</h4>
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