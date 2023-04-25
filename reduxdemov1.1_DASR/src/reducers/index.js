//A rootReducer combine all the reducers 
//which later will help to create a store

import xcounterReducer from "./xcounterreducer" 
import { combineReducers } from "redux"

const rootReducer = combineReducers({
    xcounterReducer,
})

export default rootReducer;
