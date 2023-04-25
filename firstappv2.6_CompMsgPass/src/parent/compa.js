import { createRef } from "react"

export function CompA(props) {
    let tref = createRef();

    return (
        <div>
            <h3>CompA</h3>
            <input ref={tref}></input>
            <button onClick={() => props.send(tref.current.value)}>Send</button>
        </div>
    )
}