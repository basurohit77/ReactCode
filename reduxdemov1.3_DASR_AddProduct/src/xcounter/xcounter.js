import React from "react"
import { useSelector, useDispatch } from 'react-redux';
import { incNumber, decNumber } from '../actions/index' //Import Action


function XCounter(props) {
    const myState = useSelector((state) => state.xcounterReducer)
    const dispatch = useDispatch(); //Call useDispacher to get a handler
                                    //Disp will link event to an Action
                                    //Disp will find the Store from Provider
                                    //Store will find a Reducer for that Action
    
    return (
        <React.Fragment>
            <h4>XCounter : {myState.count} </h4>
            <button onClick={ () => dispatch(incNumber()) }>INC</button> 
            <button onClick={ () => dispatch(decNumber()) }>DEC</button>
        </React.Fragment>
    )
}

export default XCounter;
