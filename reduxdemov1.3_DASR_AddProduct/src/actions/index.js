// ACTION
export const incNumber = () => {
    return {
        type: "INC"
    }
}

export const decNumber = () => {
    return {
        type: "DEC"
    }
}
export const addTopic = (lang) => {
    return {
        type: "ADD_TOPIC", payload: { tp: lang }
    }
}

export const addProduct = (prod) => {
    return {
        type: "ADD_PRODUCT", payload: { dt: prod }
    }
}
