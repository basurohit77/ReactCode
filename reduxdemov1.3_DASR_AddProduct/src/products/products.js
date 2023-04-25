import './products.css';
import { Link, Outlet } from 'react-router-dom';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addProduct } from '../actions/index' //Import Action

function Products() {
    const myState4 = useSelector((state) => state.productsReducer)
    const dispatch = useDispatch(); //Call useDispacher to get a handler
                                    //Disp will link event to an Action
                                    //Disp will find the Store from Provider
                                    //Store will find a Reducer for that Action

    let [product, setProduct] = useState({ code: '', name: '', price: '' });

    function formChanged(e) {
        setProduct({ ...product, [e.target.name]: e.target.value })

    }
    function add() {
        dispatch(addProduct(product));
       // dispatch({type: "ADD_PRODUCT", payload: { dt: prod }})
        setProduct({ code: '', name: '', price: '' });
    }
    return (
        <>
            <h4>Products</h4>
            <p>{JSON.stringify(product)}</p>
            <div>
                <label>Code</label>
                <input type='text' name='code' onChange={formChanged} value={product.code}></input>
            </div>
            <div>
                <label>Name</label>
                <input type='text' name='name' onChange={formChanged} value={product.name}></input>
            </div>
            <div>
                <label>Price</label>
                <input type='text' name='price' onChange={formChanged} value={product.price}></input>
            </div>
            <div>
                <button onClick={add}>Add</button>
            </div>
            <table width="600px" >
                <thead>
                    <tr><th>Code</th><th>Name</th><th>Price</th></tr>
                </thead>
                <tbody>     
                    {myState4.dts.map((p, i) => 
                    <tr key={p.code}>
                        <td><Link to={"productdetails/" + p.code + "/" + p.name}>{p.code}</Link></td>
                        <td>{p.name}</td>
                        <td>{p.price}</td>
                    </tr>
                    )}
                </tbody>
            </table>
            <Outlet></Outlet>
        </>
    )
}

export default Products;