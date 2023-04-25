import { createStore } from 'redux';
import './App.css';
import XCounter from './xcounter/xcounter';
import { Provider } from 'react-redux'
import { xcounterreducer } from './xcounter/xcounterreducer';

function App() {

  let store = createStore(xcounterreducer);
  return (
    <div>
      <Provider store={store}>
        <XCounter></XCounter>
      </Provider>
    </div>
  );
}

export default App;
