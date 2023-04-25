//Step-4. A rootReducer combine all the reducers 
//which later will help to create a store
// To write reducer logic go to App to create Action

import xcounterReducer from "./xcounterreducer" 
import topicsReducer from './topicsreducer'
import { combineReducers } from "redux"

const rootReducer = combineReducers({
    xcounterReducer, topicsReducer,
})

export default rootReducer;
