import './App.css';
import { Home } from './home/home';
import { Products } from './products/products';
import { SignIn } from './signin/signin';

function App() {
  return (
    <div>
      <Home></Home>
      <hr></hr>
      <SignIn></SignIn>
      <hr></hr>
      <Products></Products>
    </div>
  );
}

export default App;
