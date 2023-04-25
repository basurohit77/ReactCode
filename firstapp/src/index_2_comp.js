
import React from 'react';
import ReactDOM from 'react-dom/client';

class HelloWorldComp extends React.Component {
    render() {
        return (
            <h4>Hello World!!</h4>
        )
    }
}
function IBMComp() {
    return (
        <h4>Hello IBM!!</h4>
    )
}

let root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <div>
        <IBMComp></IBMComp>
        <HelloWorldComp></HelloWorldComp>
    </div>
);