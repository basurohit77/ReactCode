import Axios from "axios";
import { createRef } from "react"

export function Cars() {
    let iref = createRef();
    let makeref = createRef();
    let modelref = createRef();
    let variantref = createRef();


    function addCar() {
        let url = "http://localhost:8080/cars"; //Run the restexpress application
        let newcar = {
            id: iref.current.value,
            make: makeref.current.value,
            model: modelref.current.value,
            variant: variantref.current.value,
        }
        Axios.post(url, newcar).then((res) => {
            console.log(res.data);
        });
    }

    return (
        <div>
            <h3>Cars</h3>
            <div>
                <div>
                    <label>Id</label>
                    <input ref={iref}></input>
                </div>
                <div>
                    <label>Make</label>
                    <input ref={makeref}></input>
                </div>
                <div>
                    <label>Model</label>
                    <input ref={modelref}></input>
                </div>
                <div>
                    <label>Variant</label>
                    <input ref={variantref}></input>
                </div>
                <div>
                    <button onClick={addCar}>Add</button>
                </div>
            </div>
        </div>
    )
}