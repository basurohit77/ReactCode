//Create a Store with Reducer
//But Store has to be published by Provider
import { createStore } from "redux"
import rootReducer from "../reducers/index"


const myStore = createStore(rootReducer) //rootReducer is a combined Reducer

export default myStore;