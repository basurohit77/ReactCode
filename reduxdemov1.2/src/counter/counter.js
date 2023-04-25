import { useState } from "react"

export function Counter() {
    let [count, setCount] = useState(0);
    function inc() {
        setCount(count + 1);
    }
    function dec() {
        setCount(count - 1);
    }
    return (
        <div>
            <h4>Counter : {count} </h4>
            <button onClick={inc}>INC</button>
            <button onClick={dec}>DEC</button>
        </div>
    )
}