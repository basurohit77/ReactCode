import React from "react";
import { combineReducers, createStore } from 'redux';
import './App.css';
import XCounter from './xcounter/xcounter';
import { Provider } from 'react-redux'
import { xcounterreducer } from './xcounter/xcounterreducer';
import { topicsreducer } from './topics/topicsreducer';
import Topics from './topics/topics';

function App() {

  let store = createStore(combineReducers({ xcounterreducer, topicsreducer }));
  return (
    <React.Fragment>
      <Provider store={store}>
        <XCounter></XCounter>
        <Topics></Topics>
      </Provider>
    </React.Fragment>
  );
}

export default App;
