
import React from 'react';
import ReactDOM from 'react-dom/client';

class HelloWorldComp extends React.Component {
    render() {
        return (
            <h4>{this.props.msg}</h4>
        )
    }
}
function IBMComp(props) {
    return (
        <h4>{props.msg},{props.loc}</h4>
    )
}

let root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <div>
        <IBMComp msg="Hello IBM!!" loc="Munich"></IBMComp>
        <HelloWorldComp msg="Hello World!!" ></HelloWorldComp>
    </div>
);