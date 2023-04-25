import { createRef } from "react";
import { connect } from 'react-redux';
function Topics(props) {
    let tref = createRef();
    return (
        <div>
            <h4>Topics : {props.count}</h4>
            <input type='text' name='tp' ref={tref}></input>
            <button onClick={() => props.addTopic(tref.current.value)}>Add</button>
            <ol>
                {props.tps.map((t, i) => <li key={i}>{t}</li>)}
            </ol>
        </div>
    )
}

function mapStateToProps(state) {
    console.log(JSON.stringify(state));
    return { tps: state.topicsreducer.tps, count: state.xcounterreducer.count }
}

function mapDispatchToprops(dispatch) {
    return {
        addTopic: (t) => {
            dispatch({ type: 'ADD_TOPIC', payload: { tp: t } });
        }
    }
}
export default connect(mapStateToProps, mapDispatchToprops)(Topics);