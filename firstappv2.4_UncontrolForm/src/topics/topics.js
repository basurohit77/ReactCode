import { createRef, useState } from "react";


export function Topics() {
    let topicref = createRef();
    let [msg, setMsg] = useState('');

    let tps = ['Angular', 'React'];

    function addTopic() {
        alert('!!');
        setMsg(topicref.current.value);
        tps.push(msg) //
    }
    return (
        <div>
            <h4>Topics</h4>
            <label>New</label>
            <input input type='text' name='Topc' ref={topicref}></input>
            <button onClick={addTopic}>Add</button>
            <ol>
                {tps.map((t) => <li>{t}</li>)}
            </ol>
        </div>
    )
}