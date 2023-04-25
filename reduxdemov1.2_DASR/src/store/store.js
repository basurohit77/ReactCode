//Step-3. create a Store with Reducer
//But Store has to be published by Provider
import { createStore } from "redux"
import rootReducer from "../reducers/index"


const myStore = createStore(rootReducer)

export default myStore;