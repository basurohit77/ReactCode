import Axios from "axios";
export function findAll() {
    let url = "https://jsonplaceholder.typicode.com/users";
    return Axios.get(url);
}

