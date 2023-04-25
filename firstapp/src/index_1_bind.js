
import React from 'react';
import ReactDOM from 'react-dom/client';

function GreetComp() {
  //model
  let msg = "Hello IBM!!";

  // viewall
  return (
    <div>{msg}</div>
  )

}  


let root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<GreetComp></GreetComp>);