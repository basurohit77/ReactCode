import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { incNumber, decNumber, mulNumber } from '../actions/index' //Import Action

function XCounter(props) {
    const myState = useSelector((state) => state.xcounterReducer)
    const dispatch = useDispatch(); //Call useDispacher to get a handler
                                    //Disp will link event to an Action
                                    //Disp will find the Store from Provider
                                    //Store will find a Reducer for that Action
    return (
        <div>
            <h4>XCounter </h4>
            <input name="increase" type="text" value={myState.count} />
            <input name="decrease" type="text" value={myState.mount} />
            <br />
            <button onClick={ () => dispatch(incNumber()) }>INC</button>
            <button onClick={ () => dispatch(decNumber()) }>DEC</button>
            
        </div>
    )
}

export default XCounter;

//This model is with Action, Dispatcher, Store, Reducer Model
