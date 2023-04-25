import { useState } from "react";

export function SignUp() {
    let [user, setUser] = useState({ fname: '', email: '' });
    function formHandler(e) {
        setUser({ ...user, [e.target.name]: e.target.value })
    }
    function doSignUp() {
        alert('Welcome : ' + user.fname);
    }
    return (
        <div>
            <h3>Sign Up</h3>
            {user.fname},{user.email}
            <div>
                <label>Full Name</label>
                <input type='text' name='fname' onChange={formHandler}></input>
            </div>
            <div>
                <label>Email</label>
                <input type='text' name='email' onChange={formHandler}></input>
            </div>
            <div>
                <button onClick={doSignUp}>Next</button>
            </div>
        </div>
    )

}