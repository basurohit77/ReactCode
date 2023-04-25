import './App.scss';
import { TextInput } from 'carbon-components-react';
function App() {
  return (
    <div className='bx--grid'>
      <div className='bx--row'>
        <div className='bx--col-sm-4 bx--col-md-4'>
          <TextInput
            helperText="Please enter full name"
            id="test2"
            invalidText="A valid value is required"
            labelText="Full Name"
            placeholder="Name"
          />

        </div>
        <div className='bx--col-sm-4 bx--col-md-4'>
          <TextInput
            helperText="Optional helper text"
            id="test2"
            invalidText="A valid value is required"
            labelText="Text input label"
            placeholder="Placeholder text"
          />

        </div>
      </div>

    </div>
  );
}

export default App;
