// Attach component in App
import React from "react";
import './App.css';
import XCounter from './xcounter/xcounter';
import Topics from './topics/topics';

function App() {

    return (
    <React.Fragment> 
        <XCounter></XCounter>
        <Topics></Topics>
    </React.Fragment>
  );
}

export default App;
