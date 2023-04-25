import { useState } from "react";
import { CompA } from "./compa";
import { CompB } from "./compb";

export function Parent() {
    let [txt, setTxt] = useState('');

    function send(t) {
        setTxt(t);
    }

    return (
        <div>
            <h3>Parent : {txt}</h3>
            <CompA send={send}></CompA>
            <hr></hr>
            <CompB msg={txt}></CompB>
        </div>
    )
} 