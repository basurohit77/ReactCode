import React from 'react';
import { createRef } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { addTopic } from '../actions/index' //Import Action


function Topics(props) {
    const myState1 = useSelector((state) => state.xcounterReducer)
    const myState2 = useSelector((state) => state.topicsReducer)
    const dispatch = useDispatch(); //Call useDispacher to get a handler
                                    //Disp will link event to an Action
                                    //Disp will find the Store from Provider
                                    //Store will find a Reducer for that Action
    
    let tref = createRef();

    function langAdd() {
        dispatch(addTopic(tref.current.value));
        //dispatch({ type: "ADD_TOPIC", payload: { tp: tref.current.value } })
    }

    return (
        <>
            <h4>{`Topics : ${myState1.count}`}</h4>
            <input type='text' name='tp' ref={tref}></input>
            <button onClick={ langAdd }>Add</button>
            <ol>
                {myState2.tps.map((t, i) => <li key={i}>{t}</li>)}
            </ol>
        </>
    )
}

export default Topics;


//<button onClick={ () => dispatch({ type: "ADD_TOPIC", payload: { tp: tref.current.value } }) }>Add</button>
