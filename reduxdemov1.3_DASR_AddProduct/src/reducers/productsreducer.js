let data =[
    { code: '1', name: 'Mouse', price: 600 },
    { code: '2', name: 'Keyboard', price: 800 }
];

let istate = { dts: data };

function productsReducer(state = istate, action) {
    if (action.type == 'ADD_PRODUCT')
        return { dts: [...state.dts, action.payload.dt] };
    return state;
}


export default productsReducer;
