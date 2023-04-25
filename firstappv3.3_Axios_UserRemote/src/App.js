import { Link, Routes, Route } from 'react-router-dom';
import './App.css';
import { Cars } from './cars/cars';
import { Home } from './home/home';
import { ProductDetails } from './products/productdetails';
import { Products } from './products/products';
import { Users } from './users/users';

function App() {
  return (
    <div>
      <Link to=''>Home</Link>
      <Link to='products'>Products</Link>
      <Link to='users'>Users</Link>
      <Link to='cars'>Cars</Link>

      <div>
        <Routes>
          <Route path='' element={<Home></Home>}></Route>
          <Route path='products' element={<Products></Products>}>
            <Route path='productdetails/:cd/:nm' element={<ProductDetails></ProductDetails>}></Route>
          </Route>
          <Route path='users' element={<Users></Users>}></Route>
          <Route path='cars' element={<Cars></Cars>}></Route>
          <Route path='*' element={<Home></Home>}></Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
