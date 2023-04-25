//A rootReducer combine all the reducers 
//which later will help to create a store

import xcounterReducer from "./xcounterreducer" 
import topicsReducer from './topicsreducer'
import productsReducer from "./productsreducer"
import { combineReducers } from "redux"

const rootReducer = combineReducers({
    xcounterReducer, topicsReducer, productsReducer,
})

export default rootReducer;
