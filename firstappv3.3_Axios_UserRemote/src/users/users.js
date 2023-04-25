import { useState } from "react";
import { findAll } from "./users_service";
export function Users() {
    let [data, setData] = useState([]);
    function getData() {
        findAll().then((res) => {
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
                        <th>Id</th>
                        <th>Name</th>
                        <th>Username</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((u) => <tr><td>{u.id}</td><td>{u.name}</td><td>{u.username}</td><td>{u.email}</td></tr>)}
                </tbody>
            </table>
        </div>
    )
}