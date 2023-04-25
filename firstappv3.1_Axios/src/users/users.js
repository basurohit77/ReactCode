import Axios from "axios";
import { useEffect, useState } from "react";


export function Users() {

    let [data, setData] = useState([]);

    // If at mount time date need to be loaded
    useEffect(() => {
          getData();
     }, []);

    function getData() {
        let url = "https://jsonplaceholder.typicode.com/users";
        Axios.get(url).then((res) => {
            setData(res.data);
        });

    }
    return (
        <div>
            <h3>Users</h3>
            <button onClick={getData}>Get Data</button>
            <table width="700px">
                <thead>
                    <tr>
                        <th>key</th>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Username</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((u, i) => <tr key={i}><td>{i}</td><td>{u.id}</td><td>{u.name}</td><td>{u.username}</td><td>{u.email}</td></tr>)}
                </tbody>
            </table>
        </div>
    )
}