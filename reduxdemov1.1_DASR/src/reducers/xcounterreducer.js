//Reducer hold the state 
//And change it according to Action from Dispatcher
let istate = { count: 0, mount: 0 };
export function xcounterReducer(state = istate, action) {
    if (action.type == 'INC') {
        return { count: state.count + 1, mount: state.mount - 1 };
    }  
    else if (action.type == 'DEC')
        return { count: state.count - 1, mount: state.mount + 1 };
    else
        return state;
}

export default xcounterReducer;