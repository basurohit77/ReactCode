import { useParams, useNavigate } from 'react-router-dom';

export function ProductDetails() {
    let params = useParams();
    let nav = useNavigate();
    function goHome() {
        nav("/");
    }

    return (
        <div>
            <h3>Details : {params.cd} , {params.nm}</h3>
            <button onClick={goHome}>Home</button>
        </div>
    )

}