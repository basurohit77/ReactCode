import React, { createRef } from "react";
import './signin.css';
import { SignInService } from "./signin.service";

export class SignIn extends React.Component {

    lgref = createRef();
    pwref = createRef();

    doSignIn = () => {
        let ss = new SignInService();
        if (ss.checkLogin(this.lgref.current.value, this.pwref.current.value))
            alert('Welcome!!!');
        else
            alert('Invalid login/password!!');
    }

    render() {
        return (
            <div>
                <h4>SignIn</h4>
                <div>
                    <label>Login</label>
                    <input type='text' name='login' ref={this.lgref}></input><span className="err">*</span>
                </div>
                <div>
                    <label>Password</label>
                    <input type='password' name='password' ref={this.pwref}></input><span className="err">*</span>
                </div>
                <div>
                    <button onClick={this.doSignIn}>Next</button>
                </div>
            </div>
        )
    }
}