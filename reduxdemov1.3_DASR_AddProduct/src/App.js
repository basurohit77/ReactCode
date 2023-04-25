import React from "react";
import './App.css';
import Home from './home/home';
import XCounter from './xcounter/xcounter';
import Topics from './topics/topics';
import Products from "./products/products";
import ProductDetails from './products/productdetails';
import { Link, Routes, Route } from 'react-router-dom';

function App() {

    return (
    <React.Fragment> 
      <Link to=''>Home</Link>
      <Link to='counter'>Counter</Link>
      <Link to='topics'>Topics</Link>
      <Link to='products'>Products</Link>
      <div>
        <Routes>
            <Route path='' element={<Home></Home>}></Route>
            <Route path='counter' element={<XCounter></XCounter>}></Route>
            <Route path='products' element={<Products></Products>}>
              <Route path='productdetails/:cd/:nm' element={<ProductDetails></ProductDetails>}></Route>
            </Route>
            <Route path='topics' element={<Topics></Topics>}></Route>
        </Routes>
      </div>
    </React.Fragment>
  );
}

export default App;
