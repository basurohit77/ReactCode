//Step-10. Write Reducer for an Action send by Dispatcher
//Step-11. Reducer will hold the state & change it according to Action
//Step-12. Reducer will also return the state.
let istate = { count: 0 };
export function xcounterReducer(state = istate, action) {
    if (action.type === 'INC')
        return { count: state.count + 1 };
    else if (action.type === 'DEC')
        return { count: state.count - 1 };
    else
        return state;
}

export default xcounterReducer;