let istate = { count: 0 };
export function xcounterreducer(state = istate, action) {
    if (action.type == 'INC')
        return { count: state.count + 1 };
    else if (action.type == 'DEC')
        return { count: state.count - 1 };
    else
        return state;
}