import { connect } from "react-redux";

function XCounter(props) {
    return (
        <div>
            <h4>XCounter : {props.count} </h4>
            <button onClick={props.inc}>INC</button>
            <button onClick={props.dec}>DEC</button>
        </div>
    )
}
function mapStateToProps(state) {
    return { count: state.count }
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