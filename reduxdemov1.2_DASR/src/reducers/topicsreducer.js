let course = ["java", "spring"]
let istate = { tps: course };
export function topicsReducer(state = istate, action) {
    if (action.type === 'ADD_TOPIC')
        return { tps: [...state.tps, action.payload.tp] };
    return state;
}

export default topicsReducer;