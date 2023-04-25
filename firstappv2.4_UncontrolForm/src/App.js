import { Link, Routes, Route } from 'react-router-dom';
import './App.css';
import { Home } from './home/home';
import { ProductDetails } from './products/productdetails';
import { Products } from './products/products';
import { SignIn } from './signin/signin';
import { SignInFun } from './signin/signinfun';
import { Topics } from './topics/topics';

function App() {
  return (
    <div>
      <Link to=''>Home</Link>
      <Link to='signin'>Sign In</Link>
      <Link to='products'>Products</Link>
      <Link to='topics'>Topics</Link>

      <div>
        <Routes>
          <Route path='' element={<Home></Home>}></Route>
          <Route path='signin' element={<div><SignIn></SignIn><SignInFun></SignInFun></div>}></Route>
          <Route path='products' element={<Products></Products>}>
            <Route path='productdetails/:cd/:nm' element={<ProductDetails></ProductDetails>}></Route>
          </Route>
          <Route path='topics' element={<Topics></Topics>}></Route>

          <Route path='*' element={<Home></Home>}></Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
