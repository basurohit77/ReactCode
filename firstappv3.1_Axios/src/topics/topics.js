import { createRef, useState } from "react";

export function Topics() {
    let tref = createRef();
    let [tps, setTps] = useState(['Angular', 'React']);

    function addTopic() {
        setTps([...tps, tref.current.value]);
        tref.current.value = '';
    }
    return (
        <div>
            <h4>Topics</h4>
            <input type='text' name='tp' ref={tref}></input>
            <button onClick={addTopic}>Add</button>
            <ol>
                {tps.map((t) => <li key={t}>{t}</li>)}
            </ol>
        </div>
    )
}