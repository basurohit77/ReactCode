import { useState } from "react";

export function SignUp() {
    let [fname, setFname] = useState('');
    let [email, setEmail] = useState('');

    function fnameHandler(e) {
        setFname(e.target.value);
    }
    function emailHandler(e) {
        setEmail(e.target.value);

    }
    function doSignUp() {
        alert('Welcome : ' + fname);
    }
    return (
        <div>
            <h3>Sign Up</h3>
            {fname},{email}
            <div>
                <label>Full Name</label>
                <input type='text' name='fname' onChange={fnameHandler}></input>
            </div>
            <div>
                <label>Email</label>
                <input type='text' name='email' onChange={emailHandler}></input>
            </div>
            <div>
                <button onClick={doSignUp}>Next</button>
            </div>
        </div>
    )

}