import { Link, Routes, Route } from 'react-router-dom';
import './App.css';
import { Home } from './home/home';
import { ProductDetails } from './products/productdetails';
import { Products } from './products/products';
import { SignIn } from './signin/signin';

function App() {
  return (
    <div>
      <Link to=''>Home</Link>
      <Link to='signin'>Sign In</Link>
      <Link to='products'>Products</Link>
      <div>
        <Routes>
          <Route path='' element={<Home></Home>}></Route>
          <Route path='signin' element={<SignIn></SignIn>}></Route>
          <Route path='products' element={<Products></Products>}></Route>
          <Route path='productdetails' element={<ProductDetails></ProductDetails>}></Route>

          <Route path='*' element={<Home></Home>}></Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
