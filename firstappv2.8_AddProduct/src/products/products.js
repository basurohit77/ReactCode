import './products.css';
import { Link, Outlet } from 'react-router-dom';
import { useState } from 'react';
export function Products() {
    let [data, setData] = useState([
        { code: '1', name: 'Mouse', price: 600 },
        { code: '2', name: 'Keyboard', price: 800 }
    ]);
    let [product, setProduct] = useState({ code: '', name: '', price: '' });

    function formChanged(e) {
        setProduct({ ...product, [e.target.name]: e.target.value })

    }
    function add() {
        setData([...data, product]);
        setProduct({ code: '', name: '', price: '' });
    }
    return (
        <div>
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
                    {data.map((p, i) => <tr key={p.code}><td> <Link to={"productdetails/" + p.code + "/" + p.name}>{p.code}</Link></td><td>{p.name}</td><td>{p.price}</td></tr>)}
                </tbody>
            </table>
            <Outlet></Outlet>
        </div>
    )
}