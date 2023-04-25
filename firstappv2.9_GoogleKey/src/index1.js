
import React from 'react';
import ReactDOM from 'react-dom/client';


function Cities() {
    let cts = ['Munich', 'Manila', 'Cebu'];

    return (
        <select>
            {cts.map((c) => <option value={c}>{c}</option>)}
        </select>
    )
}
let root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Cities></Cities>);