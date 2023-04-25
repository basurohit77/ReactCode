import './products.css';
import { Link } from 'react-router-dom';
export function Products() {
    let data = [
        { code: '1', name: 'Mouse', price: 600 },
        { code: '2', name: 'Keyboard', price: 800 }
    ];

    return (
        <div>
            <h4>Products</h4>
            <table width="600px" >
                <thead>
                    <tr><th>Code</th><th>Name</th><th>Price</th></tr>
                </thead>
                <tbody>
                    {data.map((p, i) => <tr key={p.code}><td> <Link to="/productdetails">{p.code}</Link></td><td>{p.name}</td><td>{p.price}</td></tr>)}
                </tbody>
            </table>

        </div>
    )
}