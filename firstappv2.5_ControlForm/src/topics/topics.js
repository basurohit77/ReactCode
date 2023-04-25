import { createRef, useState } from "react";

export function Topics() {
    let tref = createRef();
    let tps1 = ['Angular', 'React']
    let [tps, setTps] = useState(tps1);
    //let opt = { code: '', name: '', price: "" };

    function addTopic() {
        setTps([...tps, tref.current.value]);
        //tps1 = tps
        //console.log(tps1)
        //setTps([tps.push(tref.current.value)]);
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