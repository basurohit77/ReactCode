
let istate = { tps: ['Java', 'Python'] };
export function topicsreducer(state = istate, action) {
    if (action.type == 'ADD_TOPIC')
        return { tps: [...state.tps, action.payload.tp] };
    return state;
}