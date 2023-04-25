import React from "react"
import { connect } from "react-redux";

function XCounter(props) {
    return (
        <React.Fragment>
            <h4>XCounter : {props.count} </h4>
            <button onClick={props.inc}>INC</button>
            <button onClick={props.dec}>DEC</button>
        </React.Fragment>
    )
}
function mapStateToProps(state) {
    return { count: state.xcounterreducer.count }
}

function mapDispatchToprops(dispatch) {
    return {
        inc: () => {
            dispatch({ type: 'INC' });
        },
        dec: () => {
            dispatch({ type: 'DEC' });
        }
    }

}

export default connect(mapStateToProps, mapDispatchToprops)(XCounter);