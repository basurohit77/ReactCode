
import React from 'react';
import ReactDOM from 'react-dom/client';

//let hdr1 = React.createElement('h4', null, 'Hello IBM!!');
//let hdr2 = React.createElement('h4', null, 'Hello World!!');
//let dv = React.createElement('div', null, hdr1, hdr2);

let dv = <div>
    <h4>Hello IBM!!</h4>
    <h4>Hello World!!</h4>
</div>

let root = ReactDOM.createRoot(document.getElementById('root'));
root.render(dv);