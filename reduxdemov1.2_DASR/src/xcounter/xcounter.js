//Each component will create a Dispatcher to transfer Action
//Each component will also get the recent sate from Reducer by Selector
import React from "react"
//import { connect } from "react-redux";
import { useSelector, useDispatch } from 'react-redux';
import { incNumber, decNumber } from '../actions/index' //Step-5. Import Action


function XCounter(props) {
    const myState = useSelector((state) => state.xcounterReducer)
    const dispatch = useDispatch(); //Step-6. Call useDispacher to get a handler
                                    //Step-7. Disp will link event to an Action & Payload 
                                    //Step-8. Disp will find the Store from Provider
                                    //Step-9. Store will find a Reducer for that Action & Payload
    
    return (
        <React.Fragment>
            <h4>XCounter : {myState.count} </h4>
            {/* <button onClick={ () => dispatch( {type: "INC" }) }>INC</button> */}
            <button onClick={ () => dispatch(incNumber()) }>INC</button>
            <button onClick={ () => dispatch(decNumber()) }>DEC</button>
        </React.Fragment>
    )
}

export default XCounter;
