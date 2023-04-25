import React, { createRef } from "react";
import './signin.css';
import { SignInService } from "./signin.service";
export class SignIn extends React.Component {

    //initialize 
    state = { msg: '' };

    lgref = createRef();
    pwref = createRef();


    doSignIn = () => {
        let ss = new SignInService();
        if (ss.checkLogin(this.lgref.current.value, this.pwref.current.value))
            this.setState({ msg: 'Welcome!!' });
        else
            this.setState({ msg: 'Invalid login/password..' });
        console.log(this.msg);
    }
    componentDidMount() {
        console.log('signin....mounted...');
    }

    componentDidUpdate(pprops, pstate) {
        console.log('prev state...' + JSON.stringify(pstate));
        console.log('curr state...' + JSON.stringify(this.state));
    }
    shouldComponentUpdate() {
        return true;
    }

    componentWillUnmount() {
        console.log('signin....unmounted...');
    }

    render() {
        return (
            <div>
                <h4>SignIn (class)</h4>
                <div>
                    <label>Login</label>
                    <input type='text' name='login' ref={this.lgref}></input><span className="err">*</span>
                </div>
                <div>
                    <label>Password</label>
                    <input type='password' name='password' ref={this.pwref}></input><span className="err">*</span>
                </div>
                <div>
                    <p>{this.state.msg}</p>
                </div>
                <div>
                    <button onClick={this.doSignIn}>Next</button>
                </div>
            </div>
        )
    }
}