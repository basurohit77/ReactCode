import { Link, Routes, Route } from 'react-router-dom';
import './App.css';
import { Home } from './home/home';
import { Parent } from './parent/parent';
import { ProductDetails } from './products/productdetails';
import { Products } from './products/products';
import { SignIn } from './signin/signin';
import { SignIn_Fun } from './signin/signin_fun';
import { SignUp } from './signup/signup';
import { Topics } from './topics/topics';
import { Users } from './users/users';

function App() {
  return (
    <div>
      <Link to=''>Home</Link>
      <Link to='signin'>Sign In</Link>
      <Link to='products'>Products</Link>
      <Link to='topics'>Topics</Link>
      <Link to='signup'>Sign Up</Link>
      <Link to='parent'>Parent</Link>
      <Link to='users'>Users</Link>


      <div>
        <Routes>
          <Route path='' element={<Home></Home>}></Route>
          <Route path='signin' element={<div><SignIn></SignIn><SignIn_Fun></SignIn_Fun></div>}></Route>
          <Route path='products' element={<Products></Products>}>
            <Route path='productdetails/:cd/:nm' element={<ProductDetails></ProductDetails>}></Route>
          </Route>
          <Route path='topics' element={<Topics></Topics>}></Route>
          <Route path='signup' element={<SignUp></SignUp>}></Route>
          <Route path='parent' element={<Parent></Parent>}></Route>
          <Route path='users' element={<Users></Users>}></Route>

          <Route path='*' element={<Home></Home>}></Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
